import React, { useState } from 'react';
import './App.css';

import { Row, Col, Layout } from 'antd';

import Map from './components/Map/Map';
import DeliveryTable from './components/DeliveryTable/DeliveryTable';

function App() {
  const [map, setMap] = useState(null)

  return (
    <Layout>
      <Row justify={"space-around"} style={{ height: '90vh' }}>
        <Col span={8}>
          <DeliveryTable />
        </Col>
        <Col span={12}>
          <Map map={map} setMap={setMap} />
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
