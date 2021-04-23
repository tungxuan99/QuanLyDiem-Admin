import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import axios from '../axios-data';

// const tableTypes = ['', 'bordered', 'striped', 'hover'];

class TablePage extends React.Component {
  componentDidMount() {
    axios.get('lophoc/get-all').then( res => {
      this.setState({'lophocs': res.data, error: true});
      console.log(res.data)
    })
  }
  state = {
    error: false,
    lophocs: null
  }
  render() {
    let tabelslh = this.state.error ?
        this.state.lophocs.map((lh, index) => {
           return (<tr key={lh.maLopHoc}>
            <th scope="row">{index + 1}</th>
            <td>{lh.tenlophoc}</td>
            <td>{lh.khoiHoc}</td>
          </tr>);
        }) : <p>Không có lớp học</p> ;

    return (
      <Page
        title="Quản lý lớp học"
        breadcrumbs={[{ name: 'tables', active: true }]}
        className="TablePage"
      >
        {/* {tableTypes.map((tableType, index) => ( */}
          <Row>
            <Col>
              <Card className="mb-3">
                <CardHeader>{'Danh sách lớp học' || 'default'}</CardHeader>
                <CardBody>
                      <Card body>
                        <Table {...{ ['bordered' || 'default']: true }}>
                          <thead>
                            <tr>
                              <th>STT</th>
                              <th>Tên lớp</th>
                              <th>Khối học</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tabelslh}
                          </tbody>
                        </Table>
                      </Card>
                </CardBody>
              </Card>
            </Col>
          </Row>
      {/* ))} */}
      </Page>
    );
  }
}

export default TablePage;
