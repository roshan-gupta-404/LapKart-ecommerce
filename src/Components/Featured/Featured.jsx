import React from 'react'
import FeaturedRow from '../Cards/FeaturedRow'

function Featured() {

    const featuredPC = {data:[
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
    ]}
    const featuredLap = {data:[
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
    ]}
    const featuredAcc = {data:[
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
    ]}
    
    return (
        <div id='featured' className='my-4'>
            <h2 className='text-2xl'>Featured Section</h2>
            {featuredPC.loading ? null :
                (featuredPC.error ? 'some Erorr occured' :
                    (<FeaturedRow title={'Beast Computers'} key={"pc"} children={featuredPC.data} cat={"PC"} />)
                )
            }
            {featuredLap.loading ? null :
                (featuredLap.error ? 'some Erorr occured' :
                    (<FeaturedRow title={"Gaming Laptop"} key={"lap"} children={featuredLap.data} cat={"Laptop"} />)
                )
            }
            {featuredAcc.loading ? null :
                (featuredAcc.error ? 'some Erorr occured' :
                    (<FeaturedRow title={"Accessories"} key={"acc"} children={featuredAcc.data} cat={"Accessories"} />)
                )
            }
        </div>
    )
}

export default Featured