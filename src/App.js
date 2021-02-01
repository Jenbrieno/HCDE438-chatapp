
import { useState } from "react"
import './App.css';
import Textinput from './Textinput';
import Message from './Message'


function App() {
  const [messages, setMessages] = useState([])
  return <div className="App">

      <header className = "header">
        <div className = "logo" />
        LetsChat
      </header>

    
      <div className="messages">
        {messages.map((m,i)=> {
          return <Message key={i} {...m} />
        })}
      </div>

    <Textinput 
      send={(t)=> setMessages( [{text:t}, ...messages] )}
    />

  </div>

  



}

export default App;
