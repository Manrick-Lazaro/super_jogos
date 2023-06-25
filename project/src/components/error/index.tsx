import styles from "./error.module.css"
import img from "../../assets/img/chatbot.png"
import { useNavigate } from 'react-router-dom';

interface TitleProps{
  title: string
}

export function Error({ title } : TitleProps) {
  const navigate = useNavigate()

  function handleClick() {
    navigate("/")
  }

  return(
    <section className={styles.container_error}>
      <div className={styles.container_img}>
        <img src={img} alt="imagem de erro robozinho" />
      </div>
      <div className={styles.container_title_button}>
        <h2>{title}</h2>
        <button onClick={handleClick}>Clique aqui.</button>
      </div>
    </section>
  )
}