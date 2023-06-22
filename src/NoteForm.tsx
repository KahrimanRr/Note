import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { FormEvent, useRef, useState } from "react";
import { NoteData, Tag } from "./App";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
}; /**we pass our note data and expect nothing in return */

/**will take function that will take some data based on our note data */
export function NoteForm({ onSubmit }: NoteFormProps) {
  /**ONsubmitt will usually take some type of data for our note */
  const titleRef =
    useRef<HTMLInputElement>(
      null
    ); /**input element that we are gonna give our values from */
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setselectedTags] = useState<Tag[]>(
    []
  ); /**array of tag objects,store selected tags,selected tags initial state to be empty array */

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [] /**! saying it is never gonna be null bcs we made sure the value is req */,
    });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Stack>
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>Title:</Form.Label>
                <Form.Control ref={titleRef} required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="tags">
                <Form.Label>Tags:</Form.Label>
                <CreatableReactSelect
                  value={selectedTags.map((tag) => {
                    return {
                      label: tag.label,
                      value: tag.id,
                    };
                  })}
                  onChange={(tags) => {
                    setselectedTags(
                      tags.map((tag) => {
                        return {
                          label: tag.label,
                          id: tag.value,
                        }; /**making sure we re converting from the value that credible react select expects to the value that we are actually storing for our type  */
                      })
                    );
                  }}
                  isMulti
                />
              </Form.Group>
            </Col>
          </Row>
          <Col>
            <Form.Group controlId="markdown">
              <Form.Label>Body:</Form.Label>
              <Form.Control
                ref={markdownRef}
                required
                as="textarea"
                rows={15}
              />
            </Form.Group>
          </Col>
          <Stack
            className="justify-content-end mt-2"
            direction="horizontal"
            gap={2}
          >
            <Button type="submit" variant="primary">
              Save
            </Button>
            <Link to="...">
              <Button type="button" variant="outline-secondary">
                Cancel
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Form>
    </>
  );
}
/*Stack from bootstrap it will place elements automatically vertical */
