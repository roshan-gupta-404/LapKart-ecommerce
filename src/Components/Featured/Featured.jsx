import React from 'react'
import FeaturedRow from '../Cards/FeaturedRow'
import useFetch from '../../Hooks/useFetch'

function Featured() {

    const featuredPC = useFetch('/products?populate=*&filters[categories][title][$eqi]=PC&filters[status][$eqi]=featured')
    const featuredLap = useFetch('/products?populate=*&filters[categories][title][$eqi]=Laptop&filters[status][$eqi]=featured')
    const featuredAcc = useFetch('/products?populate=*&filters[categories][title][$eqi]=Accessories&filters[status][$eqi]=featured')
    console.log(featuredPC);
    
    return (
        <div id='featured' className='my-4'>
            <h2 className='text-2xl'>Featured Section</h2>
            {featuredPC.loading ? <div>Loading... It might take few sec :)</div> :
                (featuredPC.error ? 'some Erorr occured' :
                    (<FeaturedRow title={'Beast Computers'} key={"pc"} children={featuredPC.data} cat={"PC"} />)
                )
            }
            {featuredLap.loading ? <div>Loading... It might take few sec :)</div> :
                (featuredLap.error ? 'some Erorr occured' :
                    (<FeaturedRow title={"Gaming Laptop"} key={"lap"} children={featuredLap.data} cat={"Laptop"} />)
                )
            }
            {featuredAcc.loading ? <div>Loading... It might take few sec :)</div> :
                (featuredAcc.error ? 'some Erorr occured' :
                    (<FeaturedRow title={"Accessories"} key={"acc"} children={featuredAcc.data} cat={"Accessories"} />)
                )
            }
        </div>
    )
}

export default Featured