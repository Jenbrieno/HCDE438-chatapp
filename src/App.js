
import { useState } from "react"
import './App.css';
import Textinput from './Textinput';
import Message from './Message'
import NamePicker from './NamePicker';
import {db, useDB} from './db'


function App() {
  
  const messages = useDB()
  const[name, setName] = useState(
    localStorage.getItem('name') || ''
  )

  return <div className="App">

      <header className = "header">
        <div className = "logo" />
        LetsChat
        <NamePicker set = {setName} />
      </header>
    
      <div className="messages">
        {messages.map((m,i)=> {
            const isMe = m.name===name  
            return <Message key={i} {...m} isMe={isMe} />
        })}
      </div>

      <Textinput 
      send={(t)=> db.send({text:t, name:name, date:new Date()})}
      />

    
  
  </div>

}

export default App;
