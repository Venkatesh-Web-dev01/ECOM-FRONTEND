import {usestate} from 'react'
import './App.css'
import Header from './Header'
import Products from './Products'
function App() {
  const [first, setfirst] = usestate(second)

  return (

    <>
      <Header/>
     <Products/>
     <butto>submit</butto>  
    </>
  )
}

export default App
