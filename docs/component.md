---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Component

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```svelte title="Component.svelte"
<script>
  let s = 'text';
</script>

<div>
  {s}
</div>

<style>
div {
  color: blue;
}
</style>
```

</TabItem>

<TabItem value="ts" label="ts">

```svelte title="Component.svelte"
<script lang="ts">
  let s: string = 'text';
</script>

<div>
  {s}
</div>

<style>
div {
  color: blue;
}
</style>
```

</TabItem>
</Tabs>