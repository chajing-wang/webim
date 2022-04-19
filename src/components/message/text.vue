<script>
export default {
  name: "YumyMessageText",
  inheritAttrs: false,
  inject: ["IMUI"],
  render() {
    return (
      <yumy-message-basic
        class="yumy-message-text"
        props={{ ...this.$attrs }}
        scopedSlots={{ 
          content: props => {
            const content = this.IMUI.emojiNameToImage(props.content);
            return <span domProps={{ innerHTML: content }} />;
          }
        }}
      />
    );
  }
};
</script>
<style lang="stylus">
@import '../../styles/utils/index'
+b(yumy-message-text)
  +b(yumy-message)
    +e(content)
      img
        width 18px
        height 18px
        display inline-block
        background transparent
        position relative
        top -1px
        padding 0 2px
        vertical-align middle
</style>
