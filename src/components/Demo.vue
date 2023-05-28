<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test1">点击触发 hello 事件</button>
  <hr>
  <div><slot></slot></div>
  <div><slot name="qwe"></slot></div>
  <div><slot name="asd"></slot></div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Demo',
  props: ['msg', 'school'],
  emits: ['hello'],

  setup(props, context) {
    console.log('---setup---', props, context);
    // 数据
    let person = reactive({
      name: '张三',
      age: 18,
    });

    function test1() {
      context.emit('hello', 666);
    }

    return {
      person,
      test1,
    }
  }
}
</script>
