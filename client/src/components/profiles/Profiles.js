import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";

const Profiles = ({ getProfiles, profile: { profiles }, loading }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  const [text, setText] = useState("");
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  const styleObj = {
    display: "block",
    width: "100%",
    padding: "0.4rem",
    fontsize: "1.2rem",
    border: "2px solid #ccc",
    borderRadius: "8px"
 }
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <h3>Developers</h3>
          <input style = {styleObj}
            type="text"
            placeholder="Search with Name"
            value={text}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          ></input>
          <p className="bot_mar-8 text-cursive">
            <i className="fa fa-handshake-o" aria-hidden="true"></i> Browse and
            connect with developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.filter((employee) => {
                if (text === "") {
                  return employee;
                } else if (employee.name.includes(text)) {
                  return employee;
                }
              }).map((item) => (
                <ProfileItem key={item._id} profile={item}></ProfileItem>
                ))
            ) : (
              <h4>No profiles found</h4>
            )}
          </div>
        </>
      )}
    </>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getProfiles })(Profiles);
