import * as React from 'react';
import { Row, Col, Button, Avatar, Card } from 'antd';
import * as style from '../styles/contactCard.css';

import { BarChart, XAxis, ResponsiveContainer, Bar } from 'recharts';

const data = [
  {name: 'Mon', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Tues', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Wed', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Thurs', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Fri', uv: 1890, pv: 4800, amt: 2181},
];

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
            <Row>
              <Col span={12}>
                <Col span={12}>
                  Draft invoices
                </Col>
                <Col span={12}>
                  0
                </Col>
                <Col span={12}>
                 Owed
                </Col>
                <Col span={12}>
                  3
                </Col>
                <Col span={12}>
                  Overdue
                </Col>
                <Col span={12}>
                  6
                </Col>
              </Col>
              <Col span={12} />
            </Row>
            <ResponsiveContainer width='100%' height={200}>
              <BarChart data={data}>
                <Bar dataKey='uv' fill='lightGray'/>
                <XAxis dataKey="name" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12} className={style.payment}>
          <Card
            title="Payment details"
            bordered={false}
            className={style.payment__card}
            extra={<Button>Edit</Button>}>

            <p className={style.cardSubtitle}>
              Scored card details
            </p>
            <Row>
              <Col span={12}>
                <Col span={12}>
                  Card number
                </Col>
                <Col span={12}>
                  {props.paymentDetails.cardNumber}
                </Col>
                <Col span={12}>
                  Security code
                </Col>
                <Col span={12}>
                  ***
                </Col>
                <Col span={12}>
                  Start from
                </Col>
                <Col span={12}>
                  01/14
                </Col>
                <Col span={12}>
                  Exp date
                </Col>
                <Col span={12}>
                  01/18
                </Col>
              </Col>
              <Col span={12} />
            </Row>
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