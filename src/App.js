import React, { useState } from 'react';
import './App.css';

import { Row, Col, Layout } from 'antd';

import Map from './components/Map/Map';
import DeliveryTable from './components/DeliveryTable/DeliveryTable';

function App() {
  const [map, setMap] = useState(null)

  return (
    <Layout>
      <Row justify={"space-around"} style={{ height: '40rem' }}>
        <Col span={8}>
          <DeliveryTable map={map} />
        </Col>
        <Col span={12}>
          <Map map={map} setMap={setMap} />
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
