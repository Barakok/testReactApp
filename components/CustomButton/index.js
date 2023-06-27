'use client';
import { Button } from 'antd';
const CustomButton = ({ text, type }) => {
  return (
    <>
      <Button variant="primary" htmlType={type}>
        {text}
      </Button>
    </>
  );
};

export default CustomButton;
