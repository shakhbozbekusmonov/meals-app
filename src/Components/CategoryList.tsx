import { SetStateAction } from "react";
import { MealsType } from "../Hooks/useVisibleMeals";
import CategoryItem from "./CategoryItem";

type Props = {
    meals: MealsType[];
    isLoading: boolean;
    setLoading: (isLoading: boolean) => void;
};

const CategoryList = ({ meals, isLoading, setLoading }: Props) => {
    return (
        <ul className='row'>
            {meals?.map((item) => (
                <CategoryItem
                    key={item.idCategory}
                    {...item}
                    isLoading={isLoading}
                    setLoading={setLoading}
                />
            ))}
        </ul>
    );
};

export default CategoryList;
