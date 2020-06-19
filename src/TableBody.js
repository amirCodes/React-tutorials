import React, { Fragment } from 'react';
import { Table, Button } from 'react-bootstrap';
import TableHeader from './TableHeader';
class TableBody extends React.Component {
    render() {
        const { characterData } = this.props;
        const tableRow = characterData.map((person, i) => {
           return(
            <tr key={i}>
            <td>{person.name}</td>
            <td>{person.job}</td>
            <td><Button  variant="outline-danger" onClick={() => this.props.removeCharacter(i)}>delete</Button></td>
        </tr>
           )
        })
        return (
            <Fragment>
                <Table striped bordered hover>
                    <TableHeader/>
                    <tbody>
                     {tableRow}
                    </tbody>
                </Table>
            </Fragment>
        );
    }
}

export default TableBody;
