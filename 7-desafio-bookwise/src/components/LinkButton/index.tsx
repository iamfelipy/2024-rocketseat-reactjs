import React from 'react'
import Link from 'next/link'
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
  if (!href) {
    return (
      <LinkButtonContainer
        as="button"
        color={color}
        size={size}
        onClick={onClick}
      >
        {children}
      </LinkButtonContainer>
    )
  }

  return (
    <Link href={href} passHref legacyBehavior>
      <LinkButtonContainer color={color} size={size} onClick={onClick}>
        {children}
      </LinkButtonContainer>
    </Link>
  )
}
