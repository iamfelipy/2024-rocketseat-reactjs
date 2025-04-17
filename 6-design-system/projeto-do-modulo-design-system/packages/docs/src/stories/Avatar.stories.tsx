import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@felipy-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  // se args é definido aqui ele é compartilhado com todos os stories
  args: {
    src: 'https://github.com/iamfelipy.png',
    alt: 'Felipy Camargo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
  },
}
