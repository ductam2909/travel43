import { Icon } from '@iconify/react'
import React from 'react'

export default function Hotel () {
  return (
    <div className='hotel'>
      <p className='tour__title'>Top khách sạn giá tốt</p>
      <p className='tour__detail'>Gần biển, view đẹp nhất, nội thất cao cấp, hiện đại, sang trọng, đa dạng tiện ích. Top những khách sạn Đà Nẵng 2022 giá rẻ chưa từng có 2022 . Ưu đãi khi đặt trong hôm nay</p>
      <div className='hotel__content'>
        <div className='hotel__item'>
          <img className='hotel__item--img' src='assets/image/sydney.jpg' />
          <div className='hotel__info'>
            <p className='hotel__item--title'>khách sạn Le House Boutique</p>
            <div className='hotel__review'>
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
            </div>
            <p className='hotel__item--detail'>Hành trình vạn dặm bắt đầu từ một bước chân. Bước chân đầu tiên khi bạn đến thành phố biển Đà Nẵng thì hãy để Sydney Danang Hotel đồng hành cùng bạn nhé!</p>
            <div className='hotel__price'>
              <Icon
                icon='icomoon-free:price-tags'
                color='#09f' width='15' height='15'
                className='icon__price'
              />300k - 2500k
            </div>
            <div className='hotel__item--time'>
              <Icon
                icon='ant-design:field-time-outlined'
                color='#09f' width='20' height='20'
                className='tour__item--icon'
              />2 ngày 1 đêm
            </div>
          </div>
        </div>
        <div className='hotel__item'>
          <img className='hotel__item--img' src='assets/image/robinhotel.jpg' />
          <div className='hotel__info'>
            <p className='hotel__item--title'>Khách sạn Robin</p>
            <div className='hotel__review'>
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
            </div>
            <p className='hotel__item--detail'>Hành trình vạn dặm bắt đầu từ một bước chân. Bước chân đầu tiên khi bạn đến thành phố biển Đà Nẵng thì hãy để Robin Hotel đồng hành cùng bạn nhé!</p>
            <div className='hotel__price'>
              <Icon
                icon='icomoon-free:price-tags'
                color='#09f' width='15' height='15'
                className='icon__price'
              />300k - 2500k
            </div>
            <div className='hotel__item--time'>
              <Icon
                icon='ant-design:field-time-outlined'
                color='#09f' width='20' height='20'
                className='tour__item--icon'
              />2 ngày 1 đêm
            </div>
          </div>
        </div>
        <div className='hotel__item'>
          <img className='hotel__item--img' src='assets/image/sydney.jpg' />
          <div className='hotel__info'>
            <p className='hotel__item--title'>Khách sạn Park Regis Cocobay</p>
            <div className='hotel__review'>
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
            </div>
            <p className='hotel__item--detail'>Được mô tả như “làn gió mới” của Cocobay, khách sạn Park Regis Cocobay mang đến góc nhìn tuyệt đẹp về các bãi biển phía nam bao la, khu du lịch Bà Nà Hills và toàn cảnh đô thị sầm uất.</p>
            <div className='hotel__price'>
              <Icon
                icon='icomoon-free:price-tags'
                color='#09f' width='15' height='15'
                className='icon__price'
              />900k
            </div>
            <div className='hotel__item--time'>
              <Icon
                icon='ant-design:field-time-outlined'
                color='#09f' width='20' height='20'
                className='tour__item--icon'
              />2 ngày 1 đêm
            </div>
          </div>
        </div>
        <div className='hotel__item'>
          <img className='hotel__item--img' src='assets/image/novotel.jpg' />
          <div className='hotel__info'>
            <p className='hotel__item--title'>Khách sạn novotel</p>
            <div className='hotel__review'>
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
              <Icon icon='ant-design:star-filled' color='#09f' width='15' height='15' />
            </div>
            <p className='hotel__item--detail'>Novotel Danang Premier Han River là khách sạn tiêu chuẩn 5 sao có gần 10 năm hoạt động tại thành phố Đà Nẵng. “Toà tháp rực rỡ sắc màu” ngay cạnh sông Hàn này sẽ mang đến cho bạn cái nhìn bao quát về một Đà Nẵng vừa sôi động vừa trầm tĩnh.</p>
            <div className='hotel__price'>
              <Icon
                icon='icomoon-free:price-tags'
                color='#09f' width='15' height='15'
                className='icon__price'
              /> 1700k
            </div>
            <div className='hotel__item--time'>
              <Icon
                icon='ant-design:field-time-outlined'
                color='#09f' width='20' height='20'
                className='tour__item--icon'
              />2 ngày 1 đêm
            </div>
          </div>
        </div>
      </div>
      <div className='tour__btn'>Hiển thị tất cả</div>
    </div>
  )
}
