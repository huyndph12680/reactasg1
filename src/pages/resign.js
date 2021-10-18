
import { useForm} from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dangki = (user) => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors }
//       } = useForm();
// const onsubmit = async (data) => {
//     try {
//         console.log(data);
//     Dangki(data);
//     toast.success("Đăng nhập thành công !")
//     } catch (error) {
        
//     }
    return(
        <div className="login">
           <div>
           <p>Nhập e-mail</p>
           <input type = "text" placeholder = "Nhập email"></input>
           </div>
           <div>
           <p>Nhập mật khẩu </p>
           <input type = "text" placeholder = "Nhập mật khẩu"></input>
           <p>Nhập lại mật khẩu </p>
           <input type = "text" placeholder = "Nhập lại mật khẩu"></input>
           </div>
           <button type="submit">submit</button>
        </div>
    )
};


// }
export default Dangki;