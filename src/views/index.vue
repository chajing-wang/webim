<template>
  <div class="main">

     <yumy-imui
     :user="UserData"
        ref="IMUI"
        @send="sendMessage"
        @change-contact="handleChangeContact"
        @pull-messages="handlePullMessages"
        :width="width"
        :height="height"
        :gutter="gutter"
      >
     </yumy-imui>
    
  </div>
</template>

<script>
import UserData from "@/database/user";
import ContactsData from "@/database/contacts";
import MessagesData from "@/database/messages";
import EmojiData from "@/database/emoji";

export default {
  name: 'IndexPage',
  data () {
    return {
      UserData,
      ContactsData,
      MessagesData,
      gutter: 100,
      width: 1024,
      height: 768
    }
  },
  watch: {
  },
  mounted () {
    const IMUI = this.$refs.IMUI;
    this.width = document.documentElement.clientWidth - this.gutter
    this.height = document.documentElement.clientHeight - this.gutter
    IMUI.initContacts(ContactsData);
    IMUI.initEmoji(EmojiData);
    console.error('msg:', this.MessagesData);
  },
  methods: {
    sendMessage(msg, next, file) {
      console.error(msg, next, file);
      setTimeout(() => {
        next();
      }, 1000);
    },
    handlePullMessages(contact, next, instance) {
      console.error('1, pull all messages', contact);
      console.error('2, pull all messages', next);
      console.error('3, pull all messages', instance);
      setTimeout(() => {
        next(this.MessagesData[contact.id], true);
      }, 500);
    },
    handleChangeContact(contact, instance) {
      console.error("Event:change-contact", contact, instance);
      instance.updateContact({
        id: contact.id,
        unread: 0,
      });
      instance.closeDrawer();
    },

  }
}
</script>
<style scoped>
.main {
  margin: 0 auto;
  margin-top: 50px;
}
</style>