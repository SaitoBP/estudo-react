import { AppShell, Header, Navbar } from '@mantine/core'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const ManagerLayout: FC = () => {
  return (
    <AppShell
      fixed
      padding="md"
      header={
        <Header height={60} p="xs">
          React N.A
        </Header>
      }
      navbar={
        <Navbar width={{ base: 300 }} height={'100%'} p="xs">
          <button>Clientes</button>
        </Navbar>
      }
    >
      <Outlet />
    </AppShell>
  )
}

export default ManagerLayout
