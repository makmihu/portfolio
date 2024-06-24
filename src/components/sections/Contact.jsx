import React from "react"

export default function Contact(props){
  return(
    <div className={`contactContainer ${props.display}`}>
      <h1>Contact Info</h1>
        
      <p>Email: makmihu@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/makayla-mihu/" target="_blank">linkedin.com/in/makayla-mihu/</a></p>
      <p>View My Resume: <a href="https://docs.google.com/document/d/e/2PACX-1vTs3teHRAj1hpzxUArYZgVTx6ubabnWh4CQI6Sc1XvtxKFWlVd49ZUmCqlgb-_0StooP6ZhTfwSGQls/pub">Resume 2024</a></p>
    </div>
  )
}