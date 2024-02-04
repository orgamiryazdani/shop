import { getOneProducts, getProducts } from "@/services/productService";
import ProductSlider from "../ProductSlider";
import { toLocalDateString } from "@/utils/toLocalDate";
import { toPersianNumbers, toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { FaShop } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { SiSingaporeairlines } from "react-icons/si";

export const dynamic = "force-static"
export const dynamicParams = false

async function page({ params }) {
    const { id } = params;
    const product = getOneProducts(id)
    const [{ data }] = await Promise.all([
        product,
    ]);

    return (
        <div className="bg-secondary-100 w-full h-full flex items-center justify-between px-10">
            <ProductSlider images={data.images} />
            <div className="w-3/6 h-5/6 pr-7 text-secondary-0 flex flex-col justify-between" dir="ltr">
                <p className="text-2xl font-bold">{data.title}</p>
                <p className="text-secondary-600">{data.description}</p>
                <div className="flex items-end h-36 justify-between">
                    <div className="w-1/2 flex items-center justify-start">
                        <div className="w-40 h-[132px] rounded-md p-2 bg-secondary-200 text-xs flex flex-col items-end justify-around">
                            <span className="flex items-center"><SiSingaporeairlines className="pr-1 w-[22px] h-[22px] pb-1"/> ارسال با پست پیشتاز</span>
                            <span>هزینه ارسال : {toPersianNumbersWithComma(38000)} تومان</span>
                            <span>تحویل بین {toPersianNumbers(3)} تا {toPersianNumbers(5)} روز کاری</span>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex flex-col items-end justify-between">
                        <p>شماره محصول : {toPersianNumbers(data.id)}</p>
                        <span className="flex items-center"><FaShop className="pr-2 text-xl w-7 h-7 pb-1" /> ارسال از فروشگاه شیراز</span>
                        <p className="flex items-center"><IoMdTime className="pr-2 text-xl w-7 h-7 pb-1 text-yellow-400" /> تاریخ انتشار : {toLocalDateString(data.creationAt)}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-end">
                        <span className="flex items-center"><TiTick className="pr-2 text-xl w-8 h-8  text-primary-300" /> موجود در انبار</span>
                        <p className="text-secondary-500 font-bold text-sm flex items-center"><TiTick className="w-7 h-7 pr-0 text-primary-300" /> امکان مراجعه بصورت حضوری</p>
                    </div>
                    <span className="flex items-center font-bold text-2xl"><BiSolidBadgeDollar className="pr-1 pb-1 text-yellow-400 w-7 h-7" />قیمت : {toPersianNumbersWithComma(data.price)}</span>
                </div>
                <button className="btn btn--primary">افزودن به سبد خرید</button>
            </div>
        </div>
    )
}

export default page

export async function generateStaticParams() {
    const { data } = await getProducts(
        {
            limit: 0, offset: 0,
            search: "",
        },
    )
    return data.map((product) => ({
        id: String(product.id)
    }))
}

