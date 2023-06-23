import { Button, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NoteList() {
  return (
    <>
      <Row>
        <Col>
          <h1>Notes</h1>
        </Col>
        <Col xs="auto"></Col>
        <Stack gap={3} direction="horizontal">
          <Link to="/new">
            <Button variant="primary">Create</Button>
          </Link>
          <Button variant="outline-secondary">Edit Tags</Button>
        </Stack>
      </Row>
    </>
  );
}
