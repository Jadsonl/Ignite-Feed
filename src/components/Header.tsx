import style from './Header.module.css'
import igniteLogo from '../assets/Ignite-logo.svg'

export function Header(){
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" className={style.logo}/>
      <strong >Ignite Feed</strong>
    </header>
  )
}