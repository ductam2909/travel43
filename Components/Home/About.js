import { Icon } from '@iconify/react'
import React from 'react'

export default function About () {
  return (
    <>
      <div className='about'>
        <div className='about__info'>
          <p className='about__title'>Chúng tôi sẽ đưa bạn đến những điểm đến thú vị , Hãy cùng chúng tôi khám phá!</p>
          <p className='about__description'>Du Lịch Đà Nẵng nên đi địa điểm nào đẹp, nên đi vào tháng nào, nghỉ ở khách sạn nào… là những câu hỏi mà du khách trong và ngoài nước đều muốn tìm hiểu trước khi đi du lịch Đà Nẵng. Nếu bạn đang có kế hoạch khám phá thì bài viết kinh nghiệm du lịch Đà Nẵng này của Sơn Trà Travel được viết theo kinh nghiệm du lịch Đà Nẵng của những bạn đã có trải nghiệm tại Đà Nẵng sẽ giúp bạn tiết kiệm được thời gian, tìm được những điểm vui chơi đẹp, quán ăn ngon,… và cả những thông tin mà chỉ có người bản địa mới biết.</p>
        </div>
        <div className='about__img' />
      </div>
      <div className='feedback'>
        <div className='feedback__column'>
          <div className='feedback__item'>
            <Icon icon='akar-icons:face-happy' color='#09f' width='40' height='40' />
            <p className='feedback__number'>1000+</p>
            <p className='feedback__detail'>Đánh giá</p>
          </div>
          <div className='feedback__item'>
            <Icon icon='zondicons:travel-train' color='#09f' width='40' height='40' />
            <p className='feedback__number'>200+</p>
            <p className='feedback__detail'>Tours</p>
          </div>
        </div>
        <div className='feedback__column'>
          <div className='feedback__item'>
            <Icon icon='fluent-emoji-high-contrast:hotel' color='#09f' width='40' height='40' />
            <p className='feedback__number'>1000+</p>
            <p className='feedback__detail'>Hotel</p>
          </div>
          <div className='feedback__item'>
            <Icon icon='fluent:people-community-add-20-filled' color='#09f' width='40' height='40' />
            <p className='feedback__number'>2000+</p>
            <p className='feedback__detail'>Người sử dụng</p>
          </div>
        </div>
      </div>
    </>
  )
}
