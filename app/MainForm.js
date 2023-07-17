'use client';
import { Row, Col, Input, Radio, Select } from 'antd';
import CustomButton from '../components/CustomButton';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import style from './style.module.css';

const schema = yup
  .object({
    height: yup
      .number()
      .max(999, 'Строка должна содержать до 3 символов')
      .positive('Рост должен быть положительным числом.')
      .integer('Рост должен быть целым числом.')
      .typeError('Пожалуйста, введите значение для роста.')
      .required('Пожалуйста, введите значение для роста.'),
    weight: yup
      .number()
      .max(999, 'Строка должна содержать до 3 символов')
      .positive('Рост должен быть положительным числом.')
      .integer('Рост должен быть целым числом.')
      .typeError('Пожалуйста, введите значение для веса.')
      .required('Пожалуйста, введите значение для веса.'),
    age: yup
      .number()
      .max(999, 'Строка должна содержать до 3 символов')
      .positive('Рост должен быть положительным числом.')
      .integer('Рост должен быть целым числом.')
      .typeError('Пожалуйста, введите значение для возраста.')
      .required('Пожалуйста, введите значение для возраста.'),
  })
  .required();

const MainForm = ({ lifestyle }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const r = await response.json();
        console.log('По формуле Миффлина-Сан Жеора: ', r);
      } else {
        console.error('Ошибка при сохранении пользователя.');
      }
    } catch (error) {
      console.error('Ошибка при сохранении пользователя:', error);
    }
  };

  const onSubmit2 = async () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row className={style.formRow}>
        <Col>
          <label htmlFor="gender">Пол</label>
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                id="gender"
                placeholder="Выберите пол">
                <Select.Option value="Male">Мужской</Select.Option>
                <Select.Option value="Female">Женский</Select.Option>
              </Select>
            )}
          />
          {errors.gender && <p>{errors.gender.message}</p>}
        </Col>
      </Row>

      <Row className={style.formRow}>
        <Col>
          <label htmlFor="height">Рост (см)</label>
          <Controller
            control={control}
            name="height"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                checked={value}
                id="height"
                placeholder="170"
              />
            )}
          />
          {errors.height && <p>{errors.height.message}</p>}
        </Col>
      </Row>

      <Row className={style.formRow}>
        <Col>
          <label htmlFor="weight">Вес (кг)</label>
          <Controller
            control={control}
            name="weight"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                checked={value}
                id="weight"
                placeholder="80"
              />
            )}
          />
          {errors.weight && <p>{errors.weight.message}</p>}
        </Col>
      </Row>

      <Row className={style.formRow}>
        <Col>
          <label htmlFor="age">Возраст</label>
          <Controller
            control={control}
            name="age"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                checked={value}
                id="age"
                placeholder="20"
              />
            )}
          />
          {errors.age && <p>{errors.age.message}</p>}
        </Col>
      </Row>

      <Row className={style.formRow}>
        <Col>
          <label htmlFor="lifestyle">Образ жизни</label>
          <Controller
            control={control}
            name="lifestyle"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                onChange={onChange}
                style={{ width: 250 }}
                onBlur={onBlur}
                value={value}
                id="lifestyle"
                placeholder="Не указано"
                options={lifestyle}
              />
            )}
          />
          {errors.lifestyle && <p>{errors.lifestyle.message}</p>}
        </Col>
      </Row>

      <Row className={style.formRow}>
        <Col>
          <label htmlFor="goal">Ваша цель</label>
          <Controller
            control={control}
            name="goal"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Radio.Group onChange={onChange} value={value}>
                <Radio.Button value="WeightLoss">Сбросить вес</Radio.Button>
                <Radio.Button value="MuscleGain">Набрать мышечную массу</Radio.Button>
                <Radio.Button value="WeightMaintenance">Поддерживать вес</Radio.Button>
              </Radio.Group>
            )}
          />
          {errors.goal && <p>{errors.goal.message}</p>}
        </Col>
      </Row>

      <Row className={style.formRow}>
        <Col>
          <CustomButton text="Отправить" type="submit" />
        </Col>
      </Row>
    </form>
  );
};

export default MainForm;
