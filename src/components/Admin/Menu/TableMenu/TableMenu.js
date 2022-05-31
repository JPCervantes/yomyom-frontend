import React, { useState, useEffect } from 'react'
import { map, forEach } from 'lodash';
import { Divider } from 'semantic-ui-react';
import { usePlate } from '../../../../hooks';
import './TableMenu.scss'

export function TableMenu(props) {
    const { activeCategories, onRefetch } = props;
    const { plates, getPlates } = usePlate();
    
    const [currentPlates, setCurrentPlates] = useState([])

    useEffect(() => {getPlates()}, [])
    
    
    useEffect(() => {
      setCurrentPlates([])
      forEach(plates, (plate) => {
        forEach(activeCategories, (category) => {
          if (category.id === plate.categoryId) {
            setCurrentPlates(currentPlates => [...currentPlates, plate])
          }})
          onRefetch();
      }) 
    }, [activeCategories])
    
  return (
    <div className='table-menu__container'>
      <h2 className='table-menu__menu-title'>MENÚ YOMYOM</h2>
        {map(currentPlates, (item, index) => (
            <div key={index} className='menu__row-item'>
                <h3>{item.name}</h3>
                <h3>$ {item.price}</h3>
                <Divider section />
            </div>
        ))}

    </div>
  )
}
