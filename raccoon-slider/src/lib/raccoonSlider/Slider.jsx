import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const SliderCard = ({ cardWidth, cardMargin, contents, dataType, img }) => {
  return dataType === 'img' ? (
    <SliderCardStyle {...{ cardWidth, cardMargin }}>
      <img src={img} alt={img} />
    </SliderCardStyle>
  ) : (
    <SliderCardStyle {...{ cardWidth, cardMargin }}>{contents}</SliderCardStyle>
  );
};
const SliderCardList = ({ cardWidth, cardMargin, data, dataType }) => {
  return (
    <SliderCardListStyle>
      {data.map((el) => (
        <SliderCard
          {...{ cardWidth, cardMargin, dataType }}
          contents={el.data}
          img={el}
          key={uuidv4()}
        />
      ))}
    </SliderCardListStyle>
  );
};

const Slider = ({ cardWidth, cardMargin, data, dataType }) => {
  return (
    <SliderWrapper>
      <SliderCardList {...{ cardWidth, cardMargin, data, dataType }} />
    </SliderWrapper>
  );
};

export default Slider;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const SliderCardListStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const SliderCardStyle = styled.div`
  width: ${({ cardWidth }) => `${cardWidth}px`};
  height: ${({ cardWidth }) => `${cardWidth}px`};
  background: #e5e5e5;
  opacity: 1;
  border-radius: 10px;
  margin: ${({ cardMargin }) => `${cardMargin}px`};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 24px;
  font-weight: 700;

  img {
    width: 100%;
    height: 100%;
  }
`;
