import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import React, { useEffect, useState } from 'react'
import styles from './Inicio.module.css'

const Inicio = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then(response =>
                response.json())
            .then(response => {
                setVideos(response)
            })
    }, [])

    return (
        <>
            <Banner imagem='home' />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container_videos}>
                {videos.map((video) => {
                    return <Card
                        key={video.id}
                        id={video.id}
                        imagem={video.capa}
                        titulo={video.titulo}
                    />
                })}
            </section>
        </>

    )
}

export default Inicio
