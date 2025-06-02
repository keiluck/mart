"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { Box, Typography, CardMedia, Tabs, Tab, Button, IconButton, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// 示例商品数据
const allProducts = [
  { id: 1, categoryId: 1, name: '手机', desc: '高性能智能手机', img: 'https://source.unsplash.com/random/400x400?sig=1', price: 1999, info: '手机详细信息', other: '手机其他信息' },
  { id: 2, categoryId: 1, name: '耳机', desc: '降噪蓝牙耳机', img: 'https://source.unsplash.com/random/400x400?sig=2', price: 299, info: '耳机详细信息', other: '耳机其他信息' },
  // ... 其他商品
];

export default function Page() {
  const params = useParams();
  const id = Number(params.id);
  const product = allProducts.find(p => p.id === id);

  const [tab, setTab] = useState(0);
  const [liked, setLiked] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  if (!product) return <Typography sx={{ p: 4 }}>未找到商品</Typography>;

  return (
    <Box sx={{ maxWidth: 480, mx: 'auto', p: 2 }}>
      <Typography variant="h5" gutterBottom>{product.name}</Typography>
      <CardMedia
        component="img"
        image={product.img}
        alt={product.name}
        sx={{ width: '100%', height: 300, objectFit: 'contain', borderRadius: 2, mb: 2 }}
      />
      <Typography color="text.secondary" gutterBottom>￥{product.price}</Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={() => setCartCount(cartCount + 1)}
        >
          加入购物车
        </Button>
        <IconButton color={liked ? "error" : "default"} onClick={() => setLiked(l => !l)}>
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Stack>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
        <Tab label="商品信息" />
        <Tab label="其他信息" />
      </Tabs>
      {tab === 0 && (
        <Box>
          <Typography>{product.info || product.desc}</Typography>
        </Box>
      )}
      {tab === 1 && (
        <Box>
          <Typography>{product.other || "暂无其他信息"}</Typography>
        </Box>
      )}
    </Box>
  );
}

