"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _uuid = require("uuid");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SliderCard = function SliderCard(_ref) {
  var cardSize = _ref.cardSize,
      cardMargin = _ref.cardMargin,
      contents = _ref.contents;
  return /*#__PURE__*/_react.default.createElement(SliderCardStyle, {
    cardSize: cardSize,
    cardMargin: cardMargin
  }, contents);
};

var SliderCardList = function SliderCardList(_ref2) {
  var cardSize = _ref2.cardSize,
      cardMargin = _ref2.cardMargin,
      data = _ref2.data;
  return /*#__PURE__*/_react.default.createElement(SliderCardListStyle, null, data.map(function (el) {
    return /*#__PURE__*/_react.default.createElement(SliderCard, {
      cardSize: cardSize,
      cardMargin: cardMargin,
      contents: el.data,
      key: (0, _uuid.v4)()
    });
  }));
};

var Slider = function Slider(_ref3) {
  var cardSize = _ref3.cardSize,
      cardMargin = _ref3.cardMargin,
      data = _ref3.data;
  return /*#__PURE__*/_react.default.createElement(SliderWrapper, null, /*#__PURE__*/_react.default.createElement(SliderCardList, {
    cardSize: cardSize,
    cardMargin: cardMargin,
    data: data
  }));
};

var _default = Slider;
exports.default = _default;

var SliderWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n"])));

var SliderCardListStyle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n"])));

var SliderCardStyle = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  background: #e5e5e5;\n  opacity: 50%;\n  border: 1px solid #222;\n  border-radius: 10px;\n  margin: ", ";\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #333;\n  font-size: 24px;\n  font-weight: 700;\n"])), function (_ref4) {
  var cardSize = _ref4.cardSize;
  return "".concat(cardSize, "px");
}, function (_ref5) {
  var cardSize = _ref5.cardSize;
  return "".concat(cardSize, "px");
}, function (_ref6) {
  var cardMargin = _ref6.cardMargin;
  return "".concat(cardMargin, "px");
});