"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Home = _interopRequireDefault(require("../Home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Home', function () {
  it('should render correctly', function () {
    var component = (0, _enzyme.shallow)(_react.default.createElement(_Home.default, null));
    expect(component).toMatchSnapshot();
  });
});