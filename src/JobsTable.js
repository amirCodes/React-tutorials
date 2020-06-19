import React, { Fragment } from 'react';
import TableBody from './TableBody'
import { Table } from 'react-bootstrap'

const JobsTable = (props) => {

    const { characterData, removeCharacter } = props;
    return (
        <Fragment>
            <Table striped bordered hover>
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </Table>
        </Fragment>
    )
}

export default JobsTable;
