import { Icon } from '@iconify/react'
import Link from 'next/link'
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
            <li>
              <Link href='/home'>
                <p>Trang chủ</p>
              </Link>
            </li>
            <li>
              <Link href='/tour'>
                <p>Tour</p>
              </Link>
            </li>
            <li>
              <Link href='/hotel'>
                <p>Khách sạn</p>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <p>Liên hệ</p>
              </Link>
            </li>
            <li className='booking'>
              <Link href='/tour'>
                <p className='booking__text'>Đặt Ngay</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
