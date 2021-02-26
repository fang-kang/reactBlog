import React, { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import useBreadcrumb from '@/hooks/useBreadcrumb'
import axios from '@/utils/axios'
const { TextArea } = Input
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
}
const Fragment = () => {
  useBreadcrumb(['碎言碎语'])
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const onFinish = () => {
    console.log('Success:', author, content)
    if (!author || !content) {
      message.warning('请完善信息')
    } else {
      axios.post('fragment/add', {
        author,
        content
      }).then(res => {
        message.success('提交成功')
      })
    }
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div>
      <Input style={{ marginBottom: 30 }} placeholder='请输入姓名' value={author} onChange={e => setAuthor(e.target.value)} />
      <TextArea style={{ marginBottom: 30 }} row={4} placeholder='请输入内容' value={content} onChange={e => setContent(e.target.value)} />
      <Button type='primary' onClick={onFinish}>提交</Button>
    </div>
  )
}
export default Fragment
