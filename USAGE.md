<!-- Start SDK Example Usage [usage] -->
```typescript
import { Starton } from "@starton/sdk";

async function run() {
    const sdk = new Starton({
        startonApiKey: "<YOUR_API_KEY_HERE>",
    });

    const result = await sdk.data.getBalance({
        address: "164 Runolfsson Via",
        network: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->