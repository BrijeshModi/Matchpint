import React, {useState,useEffect} from 'react';
import Dataui from './Dataui'





   

const ExternalAPI = ()=>{

 const [data, setData] = useState([]);
 // const [isLoading, setIsLoading] = useState(true)

 useEffect(()=>{  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseData) => setData(responseData.splice(0, 10)))
 },[]);

 return (
   <div>
     <h2>User Data from Exteranl API : - </h2>
     {data?.map((item, i) => (
       <Dataui key={i} usersData={item} />
     ))}
   </div>
 )
}

export default ExternalAPI;

