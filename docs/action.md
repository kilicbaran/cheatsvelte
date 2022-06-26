import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Action

<!-- https://github.com/sveltejs/svelte/pull/7121 -->

## Template

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```js title="$lib/actions/myFunction.js"
export function myFunction(node) {
  // the node has been mounted in the DOM
  return {
    destroy() {
      // the node has been removed from the DOM
    }
  };
}
```

```svelte
<div use:myFunction></div>
```

</TabItem>
<TabItem value="ts" label="ts">


```js title="$lib/actions/myFunction.ts"
export function myFunction(node) {
  // the node has been mounted in the DOM
  return {
    destroy() {
      // the node has been removed from the DOM
    }
  };
}
```

```svelte
<div use:myFunction></div>
```

</TabItem>
</Tabs>

## Example

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```js title="$lib/actions/clickOutside.js"
export function clickOutside(node) {
	const handleClick = (event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent("outclick"));
		}
	};

	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
}
```

```svelte
<div use:clickOutside on:outclick={() => (alert("outclick"))}>Action</div>
```

</TabItem>
<TabItem value="ts" label="ts">


```js title="$lib/actions/clickOutside.ts"
import type { Action } from 'svelte/action';

export const clickOutside: Action<HTMLElement> = (node) => {
    const handleClick = (event: Event) => {
        if (!node.contains(event.target as Node)) {
            node.dispatchEvent(new CustomEvent("outclick"));
        }
    };

    document.addEventListener("click", handleClick, true);

    return {
        destroy() {
            document.removeEventListener("click", handleClick, true);
        }
    };
}
```

```svelte
<script lang="ts">
  import { clickOutside } from "$lib/actions/clickOutside";
</script>

<div use:clickOutside on:outclick={() => (alert("outclick"))}>Action</div>
```

```ts title="src/additional-svelte-jsx.d.ts"
declare namespace svelte.JSX {
    interface DOMAttributes<T extends EventTarget> {
        onoutclick?: TouchEventHandler<T> | undefined | null;
    }
}
```

</TabItem>
</Tabs>