import React from 'react'
import Banner from '../Banner/Banner'
import Container from '../Container'
import Featured from '../Featured/Featured.jsx'

function Home() {
    
    return (
        <>
            <Banner />
            <Container>
                <Featured/>
            </Container>
        </>
    )
}

export default Home