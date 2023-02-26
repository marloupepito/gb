import { Table } from 'antd';
import { message, Popconfirm,Button } from 'antd';
import { useState,useEffect } from 'react';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import EditAccount from './Modal'



const AccountTable = (props) => {
const [data,setData] =useState(false)
const [loading,setLoading] =useState(true)
  const [branchid,setBranchid] = useState(0);


const columns = [
  {
    title: 'FullName',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Shift',
    dataIndex: 'shift',
    key: 'shift',
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
      render: (_, { id,name,shift,username,mobile,gender,position }) => (
       <div>
      
       <div className="row">
          <div className="col-md-3">
           <a href="#"><EditAccount id={id}/></a>
          </div>
          <div className="col-md-3">
             <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={()=>confirm(id)}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
         
            <Button type="link" ><DeleteTwoTone twoToneColor="red"/></Button>
            </Popconfirm> 
        </div>
        </div>
      
          </div>
    ),
  },
];    

function loadData(){
    setBranchid(props.branchid)
    setLoading(true)
    axios.post('/get_all_users',{
      branchid:props.branchid
    })
    .then(res=>{
      setData(res.data.status)
      setLoading(false)
    })
}

useEffect(() => {
  loadData()
},[props.load]);


const confirm = (e) => {
  message.success('Click on Yes');
  axios.post('/delete_account',{
    id:e
  })
  .then(res=>{
    loadData()
  })
};
const cancel = (e) => {
  console.log(e);
  //message.error('Click on No');
};


return (
  <>
  <Table
   loading={loading}
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <table class="table">
          <thead>
            <tr>
              <th width="20%">Fullname</th>
              <th width="80%">{record.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >Position</td>
              <td>{record.position}</td>
            </tr>
             <tr>
              <td >Shift</td>
              <td>{record.shift}</td>
            </tr>
            <tr>
              <td >Username</td>
              <td>{record.username}</td>
            </tr>
            <tr>
              <td >Mobile</td>
              <td>{record.mobile}</td>
            </tr>
             <tr>
              <td >Gender</td>
              <td>{record.gender}</td>
            </tr>
          </tbody>
        </table>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
  </>
  )

}
export default AccountTable;