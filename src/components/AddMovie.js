import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ModalExample = ({handleAdd}) => {

    const [inputTitle, setInputTitle] = useState('');
    const [inputPoster, setInputPoster] = useState('');
    const [inputRate, setInputRate] = useState(0);
    const [inputDescription, setInputDescription] = useState('');
    const [inputTrailer, setInputTrailer] = useState('')

    const Add = () => {
        handleAdd(inputTitle, inputRate, inputPoster, inputDescription, inputTrailer);
        setModal(!modal);
        setInputTitle('');
        setInputPoster('');
        setInputDescription('');
        setInputRate(0);
        setInputTrailer('');
    }

  const [modal, setModal] = useState(false);

  const toggle = () => {
      setModal(!modal);
      setInputTitle('');
        setInputPoster('');
        setInputDescription('');
        setInputRate(0);
        setInputTrailer('')
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>add movie</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <form>
              <label>Enter movie name</label>
              <input type="text" onChange={(e)=>setInputTitle(e.target.value)} value={inputTitle} />
              <br />
              <label>Enter Rating</label>
              <input type="number" onChange={(e)=>setInputRate(e.target.value)} value={inputRate} />
              <br />
              <label>Enter poster Url</label>
              <input type="text" onChange={(e)=>setInputPoster(e.target.value)} value={inputPoster} />
              <br />
              <label>Enter description</label>
              <input type="text" onChange={(e)=>setInputDescription(e.target.value)} value={inputDescription} />
              <br />
              <label>Enter Trailer Url</label>
              <input onChange={(e)=>setInputTrailer(e.target.value)} value={inputTrailer} />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Add}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;