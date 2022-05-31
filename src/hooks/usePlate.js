import { useState } from "react";
import { getPlatesApi,
    addPlateApi,
    updatePlateApi,
    deletePlateApi 
    } from '../api/plate';

export function usePlate () {
    const [loading, setLoading] = useState(true);
    const [error, setError] =  useState(false);
    const [plates, setPlates] =  useState(null); 
    
    const getPlates = async () => {
        try {
            setLoading(true);     
            const response = await getPlatesApi(); 
            setLoading(false);       
            setPlates(response);      
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const addPlate = async (data) => {
        try {
            setLoading(true);      
            await addPlateApi(data); 
            setLoading(false);       
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const updatePlate = async (id, data) => {
        try {
            setLoading(true);      
            await updatePlateApi(id, data); 
            setLoading(false);       

        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const deletePlate = async (id) => {
        try {
            setLoading(true);
            await deletePlateApi(id);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    return {
        loading,
        error,
        plates,
        getPlates,
        addPlate,
        updatePlate,
        deletePlate
    };
};


