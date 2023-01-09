import React, {useState} from "react";
import {Iproduct} from "../models";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";

const ProductData:Iproduct = {
    title: '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
    rating: {
        rate:42,
        count:10
    }
}

interface CreateProductProps {
    onCreate: (product: Iproduct) => void
}

export function CreateProduct({onCreate}:CreateProductProps) {
    const [value, setvalue] = useState('')
    const [error, seterror] = useState('')
    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        seterror('')
        if(value.trim().length === 0){
            seterror('Please enter value title')
            return
        }

        ProductData.title = value
        const response = await axios.post<Iproduct>('https://fakestoreapi.com/products', ProductData)

        onCreate(response.data)
    }
    const changeHandler = (event:React.KeyboardEvent<HTMLInputElement>)=>{
        setvalue((event.target as HTMLInputElement).value)
    }


    return(
        <form onSubmit={submitHandler}>
            <input
                type={"text"}
                className={"border py-2 px-4 ab-2 w-full outline-0"}
                placeholder={"Enter product title..."}
                value ={value}
                onChange={event => setvalue((event.target as HTMLInputElement).value)}
            />

            {error && <ErrorMessage error={error}/>}

            <button type={"submit"} className={"py-2 px-4 border bg-yellow-400 hover:text-white"}>
                Create
            </button>
        </form>
    )
}