# @carlosxfelipe/components

## 📌 Instalação

Para instalar este pacote, use o npm ou yarn:

```sh
npm install @carlosxfelipe/components
# ou
yarn add @carlosxfelipe/components
```

## 🚀 Como Usar o Carousel

Este pacote inclui um componente `Carousel` que permite exibir imagens em um carrossel no React Native.

### Exemplo de Uso:

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

## 🎯 Props Disponíveis

| Propriedade      | Tipo          | Padrão                   | Descrição                        |
| ---------------- | ------------- | ------------------------ | -------------------------------- | -------------------------------------- |
| `images`         | `{ id: string | number, uri: string }[]` | **obrigatório**                  | Lista de imagens para o carrossel.     |
| `height`         | `number`      | `180`                    | Altura do carrossel.             |
| `onPressImage`   | `(id: string  | number) => void`         | `undefined`                      | Função chamada ao tocar em uma imagem. |
| `showIndicators` | `boolean`     | `false`                  | Exibir indicadores de progresso. |
| `indicatorColor` | `string`      | `"#000"`                 | Cor do indicador ativo.          |

## 📜 Licença

MIT License. Feito por [@carlosxfelipe](https://github.com/carlosxfelipe).
