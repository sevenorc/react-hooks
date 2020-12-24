import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditMovie = ({el, handleEdit}) => {


  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  
  const [editTitle, setEditTitle] = useState(el.title);
  const [editRate, setEditRate] = useState(el.rate);
  const [editDescription, setEditDescription] = useState(el.description);
  const [editPoster, setEditPoster] = useState(el.posterUrl);

  const toggle = () => {
      setModal(!modal);
      setEditDescription(el.description);
      setEditPoster(el.posterUrl);
      setEditRate(el.rate);
      setEditTitle(el.title)
  }

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  const editMovie = () => {
    handleEdit(el.id, editTitle, editRate, editPoster, editDescription);
    setModal(!modal);
  }

  return (
    <div>
        <button style={{marginLeft: "1px", width: "150px", fontWeight:"600"}} className="btn btn-outline-warning" onClick={toggle} >EDIT</button>
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Edit Movie</ModalHeader>
        <ModalBody>
        <form>
              <label>Enter movie name</label>
              <input type="text" onChange={(e)=>setEditTitle(e.target.value)} value={editTitle} />
              <br />
              <label>Enter Rating</label>
              <input type="number" onChange={(e)=>setEditRate(e.target.value)} value={editRate} />
              <br />
              <label>Enter poster Url</label>
              <input type="text" onChange={(e)=>setEditPoster(e.target.value)} value={editPoster} />
              <br />
              <label>Enter description</label>
              <input type="text" onChange={(e)=>setEditDescription(e.target.value)} value={editDescription} />
          </form>
        <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>

            <ModalBody>Stuff and things</ModalBody>

          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editMovie}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditMovie;