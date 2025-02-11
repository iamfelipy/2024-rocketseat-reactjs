import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const PostContainer = styled.article`
  max-width: 54rem;
  margin: auto;
  margin-top: -6rem;
  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`

export const PostMetaHeader = styled.header`
  background-color: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  height: 10.5rem;
  @media (max-width: 768px) {
    padding: 1rem;
    height: auto;
  }
`
export const NavigationButtons = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  button {
    background-color: transparent;
    color: ${(props) => props.theme.colors.blue};
    ${mixins.fonts.link}
    border-bottom: 1px transparent solid;
    transition: all 0.2s;

    &:hover {
      border-bottom: 1px ${(props) => props.theme.colors.blue} solid;
    }
  }
`
export const PostTitle = styled.h1`
  ${mixins.fonts.titleL};
  color: ${(props) => props.theme.colors['base-title']};
  margin-bottom: 0.5rem;
`
export const PostMetaItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  svg {
    color: ${(props) => props.theme.colors['base-label']};
    height: 1.125rem;
    width: 1.125rem;
    margin-right: 0.5rem;
  }
  span {
    margin-top: 0.2rem;
    ${mixins.fonts.textM};
    color: ${(props) => props.theme.colors['base-span']};
  }
`

export const PostContent = styled.section`
  padding: 2.5rem 2rem;
  text-align: justify;
  @media (max-width: 425px) {
    padding: 1.5rem 1rem;
  }
`
