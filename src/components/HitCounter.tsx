import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface HitCountResult {
    hitcount: Number;
}

function HitCounter() {
    const [hitCounter, setHitCounter] = useState<Number>(-1);
    const [isFetching, setIsFetching] = useState<Boolean>(false)
    useEffect(() => {
        if (!isFetching && hitCounter==-1)
            setIsFetching(true);
            // Call to the webservice
            fetch('https://cx56r5w0b2.execute-api.ap-southeast-2.amazonaws.com/prod/settings/hitcounter')
                .then(response => response.json())
                .then(data => {
                    console.log("New hitcounter: " + data.hitcount)
                    setHitCounter(data.hitcount);
                })
                .catch(err => console.log(err))
                .finally(() =>{
                    setIsFetching(false);
                });
    }, []);

    return (<>
        <Container>
            <Row>
                <Col className="hitcounterHeaderCol">
                    Hit Counter!
                </Col>
            </Row>
            <Row>
                <Col className="hitcounterCol">
                    {String(hitCounter).padStart(8, '0').split('').map((item, idx) => (
                        <span key={idx} className="counterElement">{item}</span>
                    ))}
                </Col>
            </Row>
        </Container>
    </>)
}
export default HitCounter;