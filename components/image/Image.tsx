import NextImage, {ImageLoaderProps, ImageProps} from 'next/image'

interface Props extends ImageProps {}

const loader = ({ src }: ImageLoaderProps) => src

const Image = (props: Props) => {
    return (
        <NextImage
            { ...props }
            loader={loader}
        />
    )
}

export default Image
