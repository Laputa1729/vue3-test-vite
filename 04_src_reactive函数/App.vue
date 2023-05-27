<template>
  <h1>一个人的信息：</h1>
  <h2>姓名：{{ name }}；年龄：{{ age }}</h2>
  <h3>工作：{{ job.type }}</h3>
  <h3>薪水：{{ job.salary }}</h3>
  <h3>c：{{ job.a.b.c }}</h3>
  <h3>爱好：{{ hobbies }}</h3>
  <button @click="changeInfo">修改</button>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'App',
  setup() {
    // ref() 定义响应式数据（多用于基本数据类型）
    let name = ref('张三');  // => RefImpl {...value} 引用实现对象
    let age = ref(18);

    // reactive() 定义响应式数据（引用类型）
    let job = reactive({  // => Proxy {...} 实例对象
      type: 'Laputa',
      salary: '100k',
      a: {
        b: {
          c: 666,
        }
      }
    });
    let hobbies = reactive(['抽烟', '喝酒', '烫头']);

    function changeInfo() {
      name.value = '李四';
      age.value = 48;

      console.log(job);
      job.type = 'UI设计师';
      job.salary = '666k';

      job.a.b.c = 999;
      hobbies[0] = '造反';
    }

    return {
      name,
      age,
      job,
      hobbies,
      changeInfo,
    }
  }
}
</script>
