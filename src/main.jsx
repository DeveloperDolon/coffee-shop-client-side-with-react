import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { MainRouter } from './All-JSX/Router/MainRouter.jsx'
import DataContext from './All-JSX/ContextProvider/DataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContext>
      <RouterProvider router={MainRouter}></RouterProvider>
    </DataContext>
  </React.StrictMode>,
)
