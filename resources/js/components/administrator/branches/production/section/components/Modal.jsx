import React, { useState, useEffect } from 'react';
import { Button, Modal, Checkbox, Form, Input  } from 'antd';

function ModalSoldOut(props) {
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
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <>
        <Button block type="primary"  ghost size="small" onClick={showModal}>
            Sold Out
        </Button>
        <Modal title={props.data[1]} open={isModalOpen} onOk={handleOk} maskClosable={false} onCancel={handleCancel}>
            <Form
            form={form}
                    layout="vertical" 
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
            >
                    <Form.Item
                        label="Quantity Sold"
                        name="quantity_sold"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Quantity Sold!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                    >
                        <Button type="primary" className='mt-3' block htmlType="submit">
                        SOLD
                        </Button>
                    </Form.Item>
                    </Form>
        </Modal>
        </>
     );
}

export default ModalSoldOut;