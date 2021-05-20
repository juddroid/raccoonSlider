import styled from 'styled-components';
import RaccoonSlider from './lib/raccoonSlider/RaccoonSlider';

function App() {
  const data = [
    { data: '1' },
    { data: '2' },
    { data: '3' },
    { data: '4' },
    { data: '5' },
    { data: '6' },
    { data: '7' },
    { data: '8' },
    { data: '9' },
    { data: '10' },
    { data: '11' },
    { data: '12' },
    { data: '13' },
    { data: '14' },
    { data: '15' },
    { data: '16' },
    { data: '17' },
    { data: '18' },
    { data: '19' },
  ];
  const option = {
    cardSize: 200,
    cardMargin: 10,
    displayCardCount: 5,
    buttonType: 'default',
    buttonSize: 24,
    moveCardCount: 1,
  };

  return (
    <AppStyle className="App">
      <RaccoonSlider option={option} data={data} />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  margin-top: 160px;
`;
