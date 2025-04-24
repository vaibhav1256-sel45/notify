import { useEffect } from "react";
import AppRoutes from "./Routes/AppRoutes";
import {onFirebaseMessage, NotificationPermission} from './firebase.ts'
function App() {
  useEffect(()=>{
 
    NotificationPermission();
    onFirebaseMessage();
},[])
  return (
    <>
      <AppRoutes/>
   
    </>
  );
}

export default App;
