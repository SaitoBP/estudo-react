import { FC, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { SuspenseLoading } from '../../components'

const CustomerForm = lazy(() => import('./Form/CustomerForm'))
const CustomerList = lazy(() => import('./List/CustomerList'))

const CustomerRouter: FC = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <SuspenseLoading>
            <CustomerList />
          </SuspenseLoading>
        }
      >
        <Route
          path="new"
          element={
            <SuspenseLoading>
              <CustomerForm />
            </SuspenseLoading>
          }
        />

        <Route
          path="edit/:id"
          element={
            <SuspenseLoading>
              <CustomerForm />
            </SuspenseLoading>
          }
        />
      </Route>
    </Routes>
  )
}

export default CustomerRouter
