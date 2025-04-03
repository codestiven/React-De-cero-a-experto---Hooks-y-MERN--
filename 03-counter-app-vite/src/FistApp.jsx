import React from 'react'
import PropTypes from 'prop-types'; 



const getsaludo = () => {
  return `Hola Mundo ${new Date().getFullYear()}`
}

const FistApp = ( {
  title = "hola mundo" ,
  subtitle = "Soy un subtitulo",
  numero = 5
} ) => {

  return (
    <>
      <h1 data-testid="test-title" >{title}</h1>
      <h2>{subtitle}</h2>
      <h2>Stiven</h2>
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
