import { useState } from 'react'
import Card from './components/Card'
import NewsLetterPage from './components/Newsletter-page'
import ThankYou from "./components/thankYou"
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <Card>
      {showThankYou ? (<ThankYou email={email} setShowThankYou={setShowThankYou} />) : (<NewsLetterPage setShowThankYou={setShowThankYou} email={email} setEmail={setEmail}  />)}
    </Card>
  )
}

export default App
