import React,{useState} from 'react';
import { CheckCircleOutlined, AlertOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';
import { DownOutlined, EditOutlined,DeleteTwoTone } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Edit from './Edit'

export default function IngredientsCard(props) {
 const [loadings, setLoadings] = useState([]);



const items = [
  {
    key: '1',
    label: (
      <a>
       <Edit />
      </a>
    ),
     icon: <EditOutlined />,
  },
  {
    key: '2',
    label: (
      <a >
       Delete
      </a>
    ),
    icon: <DeleteTwoTone />,
  },
];


  return ( 
    <>
      <div className="site-statistic-demo-card">  
          <Card
             title={props.title}
          size="small"
           extra={<div><Edit data={props}/><a href="#">
                  <DeleteTwoTone twoToneColor="#eb2f96"/>
                  </a></div>}>
       {/*    <Edit />
            <a href="#">
       Delete
      </a>*/}
       {/*    <Dropdown
          className="offset-md-11"
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <DownOutlined/>
                </Space>
              </a>
            </Dropdown>*/}

            <Statistic
           
              value={props.quantity}
              // precision={0}
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

