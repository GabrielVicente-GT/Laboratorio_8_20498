/* eslint-disable no-console */
import { useState } from 'react'
import './App.css'
import { ValidarNumero } from './isNumber/isNumber'

function Restricciones(X) {
  if (eval(X) < 0) {
    return 'ERROR'
  // eslint-disable-next-line no-else-return
  } else if (eval(X) > 999999999) {
    return 'ERROR'
  }
  return X
}

function App() {
  const simbolos = ['C', '±', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
  const [temp, setTemp] = useState('')
  const [resultado, setResultado] = useState('')

  const clearDisplay = () => {
    setResultado('')
    setTemp('')
  }

  const operation = (oper) => {
    const temporal = temp
    setTemp(temporal + resultado + oper)
    setResultado('')
  }

  const final = () => {
    setTemp('')
    setResultado(() => {
      if (Restricciones(eval(temp + resultado)).toString().length > 10) {
        return Restricciones(eval(temp + resultado)).toString().slice(0, -9)
      } return Restricciones(eval(temp + resultado)).toString()
    })
  }

  const Modificando = () => {
    const temporal = resultado
    setResultado(() => {
      if (temporal.length > 10) {
        return (`-${temporal}`).slice(0, -9)
      } return `-${temporal}`
    })
  }

  return (
    <div className="App">
      <h1 className="Lab8">Calculator 20488</h1>
      <div className='Display'>
        {
          resultado || eval(temp.slice(0, -1))
        }
        </div>
      <div className="tablero">
        {
          simbolos.map((fragmento, indexB) => {
            if (fragmento === '0') {
              return <button className='boton especial' onClick=
                {() => {
                  if (resultado === 'ERROR') {
                    setResultado(fragmento)
                  } if (resultado.length > 8) {
                    // eslint-disable-next-line no-console
                    console.log('Excede limite')
                  } else {
                    setResultado(resultado === '0' ? fragmento : (resultado + fragmento))
                  }
                }
                } key={(indexB).toString()}>{fragmento}</button>
            // eslint-disable-next-line no-else-return
            } else if (ValidarNumero(fragmento)) {
              return <button className='botonNumero' onClick=
              {() => {
                if (resultado === 'ERROR') {
                  setResultado(fragmento)
                } if (resultado.length > 8) {
                  // eslint-disable-next-line no-console
                  console.log('Excede limite')
                } else {
                  setResultado(resultado === '0' ? fragmento : (resultado + fragmento))
                }
              }
              } key={(indexB).toString()}>{fragmento}</button>
            } else if (fragmento === 'C') {
              return <button className='boton' onClick={clearDisplay} key={(indexB).toString()}>{fragmento}</button>
            } else if (fragmento === '=') {
              return <button className='boton' onClick={final} key={(indexB).toString()}>{fragmento}</button>
            } else if (fragmento === '.') {
              return <button className='boton' onClick=
                {() => {
                  if (resultado === 'ERROR') {
                    setResultado(fragmento)
                  } if (resultado.length > 8) {
                    console.log('Excede limite')
                  } else { setResultado(resultado + fragmento) }
                }
                } key={(indexB).toString()}>{fragmento}</button>
            } else if (fragmento === '±') {
              return <button className='boton' onClick={Modificando} key={(indexB).toString()}>{fragmento}</button>
            }
            return <button className='boton' onClick={() => { operation(fragmento) }} key={(indexB).toString()}>{fragmento}</button>
          })
        }
      </div>
    </div>
  )
}

export default App
