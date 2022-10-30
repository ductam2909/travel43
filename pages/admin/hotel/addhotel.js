import React, { useState } from 'react'
import Layout from '../../../Components/Hotels/Layout'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import ReactLoading from 'react-loading'
const host = process.env.NEXT_PUBLIC_APIAUTH

export default function AddHotel () {
  const [hotel, setHotel] = useState({
    nameHotel: '',
    detail: '',
    avatar: '',
    description: ''
  })
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const postHotel = () => {
    setLoading(true)
    axios.post(`${host}/api/hotels`, {
      ...hotel
    })
      .then((response) => {
        toast.success(response?.data?.msg || '')
        router.push('/admin/hotel')
      })
      .catch((error) => {
        toast.error(error)
      })
  }

  return (
    <Layout breadcrumb='Thêm khách sạn'>
      <div className='edithotel'>
        <div className='hotel__title'>Thêm mới khách sạn</div>
        <p className='hotel__detail'>Tên khách sạn</p>
        <input
          className='input__name'
          placeholder='Nhập tên khách sạn'
          name='name'
          type='text'
          onChange={event => setHotel((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
        />
        <p className='hotel__detail'>Trích dẫn</p>
        <input
          className='input__name'
          name='detail'
          placeholder='Nhập trích dẫn'
          type='text'
          onChange={event => setHotel((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
        />
        <p className='hotel__detail'>Nội dung</p>
        <textarea
          className='input__description'
          placeholder='Nhập nội dung'
          type='text'
          onChange={event => setHotel((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
        />
        <p className='hotel__detail'>Hình ảnh</p>
        <input
          className='input__name'
          placeholder='Nhập link ảnh'
          name='avatar'
          type='text'
          onChange={event => setHotel((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
        />
        <button
          type='submit'
          form='nameform'
          value='Submit'
          className='btn-submit'
          disabled={loading}
          onClick={postHotel}
        >
          {loading && <ReactLoading type='bars' color='#04AA6D' className='loading' />} Thêm
        </button>
        <button type='submit' form='nameform' value='Submit' className='btn-cancel' onClick={() => { router.push('/admin/hotel') }}>
          Thoát
        </button>
      </div>
    </Layout>
  )
}
