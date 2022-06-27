---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Stores

## Writable Store

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```js title="src/lib/stores/count.js"
import { writable } from 'svelte/store';

export const count = writable(0);

export { count as default };
```

</TabItem>
<TabItem value="ts" label="ts">


```ts title="src/lib/stores/count.ts"
import { writable } from 'svelte/store';

export const count = writable<number>(0);

export { count as default };
```

</TabItem>
</Tabs>

<!-- ### Save to local storage

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```js title="src/lib/stores/settings.js"
import { browser } from '$app/env';
import { writable } from 'svelte/store';

const initialValue = {
    lang: 'US';
    name: 'John';
};

export const settings = writable(undefined); // or initialValue
const key = "settings";

if (browser) {
    const valueJSON = window.localStorage.getItem(key);
    if (valueJSON) {
        const value = JSON.parse(valueJSON);
        settings.set(value);
    }
}

settings.subscribe((value) => {
    if (browser) {
        if (value !== undefined) {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }
});

export { settings as default };
```

</TabItem>
<TabItem value="ts" label="ts">


```ts title="src/lib/stores/settings.ts"
import { browser } from '$app/env';
import { writable } from 'svelte/store';

export type Settings = {
    lang: string;
    name: string;
}

const initialValue = {
    lang: 'US';
    name: 'John';
};

export const settings = writable<Settings>(undefined); // or initialValue
const key = "settings";

if (browser) {
    const valueJSON = window.localStorage.getItem(key);
    if (valueJSON) {
        const value = JSON.parse(valueJSON);
        settings.set(value);
    }
}

settings.subscribe((value) => {
    if (browser) {
        if (value !== undefined) {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }
});

export { settings as default };
```

</TabItem>
</Tabs> -->

## Derived Store

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```js title="src/lib/stores/doubled.js"
import { derived } from 'svelte/store';
import count from '$lib/stores/count';

const doubled = derived(count, $count => $count * 2);

export { doubled as default };
```

</TabItem>
<TabItem value="ts" label="ts">


```ts title="src/lib/stores/doubled.ts"
import { derived } from 'svelte/store';
import count from '$lib/stores/count';

const doubled = derived(count, $count => $count * 2);

export { doubled as default };
```

</TabItem>
</Tabs>

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```js title="src/lib/stores/sum.js"
import { derived } from 'svelte/store';
import count from '$lib/stores/count';
import count2 from '$lib/stores/count2';

const sum = derived([count, count2], ([$count, $count2]) => $count + $count2);

export { sum as default };
```

</TabItem>
<TabItem value="ts" label="ts">


```ts title="src/lib/stores/sum.ts"
import { derived } from 'svelte/store';
import count from '$lib/stores/count';
import count2 from '$lib/stores/count2';

const sum = derived([count, count2], ([$count, $count2]) => $count + $count2);

export { sum as default };
```

</TabItem>
</Tabs>


<!-- 
import { derived } from 'svelte/store';
import learn_lang from './learn_lang';
import selected_wlists from './selected_wlists';

export const cur_wlist = derived(
    [selected_wlists, learn_lang],
    ([$selected_wlists, $learn_lang]) => $selected_wlists[$learn_lang]
);

export { cur_wlist as default }; -->