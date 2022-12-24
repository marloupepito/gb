import React, { useState, useEffect } from 'react';
import { Divider, List, Typography } from 'antd';
import axios from 'axios';

export function ProductionList(props) {
    return ( 
        <>
          <tr>
            <th scope="row">{props.data.ingredients_name}</th>
            <td className='float-right'>{props.data.bind_name}</td>
            <td>{props.data.quantity }</td>
            <td>{props.data.ingredients_quantity}</td>
            <td>{props.data.ingredients_quantity - props.data.quantity}</td>
          </tr>
        {/* className={data <= 10 ?'danger':''} */}
        </>
     );
}
