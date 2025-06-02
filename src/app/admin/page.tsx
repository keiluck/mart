"use client";
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加登录/注册逻辑
    router.push("/marts/martHome");
  };

  const handleCancel = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Paper sx={{ p: 4, width: 320 }}>
        <Typography variant="h5" gutterBottom align="center">
          登录 / 注册
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="邮箱"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <TextField
            label="密码"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              提交
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              取消
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}