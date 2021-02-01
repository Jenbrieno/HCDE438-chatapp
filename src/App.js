
import { useState } from "react"
import './App.css';
import Textinput from './Textinput';


function App() {
  const [messages, setMessages] = useState([{text:'hello'}])
  return <div className="App">

      <header className = "header">
        <div className = "logo" />
        LetsChat
      </header>

      {/* <div className="message">
        {messages[0].text}
      </div> 
  */}
    <div className = "text">
      <div className = "text1">
        hello this is a message 
      </div>

      <div className = "text1">
        lol
      </div>

      <div className = "text1">
        bye 
      </div>

    </div>

      <Textinput 
        send={(t)=> setMessages([{text:t}])}
      />

    </div>

}

export default App;
