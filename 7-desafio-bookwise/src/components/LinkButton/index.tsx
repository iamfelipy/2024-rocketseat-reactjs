import React, { ButtonHTMLAttributes } from 'react'
import Link, { LinkProps } from 'next/link'
import { LinkButtonContainer } from './styles'

type LinkButtonProps = (
  | ({ asButton?: false } & LinkProps)
  | ({ asButton: true } & ButtonHTMLAttributes<HTMLButtonElement>)
) & {
  children: React.ReactNode
  color?: 'white' | 'purple'
  size?: 'md' | 'sm'
  className?: string
}

export function LinkButton({
  children,
  color = 'purple',
  size = 'md',
  className,
  ...props
}: LinkButtonProps) {
  if (props.asButton) {
    const { asButton, ...buttonProps } = props
    return (
      <LinkButtonContainer
        as="button"
        color={color}
        size={size}
        className={className}
        {...buttonProps}
      >
        {children}
      </LinkButtonContainer>
    )
  }

  const { asButton, ...linkProps } = props

  return (
    <Link {...linkProps} passHref legacyBehavior>
      <LinkButtonContainer
        as="a"
        color={color}
        size={size}
        className={className}
      >
        {children}
      </LinkButtonContainer>
    </Link>
  )
}
