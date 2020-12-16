// ./src/helpers/useCreateThread.js

import { firestore } from 'firebase/app'
import { useState } from 'react'

export const useCreateThread = () => {
  const [loading, setLoading] = useState(false)

  const createResponse = async ({ text, title, username }) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()

    //!➀スレッドを追加する
    const threadRef = firestore().collection('threads').doc()

    //データを追加
    await threadRef.set({
      createdAt: now,
      updatedAt: now,
      title,
      responseCount: 1,
    })

    //レスポンスを追加する
    const responseRef = threadRef.collection('responses').doc()

    //!➁データを追加
    await responseRef.set({
      createdAt: now,
      updatedAt: now,
      threadId: threadRef.id,
      username,
      text,
    })

    setLoading(false)
  }

  return [createResponse, loading]
}
