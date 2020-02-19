import React from 'react'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'

const CardComponent = (props) => {

    if (props.posts == null) {
        return (
            <Button variant="secondary" onClick={props.getCars}>Add New Posts</Button>
        )
    }

    const { posts } = props
    const listItems = posts.map((p, index) =>

        <Card key={index} style={{display: 'inline-block', width: '33.3%' }}>
            <Card.Img variant="top" src={p.nuotraukos[0]}/>
            <Card.Body>
                <Card.Title>{p.marke}</Card.Title>
                <Card.Text>
                    {p.modelis}
                </Card.Text>
                <Card.Text>
                    {p.metai}
                </Card.Text>
                <Card.Text>
                    {p.kaina}
                </Card.Text>
            </Card.Body>
        </Card>

    )

    return (
        <div>

            <div style={{display: 'block', width: '100%'}}>
                {listItems}
            </div>

            <Button variant="secondary" onClick={props.getCars}>Add New Posts</Button>
        </div>
    )
}

export default CardComponent;
