import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

const Loading = () => {
  return (
    <div className='loader'>

    </div>
  );
};

function App() {
const [isLoading, setIsLoading] = useState(true);
const arr =['0'];

const test = () => {
   arr[0] =  '1' ;
  setIsLoading(true);
  console.log(arr);
}

useEffect(() => {
  
  setTimeout(() => {
    setIsLoading(false);
    console.log(arr);
  },5000);

},arr ); 



  return (
    <div className="App">
       {isLoading && <Loading />}

       <button onClick ={test}>Loading</button>
    </div>
  );
}

export default App;
