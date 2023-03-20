import React from 'react'
import { useState } from 'react';

const Home = () => {
  const [nweet,setNwetter] = useState("")
  const onSubmit =(e) =>{
    e.preventDefault()
  }
  const onChange = (e) =>{
    //e안에 있는 target안에있는 value를 달라고 하는 것!
    const {target:{value}} = e;
    setNwetter(value)
    console.log(value)
  }
  return (
    <>
    <form onSubmit={onSubmit}>
      <input value={nweet} onChange={onChange} type="text" placeholder="what's  on your mind" maxLength={120}/>
      <input type="submit" vlaue="Nwitter"/>
    </form>
    </>
  )
}

export default Home