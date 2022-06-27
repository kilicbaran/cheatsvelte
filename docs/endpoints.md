import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Endpoints

## Get

<Tabs>
<TabItem value="dynamic" label="Dynamic parameter" default>

<Tabs groupId="lang">
<TabItem value="js" label="js" default>


```js title="src/routes/api/items/[id].js"
// /api/items/1
export async function get({ params }) {
    const id = params.id;

    if(id == 1){
        return {
            body: {
                id
            }
        }
    }
    
    return {
        status: 404
    };
}
```

</TabItem>

<TabItem value="ts" label="ts">

```ts title="src/routes/api/items/[id].ts"
import type { RequestHandler } from "@sveltejs/kit";

// /api/items/1
export const get: RequestHandler = async ({ params }) => {
    const id = params.id;

    if(id == 1){
        return {
            body: {
                id
            }
        }
    }
    
    return {
        status: 404
    };
}
```

</TabItem>
</Tabs>
</TabItem>

<TabItem value="query" label="Query string">

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```js title="src/routes/api/items.js"
// /api/items?id=1
export async function get({ url }) {
    const id = url.searchParams.get("id");

    if(id == 1){
        return {
            body: {
                id
            }
        }
    }
    
    return {
        status: 404
    };
}
```

</TabItem>

<TabItem value="ts" label="ts">

```ts title="src/routes/api/items.ts"
import type { RequestHandler } from "@sveltejs/kit";

// /api/items?id=1
export const get: RequestHandler = async ({ url }) => {
    const id = url.searchParams.get("id");

    if(id == 1){
        return {
            body: {
                id
            }
        }
    }
    
    return {
        status: 404
    };
}
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## Post

<Tabs groupId="lang">
<TabItem value="js" label="js" default>

```js title="src/routes/api/items.js"
export async function post({ request }) {
    const { param1 } = await request.json(); // or .formData(), or .text(), etc

    return {
        body: {
            param1
        }
    }
}
```

</TabItem>
<TabItem value="ts" label="ts">

```ts title="src/routes/api/items.ts"
import type { RequestHandler } from "@sveltejs/kit";

export const post: RequestHandler = async ({ request }) => {
    const { param1 } = await request.json();  // or .formData(), or .text(), etc

    return {
        body: {
            param1
        }
    }
}
```

</TabItem>
</Tabs>