import './App.css'
import AuthGate from './components/AuthGate/AuthGate'
import Home from './pages/Home'

function App() {
   return (
      <AuthGate>
         <Home />
      </AuthGate>
   )
}

export default App
