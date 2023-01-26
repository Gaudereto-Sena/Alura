import React from 'react'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import styles from './Favoritos.module.css'
import { useFavoritoContext } from 'Contextos/Favoritos'

const Favoritos = () => {
  const { favoritos } = useFavoritoContext()

  return (
    <>
      <Banner imagem='favoritos' />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      
      <section className={styles.container_videos}>
        {favoritos.map((fav) => {
          return <Card
            key={fav.id}
            id={fav.id}
            imagem={fav.imagem}
            titulo={fav.titulo}
          />
        })}
      </section>
    </>
  )
}

export default Favoritos