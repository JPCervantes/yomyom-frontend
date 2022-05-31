import React, { useEffect, useState } from 'react';
import { useCategory } from '../../../../hooks';

export function CategoryName(props) {

    const { categoryId } = props;
    const [category, setCategory] = useState(null)
    const { loading, getCategoryById } = useCategory();

    useEffect(() => {getCurrrentCategory(categoryId)}, [])

    const getCurrrentCategory = async (categoryId) => {
      try {
        const result = await getCategoryById(categoryId)
        setCategory(result)
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div>
      {loading && category != null ? (<p>{category.name}</p>) :  (<p>Sin categoría</p>)}
    </div>
  )
}
