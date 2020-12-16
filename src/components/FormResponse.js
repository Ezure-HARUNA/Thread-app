import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { useCreateResponse } from '../helpers/useCreateResponse'

const FormResponse = ({ threadId }) => {
  const classes = useStyle()

  const [text, setText] = useState('')

  const [username, setUsername] = useState('')

  const [createResponse, loading] = useCreateResponse()

  const onClick = () => {
    createResponse({ text, threadId, username })
    setText('')
    setUsername('')
  }

  return (
    <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
      <TextField
        disabled={loading}
        fullWidth
        multiline
        onChange={(event) => setText(event.target.value)}
        placeholder={'New response'}
        rows={2}
        rowsMax={8}
        value={text}
        variant={'outlined'}
      />
      {text && (
        <TextField
          disabled={loading}
          fullWidth
          onChange={(event) => setUsername(event.target.value)}
          placeholder={'Username (Optional)'}
          value={username}
          variant={'outlined'}
        />
      )}
      <div className={classes.actions}>
        <Button
          color={'primary'}
          disabled={loading || !text}
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

export default FormResponse
