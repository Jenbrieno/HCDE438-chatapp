import { useState } from "react"



function Textinput(props) {
    const[text, setText] = useState('')

    function sendMessage(){
        if(text==='') return
        props.send(text)
        setText('')
    }

    function KeyPress(e){
        if(e.key==='Enter'){
            sendMessage()
        }
    }

    return <footer className = "text-input">
        <input className = "input"
            placeholder = "   start typing!"
            value = {text}
            onChange = {e=> setText(e.target.value)}
            onKeyPress= {KeyPress}
        />
  
        <button className = "button"
            onClick={sendMessage}>
        </button>
      
    </footer>
}

export default Textinput