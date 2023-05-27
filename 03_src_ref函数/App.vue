<template>
  <h1>一个人的信息：</h1>
  <h2>姓名：{{ name }}；年龄：{{ age }}</h2>
  <h3>工作：{{ job.type }}</h3>
  <h3>薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">修改</button>
</template>

<script>
/*
* reference
* implement
*/
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    // ref() 定义响应式数据
    let name = ref('张三');  // => RefImpl {...value} 引用实现对象
    let age = ref(18);
    let job = ref({
      type: 'Laputa',
      salary: '100',
    });

    function changeInfo() {
      name.value = '李四';
      age.value = 48;
      console.log(job.value);
      job.value.type = 'UI设计师';
      job.value.salary = '666';
    }

    return {
      name,
      age,
      job,
      changeInfo,
    }
  }
}
</script>
