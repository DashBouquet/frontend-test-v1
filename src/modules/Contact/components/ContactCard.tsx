import * as React from 'react';
import { Row, Col, Button, Avatar, Card } from 'antd';
import * as style from '../styles/contactCard.css';

export const ContactCard: any = (props: any) => {
  return (
    <div className={style.container}>
      <Row className={style.header}>
        <Col span={12} className={style.name}>
          {props.carrierName}
          </Col>
        <Col span={12} className={style.edit}>
          <Button type="primary">
            Edit
          </Button>
        </Col>
      </Row>
      <Row className={style.content}>
        <Col span={12}>
          <Col span={6}>
            <Avatar src={props.avatar} className={style.avatar} />
          </Col>
          <Col span={18} className={style.info}>
            <Col span={12}>
              Carrier name
            </Col>
            <Col span={12} className={style.info__data}>
              {props.carrierName}
            </Col>
            <Col span={12}>
              Contact name
            </Col>
            <Col span={12} className={style.info__data}>
              {props.contactName}
            </Col>
            <Col span={12}>
              Contact email
            </Col>
            <Col span={12} className={style.info__data}>
              {props.contactEmail}
            </Col>
            <Col span={12}>
              Amount
            </Col>
            <Col span={12} className={style.info__data}>
              {props.account.amount}
            </Col>
            <Col span={12}>
              Overdue by
            </Col>
            <Col span={12} className={style.info__data}>
              60 days
            </Col>
            <Col span={12}>
              Printed labels
            </Col>
            <Col span={12} className={style.info__data}>
              V1
            </Col>
            <Col span={12}>
              Connected to printer
            </Col>
            <Col span={12} className={style.info__data}>
              Epson 231
            </Col>
          </Col>
        </Col>
        <Col span={12}>
        </Col>
      </Row>
      <div className={style.divider} />
      <Row className={style.payment}>
        <Col span={12} className={style.payment}>
          <Card title="Invoices owed to you" bordered={false} className={style.payment__card}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={12} className={style.payment}>
          <Card
            title="Payment details"
            bordered={false}
            className={style.payment__card}
            extra={<Button>Edit</Button>}>

            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
      <div className={style.divider} />
      <Row className={style.bottom}>
        <Button type="primary" className={style.bottom__button}>Edit</Button>
        <Button type="danger" className={style.bottom__button}>Delete</Button>
      </Row>
    </div>
  );
};