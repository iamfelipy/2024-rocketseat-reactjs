import React, { ReactNode } from 'react'
import { HeaderContainer, Title, ActionArea, Wrapper } from './styles'
import { CaretRight } from 'phosphor-react'
import { LinkButton } from '../LinkButton'

interface SectionHeaderProps {
  title: string
  actionText?: string
  actionHref?: string
  children?: ReactNode
  css?: any
}

export function SectionWithHeader({
  title,
  actionText,
  actionHref,
  children,
  css,
}: SectionHeaderProps) {
  return (
    <Wrapper css={css}>
      <HeaderContainer>
        <Title>{title}</Title>
        <ActionArea>
          {actionText && actionHref && (
            <LinkButton color="purple" size="md" href={actionHref}>
              {actionText}
              <CaretRight size={16} />
            </LinkButton>
          )}
        </ActionArea>
      </HeaderContainer>
      <div>{children}</div>
    </Wrapper>
  )
}
