"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockPokemon = [{
  pokemon: {
    name: 'friendly'
  }
}];
var mockLocation = {
  match: {
    params: {
      ability: 'swagger'
    }
  }
};
describe('List', function () {
  it('should render correctly when given location', function () {
    var mockPokemon = [{
      pokemon: {
        name: 'friendly'
      }
    }];
    var mockLocation = {
      match: {
        params: {
          ability: 'swagger'
        }
      }
    };
    var component = (0, _enzyme.shallow)(_react.default.createElement(_List.default, {
      pokemon: mockPokemon,
      location: mockLocation
    }));
    expect(component).toMatchSnapshot();
  });
  it('should render correctly when not given location', function () {
    var mockPokemon = [{
      pokemon: {
        name: 'friendly'
      }
    }];
    var mockLocation = {
      match: {
        params: {
          ability: 'swagger'
        }
      }
    };
    var component = (0, _enzyme.shallow)(_react.default.createElement(_List.default, {
      pokemon: mockPokemon,
      location: mockLocation
    }));
    expect(component).toMatchSnapshot();
  });
});