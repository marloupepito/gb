import React,{useState} from 'react'
import { Button, Result, Form, Input  } from 'antd';
import { WarningTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function Auth() {
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate();
    
    const onFinish = (values) => {

        console.log('Success:', values);
        setLoading(true)
        history("/administrator");
      };
    
      const onFinishFailed = (errorInfo) => {
       // console.log('Failed:', errorInfo);
       // setLoading(true)
       navigate("/administrator");
      };
    return ( 
        <div>
            <Result
            icon={<WarningTwoTone twoToneColor="red" />}
                title="Authorized Person Only"
                extra={
                    <div className="col-md-4 offset-md-4">
                    <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                  >
                    <Form.Item
                    
                    label="Username"
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>
              
                    <Form.Item
                     label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>
              
                  
              
                    <Form.Item>
                      <Button loading={loading} className="mt-5" block type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                  </div>
                }
            />
        </div>
     );
}

export default Auth;