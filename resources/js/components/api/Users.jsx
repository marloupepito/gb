import Swal from "sweetalert2";

function loginError(){
    Swal.fire({
        icon: "error",
        title: "Incorrect username or password!",
        showConfirmButton: false,
        timer: 1500,
    });
}
export function UsersLogin(props) {
    try {
       const data = axios
            .post("/user_login", {
                username: props.username,
                password: props.password,
            })
            return data;
    } catch {
        loginError()
    }
}
