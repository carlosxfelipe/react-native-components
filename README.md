# @carlosxfelipe/components

## 📌 Installation

To install this package, use npm or yarn:

```sh
npm install @carlosxfelipe/components
# or
yarn add @carlosxfelipe/components
```

## 🚀 How to Use the Carousel

This package includes a `Carousel` component that allows displaying images in a React Native carousel.

### Usage Example:

```tsx
import React from "react";
import { View } from "react-native";
import { Carousel } from "@carlosxfelipe/components";

const images = [
  { id: 1, uri: require("../../assets/pexels-78563786-10764538.jpg") },
  { id: 2, uri: require("../../assets/pexels-edwardeyer-1066859.jpg") },
  {
    id: 3,
    uri: require("../../assets/pexels-henry-de-guzman-72935623-10134616.jpg"),
  },
  {
    id: 4,
    uri: require("../../assets/pexels-moises-ribeiro-121009898-11462903.jpg"),
  },
  {
    id: 5,
    uri: require("../../assets/pexels-polina-tankilevitch-4109121.jpg"),
  },
  {
    id: 6,
    uri: require("../../assets/pexels-tadahiro-munakata-384728139-18338973.jpg"),
  },
];

const App = () => {
  return (
    <View>
      <Carousel
        images={images}
        height={200}
        showIndicators
        indicatorColor="blue"
      />
    </View>
  );
};

export default App;
```

## 🎯 Available Props

- **`images`** (`{ id: string | number, uri: string }[]`): **Required**  
  List of images for the carousel.
- **`height`** (`number`, default: `180`):  
  Defines the height of the carousel.
- **`onPressImage`** (`(id: string | number) => void`, default: `undefined`):  
  Function called when an image is pressed.
- **`showIndicators`** (`boolean`, default: `false`):  
  Enables or disables progress indicators.
- **`indicatorColor`** (`string`, default: `"#000"`):  
  Defines the color of the active indicator.

## 📜 License

MIT License. Created by [@carlosxfelipe](https://github.com/carlosxfelipe).
