import React from 'react'
import { Link } from 'react-router-dom'
import useBharatFormat from '../../Hooks/useBharatFormat'

function ProductCard({child}) {
    const price = useBharatFormat(child.attributes.price)
    return (
        <div className='w-60 featured_card border p-2'>
            <div className='w-56 h-56 flex justify-center'>
                <img src={child.attributes.imgUrl} />
            </div>
            <div className=''>
                <div className='h-10 inline-block my-2'>
                    {child.attributes.title}
                </div>
                <Link to={`/product/${child.id}`}><div className='bg-yellow-200 text-center rounded-md' >₹ {price}</div></Link>
            </div>
        </div>
    )
}

export default ProductCard