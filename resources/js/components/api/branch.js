import axios from 'axios';

export async function GetAllBranches () {
   
    try{
        const data = await axios.get('/api/get_all_branch')
        .then(res =>{
            return res.data.status;
        })
         return ( data );
    }
    catch(err){
        return ( err );
    }
   
      
}

