// import Vue from "vue";
import { isFunction, isEmpty } from "@/utils/validate";
import yumyPopover from "../components/popover.vue";
let popover;

const hidePopover = () => {
  if (popover) popover.style.display = "none";
};
const showPopover = () => {
  if (popover) popover.style.display = "block";
};
// eslint-disable-next-line no-unused-vars
document.addEventListener("click", e => {
  hidePopover();
});
export default {
  hide: hidePopover,
  bind(el, binding, vnode) {
    el.addEventListener(
      binding.modifiers.click ? "click" : "contextmenu",
      e => {
        if (isEmpty(binding.value) || !Array.isArray(binding.value)) return;
        if (binding.modifiers.click) e.stopPropagation();
        e.preventDefault();
        yumyPopover.methods.closeAll();
        let component;
        let visibleItems = [];
        if (binding.modifiers.message) component = vnode.context;
        else if (binding.modifiers.contact) component = vnode.child;
        if (!popover) {
          popover = document.createElement("div");
          popover.className = "yumy-contextmenu";
          document.body.appendChild(popover);
        }
        popover.innerHTML = binding.value
          .map(item => {
            let visible;
            if (isFunction(item.visible)) {
              visible = item.visible(component);
            } else {
              visible = item.visible === undefined ? true : item.visible;
            }

            if (visible) {
              visibleItems.push(item);
              const icon = item.icon
                ? `<i class="yumy-contextmenu__icon ${item.icon}"></i>`
                : "";
              return `<div style="color:${item.color}" title="${
                item.text
              }" class="yumy-contextmenu__item">${icon}<span>${
                item.text
              }</span></div>`;
            }
            return "";
          })
          .join("");
        popover.style.top = `${e.pageY}px`;
        popover.style.left = `${e.pageX}px`;

        popover.childNodes.forEach((node, index) => {
          // eslint-disable-next-line no-unused-vars
          const { click, render } = visibleItems[index];
          node.addEventListener("click", e => {
            e.stopPropagation();
            if (isFunction(click)) click(e, component, hidePopover);
          });

          // if (isFunction(render)) {
          //   const ins = Vue.extend({
          //     render: h => {
          //       return render(h, component, hidePopover);
          //     },
          //   });
          //   const renderComponent = new ins().$mount();
          //   node.querySelector("span").innerHTML =
          //     renderComponent.$el.outerHTML;
          // }
        });

        showPopover();
      },
    );
  },
};
