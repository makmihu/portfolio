import React from 'react'
import Contact from './Contact'

export default function Header() {
  return (
    <header>
      <div className='split'>
        <p><span className='bold'>Portfolio</span> by MaKayla Mihu</p> 

        <div className='externalLinks'>
            <a href="https://www.linkedin.com/in/makayla-mihu-805448113/" target="_blank"><span className="fa-brands fa-linkedin linkImg">LinkedIn</span></a>
            <a href='https://github.com/makmihu' target="_blank"><span className="fa-brands fa-github linkImg">GitHub</span></a>
        </div>    
      </div>

      <div className='headerMain'>
        <div className='photoContainer'>
          <img src="https://github.com/makmihu/portfolio/blob/main/public/photos/profile-photo-2024.jpg?raw=true"/>
        </div>
        <div className='flexContainer'>
          <div className='wordsContainer'>
            <h1>Hi, I’m</h1>
            <h1>MaKayla Mihu</h1>

            <h3>I'M EXCITED TO CREATE NEW THINGS</h3>
          </div>

          <Contact 
            display={'contact2'}
          />
        </div>
      </div>
    </header>
  )
}