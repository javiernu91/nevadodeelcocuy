import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState('light')

  function handleTheme() {
    console.log('theme')
  }

  return (
    <button className="bg-neutral-100 p-4" onClick={handleTheme}>
      {theme}
    </button>
  )
}