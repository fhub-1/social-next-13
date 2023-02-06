import React from 'react'
import TheHeader from '../navbar/TheHeader'

 
type Props = {
    children?: React.ReactNode
}

const Layout:React.FC<Props> = ({ children }) => {
  return (
    <>
    <TheHeader />
    <main>{children}</main>
    <h1>footer</h1>
    </>
    
  )
  }

export default Layout