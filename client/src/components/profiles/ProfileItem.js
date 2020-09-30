import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";

const ProfileItem = ({
  profile: {
   name,
   avatar,
    email,
    location,
    company,
    skills,
  },
  auth: { isAuthenticated, user },
}) => {
return (
    <Card className="profile card">
      <img src={avatar} alt="" className="round-img"></img>
      <div>
        <h4>{name}</h4>
        <Typography component="span" color="textSecondary" variant="h6">
          {email}
          {company && <span> at {company}</span>}
        </Typography>
        <br />
        <p></p>
        <Typography
          component="span"
          variant="body1"
          color="textSecondary"
          gutterBottom
        >
          {location && <span>{location}</span>}
        </Typography>
        <br />
</div>
     </Card>
  );
};

ProfileItem.propTypes = { profile: PropTypes.object.isRequired };
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(ProfileItem);
