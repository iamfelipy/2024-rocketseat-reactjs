import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@felipy-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  // se args é definido aqui ele é compartilhado com todos os stories
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet debitis et, fuga facilis accusantium enim delectus odit impedit repudiandae explicabo laudantium quam sunt officiis tempore aut magni aspernatur atque voluptate?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
