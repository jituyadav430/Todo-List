import React from 'react'
import { useState } from 'react'

function Todo() {
    const [data,setData]=useState('');
    const [list,setList]=useState([]);


    function changeHandler(e){
        setData(e.target.value);
    }

    function add(){
        if(data!='')
        setList((d)=>{
            return [...d,data];
        })
        setData('');
    }
    function remove(i){
       const  newlist=[...list];
       newlist.splice(i,1);
         setList(newlist);
    }
  return (
   <>
     <div className='main'>
        <div className='row1'>
            <input type="text" value={data} onChange={changeHandler} placeholder='Add items' />
            <button type="button" onClick={add}>add</button>
        </div>
        <div className='row2'>
            {
                list!=[] && list.map((d,i)=>{
                    return (
                        <p key={i} onClick={()=>remove(i)}>{d}</p>
                    )
                })
            }
        </div>
     </div>
   </>
  )
}

export default Todo