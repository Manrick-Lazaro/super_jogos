import styles from "./card.module.css"
import JogoProps from "../props/jogo"

interface UniqueJogoProps {
  jogo: JogoProps
}

export function Card({jogo} : UniqueJogoProps) {
  return(
    <div className={styles.card_container}>
      <div className={styles.img_container}>
        <img src={jogo.thumbnail} alt="imagem do jogo" />
      </div>
      <div className={styles.title_container}>
        <h3>{jogo.title}</h3>
      </div>
    </div>
  )
}