'use client';
import CustomTextArea from '@/components/TextArea';
import { Col, Row, Form } from 'antd';
import style from './style.module.css';
import { useForm } from 'react-hook-form';
import CustomButton from '@/components/CustomButton';
import { sendText } from '@/client/api/chat';
import { useState } from 'react';
const ChatForm = () => {
  const form = useForm({
    mode: 'onTouched',
    defaultValues: {
      text: '',
    },
  });

  const [answer, setAnswer] = useState(null);

  const onSubmit = async (model) => {
    console.log('model', model);
    const res = await sendText(model);
    console.log('res', res);
    setAnswer(res.body.answer);
  };

  return (
    <>
      <Row>
        <Col>
          <Row className={style.title}>
            <Col>
              <span>Введите текст для запроса ChatGPT</span>
            </Col>
          </Row>
          <Form onFinish={form.handleSubmit(onSubmit)}>
            <Form.Item>
              <Row>
                <Col>
                  <CustomTextArea name="text" control={form.control} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CustomButton text="Отправить" type="submit" />
                </Col>
              </Row>
            </Form.Item>
          </Form>
          {answer && (
            <Row className={style.title}>
              <Col>
                <span>Ответ: {answer.content}</span>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ChatForm;
