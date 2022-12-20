export  function Child() {
    
const id = window.location.search.substring(1)
  var data= axios.post('/get_all_production',{
    id:id
    })
    .then(res=>{
         res.data.status
    })
    return <>{data}</>
}
