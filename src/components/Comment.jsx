import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}){
    return(
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/ronanavila.png"/>

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>José Manuel</strong>
                            <time title="05 de setembro de 2022 às 01:01h" dateTime="2022-09-05 01:01:00">Cerca de 1 hora </time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}