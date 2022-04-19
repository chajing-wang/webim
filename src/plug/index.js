import Contextmenu from "@/directives/contextmenu";
import YumyTabs from "@/components/tabs";
import YumyPopover from "@/components/popover";
import YumyButton from "@/components/button";
import YumyBadge from "@/components/badge";
import YumyAvatar from "@/components/avatar";
import YumyContact from "@/components/contact";
import YumyEditor from "@/components/editor";
import YumyMessages from "@/components/messages";
import YumyMessageBasic from "@/components/message/basic";
import YumyMessageText from "@/components/message/text";
import YumyMessageImage from "@/components/message/image";
import YumyMessageFile from "@/components/message/file";
import YumyMessageEvent from "@/components/message/event";

import YumyIMUI from "@/components/index";
import "@/styles/common/index.styl";
const version = "1.4.2";
const components = [
  YumyIMUI,
  YumyContact,
  YumyMessages,
  YumyEditor,
  YumyAvatar,
  YumyBadge,
  YumyButton,
  YumyPopover,
  YumyTabs,
  YumyMessageBasic,
  YumyMessageText,
  YumyMessageImage,
  YumyMessageFile,
  YumyMessageEvent
];
const install = (Vue) => {
  Vue.directive("YumyContextmenu", Contextmenu);
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version,
  install
};
