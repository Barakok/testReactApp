'use client';

import { Form, Input } from 'antd';
const { TextArea } = Input;
import style from './style.module.css';
import { Controller } from 'react-hook-form';

const CustomTextArea = ({ name, control }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => {
          return (
            <Form.Item>
              <TextArea className={style.textArea} {...{ onChange, onBlur, value, ref }} />
            </Form.Item>
          );
        }}
      />
    </>
  );
};
export default CustomTextArea;
