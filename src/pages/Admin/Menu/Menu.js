import React, { useEffect, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { HOURS } from '../../../utils/constants';
import moment from 'moment';
import { useCategory } from '../../../hooks';
import { TableMenu } from '../../../components/Admin'
import { forEach } from 'lodash';


import './Menu.scss'

export function Menu() {

    const [hoursFormated, setHoursFormated] = useState([])
    const [currentHour, setCurrentHour] = useState("00:00:00")
    const { categories, getCategories, getCategoryById } = useCategory();
    const [ currentCategories, setCurrentCategories] = useState([])
    const [ refetch, setRefetch ] = useState(false);  

    const onRefetch = () => setRefetch((prev) => !prev);

    const now = moment(currentHour, "HH:mm:ss")

    useEffect(() => {
      return async () => {
        setCurrentCategories([]);
        forEach( categories, async (category) => {
            const startHour = moment(category.timestart, "HH:mm:ss");
            const endHour = moment(category.timeend, "HH:mm:ss");
            if (now >= startHour && now < endHour) {
                const result = await getCategoryById(category.id)
                setCurrentCategories(currentCategories => [...currentCategories, result])
            }
        })
        onRefetch();
    }
    }, [currentHour])
    

    useEffect(() => {

      setHoursFormated(HOURS)
    }, [currentHour])

    useEffect(() => { getCategories() }, [])
    

    const HandleChangeHour = (hour) => {
        setCurrentHour(hour);
        setCurrentCategories([]);
        onRefetch();
    }

  return (
    
    <div>
    <div className='menu__hour-container'>
        <Dropdown 
            placeholder='Hora actual' 
            fluid 
            selection 
            search 
            options={hoursFormated}
            onChange={(_, data) => HandleChangeHour(data.value)}
        />
    </div>
        <h2>El menú a las {currentHour} es: </h2>
        <TableMenu 
            activeCategories={currentCategories}
            onRefetch={onRefetch} 
        />

    </div>
  )
}
