import { ColorRing, ThreeDots } from "react-loader-spinner"

function Loading({ width = "75", height = "40" }) {
    return <ThreeDots
        height={width}
        width={height}
        radius={9}
        color="var(--color-primary-100)"
        wrapperStyle={{
            display: "flex",
            justifyContent: "center",
        }}
        visible={true}
    />
}

export default Loading

export function CircleLoader() {
    return <ColorRing
        visible={true}
        height="60"
        width="60"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
}