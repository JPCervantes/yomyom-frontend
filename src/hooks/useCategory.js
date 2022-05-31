import { useState } from "react";
import { getCategoriesApi, 
    getCategoriesByIdApi,
    addCategoryApi, 
    updateCategoryApi, 
    deleteCategoryApi 
} from '../api/category';

export function useCategory () {
    const [loading, setLoading] = useState(true);
    const [error, setError] =  useState(false);
    const [categories, setCategories] =  useState(null); 
    
    const getCategories = async () => {
        try {
            setLoading(true);     
            const response = await getCategoriesApi(); 
            setLoading(false);       
            setCategories(response);      
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const getCategoryById = async (id) => {
        try {
            const category = await getCategoriesByIdApi(id);
            return category

        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    const addCategory = async (data) => {
        try {
            setLoading(true);      
            await addCategoryApi(data); 
            setLoading(false);       
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const updateCategory = async (id, data) => {
        try {
            setLoading(true);      
            await updateCategoryApi(id, data); 
            setLoading(false);       

        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const deleteCategory = async (id) => {
        try {
            setLoading(true);
            await deleteCategoryApi(id);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        categories,
        getCategories,
        getCategoryById,
        addCategory,
        updateCategory,
        deleteCategory
    };
};




