import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import React, { useEffect, useState } from 'react'
import videos from 'json/db.json'
import { useParams } from 'react-router-dom'
import styles from './Player.module.css'

const Player = () => {
    const [video, setVideo] = useState();

    const parametros = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [])

    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="800"
                    height="315"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                </iframe>
            </section>

        </>
    )
}

export default Player