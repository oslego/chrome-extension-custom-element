class MyElement extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    const doc = document.createElement('div');
    doc.innerHTML = "Hello from Custom Element!";

    // Add the element to the shadow root.
    shadow.appendChild(doc);
  }
}

// Define the new element
customElements.define('my-element', MyElement);

// Append the new element in the context of the host page.
document.body.appendChild(document.createElement('my-element'));
