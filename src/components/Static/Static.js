import React from 'react'
import Table from 'react-bootstrap/Table'

const Static = (props) => {



    const simulateClick = React.useRef(null)

    if (props.posts == null) {
        return (
            <div>Props empty</div>
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
            <div ref={simulateClick}></div>
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
        </div>
        )




}

export default Static;
