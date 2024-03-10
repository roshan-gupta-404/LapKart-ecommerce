import React from 'react'
import Container from '../Container'
import bannerImg from './pckartBanner.jpg'
function Banner() {
  return (
    <Container>
        <div className='my-4'>
            <img src={bannerImg}/>
        </div>
    </Container>
  )
}

export default Banner