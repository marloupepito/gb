import React, { useState, useEffect } from 'react';
import { Button, Modal,Input } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BranchNameParams } from '../../../../routes/Params';
import { SearchBranchId } from '../../../../routes/Search';
import { AppNotification } from '../../../../components/Notification';
import moment from 'moment'
const CodeModal = (props) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data,setData] = useState([])
  const [pieces,setPieces] = useState(null)
  const branch = BranchNameParams().props.children
  const branchid = SearchBranchId().props.children
  const [notify,setNotify] =useState(false)


//this is the calculation of grams to kilo -> res.bind === 'Grams'?res.ingredients_quantity-(parseInt(res.quantity) / 1000):res.ingredients_quantity-res.quantity
  const showModal = () => {
    setIsModalOpen(true); 
      axios.post('/get_production_code',{
        randomid:props.data.random_id
        })
        .then(res=>{
          
          setData(res.data.status)
          const values =res.data.status.map(res=>res.bind === 'Grams'?res.ingredients_quantity-(parseInt(res.quantity) / 1000):res.ingredients_quantity-res.quantity)
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

    if(pieces === null || pieces === ''){
      setNotify('error')
       function myGreeting() {
           setNotify(false)
           setLoading(false)
          }
          setTimeout(myGreeting, 1500);
    }else{
       setLoading(true)
        axios.post('/add_bread_list',{
          data:event,
          branchid:branchid,
          pieces:pieces,
          date:moment().format('MMMM DD, YYYY A')
        })
        .then(res=>{
          console.log('waa',res.data.status)
          setNotify('success')
          setLoading(false)
          setIsModalOpen(false);
        })
        .catch(err=>{
          setNotify('error')
           function myGreeting() {
           setNotify(false)
           setLoading(false)
          }
          setTimeout(myGreeting, 1500);
        })
    }
   
  }

 const breadQuantityHandler =(e)=>{
  setPieces(e.target.value)
  }
  return (
    <>
    {
      notify ==='success'?<AppNotification type="success" message="Production has been added!"/>:notify ==='error'?<AppNotification type="error" message="Please input current pieces!"/>:""
    }
      <Button block type="dashed" size="large" danger onClick={showModal}>
        {props.data.code_name}
      </Button>
      <Modal title={props.data.code_name} open={isModalOpen} onOk={handleOk} maskClosable={false} onCancel={handleCancel}
      >
        <b>Bread Name: {props.data.bread_name}</b><br />
        <b>Targe pieces per kilo: {props.data.production_quantity}</b>
        <Input
                    onChange={breadQuantityHandler}
                     style={{
                      width:'100%'
                          }} placeholder="Current pieces" />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Ingredients</th>
              <th scope="col">Quantity</th>
              <th scope="col">Current Remaining</th>
              <th scope="col">Calculation</th>
            </tr>
          </thead>
          <tbody>
          {data.map(res=>    
            <tr key={res.id}>
              <th scope="row">{res.ingredients_name}</th>
              <td>{res.bind === 'Grams'? (parseInt(res.quantity) / 1000):parseInt(res.quantity)}{res.bind === 'Grams'?'kg':res.bind === 'Kilo'?'kg':'pcs'}</td>
              <td>{res.ingredients_quantity}kg</td>
              <td className={(res.bind === 'Grams'?res.quantity-(parseInt(res.quantity) / 1000):res.ingredients_quantity-res.quantity) > 0?'':'text-danger'}>{res.bind === 'Grams'?res.ingredients_quantity-(parseInt(res.quantity) / 1000):res.ingredients_quantity-res.quantity}kg</td>
            </tr>
          )}
          </tbody>
        </table>
      <Button key="submit" type="primary" block className='mt-3' loading={loading} onClick={(e)=>handleSubmit(data)}>
          Create Beginning
        </Button>
      </Modal>
    </>
  );
};
export default CodeModal;