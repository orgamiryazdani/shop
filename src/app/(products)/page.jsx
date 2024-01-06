import { getProducts } from "@/services/productService"
import { toLocalDateString } from "@/utils/toLocalDate"
import { toPersianNumbers, toPersianNumbersWithComma } from "@/utils/toPersianNumbers"
import { Pagination } from "@mui/material";
import { FaCartPlus } from "react-icons/fa6";

async function Products() {
  const { data } = await getProducts()
  return (
    <div className="overflow-y-auto w-full h-full flex gap-4 flex-wrap items-center pt-10 justify-center md:justify-start">
      {
        data.map((product) => (
          <div className="bg-secondary-200 w-[269px] h-96 rounded-xl overflow-hidden" key={product.id}>
            {/* image product */}
            <div className="w-full h-1/2 overflow-hidden flex items-center justify-center">
              <img src="https://assets.adidas.com/images/w_940,f_auto,q_auto/5ae668a4e81749d6aa8c88dfee7c9882_9366/ID4989_01_standard.jpg" className="rounded-t-xl w-full h-full object-cover" alt="test" />
            </div>
            <div className="w-full h-1/2 pt-10 relative flex flex-col items-end p-4 justify-between">
              <div className="w-full left-0 px-3 absolute flex items-center justify-between -top-[24px]">
                {/* price */}
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <div className="w-full h-1/2 bg-black flex items-center justify-center text-xs">${toPersianNumbersWithComma(product.price)}</div>
                  <div className="w-full h-1/2 bg-primary-200 text-primary-300 text-xs flex items-center justify-center">موجود</div>
                </div>
                {/* category Image */}
                <div className="w-12 h-12 overflow-hidden flex items-center rounded-xl justify-center">
                  <img
                    src="https://cdn.thewirecutter.com/wp-content/media/2023/09/running-shoes-2048px-5960.jpg"
                    className="w-full h-full object-cover"
                    alt="test"
                  />
                </div>
              </div>
              {/* info product */}
              <div className="w-full flex flex-col items-start gap-y-3">
                <p className="text-secondary-600 text-sm">شماره محصول : {toPersianNumbers(product.id)}</p>
                <span className="text-secondary-400 text-sm">{toLocalDateString(product.creationAt)}</span>
              </div>
              <p className="text-secondary-0 font-bold">{product.title}</p>
              <div className="w-full flex items-center justify-between">
                <FaCartPlus className="text-2xl cursor-pointer text-secondary-500" />
                <div className="rounded-xl w-fit p-3 text-sm bg-secondary-300 text-secondary-500 flex items-center justify-center font-bold">{product.category.name}#</div>
              </div>
            </div>
          </div>
        ))
      }
      <div className="w-full flex items-center justify-center text-white" dir="ltr">
        <Pagination count={10} color="primary" classes={{ text: "bold" }} />
      </div>
    </div>
  )
}

export default Products