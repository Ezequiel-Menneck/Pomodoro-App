import './App.css'

import Header from './components/Header/Header'
import Timer from './components/Timer/Timer'
import Divisor from './components/Divisor/Divisor'

const App = () => {
  return (
    <div className='main'>
      <Header />
      <Divisor />
      <Timer />
    </div>
  )
}

export default App