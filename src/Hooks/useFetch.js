import { useEffect, useState } from "react"
import makeRequest from "../makeRequest"
const useFetch = (url)=>{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    useEffect(()=>{
        const fetchProducts = async ()=>{
            setLoading(true)
            try {
                const res = await makeRequest.get(url)
                console.log(res);
                setData(res.data.data);
            } catch (error) {
                console.error(error); 
                setError(true)           
            }
            setLoading(false)
        }
        fetchProducts()
    },[url])
    return { data, loading, error}
}

export default useFetch