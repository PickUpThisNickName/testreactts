import {useEffect, useState} from "react";
import {Iproduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts(){
    const [products, setProducts] = useState<Iproduct[]>([])
    const [loading,setloading] = useState(false)
    const [error, seterror] = useState('')

    function addProduct(product:Iproduct){
        setProducts(prev => [...prev,product])
    }

    async function fetchProducts(){
        try {
            seterror('')
            setloading(true)
            const response = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=5')
            setProducts(response.data)
            setloading(false)
        }catch (e: unknown){
            const error = e as AxiosError
            setloading(false)
            seterror(error.message)
        }

    }
    useEffect(()=>{
        fetchProducts()
    },[])
    return { products, error, loading, addProduct}
}