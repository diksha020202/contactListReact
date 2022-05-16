import {useState} from 'react'
import React from 'react';
import './App.css';



const initState=  [
  {
    id:1,
    first_name:"Annette",
    last_name: "Murphy",
    phone: "91223456775"
  },
  {
    id:2,
    first_name:"Theresa",
    last_name: "Watson",
    phone: "91223456775"
  },
  {
    id:3,
    first_name:"Cody",
    last_name: "Howard",
    phone: "91223456775"
  },
  {
    id:4,
    first_name:"Max",
    last_name: "Lane",
    phone: "91223456775"
  },
  {
    id:5,
    first_name:"Marvin",
    last_name: "Fisher",
    phone: "91223456775"
  },
  {
    id:6,
    first_name:"Brooklyn",
    last_name: "Mccoy",
    phone: "91223456775"
  }
  
]

function App() {
  const [contactList, setContactList] = useState(initState)
  const handleClick=(name, phone)=>{
      setContactList([
        ...contactList,
        {
          id: contactList[contactList.length-1].id + 1,
          first_name : name,
          last_name : "",
          phone: phone
        }

      ])
  }
  //console.log(contactList)

  // const elem = [ 
  //   React.createElement("div", {}, "Annette"),
  //   React.createElement("div", {}, "Thresa"),
  //   React.createElement("div", {}, "Cody"),
  //   React.createElement("div", {}, "Max"),
  //   React.createElement("div", {}, "Marvin"),
  //   React.createElement("div", {}, "Brooklyn")

  // ]
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact List</h1>
        <AddContact handleClick={handleClick}/>
        <br />
        {contactList.map((item) =>(
         <div key ={item.id} >
      <ContactCard 
      id={item.id}
      name = {item.first_name} 
      phone = {item.phone}/>
         </div>
           
          ))}
        
      </header>
    
    </div>
    
  
  );
 
}

const AddContact = (props) =>{
  const [text, setText] = useState("")
  const [phone, setPhone] = useState("")

const handleClick = () =>{
if (props.handleClick) props.handleClick( text, phone);
setText("");
setPhone("");
}

  return(
    <div>
      <input placeholder='add name' value={text} onChange={(e)=> setText(e.target.value)}/>
      <input placeholder='add number' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
      <button onClick={handleClick}>Add</button>

    </div>

  )
}


const ContactCard = ({name,phone}) =>{
  return (
    <div style={{display: "flex", 
    padding:"1rem", 
    border:"1px solid white"}}
    >
      {name} {"  "} {phone}
      </div>
  )

}




export default App;
