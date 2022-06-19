import React from 'react'
import AfterLogin from '../components/home/AfterLogin'
import BeforeLogin from '../components/home/BeforeLogin'

export default function Home() {
  const token = true
  return (
    <>
      {token 
        ? <AfterLogin />
        : <BeforeLogin />
      }
    </>
  )
}
