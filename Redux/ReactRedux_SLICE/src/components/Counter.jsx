import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement , incrementByAmount } from '../reduxSlice/counterSlice'
import { useState } from 'react'

const Counter = () => {

  const data = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  console.log('data' , data);

  const [count , setCount] = useState(0)
  

  return (
    <>
    <div>Counter</div>
    <p>Counter : {data}</p>
    <button onClick={() => dispatch(increment())}>increment</button>
    <button onClick={() => dispatch(decrement())}>decrement</button>
    <br></br>
    <input type='number' onChange={(e) => setCount(Number(e.target.value))} value={count}/>
    <button onClick={() => dispatch(incrementByAmount(count))}>incrementByCount</button>
    </>
  )
}

export default Counter