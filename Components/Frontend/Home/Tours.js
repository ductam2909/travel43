import { Icon } from '@iconify/react'
import React from 'react'

export default function Tour () {
  return (
    <div className='tour'>
      <div className='tour__title'>Top tours du lịch giá tốt</div>
      <div className='tour__detail'>Du lịch Đà Nẵng 2022 cùng Du lịch Viêt, chúng tôi luôn tổ chức Tour Du Lịch Đà Nẵng 2022, những Tour Đà Nẵng 2022 chất lượng, giá rẻ để phục vụ khách du lịch trên toàn quốc.</div>
      <div className='tour__container'>
        <div className='tour__item'>
          <div className='tour__content'>
            <img src='assets/image/duthuyen.jpg' className='tour__item--img' />
            <div className='tour__price'>
              <Icon
                icon='icomoon-free:price-tags'
                color='#fff' width='20' height='20'
                className='icon__price'
              />999K
            </div>
          </div>
          <div className='tour__item--info'>
            <p className='tour__address'>
              <Icon
                icon='akar-icons:location'
                className='tour__item--icon'
                color='#09f' width='20' height='20'
              />Sông hàn
            </p>
            <p className='tour__item--title'>du thuyền sông hàn</p>
            <p className='tour__item--detail'>Một ngày ở đà nẵng - Đi đâu - chơi gì - ăn gì  </p>
            <p className='tour__item--time'>
              <Icon
                icon='ant-design:field-time-outlined'
                color='#09f' width='25' height='25'
                className='tour__item--icon'
              />2 ngày 1 đêm
            </p>
          </div>
        </div>
        <div className='tour__item'>
          <div className='tour__content'>
            <img src='assets/image/nuithantai.jpg' className='tour__item--img' />
            <div className='tour__price'>
              <Icon
                icon='icomoon-free:price-tags'
                color='#fff' width='20' height='20'
                className='icon__price'
              />999K
            </div>
          </div>
          <div className='tour__item--info'>
            <p className='tour__address'>
              <Icon
                icon='akar-icons:location'
                className='tour__item--icon'
                color='#09f' width='20' height='20'
              />Huyện hòa vang
            </p>
            <p className='tour__item--title'>Núi thần tài</p>
            <p className='tour__item--detail'>Tour núi Thần Tài 1 ngày giá rẻ, khởi hành hàng ngày từ Đà Nẵng, đón tại khách sạn Đà Nẵng. Quý khách khám phá công viên núi Thần Tài với nhiều trò chơi nước và ngâm tắm nước nóng tự nhiên.  </p>
            <div className='tour__item--time'>
              <Icon
                icon='ant-design:field-time-outlined'
                color='#09f' width='25' height='25'
                className='tour__item--icon'
              />2 ngày 1 đêm
            </div>
          </div>
        </div>
        <div className='tour__item'>
          <div className='tour__content'>
            <img src='assets/image/culaocham.jpg' className='tour__item--img' />
            <div className='tour__price'>
              <Icon
                icon='icomoon-free:price-tags'
                color='#fff' width='20' height='20'
                className='icon__price'
              />999K
            </div>
          </div>
          <div className='tour__item--info'>
            <p className='tour__address'>
              <Icon
                icon='akar-icons:location'
                className='tour__item--icon'
                color='#09f' width='20' height='20'
              />Sơn trà
            </p>
            <p className='tour__item--title'>Cù lao chàm</p>
            <p className='tour__item--detail'>Tour Cù Lao Chàm giá rẻ – Cù Lao Chàm thuộc Tân Hiệp, Hội An, Quảng Nam, cách biển Cửa Đại 15 km. Nơi đây gồm 8 đảo là Hòn Lao, Dài, Mồ, Khô Mẹ, Khô Con, Lá, Tai, Ông. Nhiều du khách sau khi thăm thú phổ cổ. </p>
            <p className='tour__item--time'>
              <Icon
                icon='ant-design:field-time-outlined'
                color='#09f' width='25' height='25'
                className='tour__item--icon'
              />2 ngày 1 đêm
            </p>
          </div>
        </div>
        <div className='tour__item'>
          <div className='tour__content'>
            <img src='assets/image/bana.png' alt='img tour' className='tour__item--img' />
            <div className='tour__price'>
              <Icon
                icon='icomoon-free:price-tags'
                color='#fff' width='20' height='20'
                className='icon__price'
              />999K
            </div>
          </div>
          <div className='tour__item--info'>
            <p className='tour__address'>
              <Icon
                icon='akar-icons:location'
                className='tour__item--icon'
                color='#09f' width='20' height='20'
              />Huyện hòa vang
            </p>
            <p className='tour__item--title'>bà nà hills</p>
            <p className='tour__item--detail'>Một ngày ở bà nà hills - Đi đâu - chơi gì - ăn gì  </p>
            <p className='tour__item--time'>
              <Icon
                icon='ant-design:field-time-outlined'
                color='#09f' width='25' height='25'
                className='tour__item--icon'
              />2 ngày 1 đêm
            </p>
          </div>
        </div>
      </div>
      <div className='tour__btn'>Hiển thị tất cả</div>
    </div>
  )
}
