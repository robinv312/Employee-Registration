import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { reset } from "../../actions/auth";
import PropTypes from "prop-types";
import logo from "./logo.jpg";

const Register = ({ setAlert, reset, isAuthenticated }) => {
  const [formData, setformData] = useState({
    oldpassword: "",
    email: "",
    password: "",
    password2: "",
  });
  const { oldpassword, email, password, password2 } = formData;
  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      reset({ oldpassword, email, password });
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/profiles"></Redirect>;
  }
  return (
    <Fragment>
      <div className="login-width">
        <div className="logo-div">
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        <p className="lead text-center">
          <i className="fas fa-user"></i> Reset your Password
        </p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              className="input-field"
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              className="input-field"
              type="text"
              placeholder="Current Paassword"
              name="oldpassword"
              value={oldpassword}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              className="input-field"
              type="password"
              placeholder="New Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              className="input-field"
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input
            type="submit"
            className="btn btn-default width-400"
            value="Confirm"
          />
        </form>
        <p className="my-1 text-center">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, reset })(Register);