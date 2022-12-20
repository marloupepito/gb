import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Form, Input, Select,InputNumber } from 'antd';
const { Option } = Select;



const IngredientsModal = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };


  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <>
      <Button block size="large" type="primary" onClick={showModal}>
        Create Ingredients
      </Button>
      <Modal title="Create Ingredients" open={isModalOpen} onOk={handleOk} type="primary" className='mr-3' htmlType="submit" onCancel={handleCancel}>
      <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="ingredient_name"
        label="Ingredient Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
        
      <Form.Item
          name="bundle"
          label="Bundle"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="select bundle type"
            // onChange={this.onGenderChange}
            allowClear
          >
            <Option value="Sako">Sako</Option>
            <Option value="Baro">Baro</Option>
            <Option value="Tray">Tray</Option>
            <Option value="Kilo">Kilo</Option>
            <Option value="Pcs">Pcs</Option>
          </Select>
        </Form.Item>
     
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber style={{width:'100%'}} placeholder="Input Quantity"/>
        </Form.Item>

    

      <Form.Item className='mt-3'>
        <Button type="primary" block htmlType="submit">
          Submit
        </Button>
      
      </Form.Item>
    </Form>
      </Modal>

   
    </>
  );
};
export default IngredientsModal;