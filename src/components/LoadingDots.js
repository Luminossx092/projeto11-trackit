import { ThreeDots } from 'react-loader-spinner'

export default function LoadingDots() {
    return (
        <ThreeDots
            height="20"
            width="300"
            radius="9"
            color="white"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    )
}