import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo } from '../../redux/modules/app'

function PrivateRoute(props) {
  const { component: Component, userInfo, ...rest } = props;
  return (
    <Route
      {
      ...rest
      }
      render={props => {
        return userInfo.UserName ? (
          <Component {...props} />
        ) : (
            <Redirect
              to='/'
            />
          );
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state)
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
