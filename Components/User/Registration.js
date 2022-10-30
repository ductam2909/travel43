import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import ReactLoading from 'react-loading'
const host = process.env.NEXT_PUBLIC_APIAUTH

export default function Registration () {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  })

  const postUser = () => {
    setLoading(true)
    axios.post(`${host}/api/user/signup-user`, {
      ...user
    })
      .then((response) => {
        toast.success(response?.data?.msg || '')
        router.push('/user/login')
      })
      .catch((error) => {
        error?.response?.data?.errors.forEach(item => {
          toast.error(item)
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className='registration__container'>
      <div className='registration__heading'><h2>Đăng kí tài khoản</h2></div>
      <div className='registration__form'>
        <div className='form__info'>
          <input
            type='text'
            className='form__input'
            name='name'
            placeholder='Nhập tên tài khoản'
            onChange={event => setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
          />
          <input
            type='text'
            className='form__input'
            name='email'
            placeholder='Nhập email'
            onChange={event => setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
          />
          <input
            type='text'
            className='form__input'
            name='password'
            placeholder='Nhập mật khẩu'
            onChange={event => setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
          />
          <input
            type='text'
            className='form__input'
            name='phone'
            placeholder='Nhập số điện thoại'
            onChange={event => setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
          />
          <input
            type='text'
            className='form__input'
            name='address'
            placeholder='Nhập địa chỉ'
            onChange={event => setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }))}
          />
          <div className='form__submit'>
            <button
              className='registration__btn'
              disabled={loading}
              onClick={postUser}
            >
              {loading && <ReactLoading type='bars' color='#04AA6D' className='loading' />}Đăng kí
            </button>
          </div>
          <p className='registration__link'>Đã có tài khoản ?
            <span className='login-page__link' onClick={() => { router.push('/user/login') }}> Đăng nhập</span>
          </p>
        </div>
      </div>
    </div>
  )
}
