import { configureStore } from '@reduxjs/toolkit'
import forecastReducer from '../features/forecast/forecast.slice'
import groqReducer from '../features/groq/groq.slice'
import uploadsReducer from '../features/uploads/uploads.slice'
const store = configureStore({
  reducer: {
    // Agrega tus reducers aquí
    forecast: forecastReducer,
    groq: groqReducer,
    uploads: uploadsReducer
    


    
  }
})

export default store