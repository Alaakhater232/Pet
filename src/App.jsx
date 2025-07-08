import { Fragment } from 'react'
import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import DoctorDashboard from './pages/doctordashboard/DoctorPage'
import HelloDoctor from './pages/doctordashboard/HelloDoctor'
import ManageUsers from './pages/admin-dashboard/ManageUsers'
import HelloAdmin from './pages/admin-dashboard/HelloAdmin'
import Overview from './pages/admin-dashboard/Overview'
import ManageClinics from './pages/admin-dashboard/ManageClinics'
import Reservations from './pages/admin-dashboard/Reservations'
import AdminDashboard from './pages/admin-dashboard/AdminPage'
import Manageclinics from './pages/doctordashboard/ManageClinics'
import Manageprofile from './pages/doctordashboard/ManageProfile'
import Manageclients from './pages/doctordashboard/ManageClients'
import Manageappointments from './pages/doctordashboard/ManageAppointments'

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/doctor-dashboard' element={<DoctorDashboard />}>
          <Route index element={<HelloDoctor />} />
           <Route path='manage-clients' element={<Manageclients />} />
           <Route path='manage-appointments' element={<Manageappointments />} />
           <Route path='manage-clinics' element={<Manageclinics />} />
           <Route path='manage-profile' element={<Manageprofile />} />
        </Route>
        <Route path='/admin-dashboard' element={<AdminDashboard />} >
          <Route index element={<HelloAdmin />} />
          <Route path='overview' element={<Overview />} />
          <Route path='manage-users' element={<ManageUsers />} />
          <Route path='manage-clinics' element={<ManageClinics />} />
          <Route path='manage-reservations' element={<Reservations />} />
        </Route>
      </Routes>
    </Fragment>
  )
}
export default App
