import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetail";
import { prodFetch } from "./prodFetch";

export const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})
    const {pid} = useParams()
    useEffect(()=>{
        prodFetch(pid)
        .then(resp => setproduct(resp))
        .catch((err)=> console.log(err))

    }, [])

    console.log(product)
    return (
        <ItemDetail product={product}/>
    )
}