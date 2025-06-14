import React from 'react'
import { LinkButtonContainer } from './styles'

type LinkButtonProps = {
  children: React.ReactNode
  color?: 'white' | 'purple'
  size?: 'md' | 'sm'
  href?: string
  onClick?: () => void
}

export function LinkButton({
  children,
  color = 'purple',
  size = 'md',
  href,
  onClick,
}: LinkButtonProps) {
  return (
    <LinkButtonContainer
      color={color}
      size={size}
      href={href}
      onClick={onClick}
    >
      {children}
    </LinkButtonContainer>
  )
}
