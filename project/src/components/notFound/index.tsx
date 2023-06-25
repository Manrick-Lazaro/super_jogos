import notFoundImage from "../../assets/img/—Pngtree—error 404 not found glitch_6005621.png"
import styles from "./notFound.module.css"

export function NotFound() {
  return(
    <section className={styles.notFound_container}>
      <div  className={styles.notFound_image_container}>
        <img src={notFoundImage} alt="Imagem de not found" />
      </div>      
    </section>
  )
}