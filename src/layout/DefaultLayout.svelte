<script lang="ts">
	import Router from 'svelte-spa-router';
	import routes from '@/router/routers';

  import {push } from 'svelte-spa-router';

  const goPage = (page: string) => {
    push(page);
  }
</script>

<div class="default-layout">
  <div class="nav-layout">
    <button on:click={() => goPage('/')}>test1 이동</button>
    <button on:click={() => goPage('/test2')}>test2 이동</button>
  </div>
  <div class="pages-layout">
    <Router {routes} />
  </div>
</div>

<style lang="scss">
  .default-layout {
    display: flex;
    height: 100vh;

    .pages-layout {
      flex: 1;
      background-color: #ddd;
    }
  }

</style>