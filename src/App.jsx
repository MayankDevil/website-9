import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainView from './components/MainView/MainView';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Layout from './components/Layout/Layout';



export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<MainView />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Route>
    </Routes>
  )
}
