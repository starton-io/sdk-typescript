<!-- Start SDK Example Usage -->
```typescript
import { Starton } from "@starton/sdk";

(async () => {
    const sdk = new Starton({
        startonApiKey: "",
    });

    const res = await sdk.data.getBalance({
        address: "164 Runolfsson Via",
        network: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->