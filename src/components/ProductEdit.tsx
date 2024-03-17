import React, { useContext, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { ProductContext } from '../contexts/ProductContext'



type FormValue = {
  id: number
  title: string;
  image: string,
  description: string,
  date: string
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
    <div className='w-[400px] min-h-[400px] m-auto p-2 mt-5 border-[1px] border-solid border-[#ccc]'>
     <h1 className='text-xl text-[blue] text-center font-bold'>Thêm Bài Viết</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label htmlFor="" className='block text-[blue]'>Title</label>
          <input className='w-[90%] border-[1px] border-solid border-[#ccc]' type="text" {...register('title', {required: true})} />
          {errors.title && <p className='text-[red]'>Title trống</p>}
        </div>
        <div className="my-2">
        <label htmlFor="" className='block text-[blue]'>Desc</label>
        <input className='w-[90%] border-[1px] border-solid border-[#ccc]' type="text" {...register('description', {required: true})} />
        {errors.description && <p className='text-[red]'>Desc trống</p>}
        </div>
        <div className="my-2">
        <label htmlFor="" className='block text-[blue]'>Image</label>
        <input className='w-[90%] border-[1px] border-solid border-[#ccc]' type="text" {...register('image', {required: true})} />
        {errors.image && <p className='text-[red]'>Image trống</p>}
        </div>
        <div className="my-2">
        <label htmlFor="" className='block text-[blue]'>Date</label>
        <input className='w-[90%] border-[1px] border-solid border-[#ccc]' type="text" {...register('date', {required: true})} />
        {errors.date && <p className='text-[red]'>Date trống</p>}
        </div>
        <button type='submit' className='p-2 bg-blue-500 text-white rounded my-4 hover:opacity-80'>Thêm</button>
      </form>
    </div>
  )
}

export default ProductAdd
