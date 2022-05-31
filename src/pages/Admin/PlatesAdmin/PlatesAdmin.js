import React, { useState, useEffect } from 'react';
import { usePlate } from '../../../hooks';
import { Loader } from 'semantic-ui-react';
import { HeaderPage, AddEditPlateForm, TablePlates } from '../../../components/Admin';
import { ModalBasic } from '../../../components/Common';
import './PlatesAdmin.scss'

export function PlatesAdmin() {

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);  
  const { loading, plates, getPlates, deletePlate } = usePlate();

  useEffect(() => {getPlates()}, [refetch]);


  const onRefetch = () => setRefetch((prev) => !prev);
  const openCloseModal = () => setShowModal((prev) => !prev);

  const addPlate = () => {
    setTitleModal("Nuevo Platillo");
    setContentModal(
        <AddEditPlateForm 
        onClose={openCloseModal} 
        onRefetch={onRefetch}
        />
    );
    openCloseModal();
  }

  const updatePlate = (data) => {
    setTitleModal("Actualizar Platillo");
    setContentModal(
        <AddEditPlateForm 
        onClose={openCloseModal} 
        onRefetch={onRefetch}
        plate={data}
        />
    );
    openCloseModal();
}

const onDeletePlate = async (data) => {
    const result = window.confirm(`¿Eliminar el platillo ${data.name}?`)
    if (result) {
      try {
      await deletePlate(data.id);
      onRefetch();
      } catch (error) {
        console.log(error);
      }
    } 
  }

  return (
    <>
    <HeaderPage 
      title="Platillos"
      btnTitle="Agregar Platillo"
      btnClick={addPlate}
    />
    { loading ? (
      <Loader active inline="centered">
        Cargando categorias...
      </Loader>
    ) : (

      <TablePlates 
        plates={plates}
        updatePlate={updatePlate}
        onDeletePlate={onDeletePlate}
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
