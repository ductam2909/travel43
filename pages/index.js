import Banner from '../components/Banner/Banner'
import Post from '../components/Content/Post'
import Procedure from '../components/Content/Procedure'
import Process from '../components/Content/Process'
import Slide from '../components/Content/Slide'
import Header from '../components/Header/Header'

export default function Booking () {
  return (
    <div>
      <div className='container'>
        <Header />
        <div className='content'>
          <Banner />
          <Process />
          <Slide />
          <Procedure />
        </div>
      </div>
      <Post />
    </div>

  )
}
