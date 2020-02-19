import React from 'react'
import Table from 'react-bootstrap/Table'

const Static = (props) => {

    if (props.posts == null) {
        return (
            <div>Props empty</div>
        )
    }

    const { marke, modelis, metai, kaina } = props.posts

        return (
            <Table>
                <thead>
                <tr>
                    <th>Marke</th>
                    <th>Modelis</th>
                    <th>Metai</th>
                    <th>Kaina</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{marke}</td>
                    <td>{modelis}</td>
                    <td>{metai}</td>
                    <td>{kaina}</td>
                </tr>
                </tbody>
            </Table>
        )




}

export default Static;
