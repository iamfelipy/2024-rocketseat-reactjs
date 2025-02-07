import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const Container = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`

export const PostCard = styled.article`
  background-color: ${(props) => props.theme.colors['base-post']};
  border-radius: 10px;
  border: 2px transparent solid;
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  transition: border 0.2s;

  &:hover {
    border: 2px ${(props) => props.theme.colors['base-label']} solid;
  }

  header {
    margin-bottom: 1.25rem;
    h3 {
      ${mixins.fonts.titleM}
      color: ${(props) => props.theme.colors['base-title']};
    }
    span {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme.colors['base-span']};
    }
  }

  p {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors['base-text']};
    text-align: justify;
  }
`
