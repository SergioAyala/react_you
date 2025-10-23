import React from 'react'


export const FirstApp = ({title, subTitle}) => {
    console.log(title)

    return (
    <>
    <h1>{title}</h1>
    <p>{subTitle}</p>
    </>
  )
}
