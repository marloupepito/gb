import React,{useState} from 'react'
import { Button, Result, Form, Input  } from 'antd';
import { WarningTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Auth() {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const navigate = useNavigate();
    
    const onFinish = (values) => {
      setError(false)  
       setLoading(true)
        // history("/administrator");

        axios.post('/user_login',{
          username:values.username,
          password:values.password
      })
      .then(res=>{       
          if(res.data.status === 'success' && res.data.user.branch_position === 'personnel'){
              navigate("/branch/"+res.data.user.branch_name.replace(/ /g,'_')+"/ingredients");
              localStorage.setItem("position", "personnel");
              localStorage.setItem("branch", res.data.user.branch_name);
              localStorage.setItem("id", res.data.user.id);
              setLoading(false)
          }else if(res.data.status === 'success' && res.data.user.branch_position === 'admin'){
              navigate("/administrator/dashboard");
            localStorage.setItem("position", "admin");
            setLoading(false)
          }else{  
            setError(res.data.user.branch_position) 
            setLoading(false)
          }
      })
      .catch(err=>{
          console.log(err)
          setError('Incorrect password or username!')
          setLoading(false) 
      })
      };
    
      const onFinishFailed = (errorInfo) => {
       // console.log('Failed:', errorInfo);
       // setLoading(true)
      //  navigate("/administrator");

     
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
                    <p className="text-danger">{error !== null?error:''}</p>
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
                      <Button loading={loading} className="mt-5" block type="primary" danger htmlType="submit">
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