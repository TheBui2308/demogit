import React from 'react'
import { IProduct } from '../interfaces/Product'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type ProductAddProps = {
  onAdd: (data: IProduct) => void 
}

type FormValue = {
  id: number,
  name: string;
  price: number
}
const ProductAdd = ({onAdd}: ProductAddProps) => {
  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm<FormValue>()

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValue> = (data) => {
    onAdd(data);
    navigate("/products");
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name", {required: true})} />
        {errors.name && <span>Tên trống</span>}
        <input type="number" {...register("price", {required: true})} />
        {errors.price && <span>Price trống</span>}
        <button type='submit'>Thêm</button>
      </form>
    </div>
  )
}

export default ProductAdd
