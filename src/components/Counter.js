import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {counterActions} from '../store/index'

import classes from './Counter.module.css'

const Counter = () => {
  const counter = useSelector((state) => state.counter) //get store data (state data)
  const show = useSelector((state) => state.showCounter)
  const dispatch = useDispatch()

  const incrementHandler = () => { //dispatch actions using dispatch hook
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () => { //dispatch actions with payloads
    dispatch(counterActions.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  }

  return(
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
