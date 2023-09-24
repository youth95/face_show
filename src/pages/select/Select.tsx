import React from 'react'
import { atom, useAtom } from 'jotai'
import { activeRouteAtom } from '../../store/store'
import { Routes } from '../../store/types'
const defaultList = [
  'https://img2.baidu.com/it/u=1290933882,1298560865&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
  'https://img2.baidu.com/it/u=3520311852,1319854436&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
]
const selectListAtom = atom(defaultList)
const activeValue = atom(defaultList[0])
const appendListAtom = atom(null, (get, set, list: string[]) => {
  set(selectListAtom, list.concat(get(selectListAtom)))
  set(activeValue, get(selectListAtom)[0])
})

export const SelectPage: React.FC = () => {
  const [active, setActive] = useAtom(activeValue)
  const [selectList] = useAtom(selectListAtom)
  const [, appendList] = useAtom(appendListAtom)
  const [, setRoute] = useAtom(activeRouteAtom)
  return (
    <div className='flex-col max-h-screen p-2'>
      <div className='p-4 h-4/6 flex justify-center'>
        <img className='rounded-3xl h-96' src={active} alt='' />
      </div>
      <p>选择你喜欢的造型</p>
      <div className='h-2/6 flex gap-2 flex-wrap'>
        <div
          className='h-32 rounded-lg bg-gray-100 text-gray-300 flex items-center'
          style={{ width: 85.33 }}
        >
          <label className='text-center w-full' htmlFor='uploader'>
            <div className='leading-none text-gray-500 text-xl'>+</div>
            <div className='leading-none text-gray-400 text-xl'>自定义</div>
            <div className='leading-none text-gray-300 p-2 text-xs'>
              半身照最佳
            </div>
          </label>
        </div>
        {selectList.map(url => (
          <img
            className={`h-32 rounded-lg border-black ${
              url === active ? 'border' : ''
            }`}
            src={url}
            key={url}
            alt=''
            onClick={() => setActive(url)}
          />
        ))}
      </div>
      <div className='flex justify-center'>
        <div
          onClick={() => {
            alert('TODO: 需要后端支持')
            setRoute(Routes.Result)
          }}
          className='w-60 h-12 bg-orange-300 flex justify-center items-center rounded-full border-black border mt-4'
        >
          立即生成
        </div>
      </div>
      <input
        hidden
        type='file'
        name='uploader'
        id='uploader'
        accept='image/*'
        onChange={ev => {
          appendList(
            Array.from(ev.target.files ?? []).map(file =>
              URL.createObjectURL(file)
            )
          )
          ev.target.value = ''
        }}
      />
    </div>
  )
}
