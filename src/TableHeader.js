import React, { Fragment } from 'react';

function TableHeader() {
    return (
        <Fragment>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>action</th>
                </tr>
            </thead>
        </Fragment>
    );
}

export default TableHeader;
