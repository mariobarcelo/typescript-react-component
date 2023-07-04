import { JSX } from 'react'
import applusLogo from '@/assets/applus-laboratories-logo.png'

// Styles
import '@/styles/App.css'

const App = () : JSX.Element => {
  return (
    <>
      <div>
        <a href="https://appluslaboratories.com" target="_blank">
          <img src={applusLogo} className="h-96" alt="Applus+ Laboratories Logo" />
        </a>
      </div>
      <h1>Applus React Assessments</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
