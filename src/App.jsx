import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cabecalho from './assets/cabecalho'
import CardModulo from './assets/CardModulo'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='aplicacao'>
      <Cabecalho/>
      <main className='conteudo-principal'>
        <h1 className='introducao'>
          Sistema de Gerenciamento de chamados
        </h1>
        <p className='introducao-p'>Desáfio Técnico para criação e Gerenciamento de chamados</p>
        
        <section className='modulos'>
          <CardModulo titulo={"Gerenciamento de chamados"} descricao={"Cadastre e consulte os chamados"} />

          <CardModulo titulo={"Listar chamados "} descricao={"Lista os chamados registrados"} />

          <CardModulo titulo={"Cadastrar novo chamado"} descricao={"Cadastra um novo chamado"} />
        </section>
      </main>
    </div>
  )
}

export default App
