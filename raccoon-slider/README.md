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
    'https://a0.muscache.com/im/pictures/dd9e507a-ea75-4634-bbdd-77c2ceb9adbf.jpg?im_w=1200',
    'https://a0.muscache.com/im/pictures/b71b2c8d-5ca7-4326-aa59-9811985f7320.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/934d9bb8-0c34-4a3e-85f5-e7b722855b00.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/613cf352-4052-4ea3-ac14-8adad0836adb.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/ff0277b5-2013-4dca-af1d-83ace4ee875a.jpg?im_w=720',
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

  return <RaccoonSlider option={option} data={data} />;
}

export default App;

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
|    cardWidth     | number |                  each card size (px)                  |
|    cardMargin    | number |                 each card margin (px)                 |
| displayCardCount | number |             a number of card to be shown              |
|    buttonType    | string | button type (only 'default' now, it will update soon) |
|    buttonSize    | number |                      button size                      |
|     dataType     | string |    data type (only 'img' now, it will update soon)    |

## <br />

## Thanks to 😁

Q [`@somedaycode`](https://somedaycode.github.io/)  
DD [`@jjunyjjuny`](https://www.npmjs.com/package/@jjunyjjuny/react-carousel)

<br />

## Keywords 🍖

`react`  
`react-component`  
`react-slider`
