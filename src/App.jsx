import './style.css'
import React from 'react'

export default function App() {
  return (
    <main>
      <p>Make sure the console is open.</p>
      <Button />
      <TextInput />
      <HoverTarget />
    </main>
  )
}

function Button() {
  const handleClick = () => {
    console.log(`Clicked!`)
  }

  return <button onClick={handleClick}>Click me!</button>
}

function TextInput() {
  const handleFocus = (event) => {
    console.log(event)
  }

  return <input onFocus={handleFocus} type="text" defaultValue="Focus me!" />
}

function HoverTarget() {
  return (
    <div onMouseOver={() => console.log('You hovered over me!')}>
      Hover over me!
    </div>
  )
}
