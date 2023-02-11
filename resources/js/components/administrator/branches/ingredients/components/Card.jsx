import React from 'react';
import { CheckCircleOutlined, AlertOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';

export default function IngredientsCard(props) {
 
  return ( 
    <>
      <div className="site-statistic-demo-card">  
          <Card>
            <Statistic
              title={props.title}
              value={props.quantity}
              precision={0}
              valueStyle={{
                color: parseInt(props.quantity) >= parseInt(props.notify)?'#3f8600':'#cf1322',
              }}
              prefix={parseInt(props.quantity) >= parseInt(props.notify)?<CheckCircleOutlined />:<AlertOutlined />}
              // suffix="%"
            />
            {props.bind}
          </Card>
        </div>
    </>
   );
}

