'use client';

import {useEffect} from "react";

const { Row, Col, Input } = require('antd');
import CustomButton from '@/components/CustomButton';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from './style.module.css';


const checkEmpty = function(value) {
    return value !== undefined && value !== null && value.trim() !== '';
};
const symbolsSchema = yup.string()
    .matches(/^[a-zA-Zа-яА-Я0-9]+$/, "Символы не допускаются.")
    .test("letter-check", "Буквы не допускаются.", function(value) {
        return /^[^a-zA-Zа-яА-Я]+$/.test(value);
    });
const lettersSchema = yup.string()
    .test("symbol-check", "Символы и цифры не допускаются", function(value) {
        return /^[a-zA-Zа-яА-Я]+$/.test(value);
    });

const schema = yup.object({
    lastName: yup.string()
        .test("empty-check", "Пожалуйста, введите значение для роста.", checkEmpty)
        .concat(lettersSchema)
        .required(),
    firstName: yup.string()
        .test("empty-check", "Пожалуйста, введите значение для роста.", checkEmpty)
        .concat(lettersSchema)
        .required(),
    patronymic: yup.string()
        .test("empty-check", "Пожалуйста, введите значение для роста.", checkEmpty)
        .concat(lettersSchema)
        .required(),
    height: yup.string()
        .test("empty-check", "Пожалуйста, введите значение для роста.", checkEmpty)
        .concat(symbolsSchema)
        .required("Пожалуйста, введите значение для роста."),
    weight: yup.string()
        .test("empty-check", "Пожалуйста, введите значение для веса.", checkEmpty)
        .concat(symbolsSchema)
        .required("Пожалуйста, введите значение для веса."),
    age: yup.string()
        .test("empty-check", "Пожалуйста, введите значение для возраста.", checkEmpty)
        .concat(symbolsSchema)
        .required("Пожалуйста, введите значение для возраста.")
}).required();

const MainForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    // const fetchData =  async () => {
    //     const products = await fetch('https://api.edamam.com/api/food-database/v2/nutrients')
    //     console.log('products', products)
    // }
    // useEffect( ()=>{
    //      fetchData()
    // }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row className={style.formRow}>
                <Col>
                    <label htmlFor="lastName">Фамилия</label>
                    <Controller
                        control={control}
                        name="lastName"
                        render={({ field: { onChange, onBlur, value, ref} }) => (
                            <Input onChange={onChange} onBlur={onBlur} checked={value}
                                   id="lastName"
                                   placeholder = "Иванов"
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
                        render={({ field: { onChange, onBlur, value, ref} }) => (
                            <Input onChange={onChange} onBlur={onBlur} checked={value}
                                   id="firstName"
                                   placeholder = "Иван"
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
                        render={({ field: { onChange, onBlur, value, ref} }) => (
                            <Input onChange={onChange} onBlur={onBlur} checked={value}
                                   id="patronymic"
                                   placeholder = "Иванович"
                            />
                        )}
                    />
                    {errors.patronymic && <p>{errors.patronymic.message}</p>}
                </Col>
            </Row>

            <Row className={style.formRow}>
                <Col>
                    <label htmlFor="height">Рост</label>
                    <Controller
                        control={control}
                        name="height"
                        render={({ field: { onChange, onBlur, value, ref} }) => (
                            <Input onChange={onChange} onBlur={onBlur} checked={value}
                                   id="height"
                                   placeholder = "170"
                            />
                        )}
                    />
                    {errors.height && <p>{errors.height.message}</p>}
                </Col>
            </Row>

            <Row className={style.formRow}>
                <Col>
                    <label htmlFor="weight">Вес</label>
                    <Controller
                        control={control}
                        name="weight"
                        render={({ field: { onChange, onBlur, value, ref} }) => (
                            <Input onChange={onChange} onBlur={onBlur} checked={value}
                                   id="weight"
                                   placeholder = "80"
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
                        render={({ field: { onChange, onBlur, value, ref} }) => (
                            <Input onChange={onChange} onBlur={onBlur} checked={value}
                                   id="age"
                                   placeholder = "20"
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
}

export default MainForm;