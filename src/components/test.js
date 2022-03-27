import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Test = () => {


useEffect(()=>{
    axios(
        'https://api.henrikdev.xyz/valorant/v1/leaderboard/na?'
        ).then(res=>console.log(res.data.slice(0,10)))
},[])


  return (
    <div>test</div>
  )
}

export default Test