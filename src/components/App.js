import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
function App() {

  const [isLoggendIn, seIsLoggedIn] = useState(authService.currentUser); // 해당 값의 반환을 통해서 로그인 여부를 확인 할 수 있음
  console.log(authService.currentUser);
  return (
    <>
      <AppRouter isLoggendIn={isLoggendIn} />
      <footer>&copy; {new Date().getFullYear()}Nwitter</footer>
    </>
  );
}

export default App;
