import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const Container = styled.section``

export const WrapperTitleAndPostCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.81rem;
  margin-bottom: 0.75rem;

  > h2 {
    ${mixins.fonts.titleS}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  > span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors['base-span']};
  }
`

export const WrapperInputAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors['base-input']};
  border-radius: 6px;
  border: 1px ${(props) => props.theme.colors['base-border']} solid;
  margin-bottom: 3rem;

  &:focus-within {
    border: 1px ${(props) => props.theme.colors.blue} solid;
  }

  input {
    flex: 1;
    outline: none;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors['base-label']};
    padding: 0.75rem 1rem;
    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }

    &:input:-internal-autofill-selected {
      background-color: none;
    }
  }

  > button {
    height: 3.22rem;
    background-color: ${(props) => props.theme.colors['base-border']};
    color: #8b9cab;
    padding: 0 1rem;
    border-radius: 0 6px 6px 0;
  }
`
