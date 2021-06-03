import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import SliderButton from './SliderButton';

const RaccoonSlider = ({ option, data }) => {
  const {
    cardWidth,
    cardHeight,
    cardMargin,
    displayCardCount,
    buttonType,
    buttonSize,
    moveCardCount,
    dataType,
  } = option;

  const [position, setPosition] = useState(0);
  const [leftSideRestCard, setLeftSideRestCard] = useState(0);
  const [rightSideRestCard, setRightSideRestCard] = useState(
    data.length - displayCardCount
  );
  const [leftArrowButtonState, setLeftArrowButtonState] = useState(false);
  const [rightArrowButtonState, setRightArrowButtonState] = useState(false);

  const eachCardSize = cardWidth + cardMargin * 2;

  const displayContainerSize = {
    width: (cardWidth + cardMargin * 2) * displayCardCount - cardMargin * 2,
    height: cardHeight + cardMargin * 4,
  };
  console.log(displayContainerSize.width, displayContainerSize.height);

  const arrowButtonDisableToggle = (state) => {
    return state ? false : true;
  };

  const handleClickLeftButton = (e) => {
    e.preventDefault();

    const restCardCount = leftSideRestCard % displayCardCount;

    if (leftSideRestCard < displayCardCount) {
      setPosition(position + eachCardSize * restCardCount);
      setLeftSideRestCard(leftSideRestCard - restCardCount);
      setRightSideRestCard(rightSideRestCard + restCardCount);
      leftSideRestCard <= 0 &&
        setLeftArrowButtonState(arrowButtonDisableToggle(leftArrowButtonState));
      rightSideRestCard <= 0 &&
        setRightArrowButtonState(
          arrowButtonDisableToggle(rightArrowButtonState)
        );
      return;
    }
    setPosition(position + eachCardSize * displayCardCount);
    setLeftSideRestCard(leftSideRestCard - displayCardCount);
    setRightSideRestCard(rightSideRestCard + displayCardCount);
    setLeftArrowButtonState(arrowButtonDisableToggle(leftArrowButtonState));
  };

  const handleClickRightButton = (e) => {
    e.preventDefault();

    if (rightSideRestCard < displayCardCount) {
      const restCardCount = rightSideRestCard % displayCardCount;
      setPosition(position - eachCardSize * restCardCount);
      setRightSideRestCard(rightSideRestCard - restCardCount);
      setLeftSideRestCard(leftSideRestCard + restCardCount);
      rightSideRestCard <= 0 &&
        setRightArrowButtonState(
          arrowButtonDisableToggle(rightArrowButtonState)
        );
      leftSideRestCard <= 0 &&
        setLeftArrowButtonState(arrowButtonDisableToggle(leftArrowButtonState));
      return;
    }
    setPosition(position - eachCardSize * displayCardCount);
    setRightSideRestCard(rightSideRestCard - displayCardCount);
    setLeftSideRestCard(leftSideRestCard + displayCardCount);
  };

  useEffect(() => {
    leftSideRestCard <= 0
      ? setLeftArrowButtonState(false)
      : setLeftArrowButtonState(true);
    rightSideRestCard <= 0
      ? setRightArrowButtonState(false)
      : setRightArrowButtonState(true);
  }, [leftSideRestCard, rightSideRestCard]);

  return (
    <Wrapper>
      <DisplayContainer {...{ displayContainerSize }}>
        <RaccoonSliderContainer {...{ position, cardMargin }}>
          <Slider {...{ cardWidth, cardMargin, data, dataType }} />
        </RaccoonSliderContainer>
      </DisplayContainer>
      <SliderButton
        {...{
          buttonType,
          buttonSize,
          cardWidth,
          cardHeight,
          cardMargin,
          displayCardCount,
          handleClickLeftButton,
          handleClickRightButton,
          leftArrowButtonState,
          rightArrowButtonState,
        }}
      />
    </Wrapper>
  );
};

export default RaccoonSlider;

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: fit-content;
`;

const DisplayContainer = styled.div`
  position: relative;
  /* width: ${({ displayContainerSize }) => `${displayContainerSize.width}`}px;
  height: ${({ displayContainerSize }) =>
    `${displayContainerSize.height}`}px; */

  width: 300px;
  height: 200px;
  overflow: hidden;
  border: 1px solid rebeccapurple;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 40px;
`;
const RaccoonSliderContainer = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: ${({ cardMargin }) => `${(cardMargin - 1).toString()}px`};
  left: ${({ position, cardMargin }) =>
    `${(position - cardMargin).toString()}px`};
  transition: all ease-in-out 0.4s;
`;
