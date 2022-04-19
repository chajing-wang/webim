<script>
export default {
  name: "YumyMessageImage",
  inheritAttrs: false,
  render() {
    return (
      <yumy-message-basic
        class="yumy-message-image"
        props={{ ...this.$attrs }}
        scopedSlots={{
          content: props => <img src={props.content} />
        }}
      />
    );
  }
};
</script>
<style lang="stylus">
@import '../../styles/utils/index'
+b(yumy-message-image)
  +b(yumy-message)
    +e(content)
      padding 0
      cursor pointer
      overflow hidden
      img
        max-width 100%
        min-width 100px
        display block
</style>
