import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { ManagerLayout } from '../components'

import { CustomerRouter } from './Customer'

const Router: FC = () => {
  return (
    <Routes>
      {/* ToDo: Mudar rota default para orders */}
      <Route path="/" element={<Navigate to="/customers" />} />

      <Route element={<ManagerLayout />}>
        <Route path="customers/*" element={<CustomerRouter />} />

        <Route path="jobs" element={null}>
          <Route path="new" element={null} />
          <Route path="edit/:id" element={null} />
        </Route>

        <Route path="orders" element={null}>
          <Route path="new" element={null} />
          <Route path="edit/:id" element={null} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
