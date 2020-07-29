import React from 'react';

function toggle(WrappedComponent: any) {
  return function ToggleWrapped(props: any) {
    return props.show ? <WrappedComponent {...props} /> : null;
  };
}

export default toggle;
