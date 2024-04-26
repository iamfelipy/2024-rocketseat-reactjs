import styled from 'styled-components'

interface HeaderContainerProps {
  urlImg: string
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  width: 100%;
  height: 18.5rem;
  background-image: url('${(props) => props.urlImg}');
  background-size: cover;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  > img {
    margin-top: 4rem;
    width: 9.25rem;
    height: 6.125rem;
  }

  @media (max-width: 728px) {
    height: 10rem;
  }
`
