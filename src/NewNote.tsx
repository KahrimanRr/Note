import { NoteForm } from "./NoteForm";
import { Form } from "react-bootstrap";
export function NewNote() {
  return (
    <>
      <Form>
        <h1 className="mb-3"> New note</h1>
        <NoteForm />
      </Form>
    </>
  );
}
