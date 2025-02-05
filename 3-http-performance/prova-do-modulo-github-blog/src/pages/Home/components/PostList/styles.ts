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
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    gap: 1rem;
    h3 {
      ${mixins.fonts.titleM}
      color: ${(props) => props.theme.colors['base-title']};
    }
    span {
      ${mixins.fonts.textS}
      line-height: inherit;
      color: ${(props) => props.theme.colors['base-span']};
      width: 3.3125rem;
      flex: none;
      align-self: baseline;
    }
  }

  p {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors['base-text']}
  }
`
