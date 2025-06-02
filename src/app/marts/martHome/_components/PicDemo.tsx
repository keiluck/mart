"use client";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image';

export default function PicDemo() {
  return (
    <div style={{ paddingBottom: 50, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 15 }}>精选图片</h2>
        <ImageList sx={{ width: '100%', height: 300 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Image
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            width={248}
            height={164}
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: 8}}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>

  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },

  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];
