
import React from 'react';

const Dataui = ( props ) => {

 const {usersData} = props
 return (
   <div>
     <h5>{usersData.name}</h5>
     <h5>{usersData.username}</h5>
     <h5>{usersData.email}</h5>
     <h5>{usersData.address.city}, {usersData.address.zipcode}</h5>
     <hr />
   </div>
 )
}

export default Dataui;
