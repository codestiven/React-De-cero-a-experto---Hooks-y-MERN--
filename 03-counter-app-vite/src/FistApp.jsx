import React from 'react'
import PropTypes from 'prop-types'


const getsaludo = () => {
  return `Hola Mundo ${new Date().getFullYear()}`
}

const FistApp = ( {title , numero } ) => {

  return (
    <>
      <h1>{title}</h1>
      <h1>Stiven</h1>
      <p> {numero + 1} </p>


    </>
  )
}

FistApp.propTypes = {
  title: PropTypes.string.isRequired,

}

export default FistApp
