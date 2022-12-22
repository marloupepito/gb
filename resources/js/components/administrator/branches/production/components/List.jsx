import React, { useState, useEffect } from 'react';
import { Divider, List, Typography } from 'antd';
import axios from 'axios';

export function ProductionList(props) {
    const [data,setData] = useState('')
    useEffect(() => {
        axios.post('/get_every_ingredients',{
            id:props.data.ingredients_name.split('|')[1]
        })
        .then(res=>{
            setData(res.data.status.ingredients_quantity)
        })
    }, []);
    return ( 
        <>
       <List.Item>
          <Typography.Text >{props.data.ingredients_name.split('|')[0]}</Typography.Text>
          <Typography.Text >{props.data.quantity}</Typography.Text>
          <Typography.Text >{data}</Typography.Text>
        </List.Item>
        </>
     );
}
