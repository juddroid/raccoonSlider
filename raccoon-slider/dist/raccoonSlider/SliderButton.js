"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _io = require("react-icons/io5");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DefaultButton = function DefaultButton(_ref) {
  var buttonSize = _ref.buttonSize,
      cardWidth = _ref.cardWidth,
      cardHeight = _ref.cardHeight,
      cardMargin = _ref.cardMargin,
      displayCardCount = _ref.displayCardCount,
      handleClickLeftButton = _ref.handleClickLeftButton,
      handleClickRightButton = _ref.handleClickRightButton,
      leftArrowButtonState = _ref.leftArrowButtonState,
      rightArrowButtonState = _ref.rightArrowButtonState;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(LeftButtonDiv, {
    cardWidth: cardWidth,
    cardHeight: cardHeight,
    cardMargin: cardMargin,
    displayCardCount: displayCardCount,
    buttonSize: buttonSize,
    onClick: handleClickLeftButton,
    disabled: !leftArrowButtonState
  }, /*#__PURE__*/_react.default.createElement(_io.IoChevronBackOutline, {
    size: buttonSize,
    color: 'rebeccapurple'
  })), /*#__PURE__*/_react.default.createElement(RightButtonDiv, {
    cardWidth: cardWidth,
    cardHeight: cardHeight,
    cardMargin: cardMargin,
    displayCardCount: displayCardCount,
    buttonSize: buttonSize,
    onClick: handleClickRightButton,
    disabled: !rightArrowButtonState
  }, /*#__PURE__*/_react.default.createElement(_io.IoChevronForwardOutline, {
    size: buttonSize,
    color: 'rebeccapurple'
  })));
};

var CustomButton = function CustomButton() {
  return /*#__PURE__*/_react.default.createElement("div", null);
};

var SliderButton = function SliderButton(_ref2) {
  var buttonType = _ref2.buttonType,
      buttonSize = _ref2.buttonSize,
      cardWidth = _ref2.cardWidth,
      cardHeight = _ref2.cardHeight,
      cardMargin = _ref2.cardMargin,
      displayCardCount = _ref2.displayCardCount,
      handleClickLeftButton = _ref2.handleClickLeftButton,
      handleClickRightButton = _ref2.handleClickRightButton,
      leftArrowButtonState = _ref2.leftArrowButtonState,
      rightArrowButtonState = _ref2.rightArrowButtonState;
  return {
    default: /*#__PURE__*/_react.default.createElement(DefaultButton, {
      buttonSize: buttonSize,
      cardWidth: cardWidth,
      cardHeight: cardHeight,
      cardMargin: cardMargin,
      displayCardCount: displayCardCount,
      handleClickLeftButton: handleClickLeftButton,
      handleClickRightButton: handleClickRightButton,
      leftArrowButtonState: leftArrowButtonState,
      rightArrowButtonState: rightArrowButtonState
    }),
    custom: /*#__PURE__*/_react.default.createElement(CustomButton, null)
  }[buttonType];
};

var _default = SliderButton;
exports.default = _default;

var StyledArrowButton = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", ";\n  height: ", ";\n  border-radius: 10px;\n  border: none;\n  background: none;\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n    transition: all ease-in-out 0.4s;\n  }\n  &:disabled {\n    opacity: 50%;\n    background: none;\n  }\n"])), function (_ref3) {
  var cardHeight = _ref3.cardHeight,
      cardMargin = _ref3.cardMargin;
  return "".concat((cardHeight + cardMargin * 2) / 2 - 20, "px");
}, function (_ref4) {
  var buttonSize = _ref4.buttonSize;
  return "".concat(buttonSize + 10, "px");
}, function (_ref5) {
  var buttonSize = _ref5.buttonSize;
  return "".concat(buttonSize + 10, "px");
});

var LeftButtonDiv = (0, _styledComponents.default)(StyledArrowButton)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  left: 0px;\n"])));
var RightButtonDiv = (0, _styledComponents.default)(StyledArrowButton)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  left: ", ";\n"])), function (_ref6) {
  var cardWidth = _ref6.cardWidth,
      cardMargin = _ref6.cardMargin,
      displayCardCount = _ref6.displayCardCount;
  return "".concat(45 + (cardWidth + cardMargin * 2) * displayCardCount - cardMargin * 2, "px");
});