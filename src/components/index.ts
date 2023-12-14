import MessageConstructor from "./message.vue";
import { h, render } from "vue";

var seed = 1;

export const removeInstance = (id: string) => {
  const self = document.querySelector(`#${id}`);
  self.remove();
};

export const message = (options) => {
  const id = `message_${seed++}`;
  const props = {
    ...options,
    id,
  };
  const vnode = h(MessageConstructor, props);
  var container = document.querySelector(".message-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "message-container";
    document.querySelector("html").appendChild(container);
  }
  const messageWrapper = document.createElement("div");
  messageWrapper.id = id;
  container.appendChild(messageWrapper);
  render(vnode, messageWrapper);
};
