import { Customer } from '../../../../types'

export type CustomerListItem = Omit<Customer, 'address'>
