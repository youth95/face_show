import { useAtom } from 'jotai'
import React from 'react'
import { activeRouteAtom } from '../../store/store'
import { Routes } from '../../store/types'
export const ResultPage: React.FC = () => {
  const [, setRoute] = useAtom(activeRouteAtom)

  return (
    <div className='p-4'>
      <div className='w-full flex flex-wrap gap-2 justify-center'>
        <div className='h-60 w-44 bg-gray-300 rounded-3xl flex justify-center items-center'>
          生成中
        </div>
        <div className='h-60 w-44 bg-gray-300 rounded-3xl flex justify-center items-center'>
          生成中
        </div>
        <div className='h-60 w-44 bg-gray-300 rounded-3xl flex justify-center items-center'>
          生成中
        </div>
        <div className='h-60 w-44 bg-gray-300 rounded-3xl flex justify-center items-center'>
          生成中
        </div>
      </div>
      <p className='text-center p-4'>Face Show 正在为您生成</p>

      <div className='flex justify-center'>
        <div
          onClick={() => {
            setRoute(Routes.Select)
          }}
          className='w-60 h-12 bg-orange-300 flex justify-center items-center rounded-full border-black border mt-4'
        >
          重新选择
        </div>
      </div>
    </div>
  )
}
