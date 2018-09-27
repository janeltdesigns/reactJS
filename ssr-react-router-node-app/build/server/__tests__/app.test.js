"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _router = _interopRequireDefault(require("../router"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('cors', function () {
  return jest.fn(function () {
    return function (req, res, next) {
      return next();
    };
  });
});
jest.mock('../router', function () {
  return jest.fn(function (req, res, next) {
    return res.send();
  });
});
describe('app', function () {
  it('uses cors', function () {
    return (0, _supertest.default)(_app.default).get('/').then(function (resp) {
      expect(_cors.default).toHaveBeenCalled();
      expect(_router.default).toHaveBeenCalled();
    });
  });
});