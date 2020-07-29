import React, { ReactChildren, FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const FormGroup: FC<IProps> = ({ children }) => (
  <>
    <div className="form-group">{children}</div>
    <style jsx>{`
      .form-group {
        margin-bottom: 10px;
      }
    `}</style>
  </>
);

export default FormGroup;
