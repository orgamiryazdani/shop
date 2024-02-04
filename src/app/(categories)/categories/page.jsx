import { getCategories } from "@/services/categoryService"
import CategoryCard from "./CategoryCard";

async function categories() {
    const category = getCategories()
    const [{ data }] = await Promise.all([
        category,
    ]);

    return (
        <CategoryCard data={data}/>
    )
}

export default categories