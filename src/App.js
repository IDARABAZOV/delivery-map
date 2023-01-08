import React from 'react';
import './App.css';

import { Row, Col, Layout } from 'antd';

import Map from './components/Map/Map';
import DeliveryTable from './components/DeliveryTable/DeliveryTable';

function App() {

  return (
    <Layout>
      <Row justify={"space-around"}>
        <Col span={8}>
          <DeliveryTable />
        </Col>
        <Col span={12}>
          <Map />
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
