import React, { useState, useEffect } from 'react'
import ReactDom  from 'react-dom'
import { useAuth } from '../context/AuthContext'


export default function Modal(props) {
    const {setOpenModal} = props
    const [_document, set_document] = useState(null)
    const {logout} = useAuth()

    useEffect(() => {
      set_document(document)
    },[])

    if(!_document) { return null }

  return ReactDom.createPortal(
    <div className='fixed text-slate-900 w-screen h-screen top-0 left-0 bg-white flex
    flex-col text-lg sm:text-xl'>
        <div className='flex items-center justify-between border-b-2 border-solid p-4
        border-slate-900'>
            <h1 className='font-bold text-2xl sm:text-5xl select-none'>MENU</h1>
            <i onClick={() => setOpenModal(false)} className="fa-solid fa-xmark text-2xl sm:text-4xl
            duration-300 hover:rotate-90 cursor-pointer"></i>
        </div>
        <div className='p-4 flex flex-col gap-3'>
            <h2 onClick={()=> {
                logout()
                setOpenModal(false)
            }} className='select-none duration-300 hover:pl-2 cursor-pointer'>LOGOUT</h2>
        </div>
    </div>,
    _document.getElementById('portal')
  )
}
