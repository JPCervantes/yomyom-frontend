import React from 'react';
import { Form, Button, Checkbox } from "semantic-ui-react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCategory } from '../../../../hooks'
import './AddEditCategoryForm.scss';

export function AddEditCategoryForm(props) {
    const { onClose, onRefetch, category } = props;

    const { addCategory, updateCategory } = useCategory();

    const formik = useFormik({
        initialValues: initialValues(category),
        validationSchema: Yup.object(category? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) => {

            try {
                if (category) await updateCategory(category.id, formValue)
                else 
                await addCategory(formValue);
                onRefetch();
                onClose();
            } catch (error) {
                console.error(error);
            }
        }
    });


  return (
    <Form className='add-edit-category-form' onSubmit={formik.handleSubmit}>
        <p>Ingresa nombre de la categoría: </p>
        <Form.Input
            name="title"
            placeholder="Nombre de la categoría" 
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}
        />
        <p>Ingresa hora de inicio: </p>
        <Form.Input
            name="timestart"
            placeholder="Hora de inicio" 
            value={formik.values.timestart}
            onChange={formik.handleChange}
            error={formik.errors.timestart}
        />
        <p>Ingresa hora de fin: </p>
        <Form.Input
            name="timeend"
            placeholder="Hora de inicio" 
            value={formik.values.timeend}
            onChange={formik.handleChange}
            error={formik.errors.timeend}
        />

        <div className='add-edit-category-form__active'>
            <Checkbox 
                toggle 
                checked={formik.values.active}
                onChange={(_,data) => formik.setFieldValue('active', data.checked)} />
            Categoría Activa
        </div>

        <Button type='submit' content={category ? "Actualizar" : "Crear"} primary fluid />

    </Form>
  )
}


function initialValues(data) {
    return {
        title: data?.name || "",
        timestart: data?.timestart || "",
        timeend: data?.timeend || "",
        active: data?.active ? true : false,
    }
}

function newSchema() {
    return {
        title: Yup.string().required(true),
        timestart: Yup.string().required(true),
        timeend: Yup.string().required(true),
        active: Yup.boolean().required(true),
    }
}

function updateSchema() {
    return {
        title: Yup.string().required(true),
        timestart: Yup.string().required(true),
        timeend: Yup.string().required(true),
        active: Yup.boolean().required(true),
    }
}