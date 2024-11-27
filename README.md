# snibix-modal<br>
A react component to create and customize modals

# Installation<br>
to install,you can use or yarn

```bash
npm install snibix-modal
```

or

```bash
yarn install snibix-modal
```

# Documentations
- isOpen: (boolean)<br>
Defines whether the modal is open or closed (required)<br>

- close: (function)
<br>Used to close the modal<br>

- children: (ReactNode)<br>
The content displayed inside the modal. (Required)<br>

- className: (string)<br>
Custom class for styling the modal. (Optional)

# Exemples

```bash
import React from "react";
import Modal from "snibix-modal";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        <div className="modal-content">
          <h2>Hello, World!</h2>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </>
  );
}

export default App;

```
