import React from 'react';
import MySwiper from './_components/MySwiper';
import TabSider from './_components/TabSider';
import PicDemo from './_components/PicDemo';

export default function MartHome() {
  return (
    <>
    <div>
        <MySwiper />
        <TabSider />
        <PicDemo />
    </div>
    </>
  );
}