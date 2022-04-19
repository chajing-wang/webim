<script>
export default {
  name: "YumyMessageVoice",
  inheritAttrs: false,
  inject: ["IMUI"],
  render() {
    return (
      <yumy-message-basic
        class="yumy-message-voice"
        props={{ ...this.$attrs }}
        scopedSlots={{
          content: props => {
            return <span>{props.content}&nbsp;🔈</span>;
          }
        }}
      />
    );
  }
};
</script>
<style lang="stylus">
.yumy-message.yumy-message-voice
  user-select none
  .yumy-message__content
    border 2px solid #000
    font-size 12px
    cursor pointer
    &::before
      display none
</style>