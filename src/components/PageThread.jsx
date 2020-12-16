import { firestore } from 'firebase/app'
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useParams } from 'react-router-dom'
import CardResponse from './CardResponse'
import FormResponse from './FormResponse'
import Main from './Main'
import Progress from './Progress'

const PageThread = () => {
  const { threadId } = useParams()

  const query = firestore()
    .collection('threads')
    .doc(threadId)
    .collection('responses')
    .orderBy('createdAt', 'asc')

  const [responses = [], loading] = useCollectionData(query, { idField: 'id' })

  return (
    <Main>
      <h1>{'Thread'}</h1>
      {responses.map((response, index) => (
        <CardResponse key={response.id} index={index} response={response} />
      ))}
      {loading && <Progress />}
      <FormResponse threadId={threadId} />
    </Main>
  )
}

export default PageThread
