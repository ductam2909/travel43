import { Icon } from '@iconify/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
const host = process.env.NEXT_PUBLIC_APIAUTH
const limit = 8

export default function Tour () {
  const [tour, setTour] = useState({})
  const [page, setPage] = useState(0)

  const getTour = () => {
    const params = {
      skip: page,
      limit
    }
    axios.get(
      `${host}/api/tours/`,
      { params }
    ).then((response) => {
      setTour({
        data: response?.data?.tours || [],
        count: response?.data?.count || 0
      })
    })
      .catch(() => {
        setTour({
          data: [],
          count: 0
        })
      })
  }

  useEffect(() => {
    getTour()
  }, [page])

  const handlePageClick = (event) => {
    setPage(event.selected)
  }

  const renderTour = () => {
    return (
      (tour?.data || []).map((tour) => {
        return (
          <div className='tour__item' key={tour?._id}>
            <div className='tour__content'>
              <img src={tour?.avatar} className='tour__item--img' />
              <div className='tour__price'>
                <Icon
                  icon='icomoon-free:price-tags'
                  color='#fff' width='20' height='20'
                  className='icon__price'
                />{tour?.price}
              </div>
            </div>
            <div className='tour__item--info'>
              <p className='tour__address'>
                <Icon
                  icon='akar-icons:location'
                  className='tour__item--icon'
                  color='#09f' width='20' height='20'
                />{tour?.address}
              </p>
              <p className='tour__item--title'>{tour?.name}</p>
              <p className='tour__item--detail'>{tour?.detail}</p>
              <p className='tour__item--time'>
                <Icon
                  icon='ant-design:field-time-outlined'
                  color='#09f' width='25' height='25'
                  className='tour__item--icon'
                />2 ngày 1 đêm
              </p>
            </div>
          </div>
        )
      })
    )
  }

  return (
    <>
      <div className='tour__banner'>
        <div className='overlay' />
      </div>
      <div className='tour__title'>Top tours du lịch giá tốt</div>
      <div className='tour__detail'>Du lịch Đà Nẵng 2022 cùng Du lịch Viêt, chúng tôi luôn tổ chức Tour Du Lịch Đà Nẵng 2022, những Tour Đà Nẵng 2022 chất lượng, giá rẻ để phục vụ khách du lịch trên toàn quốc.</div>
      <div className='tour__container'>
        {renderTour()}
      </div>
      {tour.count > limit && (
        <ReactPaginate
          className='custom-paginate'
          breakLabel='...'
          nextLabel='>>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={limit}
          pageCount={Math.ceil(tour.count / limit)}
          previousLabel='<<'
          renderOnZeroPageCount={null}
        />
      )}
    </>
  )
}
