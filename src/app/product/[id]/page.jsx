import { getOneProducts, getProducts } from "@/services/productService";
import ProductSlider from "../ProductSlider";
import AddToCartButton from "@/components/AddToCartButton";
import PostInfoCart from "@/components/PostInfoCart";
import ProductInfo from "@/components/ProductInfo";
import PriceInfoProduct from "@/components/PriceInfoProduct";

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
                    <PostInfoCart />
                    <ProductInfo data={data} />
                </div>
                <PriceInfoProduct price={data.price}/>
                <AddToCartButton data={data} />
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

