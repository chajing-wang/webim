<script>
import { formatByte } from "@/utils";
export default {
  name: "YumyMessageFile",
  inheritAttrs: false,
  render() {
    return (
      <yumy-message-basic
        class="yumy-message-file"
        props={{ ...this.$attrs }}
        scopedSlots={{
          content: props => [
            <div class="yumy-message-file__inner">
              <p class="yumy-message-file__name">{props.fileName}</p>
              <p class="yumy-message-file__byte">
                {formatByte(props.fileSize)}
              </p>
            </div>,
            <div class="yumy-message-file__sfx">
              <i class="yumy-icon-attah" />
            </div>
          ]
        }}
      />
    );
  }
};
</script>
<style lang="stylus">
@import '../../styles/utils/index'
+b(yumy-message-file)
  +b(yumy-message)
    +e(content)
      display flex
      cursor pointer
      width 200px
      background #fff
      padding 12px 18px
      overflow hidden
      p
        margin 0
  +e(tip)
    display none
  +e(inner)
    flex 1
  +e(name)
    font-size 14px
  +e(byte)
    font-size 12px
    color #aaa
  +e(sfx)
    display flex
    align-items center
    justify-content center
    font-weight bold
    user-select none
    font-size 34px
    color #ccc
</style>
