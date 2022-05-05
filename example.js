import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
class MyElement extends LitElement {
  // // in Typescript:
  //   @property()
  // version = "STARTING";
  // @property()
  // name = "STARTING";
  static properties = {
    version: "STARTING",
    name: "",
  };

  static styles = css`
    p {
      background: black;
      color: white;
    }
    button:hover,
    input:hover,
    button:focus,
    input:focus {
      background: black;
      color: white;
    }
  `;

  constructor() {
    super();
    this.version = "STARTER";
    this.name = "<Your name here>";
  }

  render() {
    return html`
      <p>Welcome to a Lit tutorial!</p>
      <p>This is some ${this.version} code.</p>
      <p>Hello, ${this.name}</p>
      <input @input=${this.changeName} placeholder="Enter your name" />
      <button
        @click=${() => {
          alert("You clicked a button.");
        }}
      >
        Click this button
      </button>
    `;
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value;
  }
}
