import type { Meta, StoryObj } from '@storybook/react'
import { Button, CustomToast, Text } from '@felipy-ui/react'
import { X } from 'phosphor-react'
import React from 'react'

const meta: Meta = {
  title: 'Data Display/Toast',
  component: CustomToast.Provider,
  decorators: [
    (Story) => (
      <Text>Clique no botão abaixo para visualizar o Toast: {Story()}</Text>
    ),
  ],
}
export default meta

function oneWeekAway(date?: Date) {
  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 7)
  return new Date(inOneWeek)
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  })
    .format(date)
    .replace(' ', ' às ')
}

const PrimaryComponent: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const eventDateRef = React.useRef(new Date())
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <CustomToast.Provider swipeDirection="right">
      <Button
        size={'sm'}
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway()
            setOpen(true)
          }, 100)
        }}
      >
        Ver Toast
      </Button>

      <CustomToast.Root open={open} onOpenChange={setOpen}>
        <CustomToast.Title>Agendamento realizado</CustomToast.Title>
        <CustomToast.Description asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </CustomToast.Description>
        <CustomToast.Action asChild altText="">
          <button>
            <X />
          </button>
        </CustomToast.Action>
      </CustomToast.Root>
      <CustomToast.Viewport />
    </CustomToast.Provider>
  )
}

export const Primary: StoryObj = {
  render: () => <PrimaryComponent />,
}
