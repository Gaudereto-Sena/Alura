import { useFavoritoContext } from 'Contextos/Favoritos'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import iconeDesfavoritar from './favorite.png'
import iconeFavoritar from './favorite_outline.png'

const Card = ({ id, imagem, titulo }) => {

    const { favoritos, adicionarFavoritos } = useFavoritoContext()
    const ehFavorito = favoritos.some(favorito => favorito.id === id)
    const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar

    return (
        <div className={styles.card}>
            <Link className={styles.link} to={`/player/${id}`}>
                <img src={imagem} alt={titulo} className={styles.imagem} />
                <h2>{titulo}</h2>
            </Link>
            <img
                src={icone}
                alt='Favoritar filme'
                onClick={() => {
                    adicionarFavoritos({ id, imagem, titulo })
                }}
                className={styles.favoritar}


            />
        </div>
    )
}

export default Card