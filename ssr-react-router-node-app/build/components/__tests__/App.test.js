"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactRouter = require("react-router");

var _App = _interopRequireDefault(require("../App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockPokemon = {
  list: []
};
describe('App', function () {
  it('should render Home component for route /', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_reactRouter.StaticRouter, {
      context: {},
      location: '/'
    }, _react.default.createElement(_App.default, null)));
    expect(component).toMatchSnapshot();
  });
  it('should render List component for route /pokemon/ability/testing', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_reactRouter.StaticRouter, {
      context: {},
      location: '/pokemon/ability/testing'
    }, _react.default.createElement(_App.default, {
      pokemon: mockPokemon
    })));
    expect(component).toMatchSnapshot();
  });
  it('should render Redirect component for route /pokemon', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_reactRouter.StaticRouter, {
      context: {},
      location: '/pokemon'
    }, _react.default.createElement(_App.default, null)));
    expect(component).toMatchSnapshot();
    expect(component.find(_reactRouter.Redirect).props().to).toEqual('/pokemon/ability/telepathy');
  });
});