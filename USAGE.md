<!-- Start SDK Example Usage [usage] -->
```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await starton.data.getBalance({
        address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        network: "polygon-mainnet",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->