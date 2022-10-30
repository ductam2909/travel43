import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
function Next (props) {
  return (
    <button
      className='btnnext'
      onClick={props.onClick}
    >
      <img src='/assets/img/btn-next.jpg' alt='' />
    </button>
  )
}
function Prev (props) {
  return (
    <button
      className='btnpre'
      onClick={props.onClick}
    >
      <img src='/assets/img/btn-pre.jpg' alt='' />
    </button>
  )
}

export default function Slide () {
  const dataArtist = [
    {
      id: '1',
      imgItemLeft: '/assets/img/content4a1.png',
      imgItemRight1: '/assets/img/art2.png',
      imgItemRight2: '/assets/img/art3.png',
      imgUser: '/assets/img/Thumb.png',
      nameUser: 'Mike Page'
    },
    {
      id: '2',
      imgItemLeft: '/assets/img/art4.png',
      imgItemRight1: '/assets/img/art5.png',
      imgItemRight2: '/assets/img/art7.png',
      imgUser: '/assets/img/Thumb2.png',
      nameUser: 'Jane Foster'
    },
    {
      id: '3',
      imgItemLeft: '/assets/img/art8.png',
      imgItemRight1: '/assets/img/art9.png',
      imgItemRight2: '/assets/img/art10.png',
      imgUser: '/assets/img/Thumb3.png',
      nameUser: 'Brendon Fraser'
    }
  ]
  const dataDeveloper = [
    {
      imgDeveloper: '/assets/img/img1.png',
      detailDeveloper: 'ethel holmes / nodejs, java, reactjs'
    },
    {
      imgDeveloper: '/assets/img/img2.png',
      detailDeveloper: 'darren shaw / reactjs, mongodb'
    },
    {
      imgDeveloper: '/assets/img/img3.png',
      detailDeveloper: 'andrew toms / metaplex, candy machine, rea...'
    }
  ]

  const dataManager = [
    {
      imgManager: '/assets/img/img4.png',
      detailManager: 'andrew / community manager'
    },
    {
      imgManager: '/assets/img/img5.png',
      detailManager: 'rock captain / mod'
    },
    {
      imgManager: '/assets/img/img6.png',
      detailManager: 'hank42 / community manager, mod'
    }
  ]

  const listartists = dataArtist.map((item, index) => (
    <div key={item.id}>
      <div className='slide__artists__iteam'>
        <div className='slide__artists__iteam-left'>
          <img src={item.imgItemLeft} alt='' />
        </div>
        <div className='slide__artists__iteam-right'>
          <img src={item.imgItemRight1} alt='' />
          <img src={item.imgItemRight2} alt='' />
        </div>
      </div>
      <div className='user'>
        <img src={item.imgUser} alt='' />
        <p>{item.nameUser}</p>
      </div>
    </div>
  ))

  const listdeveloper = dataDeveloper.map((item, index) => (
    <div key={item.id}>
      <div className='slide__develop__iteam'>
        <img className='develop__iteam_img' src={item.imgDeveloper} alt='' />
        <p className='develop__iteam_detail'>{item.detailDeveloper}</p>
      </div>
    </div>
  ))

  const listmanager = dataManager.map((item, index) => (
    <div key={item.id}>
      <div className='slide__develop__iteam'>
        <img className='develop__iteam_img' src={item.imgManager} alt='' />
        <p className='develop__iteam_detail'>{item.detailManager}</p>
      </div>
    </div>
  ))
  return (
    <div>
      <div className='slide__artists'>
        <p className='text_description-artists'>i have been an illustrator for over 15 years, but only recently been designing NFT’s. previously design manager at apple but now i am designing for th...</p>
        <p className='p-feature p-feature2'>Featured developers</p>
        <Slider
          nextArrow={<Next type='next' />}
          prevArrow={<Prev type='prev' />}
          dots
          slidesToShow={1}
          slidesToScroll={1}
          variableWidth
        >
          {listartists}
        </Slider>
      </div>
      <div className='slide__develop'>
        <p id='text_description-develop'>my skills range from developing more simple user interfaces to full scale back-end solutions for world renowned clients globally. I have worked for...</p>
        <p className='p-feature'>Featured developers</p>
        <Slider
          nextArrow={<Next type='next' />}
          prevArrow={<Prev type='prev' />}
          dots
          slidesToShow={1}
          slidesToScroll={1}
          variableWidth
        >
          {listdeveloper}
        </Slider>
      </div>

      <div className='slide__manager'>
        <p className='text_description-manager'>when it comes to keeping a community in order I have the perfect skills. i have worked with many top projects and no how to handle both hype and normal p...</p>
        <p className='p-feature'>featured community managers and mods</p>
        <Slider
          nextArrow={<Next type='next' />}
          prevArrow={<Prev type='prev' />}
          dots
          slidesToShow={1}
          slidesToScroll={1}
          variableWidth
        >
          {listmanager}
        </Slider>
      </div>
    </div>
  )
}
