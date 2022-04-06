<script lang="ts">

</script>

<div class="study-contents-container">
  <h1>
    2022-04-06 공부 일지
  </h1>
  <div class="wrap-contents">
    <h2>
      1. Vue.js 에서 각 vue 파일에 name을 지정해야 하는 이유
    </h2>
    <h3>
      (vue에서 .vue 파일을 각각의 component로 인식하는데 왜 name을 지정해줘야할까?)
    </h3>
    <p class="contents">
      1.1 Vue 개발자 모드에서 components 이름이 명확하게 보이게 하기 위함 (이름을 지정하지 않으면 Defualt와 같은 형태로 출력된다.)
    </p>
    <p class="contents">
      1.2 컴포넌트가 재귀적으로 본인의 컴포넌트를 다시 호출할 때 필요
    </p>
    <p class="contents">
      1.3 Vue3 script setup 형태를 사용할 경우 기본적으로 import한 component 파일 이름이 component name인것처럼 인식함
    </p>
  </div>
</div>