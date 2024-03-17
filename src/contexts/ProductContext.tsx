import React, { ReactNode, createContext, useEffect, useReducer, useState } from 'react'
import { IProduct } from '../interfaces/Product'
import axios from 'axios'

export const ProductContext = createContext({} as any)

const initialState = {
  value: [] as IProduct[]
}
const reducer = (state: {value: IProduct[]}, action) => {
  switch(action.type){
    case 'GET_PRODUCTS':
      return 
      
    default:
      return state
  }
}
const ProductContextProvider = ({children}: {children: React.ReactNode}) => {
    const [products, dispatch] = useReducer(reducer, initialState);
  
      // const onHandleRemove = async (id: number) => {
      //   try {
      //     const {data} = await axios.delete(`http://localhost:3000/products/${id}`)
      //     setProducts(products.filter((item) => item.id !== id))
      //   } catch (error) {
          
      //   }
      // }
      // const onHandleAdd = async (product: IProduct) => {
      //   try {
      //     const { data } = await axios.post('http://localhost:3000/products', product);
      //     setProducts([...products, data])
      //   } catch (error) {
          
      //   }
      // }
    
      // const onHandleEdit = async (product: IProduct) => {
      //   try {
      //     const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product);
      //     setProducts(products.map((item) => item.id === product.id ? product : item))
      //   } catch (error) {
          
      //   }
      // }
  return (
    <div>
      <ProductContext.Provider value={{products, dispatch}}>{children}</ProductContext.Provider>
    </div>
  )
}

export default ProductContextProvider
