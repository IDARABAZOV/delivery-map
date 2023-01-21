import React, { useState } from 'react';
import './App.css';

import { Row, Col, Layout, Typography } from 'antd';

import Map from './components/Map/Map';
import DeliveryTable from './components/DeliveryTable/DeliveryTable';
import { useSelector } from 'react-redux';

function App() {
  const [map, setMap] = useState(null)
  const error = useSelector(store => store.coordinates.error)

  return (
    <Layout>
      {error ? (
        <Typography.Title
          style={{ textAlign: 'center' }}
          level={2}
          type="danger"
        >
          {error}
        </Typography.Title>
      ) : null}
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
