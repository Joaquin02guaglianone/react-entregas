import { doc, getDoc, getFirestore } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./itemDetail";


export const ItemDetailContainer = () => {
    const [producto, actproducto] = useState({})
    const {pid} = useParams()
    useEffect(()=>{
        
        const db = getFirestore()
        const querydoc = doc(db, 'productos', pid)
        
        getDoc(querydoc)
        .then(resp => actproducto( {id:resp.id, ...resp.data()} ))

    }, [])

    return (
        <ItemDetail producto={producto}/>
    )
}