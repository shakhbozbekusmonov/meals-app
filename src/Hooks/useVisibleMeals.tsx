import { useState, useEffect } from "react";
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
    const [value, setValue] = useState<ValueType>({ search: "" });
    const [meals, setMeals] = useState<MealsType[]>([]);
    const [displayedMeals, setDisplayedMeals] = useState<MealsType[]>([]);
    const [mealsToShow, setMealsToShow] = useState<number>(8);

    const getMeals = async () => {
        const meals = await getMealsAllByCategories();
        setMeals(meals.categories);
        setDisplayedMeals(meals.categories.slice(0, mealsToShow));
    };

    useEffect(() => {
        getMeals();
    }, []);

    const handleSeeMoreClick = () => {
        // Increment the number of meals to display when the "See More" button is clicked
        setMealsToShow(mealsToShow + 8);
        setDisplayedMeals(meals.slice(0, mealsToShow + 8));
    };

    const SEARCH_QUERY = new RegExp(value.search, "gi");
    const visibleMeals =
        value && value.search
            ? meals.filter((item) => item.strCategory?.match(SEARCH_QUERY))
            : displayedMeals;

    return [
        visibleMeals,
        meals,
        handleSeeMoreClick,
        (searchValue: any) => setValue(searchValue),
    ] as const;
};
