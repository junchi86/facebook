import React, { FC, ComponentProps } from 'react';

function toggle(WrappedComponent: FC<any>) {
  return function ToggleWrapped(props: ComponentProps<any>) {
    return props.show ? <WrappedComponent {...props} /> : null;
  };
}

export default toggle;
