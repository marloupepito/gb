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
                color: props.quantity >= 5?'#3f8600':'#cf1322',
              }}
              prefix={props.quantity >= 5?<CheckCircleOutlined />:<AlertOutlined />}
              // suffix="%"
            />
            {props.bind}
          </Card>
        </div>
    </>
   );
}

