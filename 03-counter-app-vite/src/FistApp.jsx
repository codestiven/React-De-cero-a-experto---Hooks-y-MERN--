import React from 'react'
import PropTypes from 'prop-types'; 



const getsaludo = () => {
  return `Hola Mundo ${new Date().getFullYear()}`
}

const FistApp = ( {
  title = "hola mundo" , 
  numero = 5
} ) => {

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

FistApp.defaultProps = {
  title: "No hay titulo",
  numero: 0,
}

export default FistApp
