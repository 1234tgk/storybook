import MyButton from './Button.vue';

export default {
  title: 'Addon/Controls',
  component: MyButton,
  argTypes: {
    color: { control: { type: 'color' } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button :color="color" :rounded="rounded">{{label}}</my-button>',
});

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
  color: '#f00',
  label: 'A Button with rounded edges',
};

export const Square = Template.bind({});
Square.args = {
  // rounded: false, test out default value
  color: '#00f',
  label: 'A Button with square edges',
};
