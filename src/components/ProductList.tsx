import React, { useContext } from 'react'
import { IProduct } from '../interfaces/Product'
import { Link } from 'react-router-dom';
import {ProductContext} from '../contexts/ProductContext';


const ProductList = () => {
    const { products, onHandleRemove } = useContext(ProductContext);
    return (
        <div>
            {products.map((item: IProduct, index: number) => (
                <div key={index}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <button onClick={() => onHandleRemove(item.id!)}>Remove</button>
                    <Link to={`/products/edit/${item.id}`}>Edit</Link>
                </div>
            ))}
        </div>
    );
};


export default ProductList
