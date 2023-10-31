import React from 'react'
import {useState} from 'react'

const ButtomContador = () => {
    const [contador, setContador] = useState(0)

    function aumentar(){
      setContador(contador+1)
    }

    function disminuir(){
      setContador(contador-1)
    }

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  )
}

export default ButtomContador