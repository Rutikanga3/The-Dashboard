import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { LoggedinProvider } from './Context/LoggedinContext'


export default function Layout({ children }) {
  return (
    <div className='flex min-h-screen bg-gray-50 transition-colors duration-300'>
      <LoggedinProvider>
      <Sidebar />
      </LoggedinProvider>
      
      <div className='flex-1 ml-0 lg:ml-64'>
        <Navbar />
        
        <main className='p-4 lg:p-6'>
          {children}
        </main>
      </div>
    </div>
  )
}