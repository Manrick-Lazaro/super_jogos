import styles from "./list.module.css"
import { Card } from "../card"
import JogoProps from "../props/jogo"

interface ListJogos {
  jogos: JogoProps[];
}

export function List({ jogos } : ListJogos) {
  return(
    <section className={styles.list}>
      {jogos.map((jogo) => (
        <div key={jogo.id} className={styles.card_list}>
          <Card jogo={jogo} />
        </div>
      ))}
    </section>
  )
}