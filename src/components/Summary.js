import React from 'react'
import {Card} from 'antd'
import ClickCounter from './ClickCounter'

export default function({sum}) {
  return (
    <div>
      <Card title={sum} bordered={false} style={{width: 300}}>
        <ClickCounter caption="first"/>
        <ClickCounter caption="second"/>
        <ClickCounter caption="third"/>
      </Card>
    </div>
  )
}
