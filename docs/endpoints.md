import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Endpoints

## Get

<Tabs>
<TabItem value="dynamic" label="Dynamic parameter" default>

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```js title="src/routes/api/items/[id]/+server.js"
// /api/items/1
export async function GET({ params }) {
  const id = params.id;

  if (id == 1) {
    return {
      id,
    };
  }

  throw error(404, "Not found");
}
```

</TabItem>

<TabItem value="ts" label="ts">

```ts title="src/routes/api/items/[id]/+server.ts"
import type { RequestHandler } from "@sveltejs/kit";

// /api/items/1
export const GET: RequestHandler = async ({ params }) => {
  const id = params.id;

  if (id == 1) {
    return {
      id,
    };
  }

  throw error(404, "Not found");
};
```

</TabItem>
</Tabs>
</TabItem>

<TabItem value="query" label="Query string">

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```js title="src/routes/api/items/+server.js"
// /api/items?id=1
export async function GET({ url }) {
  const id = url.searchParams.get("id");

  if (id == 1) {
    return {
      id,
    };
  }

  throw error(404, "Not found");
}
```

</TabItem>

<TabItem value="ts" label="ts">

```ts title="src/routes/api/items/+server.ts"
import type { RequestHandler } from "@sveltejs/kit";

// /api/items?id=1
export const GET: RequestHandler = async ({ url }) => {
  const id = url.searchParams.get("id");

  if (id == 1) {
    return {
      id,
    };
  }

  throw error(404, "Not found");
};
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## Post

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```js title="src/routes/api/items/+server.js"
export async function POST({ request }) {
  const { param1 } = await request.json(); // or .formData(), or .text(), etc

  return {
    param1,
  };
}
```

</TabItem>
<TabItem value="ts" label="ts">

```ts title="src/routes/api/items/+server.ts"
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
  const { param1 } = await request.json(); // or .formData(), or .text(), etc

  return {
    param1,
  };
};
```

</TabItem>
</Tabs>
