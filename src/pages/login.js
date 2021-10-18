function Login () {
    return(
        <div className="login">
           <div>
           <p>Nhập e-mail</p>
           <input type = "text" placeholder = "Nhập email"></input>
           </div>
           <div>
           <p>Nhập mật khẩu </p>
           <input type = "text" placeholder = "Nhập mật khẩu"></input>
           </div>
           <button type="submit">submit</button>
        </div>
    )
}

export default Login;