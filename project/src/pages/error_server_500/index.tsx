import { Error } from "../../components/error"

export function Error_Server_500() {
  return(
    <>
      <Error title={"O servidor fahou em responder, tente recarregar a página"}/>
    </>
  )
}