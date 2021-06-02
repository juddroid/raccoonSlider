import styled from 'styled-components';
import RaccoonSlider from './lib/raccoonSlider/RaccoonSlider';

function App() {
  // const data = [
  //   { data: '1' },
  //   { data: '2' },
  //   { data: '3' },
  //   { data: '4' },
  //   { data: '5' },
  //   { data: '6' },
  //   { data: '7' },
  //   { data: '8' },
  //   { data: '9' },
  //   { data: '10' },
  //   { data: '11' },
  //   { data: '12' },
  //   { data: '13' },
  //   { data: '14' },
  //   { data: '15' },
  //   { data: '16' },
  //   { data: '17' },
  //   { data: '18' },
  //   { data: '19' },
  // ];

  const data = [
    {
      data: 'https://a0.muscache.com/im/pictures/dd9e507a-ea75-4634-bbdd-77c2ceb9adbf.jpg?im_w=1200',
    },
    {
      data: 'https://a0.muscache.com/im/pictures/b71b2c8d-5ca7-4326-aa59-9811985f7320.jpg?im_w=720',
    },
    {
      data: 'https://a0.muscache.com/im/pictures/934d9bb8-0c34-4a3e-85f5-e7b722855b00.jpg?im_w=720',
    },
    {
      data: 'https://a0.muscache.com/im/pictures/613cf352-4052-4ea3-ac14-8adad0836adb.jpg?im_w=720',
    },
    {
      data: 'https://a0.muscache.com/im/pictures/ff0277b5-2013-4dca-af1d-83ace4ee875a.jpg?im_w=720',
    },
  ];
  const option = {
    cardWidth: 300,
    cardHeight: 200,
    cardMargin: 0,
    displayCardCount: 1,
    dataType: 'img',
    buttonType: 'default',
    buttonSize: 24,
    moveCardCount: 0,
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
