import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ImageList } from '.';

export default {
  title: 'Web/ImageList',
  component: ImageList,
} as ComponentMeta<typeof ImageList>;

const Template: ComponentStory<typeof ImageList> = (args) => (
  <ImageList {...args} />
);

export const Default = Template.bind({});
const img =
  'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
const imgList = [img, img, img];

Default.args = {
  imageList: imgList,
};
