import { getCategories } from "@/services/categoryService"
import CategoryCard from "./CategoryCard";
import { CategorySkeleton } from "@/common/Skeleton";

async function categories() {
    const category = getCategories()
    const [{ data }] = await Promise.all([
        category,
    ]);

    if (data.length < 1) return <CategorySkeleton />

    return (
        <CategoryCard data={data} />
    )
}

export default categories