import React, { useContext, useEffect } from 'react'
import { IProduct } from '../interfaces/Product'
import { Link } from 'react-router-dom';
import {ProductContext} from '../contexts/ProductContext';
import axios from 'axios';


const ProductList = () => {
    const { products, dispatch } = useContext(ProductContext);
    console.log(products)
    useEffect(() => {
        (async () => {
          try {
            const { data } = await axios.get("http://localhost:3000/products");
            dispatch({type: 'GET_PRODUCTS', payload: data});
          } catch (error) {}
        })()
      }, [])
    
    return (
        <div>
            {products?.value?.map((item: IProduct, index: number) => (
                <div key={index}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    {/* <button onClick={() => onHandleRemove(item.id!)}>Remove</button> */}
                    <Link to={`/products/edit/${item.id}`}>Edit</Link>
                </div>
            ))}
        </div>
    );
};


export default ProductList
