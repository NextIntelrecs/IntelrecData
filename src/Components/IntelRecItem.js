import React from 'react'

const IntelRecItem=(props)=> {
    const {title}=props;
  return (
    <div className="Intelitem">
      {title ? title:'Iteme Title '}
    </div>
  )
}

export default IntelRecItem
