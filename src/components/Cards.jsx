import React from 'react'
import Firstcards from './Firstccard'
import { LuUsers } from "react-icons/lu";
import { FiPackage } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io"; 
import { FaExclamationTriangle } from "react-icons/fa";

export default function Cards() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <Firstcards
      icon={<LuUsers/>}
      title='116'
      description='Total User'
      iconColor='text-primarycolor-400'
      bgColor='bg-primarycolor-100'
    />
    <Firstcards
      icon={<FiPackage/>}
      title='100'
      description='Total Products'
      iconColor='text-primarycolor-400'
      bgColor='bg-primarycolor-100'
    />
    <Firstcards
      icon={< IoMdCheckmarkCircleOutline />}
      title='116'
      description='Total User'
      iconColor='text-green-500 '
      bgColor='bg-green-100'
    />
    <Firstcards
      icon={<FaExclamationTriangle/>}
      title='116'
      description='Total User'
      iconColor='text-yellow-500'
      bgColor='bg-orange-100'
    />
    </div>
  )
}
