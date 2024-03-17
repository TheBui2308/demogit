import React, { useContext, useEffect } from 'react'
import { IProduct } from '../interfaces/Product'
import { Link } from 'react-router-dom';
import {ProductContext} from '../contexts/ProductContext';
import axios from 'axios';


const ProductList = () => {
      const { products, onHandleRemove } = useContext(ProductContext);
    return (
        <div>
            <button className='p-2 bg-blue-500 text-white rounded my-4 hover:opacity-80'><Link to='/products/add'>Thêm bài viết</Link></button>
           <table>
            <thead>
                <tr>
                    <th className='p-2 border-[1px] border-solid border-[#ccc]'>ID</th>
                    <th className='p-2 border-[1px] border-solid border-[#ccc]'>Title</th>
                    <th className='p-2 border-[1px] border-solid border-[#ccc]'>Desc</th>
                    <th className='p-2 border-[1px] border-solid border-[#ccc]'>Image</th>
                    <th className='p-2 border-[1px] border-solid border-[#ccc]'>Date</th>
                    <th className='p-2 border-[1px] border-solid border-[#ccc]'>Action</th>
                </tr>
            </thead>
            <tbody>
                {products && products.map((item: IProduct, index:number) => (
                    <tr key={index}>
                        <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{item.id}</td>
                        <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{item.title}</td>
                        <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{item.description}</td>
                        <td className='p-2 border-[1px] border-solid border-[#ccc] text-center w-[200px]'><img src={item.image} alt="" /></td>
                        <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{item.date}</td>
                        <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>
                            <button className='p-2 bg-red-500 text-white rounded hover:opacity-70'>Remove</button>
                            <button className='p-2 bg-yellow-500 text-white rounded hover:opacity-70'><Link to={`/products/edit/${item.id}`}>Edit</Link></button>
                        </td>
                    </tr>
                ))}
            </tbody>
           </table>
        </div>
    );
};


export default ProductList
