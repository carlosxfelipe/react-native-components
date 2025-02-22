import React from "react";
import { View } from "react-native";
import { Meta, StoryObj } from "@storybook/react";
import Carousel from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    showIndicators: { control: "boolean" },
    indicatorColor: { control: "color" },
    height: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const images = [
  { id: 1, uri: require("../../assets/pexels/pexels-78563786-10764538.jpg") },
  { id: 2, uri: require("../../assets/pexels/pexels-edwardeyer-1066859.jpg") },
  {
    id: 3,
    uri: require("../../assets/pexels/pexels-henry-de-guzman-72935623-10134616.jpg"),
  },
  {
    id: 4,
    uri: require("../../assets/pexels/pexels-moises-ribeiro-121009898-11462903.jpg"),
  },
  {
    id: 5,
    uri: require("../../assets/pexels/pexels-polina-tankilevitch-4109121.jpg"),
  },
  {
    id: 6,
    uri: require("../../assets/pexels/pexels-tadahiro-munakata-384728139-18338973.jpg"),
  },
];

export const Default: Story = {
  render: (args) => (
    <View style={{ paddingTop: 40 }}>
      <Carousel {...args} images={images} />
    </View>
  ),
  args: {
    showIndicators: true,
    indicatorColor: "red",
    height: 180,
  },
};
