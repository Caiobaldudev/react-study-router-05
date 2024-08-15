import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav>
      {/* Link nos permite navegar pelas páginas sem o comportamento de carregamento */}
      <Link to="/">Home</Link> | <Link to="sobre">Sobre</Link> <br />
      {/* O NavLink mostra a página que está ativa no momento. O 'end' serve para demonstrar que é o final */}
      {/* posso colocar a estilização 'ativa' direto na minha tag navlink com o activeStyle={{color: 'tomato'}} por exemplo  */}
      <NavLink to="/" end>Home</NavLink> | <NavLink to="sobre">Sobre</NavLink> <br />
      {/* Exemplo com o login */}
      <NavLink activeStyle={{color: 'tomato'}} to="login">Login</NavLink>

    </nav>
  )
}

export default Header
