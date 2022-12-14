import { useEffect, useState } from 'react';
import './App.css';



function App() {

  const[notification, setNotification] = useState(0);
  useEffect(()=>
  { 
      if(notification>0)
      document.title="You have "+notification+" notifications"
  })

  function sendNotification()
  {
    setNotification(notification+1)
  }

  return (

    <div className='App'>
        <Game />
        <button onClick={sendNotification}>Send Notification</button>

    </div>
  );
