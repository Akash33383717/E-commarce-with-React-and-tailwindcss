
import Nav from '../component/Nav'
import { Outlet } from 'react-router'
import Footer from '../component/Footer'
import { Suspense } from 'react'
const RouterLayout = () => {
  return (
    <div className='p-2 md:p-0'>
      <Suspense fallback = {<div>loading</div>}>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
      </Suspense>
    </div>
  )
}

export default RouterLayout
