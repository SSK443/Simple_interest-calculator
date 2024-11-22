
import { Button, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  const[interest,setInterset]=useState(0)
  const[principal,setPrincipal]=useState(0)
  const[rate,setRate]=useState(0)
  const[time,setTime]=useState(0)
  const[principalinvalid,setPrincipalInvalid]=useState(true)
  const [rateinvalid, setRateInvalid] = useState(true)
  const [timeinvalid, setTimeInvalid] = useState(true)
  
  

  // function of reset button
  const handleReset=()=>{
    
  }
  const handleValidation=(tag)=>{
    console.log(tag);
    const{value,name}=tag
    console.log(value,name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^\d*\.?\d+$/)){
      //valid
      if (name =='principal'){
        setPrincipal(value)
        setPrincipalInvalid(true)
      }else if(name=="rate"){
        setRateInvalid(true)
        setRate(value)
      }else if(name=="time"){
        setTime(value)
        setTimeInvalid(true)
      }
    }else{
      //invalid
      if (name == 'principal') {
        setPrincipal(value)
        setPrincipalInvalid(false)
      } else if (name == "rate") {
        setRate(value)
        setRateInvalid(false)
      } else if (name == "time") {
        setTime(value)
        setTimeInvalid(false)
      }
    }

    
    
    
    
  }




  return (
    <>
      <div className=" flex justify-center items-center h-screen w-full bg-blend-darken bg-black ">
        <div className="row h-fit w-380px bg-white rounded-md font-display grid grid-cols-1  justify-items-center gap-2 p-10 items-start">


          <h1 className='text-3xl'>Simple Interest Calculator</h1>
          <p>Calculator your simple interest easily</p>
          <div className='bg-yellow-300 w-[300px] h-[100px] text-white flex items-center  flex-col justify-center '>
            <h1 className='text-5xl'>₹ {interest}</h1>
            <p>Total interest</p>
          </div>
          <form className='flex flex-col justify-center  items-start w-fit h-fit gap-3 mt-4'>
            <TextField className='w-[300px]' id="outlined-basic" label=" ₹ Principal amount" variant="outlined"  value={principal||""} onChange={tag=>handleValidation(tag.target)} name='principal'/>
              {!principalinvalid &&<div className='mt-1 text-left p-1'><p className='text-red-600'>* Invalid user data</p></div>}
            <TextField className='w-[300px]' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" value={rate || ""} onChange={tag => handleValidation(tag.target)} name='rate' />
            {!rateinvalid && <div className='mt-1 text-left p-1'><p className='text-red-600'> * Invalid user data</p></div>}

            <TextField className='w-[300px]' id="outlined-basic" label="Time period (yr)" variant="outlined" value={time || ""} onChange={tag => handleValidation(tag.target)} name='time' />
            {!timeinvalid &&<div className='mt-1 text-left p-1'><p className='text-red-600'>* Invalid user data</p></div>}

            <div className='w-[300px] h-fit flex justify-center gap-2 items-center' >
              <Button className='w-[150px]  h-[50px] ' variant="contained" disabled={!principalinvalid || !rateinvalid || !timeinvalid }>Calculate</Button>
              <Button className='w-[150px] h-[50px] ' variant="outlined" onClick={()=>handleReset()}>Reset</Button></div>
          </form>


        </div>
      </div>
    </>
  )
}

export default App
