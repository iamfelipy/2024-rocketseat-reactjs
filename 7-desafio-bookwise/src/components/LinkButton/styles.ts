import { styled } from '@/styles'

export const LinkButtonContainer = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  fontWeight: '$bold',
  fontFamily: '$default',
  border: 'none',
  outline: 'none',
  borderRadius: '$sm',
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: '$sm',
  transition: 'background 0.2s, color 0.2s',

  variants: {
    color: {
      white: {
        color: '$gray100',
        background: 'transparent',
        '&:hover': {
          background: '$gray800',
        },
      },
      purple: {
        color: '$purple100',
        background: 'transparent',
        '&:hover': {
          background: '#8381D920',
        },
      },
    },
    size: {
      md: {
        padding: '0 $3',
        height: '2.5rem',
      },
      sm: {
        padding: '0 $2',
        height: '2rem',
        fontSize: '$xs',
      },
    },
    active: {
      true: {},
      false: {},
    },
  },

  defaultVariants: {
    color: 'purple',
    size: 'md',
  },
})
