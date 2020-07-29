import React, { FC } from 'react';
import { Field, FormikValues, useFormikContext } from 'formik';
import useAutoHeight from '/hooks/useAutoHeight';

interface IProps {
  placeholder: string;
  lineHeight: number;
}

const AutoTextArea: FC<IProps> = ({ placeholder, lineHeight }) => {
  const { values }: { values: FormikValues } = useFormikContext();
  const [textareaEl] = useAutoHeight(lineHeight, values.contents);

  return (
    <Field
      innerRef={textareaEl}
      as={'textarea'}
      name="contents"
      className={`form-control input-lg`}
      placeholder={placeholder}
      spellCheck="false"
    />
  );
};

export default AutoTextArea;
