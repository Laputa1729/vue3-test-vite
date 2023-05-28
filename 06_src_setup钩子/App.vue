<template>
  <Demo msg="你好哇！" school="Laputa" @hello="showHelloMsg">
    <span>周杰伦</span>

    <template v-slot:qwe>
      <span>半岛铁盒</span>
    </template>

    <template v-slot:asd>
      <span>东风破</span>
    </template>
  </Demo>
</template>

<script>
import Demo from '@/components/Demo.vue'

export default {
  name: 'App',
  components: { Demo },

  setup() {
    function showHelloMsg(data) {
      alert(`触发了 hello 事件~~~收到数据：${ data }`);
    }

    return {
      showHelloMsg,
    }
  }
}
</script>
