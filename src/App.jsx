
import './App.css'
import data from "./data"
import Card from "./Card"

function App() {

  return (
    <>
      {data.map((item, index) => (
        <Card item={item} index={index} />
      ))}
    </>
  )
}

export default App
