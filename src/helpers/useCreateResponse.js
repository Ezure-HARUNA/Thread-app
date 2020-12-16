// ./src/helpers/useCreateThread.js

import { firestore } from 'firebase/app'
import { useState } from 'react'

export const useCreateResponse = () => {
  const [loading, setLoading] = useState(false)

  const createResponse = async ({ text, threadId, username }) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()

    //スレッドを追加する
    const threadRef = firestore().collection('threads').doc(threadId)

    //スレッド情報を更新する
    await threadRef.update({
      //カウントをインクレメントする
      responseCount: firestore.FieldValue.increment(1),
      updatedAt: now,
    })

    //レスを追加する
    const responseRef = threadRef.collection('responses').doc()

    await responseRef.set({
      createdAt: now,
      updatedAt: now,
      text,
      threadId,
      username,
    })

    setLoading(false)
  }

  return [createResponse, loading]
}
