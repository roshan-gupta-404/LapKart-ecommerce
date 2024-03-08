import React from 'react'
import ProductCard from '../Cards/ProductCard'

function List({cat , maxPrice, sort, toggleFilterBar}) {
    const products = [
        {
            imgUrl: 'https://m.media-amazon.com/images/I/81uZ0m4puHL._AC_UY218_.jpg',
            desc: 'Kuro RTX Gaming PC RGB - Intel 12th Gen i7 12700F- 12C/20T, 32GB DDR4 RAM, 500GB SSD, RTX 3060 12GB Graphics',
            id: 'p1',
            price: '₹1,47,890 '
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/I/815EfSiaMJL._AC_UY218_.jpg',
            desc: 'NXTGN Core i9 Gaming PC (Core i9 11th Gen Processor, 32GB RAM, 1TB SSD, 4TB Hard Drive, 12GB RTX3060 Graphic Card, Onboard WiFi, Windows 11 Pro)',
            id: 'p2',
            price: '₹1,20,490'
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/I/51w56pFIRCL._AC_UY218_.jpg',
            desc: 'ASUS ROG Strix G10DK, 6 core AMD Ryzen 5 5600X, G10DK-R5600X146W',
            id: 'p3',
            price: '₹67,990 '
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/I/81YFpilzGvS._AC_UY218_.jpg',
            desc: ' ASUS ROG Strix G10CE, 8 Core Intel Core i7-10700 10th Gen Gaming Desktop (16GB/1TB HDD + 512GB SSD/6GB NVIDIA GeForce GTX 1660 Ti',
            id: 'p4',
            price: '₹99,999'
        },
    ]

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