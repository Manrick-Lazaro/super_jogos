import { useEffect, useState, FormEvent } from 'react'
import { List } from "../../components/lists"
import { Loader } from "../../components/loader"
import { BiSearch } from "react-icons/bi"
import styles from "./home.module.css"
import JogoProps from '../../components/props/jogo'
import axios from 'axios'

export function Home() {
  const url = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data'
  const headers = {
    'dev-email-address': 'manricksantos@gmail.com'
  }
  const [jogos, setJogos] = useState<JogoProps[]>([])
  const [spinner, setSpinner] = useState(true)
  const [input, setInput] = useState("")
  const [listFilter, setListFilter] = useState<JogoProps[]>([])
  
  const lista = jogos.filter((value, inidice, self) => {
    return self.findIndex((obj) => obj.genre === value.genre ) === inidice
  })

  useEffect(() => {
    function getData() {
      const erroStatusCode = [500, 502, 503, 504, 507, 508, 509]
      axios.get(url, { headers })
        .then(response => {
          const data = response.data
          setJogos(data)
          setSpinner(false)
        })
        .catch(error => {
          if(erroStatusCode.includes(error.response.status)) {
            window.location.href = '/error_server_500'
          } else {
            window.location.href = '/error_server'
          }
        })
    }
    getData()
  })

  function toggleFiltro() {
    const opcoes = document.getElementById("filtro");

    if(opcoes) {
      if (opcoes.style.display === "none") {
        opcoes.style.display = "block";
      } else {
        opcoes.style.display = "none";
      }
    }
  }

  function HandleSubmite(e: FormEvent) {
    e.preventDefault();

    if(input === "") {
      setListFilter([])
    }

    const inputLowerCase = input.toLowerCase()
    setListFilter(jogos.filter((jogo) => jogo.title.toLowerCase().includes(inputLowerCase)))
  }

  function handleClickGenre(genre:string) {
    const selected = genre

    const listGamesSelecteGenre = jogos.filter((jogo) => jogo.genre === selected)
    setListFilter(listGamesSelecteGenre)
  }

  return(
    <div>
      {spinner ? (
        <Loader />
      ) : (
        <div className={styles.home_container}>
          <div className={styles.container}>
            <form className={styles.form} onSubmit={HandleSubmite}>
              <input 
                className={styles.input}
                type="text"
                placeholder="pequise pelo seu jogo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className={styles.button} type="submit" >
                <BiSearch className={styles.buttonIcon} />
              </button>
            </form>
          </div>

          <div className={styles.div_container_button}>
            <div className={styles.container_button}>
              <button className={styles.botaoPrincipal} onClick={toggleFiltro}>Filtrar</button>
              <div id="filtro" className={styles.opcoesFiltro}>
                {lista.map((jogo) => (
                  <button 
                    key={jogo.id} 
                    className={styles.filtroBotao} 
                    onClick={() => handleClickGenre(jogo.genre)}
                  > 
                    {jogo.genre}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <List jogos={listFilter.length === 0 ? jogos : listFilter}/>
        </div>
      )}
    </div>
  )
}