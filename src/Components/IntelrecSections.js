import React from 'react'
import IntelRecItem from './IntelRecItem'

const IntelrecSections = (props) => {
    const {title,slideforview}=props;
    const itemData=[];
    for (let i = 0; i < slideforview; i++) {
        itemData.push(<IntelRecItem key={i} title={`title`+(i+1)}/>);
    }
    return (
    <div className="Intelrecsections">
      <h1>{title}</h1>
      {itemData}
    </div>
  )
}

export default IntelrecSections
