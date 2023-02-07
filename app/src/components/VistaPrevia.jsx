import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/VistaPrevia.css';

const Interaccion = (props) => {

  const dateIsEnable = props.date.length > 0
  const options = props.options
  const optionsIsEnable = options.length > 0
  const styles = props.styles
  /* const optionsIsEnable = options.length > 0 */ /* || options.length + 1 || options.length - 1 */
  
  return (
    <section id="menu" className="menu" style={ styles.backgroundType == 'gradient' ? {background: `radial-gradient(circle, ${styles.gradientColor} 0%, ${styles.backgroundColor} 100%)`} : {background: `${styles.backgroundColor}` } }>
      <div id="container" className="container">
        <div id="encabezado" className="encabezado" style={{color: `${styles.textColor}`, backgroundImage: `linear-gradient(to right, ${styles.textColor} 50%, rgba(255,255,255,0) 0%)`}}>
          {dateIsEnable
            ?
              <div id="encabezado-container" className="encabezado-container" >
                <p id="fecha" className="fecha">{props.date}</p>
                <p id="hoy" className="hoy">HOY EN SAGAZ</p>
              </div>
            :
              console.log('Date is not enable')
          }
        </div>
        <div id="guisados" className="guisados" style={{ color: `${styles.textColor}` }} >
          {optionsIsEnable
            ?
              options.map(option => 
                <Option id={ option } optionText={ option } key={ option }/>
              )
            :
              console.log('No options listed')
          }
        </div>
        <div id="pie" className="pie" style={{ color: `${styles.textColor}`, backgroundImage: `linear-gradient(to right, ${styles.textColor} 50%, rgba(255,255,255,0) 0%)` }}>
          <p id="pie-mensaje" className="pie-mensaje">BUEN PROVECHO</p>
        </div>
      </div>
    </section>

  )
};

const mapStateToProps = (state) => {
  return {
    date: state.date,
    options: state.options,
    styles: state.styles
  }
}

export default connect(mapStateToProps, null)(Interaccion);