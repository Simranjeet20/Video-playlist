import React from 'react'
import Dashboard from './Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VedioPlay from './VideoPlay'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/Video'element={<VideoPlay />} />
    </Routes>
    </BrowserRouter>
  )
}
