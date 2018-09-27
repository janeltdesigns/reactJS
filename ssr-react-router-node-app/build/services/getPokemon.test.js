"use strict";

var _getPokemon = _interopRequireDefault(require("./getPokemon"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('axios');

_axios.default.get.mockReturnValue('testing');

var baseUrl = 'http://pokeapi.co/api/v2/ability';
describe('getPokemon', function () {
  it('', function () {
    expect(_getPokemon.default.withAbility('mind control')).toEqual('testing');
    expect(_axios.default.get).toHaveBeenCalledWith("".concat(baseUrl, "/mind control"));
  });
});