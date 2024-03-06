import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button color="primary" />
        <Button color="secondary" />
        <Button color="sucess" />
        <Button color="danger" />
        <Button />
      </div>
    </>
  )
}

