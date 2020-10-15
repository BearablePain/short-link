import React from 'react';
import { Container, Table } from 'reactstrap';
import { interfaceListUrl, interfaceUrlObject } from '../../interface';

const ListUrl = (props: interfaceListUrl) => {
  if (!props.dataUrl) {
    return <p>Loading...</p>;
  }
  return (
    <Container style={{ backgroundColor: '#343a40', maxWidth: '100%' }}>
      <Table
        striped
        bordered
        hover
        variant="dark"
        className="table table-striped table-dark "
        style={{ width: '100%', tableLayout: 'fixed' }}
      >
        <thead>
          <tr>
            <th style={{ width: '3%' }}>#</th>
            <th>Оригинальный адрес</th>
            <th style={{ width: '30%' }}>Короткая ссылка</th>
            <th style={{ width: '10%' }}>Количество переходов</th>
          </tr>
        </thead>
        <tbody>
          {props.dataUrl.map((el: interfaceUrlObject, i) => (
            <tr key={el._id}>
              <th scope="row">{i + 1}</th>
              {el.longLink && (
                <td style={{ width: '20%', wordWrap: 'break-word' }}>
                  {el.longLink.length >= 300
                    ? `${el.longLink.slice(0, 300)}...`
                    : el.longLink}
                </td>
              )}
              <td>{el.shortUrl}</td>
              <td>{el.count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default ListUrl;
