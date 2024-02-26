import { Skeleton } from "@mui/material";

function SkeletonProducts() {
    const value = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="w-full h-full flex items-center justify-center xl:justify-between flex-wrap mt-10">
            {
                value.map((item) => (
                    <div className="w-[360px] lg:w-[276px] h-96 m-3 xl:m-0" key={item}>
                        <Skeleton variant="image" width="100%" height={192} sx={{ backgroundColor: "#3c3c3c", borderRadius: "8px", margin: "3px" }} />
                        <Skeleton variant="text" width="100%" height={30} sx={{ backgroundColor: "#3c3c3c", borderRadius: "6px", margin: "3px" }} />
                        <Skeleton variant="text" width="100%" height={30} sx={{ backgroundColor: "#3c3c3c", borderRadius: "6px", margin: "3px" }} />
                        <Skeleton variant="text" width="100%" height={30} sx={{ backgroundColor: "#3c3c3c", borderRadius: "6px", margin: "3px" }} />
                        <div className="flex items-center justify-between w-[362px] lg:w-[278px]">
                            <Skeleton variant="rounded" width={50} height={40} sx={{ backgroundColor: "#3c3c3c", borderRadius: "8px", margin: "3px" }} />
                            <Skeleton variant="rectangular" width={80} height={40} sx={{ backgroundColor: "#3c3c3c", borderRadius: "8px", margin: "0px" }} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default SkeletonProducts;

export function HeaderSkeleton() {
    return (
        <div className="w-full h-1/6 flex items-center justify-center py-5 px-7 md:px-0">
            <Skeleton variant="image" width="100%" height="100%" sx={{ backgroundColor: "#101010", borderRadius: "8px", margin: "3px", }} />
        </div>
    )
}

export function CategorySkeleton() {
    const value = [1, 2, 3, 4, 5, 6];
    return (
        <div className="w-full h-full flex items-center justify-center xl:justify-between flex-wrap mt-10">
            {
                value.map((item) => (
                    <div className="w-[352px] h-72 m-3 xl:m-0" key={item}>
                        <Skeleton variant="image" width={352} height={256} sx={{ backgroundColor: "#3c3c3c", borderRadius: "8px", margin: "3px" }} />
                        <Skeleton variant="text" width={352} height={30} sx={{ backgroundColor: "#3c3c3c", borderRadius: "6px", margin: "3px" }} />
                    </div>
                ))
            }
        </div>
    )
}
