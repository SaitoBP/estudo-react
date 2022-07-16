import { FC, Suspense } from 'react'

import { SuspenseLoadingProps } from './utils/suspenseLoading.types'

const SuspenseLoading: FC<SuspenseLoadingProps> = (props) => {
  const { children } = props

  return <Suspense fallback={<h1>Carregando...</h1>}>{children}</Suspense>
}

export default SuspenseLoading
