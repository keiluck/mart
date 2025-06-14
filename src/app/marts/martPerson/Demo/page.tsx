'use client'
import React, { useReducer, useState } from 'react'


/**
 * 
 * @param state 操作之前原来的值
 * 
 * @param action = {type:具体操作名称，payload：操作附带具体值}
 * 
    * 组件
    * 状态数据
    * 操作状态数据的方法
 */

function useCount(){
    function reducer(state: any, action: { type: any; payload: any }){
    switch(action.type){
        case 'inc':
            return {
                ...state,
                count: state.count + action.payload
            }
        case 'dec':
            return {
                ...state,
                count: state.count - action.payload
            }
        case 'rename': 
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }

}
return useReducer(reducer,{name: '张三', count: 100}) // 初始值 

}




const Demo = () => {
   // const [count, setCount] = useState(0)
   const [fruit, dispatch] = useCount()

  return (
    <div>
        <h1>{fruit.name}:{fruit.count}</h1>
        <button onClick={()=> dispatch({type:'inc',payload: 1} )}>加</button>
        <button onClick={()=> dispatch({type:'dec',payload: 1} )}>减</button>
        <button onClick={()=> dispatch({type:'rename',payload: '李四'} )}>改名</button>
       
    </div>
  )
}



export default Demo
