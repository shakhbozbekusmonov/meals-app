import { MealsType } from "../Hooks/useVisibleMeals";
import CategoryItem from "./CategoryItem";

type Props = {
    meals: MealsType[];
};

const CategoryList = ({ meals }: Props) => {
    return (
        <ul className='row'>
            {meals?.map((item) => (
                <CategoryItem key={item.idCategory} {...item} />
            ))}
        </ul>
    );
};

export default CategoryList;
