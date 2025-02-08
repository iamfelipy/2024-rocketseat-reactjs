import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const Container = styled.section`
  width: 100%;
  height: 13.25rem;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
  padding: 2rem 2rem 2rem 2.5rem;
  margin-top: -6rem;
  margin-bottom: 4.5rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: 100%;
    margin-top: -5rem;
    padding: 1rem;
    margin-bottom: 0;
  }

  @media (max-width: 425px) {
    margin-top: -1rem;
  }
`

export const UserInfo = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const NameAndLinkProfileGithub = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.5rem;

  > span {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors['base-title']}
  }
  > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.blue};
    height: 1.5rem;
    align-self: flex-start;
    padding-bottom: 0.4rem;
    transition: all 0.2s;
    border-bottom: 1px transparent solid;

    &:hover {
      border-bottom: 1px ${(props) => props.theme.colors.blue} solid;
    }

    & > span {
      ${mixins.fonts.link}
    }
    & > svg {
      margin-left: 0.5rem;
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`
export const UserDescription = styled.div`
  ${mixins.fonts.textM}
  color: ${(props) => props.theme.colors['base-text']};
  margin-bottom: 1.5rem;
`

export const SocialMediasContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  & > div {
    flex: 1;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      flex: none;
    }

    & > svg {
      display: flex;
      margin-right: 0.5rem;
      height: 1.125rem;
      width: 1.125rem;
      color: ${(props) => props.theme.colors['base-label']};
    }
    & > span {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme.colors['base-subtitle']};
      line-height: normal;
    }
  }
`
