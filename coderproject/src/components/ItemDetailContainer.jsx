import { useEffect, useState } from "react";


import data from "../data/products.json";


export const ItemDetailContainer = () => {
    const [products, setProducts]= useState([]);

    useEffect (()=> {
        const get = new Promise((resolve, reject) => {
         setTimeout(() => resolve(data), 2000);
        })

        get.then((data) => {
            setProducts(data[0]);
        })
    }, []);

    if (!product) return <div>Loading...</div>;

} 