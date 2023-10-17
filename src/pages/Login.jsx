import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../store/features/user/authActions";

const Login = () => {
  const navigate = useNavigate();
  const { token, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const submit = (e) => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    e.preventDefault();
    dispatch(authLogin({ username, password }));

    console.log("usernameRef", usernameRef.current.value);
    console.log("passwordRef", passwordRef.current.value);
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <>
      {/* (.row.my-5>.col-md-6.text-center>h1{Login}+em{Use the username and password credential to authenticate to our System})+(.row.my-5>.col-md-4.mx-auto.bg-light.p-4>(.form-group.my-3>label{Username}+input:text.form-cotrol#username)+(.form-group.my-3>label{Password}+input:password.form-control#password).d-grid.my-2>button.btn.btn-primary{login})  */}

      <div className="row my-4">
        <div className="col-md-8 mx-auto text-center ">
          <h1>LOGIN</h1>
          <em>
            Use the username and password credential to authenticate to our
            System
          </em>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-6 mx-auto bg-light p-4">
          {error && (
            <div class="alert alert-danger my-3" role="alert">
              <strong>Error auth</strong> {error}
            </div>
          )}
          <form onSubmit={submit}>
            <div className="form-group my-3">
              <label htmlFor="">Username</label>
              <input
                ref={usernameRef}
                type="text"
                name="username"
                id="username"
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="">Password</label>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                id="password"
                className="form-control"
              />
            </div>
            <div className="d-grid my-2">
              <button className="btn btn-primary">login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
