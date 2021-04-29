# react-slider 🐾

**Awesome** and **Adorable** slider for lists with `React`

![Apr-30-2021 03-11-48](https://user-images.githubusercontent.com/70361152/116598658-0e7e9d00-a962-11eb-9e77-36655ff6295c.gif)

# Installation 🚀

Using npm :

```zsh
npm i @juddroid_raccoon/react-slider
```

# Usage 🏝

```js
import './App.css';
import RaccoonSlider from '@juddroid_raccoon/react-slider/dist/raccoonSlider/RaccoonSlider';
import styled from 'styled-components';

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
  cardSize: 150,
  cardMargin: 5,
  displayCardCount: 5,
  buttonType: 'default',
  buttonSize: 24,
};

function App() {
  return (
    <AppStyle className="App">
      <RaccoonSlider data={data} option={option} />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  margin-top: 80px;
  margin-left: 80px;
`;
```

<br />

# Props 🎹

There is no default value yet :)  
You need two props!

<br />

## Data 💾

| Name | Value |           Description            |
| :--: | :---: | :------------------------------: |
| data | list  | a data list included each Object |

<br />  
  
## Option 🎛

|       Name       | Value  |                      Description                      |
| :--------------: | :----: | :---------------------------------------------------: |
|     cardSize     | number |                  each card size (px)                  |
|    cardMargin    | number |                 each card margin (px)                 |
| displayCardCount | number |             a number of card to be shown              |
|    buttonType    | string | button type (only 'default' now, it will update soon) |
|    buttonSize    | number |                      button size                      |

## <br />

## Thanks to 😁

Q [`@somedaycode`](https://somedaycode.github.io/)  
DD [`@jjunyjjuny`](https://www.npmjs.com/package/@jjunyjjuny/react-carousel)

<br />

## Keywords 🍖

`react`  
`react-component`  
`react-slider`
