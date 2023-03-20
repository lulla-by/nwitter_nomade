import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
function App() {

  const[init, setInit] = useState(false)

  // 여기 authService.currentUser에서는 실제로 로그인된건지 로그아웃된건지 잘 모름
  const [isLoggendIn, setIsLoggedIn] = useState(false); // 해당 값의 반환을 통해서 로그인 여부를 확인 할 수 있음
  console.log(authService.currentUser);
  // setInterval(() => {
  //   console.log(authService.currentUser)
  // }, 2000);
useEffect(()=>{
  authService.onAuthStateChanged((user)=>{
    if(user){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false)
    }
    setInit(true)
    // init이 false라면 router를 숨길것이기 때문에 setInit을 true로
  }
  )
},[])
  return (
    <>
      {init ? <AppRouter isLoggendIn={isLoggendIn} />:"initializing"}
      <footer>&copy; {new Date().getFullYear()}Nwitter</footer>
    </>
  );
}

export default App;
