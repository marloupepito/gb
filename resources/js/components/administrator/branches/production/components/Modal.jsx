import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { GetProductionCode } from '../../../api/Production';
import { ProductionList } from './List';
import { Divider, List, Typography } from 'antd';
const CodeModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const codeIngredients =GetProductionCode(props.data.random_id).props.children




  const showModal = () => {
    setIsModalOpen(true);  
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button block type="dashed" size="large" danger onClick={showModal}>
        {props.data.code_name}
      </Button>
      <Modal title={props.data.code_name} open={isModalOpen} onOk={handleOk} maskClosable={false} onCancel={handleCancel}>
      <List
      size="small"
    >
      <List.Item>
          <Typography.Text ><b>Ingredients</b></Typography.Text>
          <Typography.Text ><b>Quantity</b></Typography.Text>
          <Typography.Text ><b>Stock</b></Typography.Text>
        </List.Item>
         {codeIngredients.map(res=><ProductionList key={res.id} data={res}/>)}
      </List>
       
      </Modal>
    </>
  );
};
export default CodeModal;