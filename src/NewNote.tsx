import { NoteData } from "./App";
import { NoteForm } from "./NoteForm";
import { Form } from "react-bootstrap";

type NewNoteProps = {
  onSubmit: (data: NoteData) => VOID;
};

export function NewNote({ onSubmit }: NewNoteProps) {
  return (
    <>
      <Form>
        <h1 className="mb-3"> New note</h1>
        <NoteForm onSubmit={onSubmit} />
      </Form>
    </>
  );
}
