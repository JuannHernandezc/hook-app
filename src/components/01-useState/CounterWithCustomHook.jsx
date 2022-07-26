import React from 'react'
import { useCounter } from '../../hooks/useCounter'

const CounterWithCustomHook = () => {
    const {state, increment, decrement} = useCounter();

  return (
    <div className='p-4'>
     <h1>Counter with Hook: {state}</h1>
     <hr />
     <button className='btn btn-primary' onClick={increment}> +1 </button>
     <button className='btn btn-danger' onClick={decrement}> -1 </button>
    </div>
  )
}

export default CounterWithCustomHook