import React from 'react';
import { BrowserRouter as Router  , withRouter } from 'react-router-dom'

 const ContactList = (props) => {
    return (
        <Router>
             <div>

{props.ContactList.map(el=>
    <div key={el.id}>
        <p>{el.name}</p>
        <p>{el.phone}</p>
        <p className="click" onClick={()=>props.history.push("/contact/"+el.id)}>click</p>
    </div>)}
    </div>
    </Router> );
}
 
export default withRouter(ContactList);