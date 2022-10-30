import { Icon } from '@iconify/react'
import React from 'react'

export default function Plan () {
  return (
    <div className='plan'>
      <p className='plan__title'>Cách lập kế hoạch chuyến đi của bạn</p>
      <div className='plan__container'>
        <div className='plan__item'>
          <div className='plan__icon'>
            <Icon icon='bi:calendar-heart-fill' color='#09f' width='20' height='20' />
          </div>
          <p className='plan__detail'>Thời điểm du lịch</p>
          <p className='plan__descripton'>Đối với việc lên kế hoạch đi du lịch thi thời điểm du lịch luôn là yếu tố được cân nhắc hàng đầu.</p>
        </div>
        <div className='plan__item'>
          <div className='plan__icon'>
            <Icon icon='zondicons:travel-bus' color='#09f' width='20' height='20' />
          </div>
          <p className='plan__detail'>Đặt tours du lịch</p>
          <p className='plan__descripton'>Tours chọn lọc chất lượng. Du lịch theo cách riêng Trải nghiệm du lịch trọn vẹn</p>
        </div>
        <div className='plan__item'>
          <div className='plan__icon'>
            <Icon icon='fontisto:hotel-alt' color='#09f' width='20' height='20' />
          </div>
          <p className='plan__detail'>Đặt phòng khách sạn</p>
          <p className='plan__descripton'>Nhanh, Đơn giản, Dễ Sử dụng. Đặt phòng trực tuyến Dễ và An toàn.</p>
        </div>
      </div>
    </div>
  )
}
