import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext'



type FormValue = {
  id: number
  title: string;
  image: string,
  description: string,
  date: string
}
const ProductAdd = () => {
  const {onHandleAdd} = useContext(ProductContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValue>()

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    onHandleAdd(data);
    navigate('/products')
  }
  return (
    <div className='w-[400px] min-h-[400px] m-auto p-2 mt-5 border-[1px] border-solid border-[#ccc] rounded shadow-lg'>
      <h1 className='text-xl text-[black] text-center font-bold'>Thêm Bài Viết</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label htmlFor="" className='block text-[black]'>Title</label>
          <input className='w-[95%] h-8 border-[1px] border-solid border-[#ccc]' type="text" {...register('title', {required: true})} />
          {errors.title && <p className='text-[red]'>Title trống</p>}
        </div>
        <div className="my-2">
          <label htmlFor="" className='block text-[black]'>Desc</label>
          <input className='w-[95%] h-8 border-[1px] border-solid border-[#ccc]' type="text" {...register('description', {required: true})} />
          {errors.description && <p className='text-[red]'>Desc trống</p>}
        </div>
        <div className="my-2">
          <label htmlFor="" className='block text-[black]'>Image</label>
          <input className='w-[95%] h-8 border-[1px] border-solid border-[#ccc]' type="text" {...register('image', {required: true})} />
          {errors.image && <p className='text-[red]'>Image trống</p>}
        </div>
        <div className="my-2">
          <label htmlFor="" className='block text-[black]'>Date</label>
          <input className='w-[95%] h-8 border-[1px] border-solid border-[#ccc]' type="text" {...register('date', {required: true})} />
          {errors.date && <p className='text-[red]'>Date trống</p>}
        </div>
          <button type='submit' className='p-2 bg-blue-500 text-white rounded my-4 hover:opacity-80'>Thêm</button>
      </form>
    </div>
  )
}

export default ProductAdd
