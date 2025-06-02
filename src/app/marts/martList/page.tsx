"use client";
import React, { useState } from 'react';
import {
  Box, Card, CardMedia, CardContent, Typography, Button, Stack, Badge, Tabs, Tab,
  TextField, Dialog, DialogTitle, DialogContent, IconButton
} from '@mui/material';
import { useRouter } from 'next/navigation';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SearchBox from './_components/SearchBox'; // 引入搜索组件
import Link from 'next/link';
// 分类和商品数据
const categories = [
  { id: 0, name: '全部' },
  { id: 1, name: '数码' },
  { id: 2, name: '服饰' },
  { id: 3, name: '美食' },
  { id: 4, name: '家居' },
  { id: 5, name: '运动' },
];

const allProducts = [
  { id: 1, categoryId: 1, name: '手机', desc: '高性能智能手机', img: 'https://source.unsplash.com/random/200x200?sig=1', price: 1999 },
  { id: 2, categoryId: 1, name: '耳机', desc: '降噪蓝牙耳机', img: 'https://source.unsplash.com/random/200x200?sig=2', price: 299 },
  { id: 3, categoryId: 2, name: 'T恤', desc: '纯棉舒适T恤', img: 'https://source.unsplash.com/random/200x200?sig=3', price: 99 },
  { id: 4, categoryId: 2, name: '牛仔裤', desc: '时尚牛仔裤', img: 'https://source.unsplash.com/random/200x200?sig=4', price: 199 },
  { id: 5, categoryId: 3, name: '蛋糕', desc: '美味蛋糕', img: 'https://source.unsplash.com/random/200x200?sig=5', price: 59 },
  { id: 6, categoryId: 4, name: '沙发', desc: '舒适沙发', img: 'https://source.unsplash.com/random/200x200?sig=6', price: 999 },
  { id: 7, categoryId: 5, name: '篮球', desc: '专业篮球', img: 'https://source.unsplash.com/random/200x200?sig=7', price: 129 },
];

export default function Page() {
  const [cart, setCart] = useState<{ [id: number]: number }>({});
  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // 商品筛选
  const products = allProducts.filter(p =>
    (category === 0 || p.categoryId === category) &&
    (p.name.includes(search) || p.desc.includes(search))
  );

  // 购物车统计
  const totalCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = allProducts.reduce((sum, p) => sum + (cart[p.id] || 0) * p.price, 0);

  // 购物车弹窗商品
  const cartProducts = allProducts.filter(p => cart[p.id]);

  // 购物车操作
  const addToCart = (id: number) => setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const removeFromCart = (id: number) =>
    setCart(prev => {
      const next = { ...prev };
      if (next[id] > 1) next[id] -= 1;
      else delete next[id];
      return next;
    });
  // 删除购物车商品
const deleteFromCart = (id: number) =>
  setCart(prev => {
    const next = { ...prev };
    delete next[id];
    return next;
  });


  // 跳转详情
  //const goToDetail = (id: number) => router.push(`/marts/martList/${id}/detail`);
 // const goToDetail = (id: number) => router.push(`/marts/martList/${id}`);


  return (
    <>
    {/* <SearchBox /> */}
    <Box sx={{ p: 2, pb: 10 }}>
      {/* 搜索框 */}
      {/* <TextField
        fullWidth
        placeholder="搜索商品"
        value={search}
        onChange={e => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      /> */}
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ 'aria-label': 'search google maps' }}
              value={search}
              onChange={e => setSearch(e.target.value)}

            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

      {/* 分类滑动 */}
      <Tabs
        value={category}
        onChange={(_, val) => setCategory(val)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 2 }}
      >
        {categories.map(cat => (
          <Tab key={cat.id} label={cat.name} value={cat.id} />
        ))}
      </Tabs>

      {/* 商品展示 */}
      <Stack direction="row"  flexWrap="wrap">
        {products.map(prod => (
          <Card key={prod.id} sx={{ width: 150, cursor: 'pointer', m: 2, boxShadow: 3, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <Link href={`/marts/martList/${prod.id}`}>
            <CardMedia
              component="img"
              height="120"
              image={prod.img}
              alt={prod.name}
              // onClick={() => goToDetail(prod.id)}
            />
            </Link>
            <CardContent>
              <Typography variant="subtitle1">{prod.name}</Typography>
              <Typography variant="body2" color="text.secondary">{prod.desc}</Typography>
              <Typography color="text.secondary">￥{prod.price}</Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{ mt: 1 }}
                onClick={() => addToCart(prod.id)}
              >
                加入购物车
              </Button>
            </CardContent>
          </Card>
        ))}
        {products.length === 0 && (
          <Typography sx={{ m: 2 }}>暂无商品</Typography>
        )}
      </Stack>

      {/* 底部统计 */}
      <Box 
        sx={{
          position: 'fixed',
          right: 16,
          bottom: 100,
          zIndex: 1200,
          bgcolor: '#fff',
          boxShadow: 3,
          borderRadius: 4,
          p: 1.5,
          display: 'flex',
          alignItems: 'center',
          minWidth: 160,
        }}
      >
        <Badge badgeContent={totalCount} color="primary">
          <Button variant="contained" onClick={() => setOpen(true)}>统计</Button>
        </Badge>
        <Typography variant="subtitle1">总价：￥{totalPrice}</Typography>
      </Box>

      {/* 购物车弹窗 */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>购物车统计</DialogTitle>
        <DialogContent>
          {cartProducts.length === 0 && <Typography>购物车为空</Typography>}
          {cartProducts.map(prod => (
            <Stack key={prod.id} direction="row" alignItems="center" spacing={2} sx={{ my: 1 }}>
              <CardMedia component="img" image={prod.img} alt={prod.name} sx={{ width: 60, height: 60, borderRadius: 1 }} />
              <Box sx={{ flex: 1 }}>
                <Typography>{prod.name}</Typography>
                <Typography color="text.secondary">￥{prod.price}</Typography>
              </Box>
              <IconButton onClick={() => removeFromCart(prod.id)}><RemoveIcon /></IconButton>
              <Typography>{cart[prod.id]}</Typography>
              <IconButton onClick={() => addToCart(prod.id)}><AddIcon /></IconButton>
                    <IconButton color="error" onClick={() => deleteFromCart(prod.id)}>
          <DeleteIcon />
        </IconButton>
            </Stack>
          ))}
          {cartProducts.length > 0 && (
            <Typography sx={{ mt: 2 }}>总价：￥{totalPrice}</Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
    </>
  );
}