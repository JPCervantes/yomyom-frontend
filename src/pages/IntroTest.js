import React from 'react';
import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import './introTest.scss'

export function IntroTest() {
  const Navigate = useNavigate();

  return (
    <div className='intro-test'>
      <h1>Bienvenido a la prueba técnica de YomYom</h1>
      <h2>Ha sido realizada por Juan Pablo Cervantes</h2>
      <h3>Da click abajo para iniciar.</h3>
      <Button 
        primary 
        fluid 
        onClick={() => {Navigate("admin/menu")}}> 
        Comenzar
      </Button>
    </div>
  )
}
