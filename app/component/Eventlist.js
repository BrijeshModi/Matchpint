import React from 'react';
import EventData from '../Localdata/eventsdetails.json'


function Eventlist() {
 return (
   <div>
     <h2>User Data from Local JSON File : - </h2>
     {EventData.map((post) => {
       return (
         <div key={post.id}>
           <h4>{post.sport}</h4>
           <p>{post.country}</p>
           <p>{post.team}</p>
           <hr />
         </div>
       )
     })}
   </div>
 )
}

export default Eventlist
