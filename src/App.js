import Header from './components/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  )
}

export default App