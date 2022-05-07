import React, { useState } from 'react'

function CheckLength(event)
{
    console.log(event.length);
    return event.length===6;
}

export const Length = () => {
    const [word,setWord]=useState('');
    return (
    <div>
    <form>
     <input type="text" value={word} onChange={(e)=>setWord(e.target.value)}></input>
     <button type='submit' onClick={() => 
     {
        if(CheckLength(word))
         {
             setWord("Go ahead");
         }
        else
         {
             setWord("Less than 6");
         }
    }
    }>Subint</button>
    </form>
    <p>{word}</p>
    </div>
  )
}
