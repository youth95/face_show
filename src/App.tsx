import React from 'react'
import { SelectPage,ResultPage } from './pages'
import { Routes } from './store/types'
import { useAtom } from 'jotai'
import { activeRouteAtom } from './store/store'

const RoutePages: Record<Routes, React.FC> = {
  [Routes.Result]: ResultPage,
  [Routes.Select]: SelectPage
}

export const App = () => {
  const [route] = useAtom(activeRouteAtom)
  const RoutComponent = RoutePages[route]
  return (
    <div className='w-full h-full'>
      <RoutComponent />
    </div>
  )
}
