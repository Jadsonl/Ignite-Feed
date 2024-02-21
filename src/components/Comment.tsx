import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

interface CommentProps{
  content:string;
  ondeleteComment: (comment: string)=> void;
}

export function Comment({ content, ondeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    setLikeCount(state => {
      return state + 1
    })
  }
  function handleDeleteComment() {
    ondeleteComment(content)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={'https://github.com/Jadsonl.png'} alt='' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jadson Santana</strong>
              <time title="11 de Maio as 8:13" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atras
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
