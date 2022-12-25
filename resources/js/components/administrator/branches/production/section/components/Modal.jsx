import React, { useState, useEffect } from 'react';
import { Button, Modal, Checkbox, Form, Input  } from 'antd';
import { SearchBranchId } from '../../../../../routes/Search';
import { AppNotification } from '../../../../../components/Notification';
import { BranchNameParams } from '../../../../../routes/Params';
import { useNavigate } from "react-router-dom";
function ModalSoldOut(props) {
    const [form] = Form.useForm();
    const branchId =SearchBranchId().props.children
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [notify,setNotify] =useState(false)
    const branchname = BranchNameParams().props.children
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
      setLoading(true)
      const quantity_sold= values.quantity_sold
        axios.post('/add_bread_branch_sold',{
          breadid:props.data[0],
          branchid:branchId,
          quantitysold:quantity_sold
        })
        .then(res=>{
          setNotify('success')
          setTimeout(() => {
            navigate('/administrator/'+branchname+'/loading')
            setLoading(false)
          }, 1000);
        })
        .catch(err=>{
          setLoading(false)
          setNotify('error')
        })
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      function getAmount(e){
        const quantity = e.target.value
        setQuantity(quantity)
      }
    return ( 
        <>
        {
      notify ==='success'?<AppNotification type="success" message="Production has been added!"/>:notify ==='error'?<AppNotification type="error" message="Error!"/>:""
    }
        <Button block type="primary"  ghost size="small" onClick={showModal}>
            Sold Out
        </Button>
        <Modal title={props.data[1]} open={isModalOpen} onOk={handleOk} maskClosable={false} onCancel={handleCancel}>
          <p className='m-0'>Total: <b style={{paddingLeft:38}} className="font-weight-bold">{props.data[2]}</b></p>
          <p className='m-0'>Sold: <b style={{paddingLeft:40}} className="font-weight-bold">{quantity}</b></p> 
          <p className='m-0'>Remaining: <b style={{paddingLeft:3}} className="font-weight-bold">{props.data[2] - quantity}</b></p>
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
                        <Input onChange={getAmount}/>
                    </Form.Item>


                    <Form.Item
                    >
                        <Button loading={loading} type="primary" className='mt-3' block htmlType="submit">
                        SOLD
                        </Button>
                    </Form.Item>
                    </Form>
        </Modal>
        </>
     );
}

export default ModalSoldOut;