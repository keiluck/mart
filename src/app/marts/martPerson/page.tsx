"use client";
import React from "react";
import { Box, Avatar, Typography, Paper, Stack, Divider } from "@mui/material";
import { Grid } from "@mui/material";
import RedeemIcon from '@mui/icons-material/Redeem';
import { styled } from '@mui/material/styles';


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

  return (
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
  );
}