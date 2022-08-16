import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Third Party

## Google Analytics

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```svelte title="src/lib/components/MyAnalytics.svelte"
<svelte:head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX");
  </script>
</svelte:head>
```

```svelte title="src/routes/__layout.svelte"
<script>
  import MyAnalytics from "$lib/components/MyAnalytics.svelte";
  import { dev } from "$app/env";
</script>

{#if !dev}
  <MyAnalytics />
{/if}
```

</TabItem>

<TabItem value="ts" label="ts">

```svelte title="src/lib/components/MyAnalytics.svelte"
<svelte:head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX");
  </script>
</svelte:head>
```

```svelte title="src/routes/__layout.svelte"
<script lang="ts">
  import MyAnalytics from "$lib/components/MyAnalytics.svelte";
  import { dev } from "$app/env";
</script>

{#if !dev}
  <MyAnalytics />
{/if}
```

</TabItem>
</Tabs>
