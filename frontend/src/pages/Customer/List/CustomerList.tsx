import { Table } from '@mantine/core'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { CustomerListItem } from './utils/customerList.types'

const customers: CustomerListItem[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'jhon@email.com',
    phone: '+5511999999999',
    isEnabled: true,
  },
  {
    id: '2',
    name: 'Alan Turing',
    email: 'turin@email.com',
    phone: '+5511999999999',
    isEnabled: true,
  },
]

const CustomerList: FC = () => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Outlet />
    </>
  )
}

export default CustomerList
