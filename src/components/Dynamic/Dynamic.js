import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";

const Dynamic = (props) => {

    if (props.posts == null) {
        return (
            <Button variant="secondary" onClick={props.getCars}>Add New Posts</Button>
        )
    }
    const { posts } = props

    const listItems = posts.map((p, index) =>
            <tr key={index}>
                <td>{p.marke}</td>
                <td>{p.modelis}</td>
                <td>{p.metai}</td>
                <td>{p.kaina}</td>
            </tr>
    )

    return (
        <div>
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
                    {listItems}
                </tbody>
            </Table>

            <Button variant="secondary" onClick={props.getCars}>Add New Posts</Button>
        </div>
    )
}

export default Dynamic;
