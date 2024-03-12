import React, { useEffect } from 'react'
import { IProduct } from '../interfaces/Product'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

type ProductAddProps = {
  onEdit: (data: IProduct) => void 
}

type FormValue = {
  id: number,
  name: string;
  price: number
}
const ProductEdit = ({onEdit}: ProductAddProps) => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState:{errors},
    reset
  } = useForm<FormValue>()
    useEffect(() => {
        ( async () => {
            const {data} = await axios.get(`http://localhost:3000/products/${id}`);
            reset(data)
        })()
    }, [id])
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValue> = (data) => {
    onEdit(data);
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

export default ProductEdit
