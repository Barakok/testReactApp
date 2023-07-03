'use client';
const { Row, Col, Input, Select } = require('antd');
import CustomButton from '@/components/CustomButton';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import style from './style.module.css';
const onlyLetters = /^[A-Za-zА-Яа-яЁё]+$/;

const schema = yup
  .object({
    lastName: yup
      .string()
      .max(50, 'Строка должна содержать до 50 символов')
      .matches(onlyLetters, { excludeEmptyString: true, message: 'Разрешены только буквы' })
      .typeError('Пожалуйста, введите значение для фамилии.')
      .required('Пожалуйста, введите значение для фамилии.'),
    firstName: yup
      .string()
      .max(50, 'Строка должна содержать до 50 символов')
      .matches(onlyLetters, { excludeEmptyString: true, message: 'Разрешены только буквы' })
      .required('Пожалуйста, введите значение для имени.'),
    patronymic: yup
      .string()
      .max(50, 'Строка должна содержать до 50 символов')
      .matches(onlyLetters, { excludeEmptyString: true, message: 'Разрешены только буквы' })
      .required('Пожалуйста, введите значение для отчества.'),
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

const MainForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit = async (data) => {
  //     try {
  //         const response = await fetch('/pages/api/users', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify(data),
  //         });
  //
  //         if (response.ok) {
  //             console.log('Пользователь успешно сохранен в базе данных.');
  //         } else {
  //             console.error('Ошибка при сохранении пользователя.');
  //         }
  //     } catch (error) {
  //         console.error('Ошибка при сохранении пользователя:', error);
  //     }
  // };

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
                <Select.Option value="male">Мужской</Select.Option>
                <Select.Option value="female">Женский</Select.Option>
              </Select>
            )}
          />
          {errors.gender && <p>{errors.gender.message}</p>}
        </Col>
      </Row>
      <Row className={style.formRow}>
        <Col>
          <label htmlFor="lastName">Фамилия</label>
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                checked={value}
                id="lastName"
                placeholder="Иванов"
              />
            )}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </Col>
      </Row>

      <Row className={style.formRow}>
        <Col>
          <label htmlFor="firstName">Имя</label>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                checked={value}
                id="firstName"
                placeholder="Иван"
              />
            )}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </Col>
      </Row>

      <Row className={style.formRow}>
        <Col>
          <label htmlFor="patronymic">Отчество</label>
          <Controller
            control={control}
            name="patronymic"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                checked={value}
                id="patronymic"
                placeholder="Иванович"
              />
            )}
          />
          {errors.patronymic && <p>{errors.patronymic.message}</p>}
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
          <CustomButton text="Отправить" type="submit" />
        </Col>
      </Row>
    </form>
  );
};

export default MainForm;
