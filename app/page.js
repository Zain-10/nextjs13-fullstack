import React from 'react'
import Herosection from './components/Herosection'
import ContactForm from './components/ContactForm'

export default function page() {
  return (
    <div>
      <Herosection title={'LETS WATCH MOVIE TOGETHER'} imageUrl={'/home.svg'}/>
      <ContactForm/>
    </div>
  )
}
