import { getOneProducts } from "@/services/productService";
import ProductSlider from "../ProductSlider";
import dynamic from 'next/dynamic'

const ProductInfo = dynamic(() => import('@/components/ProductInfo'), { ssr: false })
const PriceInfoProduct = dynamic(() => import('@/components/PriceInfoProduct'), { ssr: false })
const AddToCartButton = dynamic(() => import('@/components/AddToCartButton'), { ssr: false })

export async function generateMetadata({ params }) {
    const { id } = params;
    const product = getOneProducts(id)
    const [{ data }] = await Promise.all([
        product,
    ]);

    return {
        title: data.title,
        description: data.description
    }
}

async function page({ params }) {
    const { id } = params;
    const product = getOneProducts(id)
    const [{ data }] = await Promise.all([
        product,
    ]);

    return (
        <div className="bg-secondary-100 w-full lg:h-full flex flex-wrap items-center justify-between px-10 pt-10 lg:pt-0">
            <ProductSlider images={data.images} />
            <div className="lg:w-3/6 w-full lg:h-5/6 h-auto bg-secondary-100 md:px-7 text-secondary-0 flex flex-col justify-between pt-5 lg:pt-0" dir="ltr">
                <p className="text-2xl font-bold">{data.title}</p>
                <p className="text-secondary-600">{data.description}</p>
                <ProductInfo data={data} />
                <PriceInfoProduct price={data.price} />
                <AddToCartButton data={data} />
            </div>
        </div>
    )
}

export default page