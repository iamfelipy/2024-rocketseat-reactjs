import { styled } from "..";

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  button: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '6px',
    border: 'none',
    color: '$gray600',
    backgroundColor: '$gray800',
    cursor: 'pointer'
  }
})