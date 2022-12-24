import React, { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space,InputNumber  } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import { SearchBranchId } from '../../../../../routes/Search';
import { useNavigate } from "react-router-dom";
import { BranchNameParams } from '../../../../../routes/Params';
import { get_branch_ingredients } from '../../../../api/Ingredients';

const { Option } = Select;
const ProductionSectionDrawer = (props) => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const branchName =BranchNameParams().props.children
  const branchId =SearchBranchId().props.children

  const ingredientsList = get_branch_ingredients().props.children
  const onClose = () => {
    setOpen(false)
    navigate('/administrator/'+branchName+'/production/create?branch_id='+branchId);
  };


  
  const onFinish = (values) => {
    setLoading(true)
      axios.post('/add_branch_ingredients',{
        branchid:branchId,
        data:values
      })
      .then(res=>{
      
         setLoading(false)
      })
      form.resetFields();    
  };


  return (
    <>
      <Drawer
        title="Create Code Bread"
        width={'100%'}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <Form layout="vertical" form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" >
          <Row gutter={16}>
            <Col xs={24} sm={12} md={12}>
            <Row gutter={16}>
             <Col xs={24} sm={24} md={24}>
                <Form.Item
                      name="codename"
                      label="Code Name"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter Code Name',
                        },
                      ]}
                    >
                  <Input placeholder="Please enter Code Name" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={24}>
                <Form.Item
                      name="breadname"
                      label="Bread Name"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter Bread Name',
                        },
                      ]}
                    >
                  <Input placeholder="Please enter Bread Name" />
                </Form.Item>
              </Col>

            
              <Col xs={24} sm={24} md={24}>
                        
                 <Form.Item
                   label="Production Quantity"
                    name="productionquantity"
                    rules={[
                      {
                        required: true,
                        message: 'Production Quantity',
                      },
                    ]}
                  >
                    <InputNumber style={{
                      width:'100%'
                          }} placeholder="Production Quantity" />
                  </Form.Item>
              </Col>
              </Row>
            </Col>
       
            
            <Col xs={24} sm={12} md={12}>
            Ingredients List
            <div>
              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{
                          display: 'flex',
                          marginBottom: 8,
                        }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, 'ingredients']}
                          rules={[
                            {
                              required: true,
                              message: 'Missing Ingredients name',
                            },
                          ]}
                        >
                          <Select
                                showSearch
                                style={{
                                  width: 300,
                                }}
                                placeholder="Search to Ingredients"
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                className="text-capitalize"
                                options={ingredientsList.map((res) =>({label:res.ingredients_name.toLowerCase()+ '-' +res.bind_name.toLowerCase(), value:res.ingredients_name.toLowerCase()+ ' ' +res.bind_name.toLowerCase()+'|'+res.id}))}
                              />
                        </Form.Item>



                        <Form.Item
                          {...restField}
                          name={[name, 'quantity']}
                          rules={[
                            {
                              required: true,
                              message: 'Missing Quantity',
                            },
                          ]}
                        >
                          <InputNumber style={{
                                  width: 300,
                                }} placeholder="Quantity" />
                        </Form.Item>
                              
                        
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <br />
                    <Form.Item  >
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Add field
                      </Button>
                    </Form.Item>
                  </>
                )}
                  </Form.List><br />
                  <Form.Item >
                    <Button loading={loading} type="primary" block htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </div>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default ProductionSectionDrawer;