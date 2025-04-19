import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideUpAndFade = keyframes({
  from: { opacity: 0, transform: 'translateY(2px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  from: { opacity: 0, transform: 'translateX(-2px)' },
  to: { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  from: { opacity: 0, transform: 'translateY(-2px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  from: { opacity: 0, transform: 'translateX(2px)' },
  to: { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipContainer = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  fontFamily: '$inter',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
  color: '$gray100',

  borderRadius: '5px',
  padding: '$2 $4',
  backgroundColor: '$gray900',
  // animationDuration: '400ms',
  // animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  // willChange: 'transform, opacity',

  // '&[data-state="delayed-open"][data-side="top"]': {
  //   animationName: slideDownAndFade,
  // },
  // '&[data-state="delayed-open"][data-side="right"]': {
  //   animationName: slideLeftAndFade,
  // },
  // '&[data-state="delayed-open"][data-side="bottom"]': {
  //   animationName: slideUpAndFade,
  // },
  // '&[data-state="delayed-open"][data-side="left"]': {
  //   animationName: slideRightAndFade,
  // },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
