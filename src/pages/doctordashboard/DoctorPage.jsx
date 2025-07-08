import { Fragment, useState } from 'react'
import Sidebar from '../../components/doctordash/sidebar-doctor/Sidebar'
import HeaderDash from '../../components/HeaderDash'
import ContentDoctorDash from '../../components/doctordash/content-doctor-dash/ContentDoctorDash'
export default function DoctorDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <Fragment>
      <HeaderDash toggleSidebar={toggleSidebar} />
      <div className='d-flex '>
        <Sidebar isOpen={isSidebarOpen} />

        <div
          className="flex-1 transition-area"
          style={{
            marginLeft: isSidebarOpen ? '250px' : '100px',
            transition: 'margin-left 0.3s ease'
          }}
        >

        <ContentDoctorDash />
        </div>
      </div>
    </Fragment>
  )
}
