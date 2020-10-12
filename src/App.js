import React,{useState} from 'react'
import { BrowserRouter as Router ,Route } from 'react-router-dom'
import ContactList from './component/ContactList'
import Titre from './component/titre.jsx'

import "./App.css"

const App = (props) => {

  let contacts=[{id:0,name:"ali",phone:21212121},{id:1,name:"salah",phone:31313131},{id:2,name:"sami",phone:41414141}]
const [ContactList1, setContactList] = useState(contacts)
  return ( 
    <Router>
  <div>

<Route exact path="/" component={()=><ContactList ContactList={ContactList1}/>}/>
<Route path="/contact/:id" component={(props)=><Titre {...props} ContactList={ContactList1}/>}/>
  </div></Router> );
}
 
export default App;