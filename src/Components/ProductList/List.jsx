import React from 'react'
import ProductCard from '../Cards/ProductCard'
import useFetch from '../../Hooks/useFetch'

function List({cat , maxPrice, sort, toggleFilterBar}) {
    let query = '/products?populate=*'
    cat ? query = query + `&filters[categories][title][$eqi]=${cat}`:null
    maxPrice ? query = query + `&filters[price][$lte]=${maxPrice}`:null
    sort ? query = query + `&sort=price:${sort}`:null

    const {data:products, loading , error} = useFetch(query)

    return (
        <>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl border-b-2 mb-4 p-2'> Computers </h1>
                <button className='lg:hidden bg-blue-300 h-fit p-2 text-xl' onClick={toggleFilterBar}>Filter</button>
            </div>
            <div className='my-1 flex flex-wrap gap-2'>
                {products.map((child) => (
                    <ProductCard  key={child.id} child={child}/>
                ))}
            </div>
        </>
    )
}

export default List