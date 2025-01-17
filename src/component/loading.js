import React from "react";

function withLoading(Component) {
  return function WrappedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

export default withLoading;
