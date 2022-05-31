import React, { useState, useEffect } from 'react';
import { useCategory } from '../../../hooks';
import { Loader } from 'semantic-ui-react';
import { TableCategory, AddEditCategoryForm, HeaderPage } from '../../../components/Admin'
import { ModalBasic } from '../../../components/Common';
import './CategoriesAdmin.scss';

export function CategoriesAdmin() {

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);  
  const { loading, categories, getCategories, deleteCategory } = useCategory();

  useEffect(() => {getCategories()}, [refetch]);

  const onRefetch = () => setRefetch((prev) => !prev);
  const openCloseModal = () => setShowModal((prev) => !prev);

  const addCategory = () => {
    setTitleModal("Nueva Categoría");
    setContentModal(
        <AddEditCategoryForm 
        onClose={openCloseModal} 
        onRefetch={onRefetch}
        />
    );
    openCloseModal();
  }

  const updateCategory = (data) => {
    setTitleModal("Actualizar Categoría");
    setContentModal(
        <AddEditCategoryForm 
        onClose={openCloseModal} 
        onRefetch={onRefetch}
        category={data}
        />
    );
    openCloseModal();
  }

  const onDeleteCategory = async (data) => {
      const result = window.confirm(`¿Eliminar la categoría ${data.name}?`)
      if (result) {
        try {
        await deleteCategory(data.id);
        onRefetch();
        } catch (error) {
          console.log(error);
        }
      } 
    }


  return (
    <>
    <HeaderPage 
      title="Categorias"
      btnTitle="Agregar Categoría"
      btnClick={addCategory}
    />
    { loading ? (
      <Loader active inline="centered">
        Cargando categorias...
      </Loader>
    ) : (
      <TableCategory 
        categories={categories}
        updateCategory={updateCategory}
        onDeleteCategory={onDeleteCategory}
      />

    )}
            <ModalBasic 
            show={showModal}
            onClose={openCloseModal}
            title={titleModal}
            children={contentModal}
        
        />
    </>
  )
}