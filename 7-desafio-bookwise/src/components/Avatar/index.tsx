import Image, { ImageProps } from 'next/image'
import { AvatarWrapper } from './styles'

interface AvatarProps extends Omit<ImageProps, 'style'> {
  src: string
  alt: string
  width: number
  height: number
  borderSize?: number
}

export function Avatar({
  src,
  alt,
  width,
  height,
  borderSize = 1,
  ...props
}: AvatarProps) {
  return (
    <AvatarWrapper
      css={{
        width: width + borderSize * 2,
        height: height + borderSize * 2,
        padding: borderSize,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ borderRadius: '50%', objectFit: 'cover' }}
        {...props}
      />
    </AvatarWrapper>
  )
}
