import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { useCreateThread } from '../helpers/useCreateThread'

//ユーザーの入力を受け取り、関数createThreadを呼び出すReactコンポーネント
const FormThread = () => {
  const classes = useStyle()

  const [text, setText] = useState('')

  const [title, setTitle] = useState('')

  const [username, setUsername] = useState('')

  const [createThread, loading] = useCreateThread()

  const onClick = () => {
    //関数createThreadを呼び出し、成功した場合は入力したデータを空に
    createThread({ text, title, username })
    setText('')
    setTitle('')
    setUsername('')
  }

  return (
    <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
      <TextField
        disabled={loading}
        fullWidth
        onChange={(event) => setTitle(event.target.value)}
        placeholder={'New thread'}
        value={title}
        variant={'outlined'}
      />
      {title && (
        <TextField
          disabled={loading}
          fullWidth
          //複数行の入力ができる
          multiline
          onChange={(event) => setText(event.target.value)}
          placeholder={'Content'}
          //デフォルトの行数
          rows={2}
          //最大行数
          rowsMax={8}
          value={text}
          variant={'outlined'}
        />
      )}
      {title && (
        <TextField
          disabled={loading}
          fullWidth
          onChange={(event) => setUsername(event.target.value)}
          placeholder={'Username (optional)'}
          value={username}
          variant={'outlined'}
        />
      )}
      <div className={classes.actions}>
        <Button
          color={'primary'}
          disabled={loading || !title || !text}
          onClick={onClick}
          variant={'contained'}
        >
          {'Create'}
        </Button>
      </div>
    </form>
  )
}

const useStyle = makeStyles(({ spacing }) => {
  return {
    actions: { display: 'grid', justifyContent: 'flex-end' },
    form: { display: 'grid', gridRowGap: spacing(2) },
  }
})

export default FormThread
