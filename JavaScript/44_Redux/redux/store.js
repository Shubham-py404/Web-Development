// for redux copy from docs

// install this - npm install @reduxjs/toolkit\
// and this - npm install react-redux

// import this in mai jsx ---import { Provider } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './counter/counterSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
})