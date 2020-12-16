// ./src/components/Progress.js

import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const Progress = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}

const useStyles = makeStyles({
  root: { display: 'grid', justifyContent: 'center' },
})

export default Progress
