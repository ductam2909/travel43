import React, { useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'universal-cookie'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'

export default function Layout (props) {
  const cookies = new Cookies()
  const router = useRouter()
  const tokenAdmin = cookies.get('tokenAdmin')
  const logout = () => {
    cookies.remove('tokenAdmin')
    router.push('/login')
  }

  useEffect(() => {
    if (!tokenAdmin) {
      router.push('/login')
    }
  }, [tokenAdmin])

  return (
    <div className='dashboard_container'>
      <div className='layout-admin__sidebar'>
        <div className='sidebar__brand'>
          <p className='sidebar__brand-text'>Admin</p>
        </div>
        <ul>
          <li className='layout-admin__sidebar-item'>
            <Icon
              className='nav-item-icon'
              icon='ant-design:dashboard-twotone'
              inline
            />
            Trang chủ
          </li>
          <li className='layout-admin__sidebar-item'>
            <Icon
              className='nav-item-icon'
              icon='tabler:brand-booking'
              inline
            />
            <Link href='/admin/tour'><a className='sidebar-link'>Tour</a></Link>
          </li>
          <li className='layout-admin__sidebar-item nav-item-bottom'>
            <Icon
              className='nav-item-icon'
              icon='la:hotel'
              inline
            />
            <Link href='/admin/hotel'><a className='sidebar-link'>Khách sạn</a></Link>
          </li>
        </ul>
      </div>
      <div className='container-main'>
        <div className='dashboard__header'>
          <button className='btn-menu__dashboard' />
          <Link href='/dashboard'><a className='nav-link'>Trang chủ</a></Link>
          <Link href='/setting'><a className='nav-link'>cài đặt</a></Link>
          <span className='nav-link' onClick={logout}>Đăng xuất</span>
        </div>
        <div className='dashboard__header-path'>Trang chủ / {props.breadcrumb} </div>
        {props.children}
      </div>
    </div>
  )
}
