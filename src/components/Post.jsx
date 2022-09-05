import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/ronanavila.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Paulo José</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="05 de setembro de 2022 às 01:01h" dateTime="2022-09-05 01:01:00">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p><a href="">#tudonovo</a>{' '}
                <a href="">#maisum</a>{' '}
                <a href="">#legal</a>
                </p>
            </div>
        </article>
    );
}