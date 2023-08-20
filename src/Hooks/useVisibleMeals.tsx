import { useMemo, useState, useEffect } from "react";
import { getMealsAllByCategories } from "../Services/getData";

export type ValueType = {
    search: string;
};

export type MealsType = {
    idCategory: string;
    strCategory: string;
    strCategoryDescription: string;
    strCategoryThumb: string;
};

export const useVisibleMeals = () => {
    const [isLoading, setLoading] = useState(true);
    const [value, setValue] = useState<ValueType>({ search: "" });
    const [meals, setMeals] = useState<MealsType[]>([]);

    const getMeals = async () => {
        const meals = await getMealsAllByCategories();
        setMeals(meals.categories);
    };

    useEffect(() => {
        setLoading(true);
        getMeals();
        setLoading(false);
    }, []);

    const SEARCH_QUERY = new RegExp(value.search, "gi");
    const visibleMeals =
        value && value.search
            ? meals.filter((item) => item.strCategory?.match(SEARCH_QUERY))
            : meals;

    return [
        isLoading,
        visibleMeals,
        (searchValue: any) => setValue(searchValue),
    ] as const;
};
