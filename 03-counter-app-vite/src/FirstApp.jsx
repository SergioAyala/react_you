import React from 'react'
import Proptypes from 'prop-types'

export const FirstApp = ({title, subTitle}) => {



    return (
    <>
    <h1>{title}</h1>
    <p>{subTitle}</p>
    </>
  )
}


FirstApp.Proptypes = {
    title: Proptypes.string.isRequired,
    subTitle: Proptypes.number.isRequired,
}