import React, {useState} from 'react'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = (props) => {

    if (props.posts == null) {
        return (
            <Button variant="secondary" onClick={props.getCars}>Add New Posts</Button>
        )
    }
    //
    // const [index, setIndex] = useState(0);
    // const [direction, setDirection] = useState(null);
    //
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    //     setDirection(e.direction);
    // };



    const { posts } = props



    const listItems = posts.map((p, index) =>

        <Card key={index} style={{display: 'inline-block', width: '33.3%' }}>
            {/*<Card.Img variant="top" src={p.nuotraukos[0]}/>*/}
            <Carousel >
                {p.nuotraukos.map((f, index) => {
                    return (<Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={f}
                            alt="First slide"
                        />

                    </Carousel.Item>)
                })}
            </Carousel>
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

export default CarouselComponent;
