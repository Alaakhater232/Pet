import { Fragment, useState } from 'react'
import HeaderDash from '../../components/HeaderDash'
import Sidebar from '../../components/admindash/Sidebar'
import ContentAdminDash from '../../components/admindash/ContentAdminDash'

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <Fragment>
      <HeaderDash toggleSidebar={toggleSidebar}/>
      <div className='d-flex '>
        <Sidebar isOpen={isSidebarOpen}/>
        <div
          className="flex-1 transition-area"
          style={{
            marginLeft: isSidebarOpen ? '250px' : '100px',
            transition: 'margin-left 0.3s ease'
          }}>

          <ContentAdminDash />
        </div>
      </div>
    </Fragment>
  )
}
