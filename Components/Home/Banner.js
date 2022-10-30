import React from 'react'
import Link from 'next/link'
export default function Banner () {
  return (
    <div className='banner'>
      <div className='overlay'>
        <div className='banner__info'>
          <p className='banner__text__title'>Website du lịch Đà Nẵng</p>
          <p className='banner__text__content'>Nhiều ưu đãi và tiết kiệm hơn tại web du lịch Đà Nẵng</p>
          <div className='mt-4'>
            <Link href='/hotel'><a className='booking__link'>Booking Hotel</a></Link>
            <Link href='/tour'><a className='booking__link'>Booking tour</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
