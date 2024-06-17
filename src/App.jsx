import React from 'react'
import Header from './components/sections/Header'
import ProjectCard from './components/sections/ProjectCard'

export default function App() {
  return (
    <>
      <Header />

      <div className='projectsContainer'>
        <div className='projectsHeader'>
          <h1>My Projects</h1>
          <p>Note: If you are viewing them live they do have a spin down on render, so they may take a minute to load initially.</p>
        </div>

        <ProjectCard 
          side={"left"}
          img={'/src/components/photos/mikkie-makes-screenshot.JPG'}
          name={"Mikkie Makes Shop"}
          desc={"This is a personal project that I have been working on and am continuing to build on as I learn to code more an more. I love to crochet and would eventually love to be able to not have my primary shop be on etsy."}
          live={"https://mikkie-makes.onrender.com/"}
          code={'https://github.com/makmihu/mikkie-makes'}
        />

        <ProjectCard 
          side={"right"}
          img={"/src/components/photos/rock-the-vote-screenshot.JPG"}
          name={"Rock The Vote"}
          desc={"Rock the Vote (RTV) is a full stack application that allows a user to sign up, and gain access to post and vote or comment on other users post. Feel free to create your own user, or use our guest user 'guest' with the password 'guest'." }
          live={'https://rock-the-vote-edua.onrender.com/'}
          code={'https://github.com/makmihu/rock-the-vote'}
        />
      </div>
    </>
  )
}