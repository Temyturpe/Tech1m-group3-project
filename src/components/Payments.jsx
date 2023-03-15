import React from 'react'
import Singlepayment from './Singlepayment'

const Payments = ({info}) => {
  return (
    <div> {info.map((info) => {
        return (
        <Singlepayment info={info} key={info.id}/>
        )
      })}</div>
  )
}

export default Payments