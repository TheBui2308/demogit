import React, { useContext, useEffect } from 'react'
import { IProduct } from '../interfaces/Product'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { ProductContext } from '../contexts/ProductContext'



type FormValue = {
  name: string;
  price: number
}
const ProductAdd = () => {
  const {onHandleEdit} = useContext(ProductContext)
  const {id} = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValue>()

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`)
      reset(data)
    })()
  }, [id])
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    onHandleEdit(data);
    navigate('/products')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', {required: true})} />
        {errors.name && <span>Tên trống</span>}
        <input type="number" {...register('price', {required: true})} />
        {errors.price && <span>Gía trống</span>}
        <button type='submit'>Thêm</button>
      </form>
    </div>
  )
}

export default ProductAdd
