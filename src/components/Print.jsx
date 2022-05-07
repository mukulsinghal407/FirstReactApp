import React from 'react'
import compulsaryData from "./compulsaryData"
import {Output} from "./Output" 
import {deptData} from "./departmentData"

const PrintComp = (obj) =>
{
 return(<Output key={obj.id} value={obj.question}/>)
}

export const Print = () => {
  return (
    <div>
      {compulsaryData.map(PrintComp)}
      {deptData.map(PrintComp)}
    </div>
  )
}
