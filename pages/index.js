import { Layout, Menu, Breadcrumb, Typography, Form, Input, Button, InputNumber } from 'antd';
import styled from 'styled-components';

const { Header, Content } = Layout;

export default function Home() {
  const initialValues = {
    firstName: '',
    middleInitial: '',
    lastName: '',
    ssn: '',
    dateOfBirth: '',
    income: '',
    zipCode: '',
    streetAddress: '',
    suiteAddress: '',
    city: '',
    state: '',
    email: '',
    mobilePhone: '',
    altPhone: '',
  };

  const onFinish = async (values) => {
    const res = await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Layout className="layout">
        <CustomHeader>
          <Typography.Title style={{ color: 'white' }}>Form Automation</Typography.Title>
        </CustomHeader>
        <CustomContent>
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed} initialvalues={initialValues}>
            <Form.Item label="First Name" name="firstName">
              <Input />
            </Form.Item>
            <Form.Item label="Middle Initials" name="middleInitial">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name" name="lastName">
              <Input />
            </Form.Item>
            <Form.Item label="Social Security" name="ssn">
              <Input />
            </Form.Item>
            <Form.Item label="Date of Birth" name="dateOfBirth">
              <Input />
            </Form.Item>
            <Form.Item label="Income" name="income">
              <Input />
            </Form.Item>

            <Form.Item label="Zip Code" name="zipCode">
              <Input />
            </Form.Item>
            <Form.Item label="Street Address" name="streetAddress">
              <Input />
            </Form.Item>
            <Form.Item label="Suite or Appartment" name="suiteAddress">
              <Input />
            </Form.Item>
            <Form.Item label="City" name="city">
              <Input />
            </Form.Item>
            <Form.Item label="State" name="state">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Mobile Phone" name="mobilePhone">
              <Input />
            </Form.Item>
            <Form.Item label="Alternate Phone" name="altPhone">
              <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Run
            </Button>
          </Form>
        </CustomContent>
      </Layout>
    </>
  );
}

const CustomContent = styled(Content)`
  width: 100%;
  padding: 50px;
  background: white;
`;

const CustomHeader = styled(Header)`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
