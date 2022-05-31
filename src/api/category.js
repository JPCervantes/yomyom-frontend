import {BASE_API} from '../utils/constants';

export async function getCategoriesApi() {
    try {
        const url = `${BASE_API}/categories`
        const response = await fetch(url);  
        const result = await response.json();
        return result;
    } catch (error) { 
        throw error;
    }
}

export async function getCategoriesByIdApi(id) {
    try {
        const url = `${BASE_API}/categories/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;

    } catch (error) { 
        throw error;
    }
}


export async function addCategoryApi (data) {
    try {

        const formData = {}
        formData.id = 0;
        formData.name = data.title;
        formData.active = data.active;
        formData.timestart = data.timestart;
        formData.timeend = data.timeend;

        const url = `${BASE_API}/categories/`;
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData), 
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}


export async function updateCategoryApi (id, data) {
    try {
        
        const formData = {}
        formData.name = data.title;
        formData.active = data.active;
        formData.timestart = data.timestart;
        formData.timeend = data.timeend;

        const url = `${BASE_API}/categories/${id}`;
        const params = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),    
        }
        const response = await fetch(url, params);
        const result = await response.json();

        return result;
    } catch (error) {
        throw error;
    }
}

export async function deleteCategoryApi(id) {
    try {
      const url = `${BASE_API}/categories/${id}/`;
      const params = {
          method : "DELETE",
      };
      const response = await fetch(url, params);
      const result = await response.json();
      return result;

    } catch (error) {
        throw error;
    }
}