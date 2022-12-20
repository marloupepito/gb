import React, { useState, useEffect } from 'react';
import { Button, notification, Space } from 'antd';
const key = 'updatable';
const type ='success'

export function AppNotification() {
  const [api, contextHolder] = notification.useNotification();
  useEffect(() => {
   api[type]({
     key,
     message: 'Notification Title',
     });
  }, []);
   return (
     <>
       {contextHolder}
     </>
   );
}

