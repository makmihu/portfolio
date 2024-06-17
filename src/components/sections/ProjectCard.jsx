import React from 'react'

export default function ProjectCard(props) {
  const {side, img, name, desc, live, code} = props

  return (
    <div className={`card ${side}`}>
      <div className={`imgContainer`}>
        <img src={img} />
      </div>

      <h1>{name}</h1>

      <p>{desc}</p>

      <div className='btnsContainer'>
        <a href={live} target='_blank'><button className='cardBtn'>View Live</button></a>

        <a href={code} target='_blank'><button className='cardBtn'>View Code</button></a>
      </div>
    </div>
  )
}