<!-- Start SDK Example Usage [usage] -->
```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await starton.data.getBalance({
        address: "164 Runolfsson Via",
        network: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->