import React, { useRef, useState } from 'react'
import Container from '../Container'
import List from './List';
import { useParams } from 'react-router-dom';

function ProductList() {
    
    const {slug} = useParams()
    const [category, setCategory] = useState((slug?slug:''))
    const [maxPrice, setMaxPrice] = useState()
    const [sort, setSort] = useState()
    let price = maxPrice
    // console.log(category);
    // console.log(maxPrice);
    // console.log(sort);
    const filter = useRef(null)

    function toggleFilterBar() {
        filter.current.classList.toggle("-translate-x-full");
    }
    
    return (
        <>
            <Container>
                <div className='flex'>
                    <div className='bg-white h-full absolute -translate-x-full lg:translate-x-0 lg:static min-w-fit  p-4 duration-300 '
                        ref={filter}
                    >
                        <div onClick={toggleFilterBar} className='lg:hidden w-fit px-4 text-white bg-blue-500'>{'<<'}</div>
                        <div className='my-4'>
                            <h3>Categories</h3>
                            <div className='flex flex-col pl-4'>
                                <div>
                                    <input type='radio' name='category' value={'PC'} id='PC'
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    <label> PC</label>
                                </div>
                                <div>
                                    <input type='radio' name='category' value={'Laptop'} id='Laptop'
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    <label> Laptop</label>
                                </div>
                                <div>
                                    <input type='radio' name='category' value={'Accessories'} id='Accessories'
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    <label> Accessories</label>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <h3>Max Price</h3>
                            <div className='flex flex-col pl-4'>
                                <div>
                                    <input className='border border-black mr-2' type='number' name='category' min={0}
                                        onChange={(e) => { (price = e.target.value) }}
                                    />
                                    <button className='border border-blue-700 bg-blue-300'
                                        onClick={() => { setMaxPrice(price) }}
                                    > {'-->'} </button>
                                </div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <h3>Sort By</h3>
                            <div className='flex flex-col pl-4'>
                                <div>
                                    <input type='radio' name='sort' id='asc' value={'asc'} onChange={(e) => setSort(e.target.value)} />
                                    <label> Price: Low to High</label>
                                </div>
                                <div>
                                    <input type='radio' name='sort' id='desc' value={'desc'} onChange={(e) => setSort(e.target.value)} />
                                    <label> Price: High to Low</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='min-w-96 lg:w-10/12 border-l-2 p-4'>
                        <List sort={sort} cat={category} maxPrice={maxPrice} toggleFilterBar={toggleFilterBar} />
                    </div>
                </div>

            </Container>
        </>
    )
}

export default ProductList