import { firestore } from 'firebase/app'
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import CardThread from './CardThread'
import FormThread from './FormThread'
import Main from './Main'
import Progress from './Progress'

const PageHome = () => {
  const query = firestore().collection('threads').orderBy('updatedAt', 'desc')

  const [threads = [], loading] = useCollectionData(query, { idField: 'id' })

  return (
    <Main>
      <h1>{'Home'}</h1>
      <FormThread />
      {threads.map((thread) => (
        <CardThread key={thread.id} thread={thread} />
      ))}
      {loading && <Progress />}
    </Main>
  )
}

export default PageHome
