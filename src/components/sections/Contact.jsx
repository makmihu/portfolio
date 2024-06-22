import React from "react"

export default function Contact(props){
  return(
    <div className={`contactContainer ${props.display}`}>
      <h1>Contact Info</h1>
        
      <p>Email: makmihu@gmail.com</p>
      <p>LinkedIn:<a href="https://www.linkedin.com/in/makayla-mihu/" target="_blank">linkedin.com/in/makayla-mihu/</a></p>
    </div>
  )
}