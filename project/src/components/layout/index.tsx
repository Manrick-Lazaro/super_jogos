import { Outlet } from "react-router-dom"
import Logo from "../../assets/img/superJogos.png"
import styles from "./layout.module.css"

export function Layout() {
  function handleNavigateHome() {
    window.location.href="/"
  }
  return(
    <> 
      <div className={styles.logo_container}>
        <img src={Logo} onClick={handleNavigateHome}/>
      </div>
      <Outlet />
    </>
  )
}