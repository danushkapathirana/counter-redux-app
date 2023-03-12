import React from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from './Counter.module.css'

const Counter = () => {
  const counter = useSelector((state) => state.counter) //get store data (state data)
  const dispatch = useDispatch()

  const incrementHandler = () => { //dispatch actions using dispatch hook
    dispatch({type: 'increment'})
  }

  const decrementHandler = () => {
    dispatch({type: "decrement"})
  }

  const increaseHandler = () => { //dispatch actions with payloads
    dispatch({type: "increase", amount: 5})
  }

  const toggleCounterHandler = () => {}

  return(
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
