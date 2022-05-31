import {BASE_API} from '../utils/constants';

export async function getPlatesApi() {
    try {
        const url = `${BASE_API}/plates`
        const response = await fetch(url);  
        const result = await response.json();
        return result;
    } catch (error) { 
        throw error;
    }
}

// export async function getPlateByCategoryIdApi(id) {
//     try {
//         const url = `${BASE_API}/categories/${id}`;
//         const response = await fetch(url);
//         const result = await response.json();
//         return result;

//     } catch (error) { 
//         throw error;
//     }
// }



export async function addPlateApi (data) {
    try {

        const formData = {}
        formData.id = 0;
        formData.name = data.name;
        formData.active = data.active;
        formData.price = data.price;
        formData.categoryId = data.categoryId;

        const url = `${BASE_API}/plates/`;
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


export async function updatePlateApi (id, data) {
    try {
        
        const formData = {}
        formData.name = data.name;
        formData.active = data.active;
        formData.price = data.price;
        formData.categoryId = data.categoryId;

        const url = `${BASE_API}/plates/${id}`;
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

export async function deletePlateApi(id) {
    try {
      const url = `${BASE_API}/plates/${id}/`;
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