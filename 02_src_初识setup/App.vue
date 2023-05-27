<template>
  <h1>一个人的信息：</h1>
  <h2>姓名：{{ name }}；年龄：{{ age }}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
import { h } from 'vue'

export default {
  name: 'App',
  // 测试一下 setup，暂时不考虑响应式的问题。
  setup() {
    // 数据
    let name = '张三';
    let age = 18;

    function sayHello() {
      alert(`我叫${ name }，我${ age }岁了，你好啊~`);
    }

    /* setup 函数返回一个对象，对象中的属性、方法，在模板中均可以直接使用。 */
    return {
      name,
      age,
      sayHello,
    }

    /* setup 函数返回一个函数（渲染函数）。 */
    // return () => h('h6', '马小军')
  }
}
</script>
