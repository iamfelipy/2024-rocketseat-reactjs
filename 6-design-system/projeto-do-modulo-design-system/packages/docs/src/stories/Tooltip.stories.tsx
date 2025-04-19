import type { Meta, StoryObj } from '@storybook/react'
import { CustomTooltip, Text } from '@felipy-ui/react'

const meta: Meta = {
  title: 'Data display/Tooltip',
  component: CustomTooltip.Root,
  decorators: [
    (Story) => (
      <Text>
        Interaja com o elemento destacado para ver o tooltip: {Story()}
      </Text>
    ),
  ],
}
export default meta

export const Primary: StoryObj = {
  render: () => (
    <CustomTooltip.Container>
      <CustomTooltip.Root>
        <CustomTooltip.Trigger asChild>
          <span style={{ textDecoration: 'underline', cursor: 'help' }}>
            Passe o mouse aqui
          </span>
        </CustomTooltip.Trigger>
        <CustomTooltip.Portal>
          <CustomTooltip.Content>
            <Text as="span" size="sm">
              Observações
            </Text>
            <CustomTooltip.Arrow />
          </CustomTooltip.Content>
        </CustomTooltip.Portal>
      </CustomTooltip.Root>
    </CustomTooltip.Container>
  ),
}
