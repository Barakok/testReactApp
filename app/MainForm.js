'use client';

const { Row, Col, Input } = require('antd');
import CustomButton from '@/components/CustomButton';
import { Controller, useForm } from 'react-hook-form';
import style from './style.module.css';

const MainForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className={style.formRow}>
          <Col>
            <Controller
              control={control}
              name={'name'}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Input onChange={onChange} onBlur={onBlur} checked={value} />
              )}
            />
          </Col>
        </Row>

        <Row className={style.formRow}>
          <Col>
            <Controller
              control={control}
              name={'surname'}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Input onChange={onChange} onBlur={onBlur} checked={value} />
              )}
            />
          </Col>
        </Row>

        <Row className={style.formRow}>
          <Col>
            <CustomButton text="Кнопка" type={'submit'} />
          </Col>
        </Row>

        <Row className={style.formRow}>
          <Col>{errors.exampleRequired && <span>This field is required</span>}</Col>
        </Row>
      </form>
    </>
  );
};

export default MainForm;
