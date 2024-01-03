import { ThreeDots } from "react-loader-spinner"

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