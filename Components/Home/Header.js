import { Icon } from '@iconify/react'
import React, { useState } from 'react'

export default function Header () {
  const [display, setDisplay] = useState(false)
  const handleClick = event => {
    setDisplay(current => !current)
  }

  return (
    <div className='header__container'>
      <div className='header'>
        <p className='header__title'>du lịch đà nẵng</p>
        <div className='toogle' onClick={handleClick}>
          <Icon icon='ant-design:menu-outlined' color='#99c' width='40' height='40' />
        </div>
      </div>
      <div className='navbar'>
        <div className={display ? '' : 'show-navbar'}>
          <ul className='navbar__info'>
            <li>Trang chủ</li>
            <li>Tour</li>
            <li>Khách sạn</li>
            <li>Liên hệ</li>
            <li className='booking'><p className='booking__text'>Đặt Ngay</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
