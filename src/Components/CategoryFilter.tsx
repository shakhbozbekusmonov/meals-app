import { useEffect, useState } from "react";
import { getMealsAreasList, getMealsCategoriesList } from "../Services/getData";
import { useForm } from "../Hooks/useForm";

type CategoriesType = {
    strCategory: string;
};

type AreasType = {
    strArea: string;
};

const initialState = {
    categories: "",
    areas: "",
};

const CategoryFilter = () => {
    const [value, handleChange] = useForm(initialState);
    const [categories, setCategories] = useState<CategoriesType[]>([]);
    const [areas, setAreas] = useState<AreasType[]>([]);

    useEffect(() => {
        getMealsCategoriesList().then((data) => setCategories(data.meals));

        getMealsAreasList().then((data) => setAreas(data.meals));
    }, []);

    return (
        <form>
            <select
                className='form-select me-2 text-secondary'
                name='categories'
                value={value.categories}
                onChange={handleChange}>
                <option>🥘 Filter by Meals Category</option>
                {categories.map((category) => (
                    <option
                        value={category.strCategory}
                        key={category.strCategory}>
                        {category.strCategory}
                    </option>
                ))}
            </select>

            <select
                className='form-select me-2 text-secondary'
                name='areas'
                value={value.areas}
                onChange={handleChange}>
                <option>🍲 Filter by Meals Area</option>
                {areas.map((area) => (
                    <option value={area.strArea} key={area.strArea}>
                        {area.strArea}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default CategoryFilter;
