import {useState} from 'react'

function NamePicker(props){
    const[eidtName, setEditName] = useState(false)
    const[name, setName] = useState(
        localStorage.getItem('name') || ''
    )

    function nameInput(){
        props.set(name)
        setEditName(false)
        localStorage.setItem('name',name)  
    }

    function KeyPress(e){
        if(e.key==='Enter'){
            nameInput()
        }
    }

    if (eidtName) {
        return <div className = "name-input">
            <input className = "input1"
            value = {name}
            onChange = {e=> setName(e.target.value)} 
            onKeyPress= {KeyPress}
            />

            <button className = "button-after"
                onClick={nameInput}>
            </button>

        </div>
    }
   
    return <div className = "name-input">
        <div>{name}</div>
        <button className = "button-before"
            onClick={()=> setEditName(true)}>
        </button>

    </div>
}

export default NamePicker
