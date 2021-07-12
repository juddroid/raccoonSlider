"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Slider = _interopRequireDefault(require("./Slider"));

var _SliderButton = _interopRequireDefault(require("./SliderButton"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RaccoonSlider = function RaccoonSlider(_ref) {
  var option = _ref.option,
      data = _ref.data;
  var cardWidth = option.cardWidth,
      cardHeight = option.cardHeight,
      cardMargin = option.cardMargin,
      displayCardCount = option.displayCardCount,
      buttonType = option.buttonType,
      buttonSize = option.buttonSize,
      moveCardCount = option.moveCardCount,
      dataType = option.dataType;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      leftSideRestCard = _useState4[0],
      setLeftSideRestCard = _useState4[1];

  var _useState5 = (0, _react.useState)(data.length - displayCardCount),
      _useState6 = _slicedToArray(_useState5, 2),
      rightSideRestCard = _useState6[0],
      setRightSideRestCard = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      leftArrowButtonState = _useState8[0],
      setLeftArrowButtonState = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      rightArrowButtonState = _useState10[0],
      setRightArrowButtonState = _useState10[1];

  var eachCardSize = cardWidth + cardMargin * 2;
  var displayContainerSize = {
    width: "".concat((cardWidth + cardMargin * 2) * displayCardCount - cardMargin * 2, "px"),
    height: "".concat(cardHeight + cardMargin * 4, "px")
  };

  var arrowButtonDisableToggle = function arrowButtonDisableToggle(state) {
    return state ? false : true;
  };

  var handleClickLeftButton = function handleClickLeftButton(e) {
    e.preventDefault();
    var restCardCount = leftSideRestCard % displayCardCount;

    if (leftSideRestCard < displayCardCount) {
      setPosition(position + eachCardSize * restCardCount);
      setLeftSideRestCard(leftSideRestCard - restCardCount);
      setRightSideRestCard(rightSideRestCard + restCardCount);
      leftSideRestCard <= 0 && setLeftArrowButtonState(arrowButtonDisableToggle(leftArrowButtonState));
      rightSideRestCard <= 0 && setRightArrowButtonState(arrowButtonDisableToggle(rightArrowButtonState));
      return;
    }

    setPosition(position + eachCardSize * displayCardCount);
    setLeftSideRestCard(leftSideRestCard - displayCardCount);
    setRightSideRestCard(rightSideRestCard + displayCardCount);
    setLeftArrowButtonState(arrowButtonDisableToggle(leftArrowButtonState));
  };

  var handleClickRightButton = function handleClickRightButton(e) {
    e.preventDefault();

    if (rightSideRestCard < displayCardCount) {
      var restCardCount = rightSideRestCard % displayCardCount;
      setPosition(position - eachCardSize * restCardCount);
      setRightSideRestCard(rightSideRestCard - restCardCount);
      setLeftSideRestCard(leftSideRestCard + restCardCount);
      rightSideRestCard <= 0 && setRightArrowButtonState(arrowButtonDisableToggle(rightArrowButtonState));
      leftSideRestCard <= 0 && setLeftArrowButtonState(arrowButtonDisableToggle(leftArrowButtonState));
      return;
    }

    setPosition(position - eachCardSize * displayCardCount);
    setRightSideRestCard(rightSideRestCard - displayCardCount);
    setLeftSideRestCard(leftSideRestCard + displayCardCount);
  };

  (0, _react.useEffect)(function () {
    leftSideRestCard <= 0 ? setLeftArrowButtonState(false) : setLeftArrowButtonState(true);
    rightSideRestCard <= 0 ? setRightArrowButtonState(false) : setRightArrowButtonState(true);
  }, [leftSideRestCard, rightSideRestCard]);
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(DisplayContainer, {
    displayContainerSize: displayContainerSize
  }, /*#__PURE__*/_react.default.createElement(RaccoonSliderContainer, {
    position: position,
    cardMargin: cardMargin
  }, /*#__PURE__*/_react.default.createElement(_Slider.default, {
    cardWidth: cardWidth,
    cardHeight: cardHeight,
    cardMargin: cardMargin,
    data: data,
    dataType: dataType
  }))), /*#__PURE__*/_react.default.createElement(_SliderButton.default, {
    buttonType: buttonType,
    buttonSize: buttonSize,
    cardWidth: cardWidth,
    cardHeight: cardHeight,
    cardMargin: cardMargin,
    displayCardCount: displayCardCount,
    handleClickLeftButton: handleClickLeftButton,
    handleClickRightButton: handleClickRightButton,
    leftArrowButtonState: leftArrowButtonState,
    rightArrowButtonState: rightArrowButtonState
  }));
};

var _default = RaccoonSlider;
exports.default = _default;

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n"])));

var DisplayContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  overflow: hidden;\n  border: 1px solid rebeccapurple;\n  border-radius: 10px;\n  box-sizing: border-box;\n  margin: 0 40px;\n"])), function (_ref2) {
  var displayContainerSize = _ref2.displayContainerSize;
  return displayContainerSize.width;
}, function (_ref3) {
  var displayContainerSize = _ref3.displayContainerSize;
  return displayContainerSize.height;
});

var RaccoonSliderContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: fit-content;\n  height: fit-content;\n  top: ", ";\n  left: ", ";\n  transition: all ease-in-out 0.4s;\n"])), function (_ref4) {
  var cardMargin = _ref4.cardMargin;
  return "".concat(cardMargin - 1, "px");
}, function (_ref5) {
  var position = _ref5.position,
      cardMargin = _ref5.cardMargin;
  return "".concat(position - cardMargin, "px");
});