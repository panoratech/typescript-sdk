<!-- Start SDK Example Usage [usage] -->
```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.hello();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->