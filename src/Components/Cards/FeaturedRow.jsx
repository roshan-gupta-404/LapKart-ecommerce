import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

function FeaturedRow({ children, title, cat }) {
    return (
        <div className='mt-4 border'>
            <div className='flex justify-between items-center bg-slate-500 px-4 text-white text-xl'>
                <h2>{title}</h2>
                <Link to={`/products/${cat}`}><button className='bg-gray-600 h-fit px-2'> See All{">"} </button></Link>
            </div>
            <div className='featured_cards my-1 flex justify-between overflow-x-auto'>
                {/* CHILDREN */}
                {children.map((child) => (
                    <ProductCard key={child.id} child={child} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedRow