// Fuck weixin
'use client';

import { useEffect, useState } from 'react';

export default function WechatBanner() {
  const [isWechat, setIsWechat] = useState(false);
  
  useEffect(() => {
    // 检测是否在微信浏览器中
    const ua = navigator.userAgent.toLowerCase();
    const isWeixinBrowser = /micromessenger/i.test(ua);
    setIsWechat(isWeixinBrowser);
  }, []);
  
  if (!isWechat) return null;
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-orange-500 text-white px-4 py-3 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg 
            className="h-5 w-5 mr-2" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
          <div>
            <p className="font-medium">检测到您正在使用微信浏览器</p>
            <p className="text-sm">微信内无法直接下载ICS文件，请点击右上角&quot;...&quot;，选择`在浏览器中打开`</p>
          </div>
        </div>
        <button 
          onClick={() => setIsWechat(false)}
          className="ml-4 bg-orange-600 p-1 rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          <span className="sr-only">关闭</span>
          <svg 
            className="h-5 w-5" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}