import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { emptyCart } from '../../store/cartSlice'

function PaymentSuccess() {
    const dispatch = useDispatch()
    const {search} = useLocation()
    const params = new URLSearchParams(search)
    const success = params.get('success')
    if(success === 'true'){
        dispatch(emptyCart())
    }
  return (
    <div><h1 className='text-3xl'>Thank You for purchasing with us. 😊😊</h1></div>
  )
}

export default PaymentSuccess

// https://lapkart.vercel.app/?success=true&session_id=cs_test_a138xZWJD9hQQllUOgc4FzY1N4v0fy0NIhf6ipTX9G2Q3bwWNdhVF5u4PD