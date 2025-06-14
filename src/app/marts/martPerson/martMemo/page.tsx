'use client'
import React from 'react'
import {useState,useMemo} from 'react'


const MartMemo = () => {
    const [x,setX]  = useState(0)
    const [y,setY]  = useState(0)

    console.time('xxx')

    let sum = useMemo(() => {
        let sum = 0
        for(let i = 0; i < 10000; i++) {
            sum += y
        }
        return sum
    }, [y])

    // let a = 0
    // for(let j=0; j<10000; j++){
    //     a = a + j
    // }

    console.timeEnd('xxx')

  return (
    <div>
      <h1>x: {x}</h1>
      <h1>y: {y}</h1>
      {/* <h1>a: {a}</h1> */}
      <h1>sum: {sum}</h1>


      <button onClick={() => setX(x + 1)}>x+1</button>
        <button onClick={() => setY(y + 1)}>y+1</button>
    </div>
  )
}

export default MartMemo
