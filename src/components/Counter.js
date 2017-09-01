import React from 'react';
import {Button, Col, Row, Tag} from 'antd'

export default function({increase, decrease, count}) {
  return (
    <Row align="middle">
      <Col span={18}>
        <Button onClick={increase}>+</Button>
        <Button onClick={decrease}>-</Button>
      </Col>
      <Col span={6}>
        <Tag color="green">{count}</Tag>
      </Col>
    </Row>
  )
}
