<script lang="ts">
  import {
    AppBanner
  } from '@/components';

  const forCount = [
    1,
    2,
    3,
  ];
</script>

<div>
  {#each forCount as index}
    <AppBanner
      bannerConetents={`설명을 해보자-${index}`}
    />
  {/each}
</div>