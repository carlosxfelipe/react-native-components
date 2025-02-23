# @carlosxfelipe/components

## 📌 Installation

To install this package, use npm or yarn:

```sh
npm install @carlosxfelipe/components --no-optional
# or
yarn add @carlosxfelipe/components --ignore-optional
```

## 🚀 How to Use the Carousel

<p align="center">
  <img src="./124shots_so.png" alt="Preview do Projeto" />
</p>

This package includes a `Carousel` component that allows displaying images in a React Native carousel.

### Usage Example:

```tsx
import { View } from "react-native";
import { Carousel } from "@carlosxfelipe/components";

const carouselImages = [
  { id: 1, uri: require("./pexels-78563786-10764538.jpg") },
  { id: 2, uri: require("./pexels-edwardeyer-1066859.jpg") },
  { id: 3, uri: require("./pexels-henry-de-guzman-72935623-10134616.jpg") },
  { id: 4, uri: require("./pexels-moises-ribeiro-121009898-11462903.jpg") },
  { id: 5, uri: require("./pexels-polina-tankilevitch-4109121.jpg") },
  { id: 6, uri: require("./pexels-tadahiro-munakata-384728139-18338973.jpg") },
];

export const HomeScreen: React.FC = () => {
  return (
    <View style={{ marginTop: 80 }}>
      <Carousel images={carouselImages} showIndicators indicatorColor="red" />
    </View>
  );
};
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

MIT License.
