import { toast } from "react-toastify";
import { Api } from "../Api";

export const getMealsAllByCategories = async () => {
    try {
        const response = await Api.get(`categories.php`);
        return response.data;
    } catch (err: any) {
        toast.error(err.message);
    }
};

export const getMealBySearch = async (search: string) => {
    try {
        const response = await Api.get(`search.php?s=${search}`);
        return response.data;
    } catch (err: any) {
        toast.error(err.message);
    }
};

export const getMealsByID = async (mealID: string | undefined) => {
    try {
        const response = await Api.get(`lookup.php?i=${mealID}`);
        return response.data;
    } catch (err: any) {
        toast.error(err.message);
    }
};

export const getMealsByFilterCategory = async (
    category: string | undefined
) => {
    try {
        const response = await Api.get(`filter.php?c=${category}`);
        return response.data;
    } catch (err: any) {
        toast.error(err.message);
    }
};

export const getMealsByFilterArea = async (area: string) => {
    try {
        const response = await Api.get(`filter.php?a=${area}`);
        return response.data;
    } catch (err: any) {
        toast.error(err.message);
    }
};

export const getMealsCategoriesList = async () => {
    try {
        const response = await Api.get("list.php?c=list");
        return response.data;
    } catch (err: any) {
        toast.error(err.message);
    }
};

export const getMealsAreasList = async () => {
    try {
        const response = await Api.get("list.php?a=list");
        return response.data;
    } catch (err: any) {
        toast.error(err.message);
    }
};
