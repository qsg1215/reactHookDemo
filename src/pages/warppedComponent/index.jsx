import React from "react";

const withUser = WrappedComponent => {
  const user = "chen";
  return props => <WrappedComponent user={user} {...props} />;
};

const UserPage = props => (
  <div>
    <p>My name is {props.user}!</p>
  </div>
);

export default withUser(UserPage);
