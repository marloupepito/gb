import React, { useState, useEffect } from 'react';
import { Button, Modal, } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BranchNameParams } from '../../../../routes/Params';
import { SearchBranchId } from '../../../../routes/Search';
import { AppNotification } from '../../../../components/Notification';
const CodeModal = (props) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data,setData] = useState([])
  const branch = BranchNameParams().props.children
  const branchid = SearchBranchId().props.children
  const [notify,setNotify] =useState(false)

  const showModal = () => {
    setIsModalOpen(true); 

      axios.post('/get_production_code',{
        randomid:props.data.random_id
        })
        .then(res=>{
          
          setData(res.data.status)
          const values =res.data.status.map(res=>res.ingredients_quantity-res.quantity)
          let hasNegative = values.some(v => v < 0);
          if(!hasNegative){
            setLoading(false)
          }else{
            setLoading(true)
          }
        
        })  
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function handleSubmit(event){
    setLoading(true)
    axios.post('/add_bread_list',{
      data:event,
      branchid:branchid
    })
    .then(res=>{
      console.log(res.data.status)
      setNotify('success')
      setLoading(false)
      setIsModalOpen(false);
    })
    .catch(err=>{
      setNotify('error')
    })
  }
  return (
    <>
    {
      notify ==='success'?<AppNotification type="success" message="Production has been added!"/>:notify ==='error'?<AppNotification type="error" message="Error!"/>:""
    }
      <Button block type="dashed" size="large" danger onClick={showModal}>
        {props.data.code_name}
      </Button>
      <Modal title={props.data.code_name} open={isModalOpen} onOk={handleOk} maskClosable={false} onCancel={handleCancel}
      >
        <b>Bread Name: {props.data.bread_name}</b><br />
        <b>Quantity: {props.data.production_quantity}</b>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Ingredients</th>
              <th scope="col">Bind</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remaining</th>
              <th scope="col">Calculation</th>
            </tr>
          </thead>
          <tbody>
          {data.map(res=>    
            <tr key={res.id}>
              <th scope="row">{res.ingredients_name}</th>
              <td className='float-right'>{res.bind_name}</td>
              <td>{res.quantity }</td>
              <td>{res.ingredients_quantity}</td>
              <td className={(res.ingredients_quantity-res.quantity) > 0?'':'text-danger'}>{res.ingredients_quantity-res.quantity}</td>
            </tr>
          )}
          </tbody>
        </table>
      <Button key="submit" type="primary" block className='mt-3' loading={loading} onClick={(e)=>handleSubmit(data)}>
          Create Production
        </Button>
      </Modal>
    </>
  );
};
export default CodeModal;