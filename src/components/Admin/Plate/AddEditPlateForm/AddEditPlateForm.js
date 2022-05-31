import React, { useState, useEffect } from 'react';
import { Form, Button, Checkbox, Dropdown } from "semantic-ui-react";
import { usePlate, useCategory } from '../../../../hooks'
import { map } from 'lodash';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './AddEditPlateForm.scss';

export function AddEditPlateForm(props) {
    const { onClose, onRefetch, plate } = props;
    const { addPlate, updatePlate } = usePlate();
    const { categories, getCategories } = useCategory();
    const [ categoriesFormat, setCategoriesFormat ] = useState([])

    console.log("categoriesformat:", categoriesFormat);

    useEffect (() => {getCategories()}, []);
    useEffect (() => {
        setCategoriesFormat(formatDropdownData(categories)); //This effect get the data when categories is updated
    }, [categories])

    const formik = useFormik({
        initialValues: initialValues(plate),
        validationSchema: Yup.object(plate? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            console.log("formValue on formik:", formValue)
            console.log("plates", plate)
            try {
                if (!plate) {
                    console.log("entra a add plate")
                    await addPlate(formValue);
                } else { 
                    await updatePlate(plate.id, formValue)
                }
                
                onRefetch();
                onClose();
            } catch (error) {
                console.error(error);
            }
        }
    });


  return (
    <Form className='add-edit-plate-form' onSubmit={formik.handleSubmit}>
        <p>Ingresa nombre del platillo: </p>
        <Form.Input
            name="name"
            placeholder="Nombre del platillo" 
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
        />
        
        <p>Categoría a la que pertenece: </p>
        
        <Dropdown 
            placeholder='Categoría' 
            fluid 
            selection 
            search 
            options={categoriesFormat}
            value={formik.values.category}
            error={formik.errors.category} 
            onChange={(_, data) => formik.setFieldValue('categoryId', data.value)}
        />

        <p>Precio: </p>
        <Form.Input
            name="price"
            placeholder="Precio" 
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.errors.price}
        />

        <div className='add-edit-plate-form__active'>
            <Checkbox 
                toggle 
                checked={formik.values.active}
                onChange={(_,data) => formik.setFieldValue('active', data.checked)} />
            Platillo Activo
        </div>

        <Button type='submit' content={plate ? "Actualizar" : "Crear"} primary fluid />

    </Form>
  )
}

function formatDropdownData(data) {     // This function iterates over categories and formated the data to inject it on dropdown
    return map(data, (item) => ({
        key: item.id,
        text: item.name,
        value: item.id
    }))
}

function initialValues(data) {
    return {
        name: data?.name || "",
        categoryId: data?.categoryId || "",
        price: data?.price || "",
        active: data?.active ? true : false,
    }
}

function newSchema() {
    return {
        name: Yup.string().required(true),
        categoryId: Yup.number().required(true),
        price: Yup.number().required(true),
        active: Yup.boolean().required(true),
    }
}

function updateSchema() {
    return {
        name: Yup.string().required(true),
        categoryId: Yup.number().required(true),
        price: Yup.number().required(true),
        active: Yup.boolean().required(true),
    }
}