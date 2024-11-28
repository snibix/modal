# snibix-modal

A react component to create and customize modals

# Installation

to install,you can use or yarn

```bash
npm install snibix-modal
```

=======
A react component to create and customize modals

# Installation

to install,you can use or yarn

```bash
npm install snibix-modal
```

or

```bash
yarn install snibix-modal
```

# Documentations

- isOpen: (boolean)
  Defines whether the modal is open or closed (required)

- close: (function)
  Used to close the modal

# Exemple

```jsx
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
