"use client";
import React from "react";
import {useState,createContext,useContext} from "react";
import { Box, Avatar, Typography, Paper, Stack, Divider } from "@mui/material";
import { Grid } from "@mui/material";
import RedeemIcon from '@mui/icons-material/Redeem';
import { styled } from '@mui/material/styles';
import Demo from "./Demo/page";
import Todo from "./Todo/page";
import MartMemo from "./martMemo/page";
import ThreeLink from "./ThreeLink/page";
import Select from "./Select/page";



type MyContextType = {
  mycount: number;
  setMycount: React.Dispatch<React.SetStateAction<number>>;
};

const MyContext = createContext<MyContextType>({
  mycount: 0,
  setMycount: () => {},
});


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function　MyTest(){
  let a = 1
  let home = <a href="http://163.com">hello</a>
  let flag = false;
  let age = 18;

  let sex = 'men';
  let content 
  if(sex === 'men'){
    content = 'men person'
  }else {
    content = 'women preson'
  }

  let  [count,setCount] = useState(0);
  const handClick = () => {
    setCount(count + 2);
  }
  return(
    <>
    <div>
      {content}
      {home}
      { a + 1}
      {'hello world'}
      {flag ? <p> hello</p> : <p>yes</p>}
      { age >= 18 ? 'men' : 'child'}
      <button onClick={handClick}>点击{count}</button>
    </div>
    </>
  )
}


function MyList (){
  const  list = [1,2,3 ,'q','b','c']

  return (
    <>
    <ul>
      {
        list.map((item,index) => {
          return <li key={index}>{item}</li>
        })
      }
    </ul>
    </>
  )
}

function Child(){
  const {mycount, setMycount} = useContext(MyContext);

  return(
    <>
    <h3>child - {mycount}</h3>
     <button onClick={() => setMycount(mycount + 1)}>增加</button>
    
    </>
  )
}

function Parent(){
  const {mycount, setMycount} = useContext(MyContext);

  return (
    <>
    <h2>Parent : {mycount}</h2>
    <Child></Child>
    </>
  )
}

export default function MartPerson() {
  // 示例数据
  const user = {
    avatar: "https://source.unsplash.com/random/100x100?face",
    nickname: "小明",
    level: "VIP 3",
    email: "xiaoming@example.com",
    phone: "138****8888",
    regTime: "2024-01-01",
  };

  const [mycount, setMycount] = useState(0);

  return (
    <>
    <Select />
    <ThreeLink />
    <Todo />
    <MartMemo />
    <Demo />
    <Box sx={{ maxWidth: 420, mx: "auto", p: 2 , flexGrou:1 }}>
      {/* 用户信息 */}
      <Paper sx={{ p: 3, mb: 2 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar src={user.avatar} sx={{ width: 64, height: 64 }} />
          <Box>
            <Typography variant="h6">{user.nickname}</Typography>
            <Typography color="text.secondary" fontSize={14}>等级：{user.level}</Typography>
          </Box>
        </Stack>
        <Box sx={{ mt: 2, ml: 1 }}>
          <Typography color="text.secondary" fontSize={14}>邮箱：{user.email}</Typography>
          <Typography color="text.secondary" fontSize={14}>电话：{user.phone}</Typography>
          <Typography color="text.secondary" fontSize={14}>注册时间：{user.regTime}</Typography>
        </Box>
      </Paper>

      {/* 分栏功能区 */}
      <Paper sx={{ p: 2 }}>
            <Stack alignItems="center" spacing={1}>
              <RedeemIcon color="primary" />
              <Typography fontSize={14}>订单</Typography>
            </Stack>     
      </Paper>

    </Box>

   
    <div>
      {/* 配置对象并传植 */}
      <MyContext.Provider value={{mycount, setMycount}}>

      <h1>old:{mycount}</h1>
      <Parent />

      </MyContext.Provider>

      <MyTest />
      <MyList />

      
    


    </div>
    </>
  );
}