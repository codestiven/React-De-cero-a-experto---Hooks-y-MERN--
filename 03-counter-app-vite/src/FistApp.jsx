import React from 'react'


const getsaludo = () => {
  return `Hola Mundo ${new Date().getFullYear()}`
}

const FistApp = () => {

  return (
    <>
      <h1>{getsaludo()}</h1>
      <h1>Stiven</h1>
    </>
  )
}

export default FistApp
