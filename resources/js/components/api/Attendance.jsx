import Swal from "sweetalert2";
function error(){
    Swal.fire({
        icon: 'error',
        title: 'Connection error!',
        showConfirmButton: false,
        timer: 1500
      })
}

function success(){
    Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}


export async function setAddAttendance(data) {
    try {
        const result =await axios.post('/add_attendance',data)
        console.log(result.data.status)
        return result;
    } catch (error) {
      error()
      return error
    }
  }