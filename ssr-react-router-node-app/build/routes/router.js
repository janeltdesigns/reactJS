'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = router;

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _renderFullPage = require('./renderFullPage');

var _renderFullPage2 = _interopRequireDefault(_renderFullPage);

var _getPokemon = require('../services/getPokemon');

var _getPokemon2 = _interopRequireDefault(_getPokemon);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function router(req, res) {

    var match = _routes2.default.reduce(function (acc, route) {
        return (0, _reactRouterDom.matchPath)(req.url);
    }, { path: route, exact: true } || acc, null);

    if (!match) {
        res.status(404).send('page not found');
        return;
    }

    return _getPokemon2.default.withAbility('telepathy').then(function (resp) {
        var pokemon = { list: resp.data.pokemon };

        var context = {};

        var html = (0, _server.renderToString)(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { context: context, location: req.url },
            _react2.default.createElement(_App2.default, { pokemon: pokemon })
        ));

        res.status(200).send((0, _renderFullPage2.default)(html, pokemon));
    }).catch(function (err) {
        return res.status(404).send(err + ': Oh No1 I cannot find the telepathic pokemon... maybe they knew we were coming!');
    });
};