
import React, { useContext, useState } from 'react'
import { CounterContext } from '../contexts/CounterContextProvider'

const Count = () => {
    const {count, setCount} = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default Count
