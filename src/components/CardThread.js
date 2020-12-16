// ./src/components/CardThread.js

import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

//データベースに追加されたスレッドを表示する為のReactコンポーネント
const CardThread = ({ thread }) => {
  const classes = useStyles()


  return (
    <Card>
      <Link to={`/threads/${thread.id}`}>
        <CardContent className={classes.content}>
          <Typography variant={'h6'}>
            {`${thread.title} (${thread.responseCount})`}
          </Typography>
           {/* toLocaleString→各国に応じたフォーマットに時刻を変換する */}
          <Typography variant={'caption'}>　
            {thread.updatedAt.toLocaleString()}
            {/* {thread.updatedAt.toDate().toLocaleString()} */}
           
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

const useStyles = makeStyles(({ spacing }) => {
  return { content: { display: 'grid', gridRowGap: spacing(1) } }
})

export default CardThread
