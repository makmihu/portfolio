import React from "react"

export default function Contact(props){
  return(
    <div className={`contactContainer ${props.display}`}>
      <h1>Contact Info</h1>
        
      <p>Email: makmihu@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/makayla-mihu/" target="_blank">linkedin.com/in/makayla-mihu/</a></p>
      <p>View My Resume: <a href="https://docs.google.com/document/d/1-YXz7E367nEIHiXC_TiElzNeFC1sE0wH7VJGmRv6v6w/edit?usp=sharing">Resume 2024</a></p>
      <p>See my Figma Design: <a href="https://www.figma.com/design/FsPKaxbOOgtqYy6ByLXR38/Mikkie-Makes?node-id=0-1&t=3dxNV3hhz4LvWWIu-1" target="_blank">Mikkie Makes Figma Design</a></p>
    </div>
  )
}