import React, { useContext, useEffect } from 'react'
import { IProduct } from '../interfaces/Product'
import { Link } from 'react-router-dom';
import {ProductContext} from '../contexts/ProductContext';
import { faCartShopping, faLink, fas } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProductList = () => {
      const { products, onHandleRemove } = useContext(ProductContext);
    return (
        <div className="grid grid-cols-[250px,1fr] gap-4">
            <div className="bg-red-500">
                <nav>
                    <ul>
                        <li className='p-2 m-2 text-[#fff] text-[18px] hover:text-yellow-200'>
                            <FontAwesomeIcon icon={fas.faHouse} />
                            <Link to='' className='ml-2'>Trang chủ</Link>
                        </li>
                        <li className='p-2 m-2 text-[#fff] text-[18px] hover:text-yellow-200'>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <Link to='' className='ml-2'>Sản phẩm</Link>
                        </li>
                        <li className='p-2 m-2 text-[#fff] text-[18px] hover:text-yellow-200'>
                            <FontAwesomeIcon icon={faLink} />
                            <Link to='/' className='ml-2'>Trở lại website</Link>
                        </li>
                    </ul>
                </nav>
            </div>
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
                    {products && products.slice(0).reverse().map((item: IProduct, index:number) => (
                        <tr key={index}>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{item.id}</td>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{item.title}</td>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{item.description}</td>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center w-[200px]'><img src={item.image} alt="" className='rounded-[100%]'/></td>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{item.date}</td>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>
                                <button className='p-2 bg-red-500 text-white rounded hover:opacity-70' onClick={() => onHandleRemove(item.id)}>Remove</button>
                                <button className='p-2 bg-yellow-500 text-white rounded hover:opacity-70'><Link to={`/products/edit/${item.id}`}>Edit</Link></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};


export default ProductList
