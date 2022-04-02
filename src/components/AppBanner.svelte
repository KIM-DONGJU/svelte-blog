<script lang="ts">
  export let bannerImageUrl:string = 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E';
  export let bannerConetents:string = '기본 설명';

</script>

<div class="app-banner-container">
  <img alt="banner" src={bannerImageUrl}>
  <p>{bannerConetents}</p>
</div>