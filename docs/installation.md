---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

<Tabs>
<TabItem value="svelte" label="Svelte" default>

```sh
npm init vite my-app -- --template svelte
```

</TabItem>
<TabItem value="sveltekit" label="Sveltekit">

```sh
npm init svelte my-app
```

</TabItem>
</Tabs>


```sh
cd my-app
```

```sh
# Add any integrations you like
npx svelte-add@latest 3d
npx svelte-add@latest bootstrap
npx svelte-add@latest bulma
npx svelte-add@latest coffeescript
npx svelte-add@latest mdsvex
npx svelte-add@latest postcss
npx svelte-add@latest scss
npx svelte-add@latest tailwindcss
```
For more info: [svelte-add](https://github.com/svelte-add/svelte-add)

```sh
npm install
```

```sh
npm run dev
```