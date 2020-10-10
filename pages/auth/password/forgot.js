import { useState } from "react";
import Layout from "../../../components/Layout";
import { forgotPassword } from "../../../actions/auth";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
    message: "",
    error: "",
    showForm: true,
  });

  const { email, message, error, showForm } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, message: "", error: "", [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, message: "", error: "" });
    forgotPassword({ email }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          message: data.message,
          email: "",
          showForm: false,
        });
      }
    });
  };

  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-success">{message}</div> : "";

  const passwordForgotForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group col-md-4 offset-md-4 pt-3 pb-3">
        <input
          type="email"
          onChange={handleChange("email")}
          className="form-control"
          value={email}
          placeholder="Type your email"
          required
        />
      </div>
      <div className="col-md-4 offset-md-4 pb-3">
        <button className="btn btn-info">Send password reset link</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="container-fluid pt-2">
        <div className="card card-hover card-task-one">
          <div className="card-header">
            <div className="col-md-12 text-center">
              <h1 className="display-5 font-weight-bold">FORGOT PASSWORD</h1>
            </div>
          </div>
          <div className="card-body">
            {showError()}
            {showMessage()}
            {showForm && passwordForgotForm()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
