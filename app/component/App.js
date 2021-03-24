import React from 'react';
import Eventlist from './Eventlist';


import ExternalAPI from './ExternalAPI'



const App = ()=>{

 return (
   <React.Fragment>
       <ExternalAPI />
       <Eventlist/>
   </React.Fragment>
 )
}

export default App;