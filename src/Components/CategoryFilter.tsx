import { useEffect, useState } from "react";
import { getMealsAreasList, getMealsCategoriesList } from "../Services/getData";
import { useForm } from "react-hook-form";

type CategoriesType = {
    strCategory: string;
};

type AreasType = {
    strArea: string;
};

const CategoryFilter = ({
    onHandleChange,
    onHandleArea,
}: {
    onHandleChange: (evt: string) => void;
    onHandleArea: (evt: string) => void;
}) => {
    const [categories, setCategories] = useState<CategoriesType[]>([]);
    const [areas, setAreas] = useState<AreasType[]>([]);

    useEffect(() => {
        getMealsCategoriesList().then((data) => setCategories(data.meals));

        getMealsAreasList().then((data) => setAreas(data.meals));
    }, []);

    return (
        <form>
            <div className='d-flex my-3'>
                <select
                    className='form-select me-2 text-secondary'
                    name='categories'
                    onChange={(evt) => onHandleChange(evt.target.value)}
                >
                    <option value=''>🥘 Filter by Meals Category</option>
                    {categories.map((category) => (
                        <option
                            value={category.strCategory}
                            key={category.strCategory}
                        >
                            {category.strCategory}
                        </option>
                    ))}
                </select>

                <select
                    className='form-select me-2 text-secondary'
                    name='areas'
                    onChange={(evt) => onHandleArea(evt.target.value)}
                >
                    <option value=''>🍲 Filter by Meals Area</option>
                    {areas.map((area) => (
                        <option value={area.strArea} key={area.strArea}>
                            {area.strArea}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
};

export default CategoryFilter;
