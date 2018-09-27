"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _express = _interopRequireDefault(require("express"));

var _router = _interopRequireDefault(require("../router"));

var _renderFullPage = _interopRequireDefault(require("../renderFullPage"));

var _getPokemon = _interopRequireDefault(require("../../services/getPokemon"));

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockData = {
  data: {
    pokemon: [{
      pokemon: {
        name: 'testing'
      }
    }]
  }
};
jest.mock('../../services/getPokemon');

_getPokemon.default.withAbility.mockReturnValueOnce(Promise.resolve(mockData)).mockReturnValueOnce(Promise.reject('error'));

jest.mock('../renderFullPage', function () {
  return jest.fn(function () {
    return 'renderFullPage';
  });
});
jest.mock('react-dom/server', function () {
  return {
    renderToString: jest.fn(function () {
      return 'html';
    })
  };
});
var mockSend = jest.fn(function (renderFullPageFn) {
  return renderFullPageFn;
});
var mockRes = {
  status: jest.fn(function () {
    return mockRes;
  }),
  send: mockSend
};
afterEach(function () {
  jest.clearAllMocks();
});
describe('router', function () {
  it('renders full page with url matches', function () {
    var mockReq = {
      url: _routes.default[1]
    };
    var expectedPokemonProp = {
      list: [{
        pokemon: {
          name: 'testing'
        }
      }]
    };
    return (0, _router.default)(mockReq, mockRes).then(function (resp) {
      expect(_getPokemon.default.withAbility).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toHaveBeenCalledWith('renderFullPage');
      expect(_renderFullPage.default).toHaveBeenCalledWith('html', expectedPokemonProp);
    });
  });
  it('renders error when getPokemon withAbility throws error', function () {
    var mockReq = {
      url: _routes.default[1]
    };
    var expectedPokemonProp = {
      list: [{
        pokemon: {
          name: 'testing'
        }
      }]
    };
    return (0, _router.default)(mockReq, mockRes).then(function (err) {
      expect(_getPokemon.default.withAbility).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.send).toHaveBeenCalledWith('error: Oh No! I cannot find the telepathic pokemon... maybe they knew we were coming!');
      expect(_renderFullPage.default).not.toHaveBeenCalledWith();
    });
  });
  it('renders error when url does not match', function () {
    var mockReq = {
      url: '/notValid'
    };
    (0, _router.default)(mockReq, mockRes);
    expect(mockRes.send).toHaveBeenCalledWith('page not found');
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(_renderFullPage.default).not.toHaveBeenCalled();
    expect(_getPokemon.default.withAbility).not.toHaveBeenCalled();
  });
});