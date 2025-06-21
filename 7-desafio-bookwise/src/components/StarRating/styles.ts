import { styled } from '@/styles'

export const StarContainer = styled('div', {
  display: 'flex',
  gap: '$1',

  svg: {
    color: '$purple100',
  },

  variants: {
    size: {
      sm: {
        svg: {
          width: 16,
          height: 16,
        },
      },
      md: {
        svg: {
          width: 20,
          height: 20,
        },
      },
      lg: {
        svg: {
          width: 24,
          height: 24,
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
