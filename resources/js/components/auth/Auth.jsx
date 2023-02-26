import React,{useState,useEffect} from 'react'
import { Button, Result, Form, Input,Skeleton   } from 'antd';
import { WarningTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Auth() {
    const [loading,setLoading] = useState(false)
    const [loading2,setLoading2] = useState(true)
    const [error,setError] = useState(false)
    const navigate = useNavigate();
    
    useEffect(() => {
      axios.get('/api/user')
      .then(res=>{
        console.log(res.data)
          if(window.location.pathname === '/'){
              
              if(res.data.position === 'admin'){
                navigate('/administrator/dashboard');
                setLoading2(false) 
              }else{
                navigate('/branch/'+localStorage.getItem("branch").replace(/ /g,'_')+'/ingredients');
              }
          }
      })
      .catch(err=>{
        setLoading2(false)
      })
  }, []);

    const onFinish = (values) => {
      setError(false)  
       setLoading(true)
        // history("/administrator");

        axios.post('/user_login',{
          username:values.username,
          password:values.password
      })
      .then(res=>{       
        console.log(res.data.branch)
          if(res.data.status === 'success' && res.data.user.position !== 'admin'){
              navigate("/branch/"+res.data.branch.branch_name.replace(/ /g,'_')+"/ingredients");
              localStorage.setItem("position", res.data.user.position);
              localStorage.setItem("branch", res.data.branch.branch_name);
              localStorage.setItem("id",  res.data.branch.id);
              setLoading(false)
          }else if(res.data.status === 'success' && res.data.user.position === 'admin'){
              navigate("/administrator/dashboard");
            localStorage.setItem("position", "admin");
            setLoading(false)
          }else{  
            setError(res.data.user.position) 
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
        <Skeleton loading={loading2}>
                    <div className="col-md-4 offset-md-4">

                      <img src="/images/logo.jpg" className="col-md-12 mt-5"/>
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
             
        </Skeleton>
        </div>
     );
}

export default Auth;