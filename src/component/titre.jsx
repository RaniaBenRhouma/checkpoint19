import React from 'react';
const Titre = (props) => {
    return ( 
        <div>
{props.ContactList.filter(el=>el.id==props.match.params.id).map(el=><p>{`Hello mr : ${el.name}`}</p>)}
       <p onClick={()=>props.history.push("/")}>Return</p>
        </div>
     );
}
 
export default Titre;