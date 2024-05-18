//ถ้าอยากกำหนดว่า ใบไหนแตกต่างจากใบอื่น ใช้ตรวจเลขใบได้ ถ้าตรงเงื่อนไขจะเป็นรูปนั้นๆ

"use client";

import { useState } from 'react';

export default function AnimationSalt() {

  return (
    <div>
        <div className="center">
          <img src="story.svg"className='w-[200px] fade-in' style={{ animationDelay: '0.1s' }}/>
        </div>
    
        <a href="/" className="fixed bottom-8 tag-button right-6 hover:border-black hover:border-3 hover:bg-gray-400 hover:text-black "> next</a>
    </div>
  );
}
