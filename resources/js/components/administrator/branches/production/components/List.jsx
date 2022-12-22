import React, { useState, useEffect } from 'react';
import { Divider, List, Typography } from 'antd';

export function ProductionList(props) {

    return ( 
        <>
       <List.Item>
          <Typography.Text >{props.data.ingredients_name}</Typography.Text>
          <Typography.Text >Quantity: {props.data.quantity}</Typography.Text>
        </List.Item>
        </>
     );
}
