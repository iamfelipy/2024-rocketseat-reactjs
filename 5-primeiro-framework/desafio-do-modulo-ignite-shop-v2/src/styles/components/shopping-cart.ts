import { styled } from "..";

export const CartContainer = styled('div', {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '30rem',
  height: '100vh',
  backgroundColor: '$gray800',
  boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.5)',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1000,
  transform: 'translateX(100%)',
  transition: 'transform 0.3s ease-in-out',

  variants: {
    isOpen: {
      true: {
        transform: 'translateX(0)',
      },
      false: {
        transform: 'translateX(100%)',
      },
    },
  },
});

export const CartHeader = styled('header', {
  marginBottom: '2rem',

  ['div']: {
    textAlign: 'end',
    button: {
      background: 'none',
      border: 'none',
      color: '#E1E1E6',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
  },


  h2: {
    fontSize: '1.25rem',
    color: '#E1E1E6',
    textAlign: 'left',
  },

  
});

export const CartItemList = styled('div', {
  flex: 1,
  overflowY: 'auto',
});

export const CartItem = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  height: '5.875rem',
  marginBottom: '1.5rem',
  gap: '1.25rem',

  'div:first-child': {
    height: '5.875rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    img: {
      objectFit: 'cover',
    },
  },


  'div:last-child': {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '5.875rem',

    strong: {
      fontSize: '1rem',
      color: '#E1E1E6',
      marginBottom: '0.5rem',
    },

    span: {
      fontSize: '0.875rem',
      color: '#8D8D99',
      marginBottom: '0.5rem',
    },

    button: {
      background: 'none',
      border: 'none',
      color: '#00B37E',
      fontSize: '0.875rem',
      cursor: 'pointer',
      height: '1.62rem',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
})

export const CartFooter = styled('footer', {
  borderTop: '1px solid #323238',
  paddingTop: '1.5rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',

    span: {
      fontSize: '1rem',
      color: '#C4C4CC',
    },

    strong: {
      fontSize: '1.25rem',
      color: '#E1E1E6',
    },
  },

  button: {
    width: '100%',
    backgroundColor: '#00B37E',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    padding: '1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#00875F',
    },
  },
});