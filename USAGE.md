<!-- Start SDK Example Usage [usage] -->
```typescript
import { Starton } from "@starton/sdk";

async function run() {
    const sdk = new Starton({
        startonApiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.data.getBalance({
        address: "164 Runolfsson Via",
        network: "string",
    });

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->