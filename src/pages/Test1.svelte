<script lang="ts">
  import {
    AppBanner
  } from '@/components';
import { onMount } from 'svelte';

  let forCount: Array<number> = [
    1,
    2,
    3,
  ];

  let testObject: {
    a: {
      b: {
        c: {
          d: number
        }
      }
    }
  } = {
    a: {
      b: {
        c: {
          d: 0,
        }
      }
    }
  }

  let testArray:Array<Array<number>> = [[0,0,0,0], [0,0,0,0], [0,0,0,0]]

  let testArrayAndObject = [
    {
      a: {
        b: {
          c: 0
        }
      }
    },
    {
      a: {
        b: {
          c: 0
        }
      }
    },
  ]

  onMount(() => {
    setInterval(() => {
      forCount[1] += 1;
      testObject.a.b.c.d += 1;
      testArray[1][2] += 1;
      testArrayAndObject[1].a.b.c += 1;
    }, 1000);
  })
</script>

<div>
  {#each forCount as index}
    <AppBanner
      bannerConetents={`설명을 해보자-${index}`}
    />
  {/each}
  <p>{testObject.a.b.c.d} - test Object</p>
  <p>{testArray[1][2]} - test Array</p>
  <p>{testArrayAndObject[1].a.b.c}</p>
</div>