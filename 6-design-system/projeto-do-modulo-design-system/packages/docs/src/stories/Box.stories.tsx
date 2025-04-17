import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@felipy-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  // se args é definido aqui ele é compartilhado com todos os stories
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
