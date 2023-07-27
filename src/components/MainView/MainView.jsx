import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Service from './Services/Service'
import Home from './Home/Home'

export default function MainView() {
  return (
    <div className="md:max-w-[80%] mx-auto">
      <Home />
      <Service />
      <About />
      <Contact />
    </div>
  )
}
