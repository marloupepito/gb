import React, { useState, useEffect } from 'react';
import { SearchBranchId } from '../../../../routes/Search';


function ProductionRecords() {
const branch_id=SearchBranchId().props.children
 const [data, setData] = useState([]);

useEffect(() => {
  axios.post('/get_branch_record',{
    current:1,
    pageSize:200,
    branchid:branch_id
  })
  .then(res=>{
    setData(res.data.status)
    
  })
}, []);


    return ( 
        <div>
        <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Name of Bread</th>
      <th scope="col">Beginning<small>(pcs)</small></th>
      <th scope="col">New Production</th>
      <th scope="col">Price</th>
      <th scope="col">Total</th>
      <th scope="col">Bread Out</th>
      <th scope="col">Charge<small>(pcs)</small></th>
      <th scope="col">Remaining<small>(pcs)</small></th>
      <th scope="col">Sold Bread</th>
      <th scope="col">Sales</th>
    </tr>
  </thead>
  <tbody>
  {
    data.map(res => <tr key={res.key}>
      <th>{res.bread_name}</th>
      <td>{res.beginning}</td>
      <td>{res.production}</td>
      <td>{res.price}</td>
      <th>{parseInt(res.beginning) + parseInt(res.production)}</th>
      <td>{res.breadout}</td>
      <td>{res.charge}</td>
      <td>{res.remaining}</td>
      <td>{res.soldout}</td>
      <td>{res.sales}</td>
    </tr>)
  }
   
  </tbody>
</table>
        </div>
     );
}

export default ProductionRecords;