import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="sucess" />
        <Button variant="danger" />
        <Button />
      </div>
    </>
  )
}

