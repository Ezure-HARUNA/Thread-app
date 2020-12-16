import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const CardResponse = ({ index, response }) => {
  const classes = useStyles()

  const dateText = response.createdAt.toDate().toLocaleString()

  return (
    <Card>
      <CardContent className={classes.root}>
        <Typography>
          {`${index} [${response.username || 'Unknown'}] ${dateText}`}
        </Typography>
        <Typography className={classes.text}>{response.text}</Typography>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles(({ spacing }) => {
  return {
    root: { display: 'grid', gridRowGap: spacing(1) },
    text: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' },
  }
})

export default CardResponse
