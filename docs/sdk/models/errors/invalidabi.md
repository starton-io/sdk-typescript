# InvalidAbi

## Example Usage

```typescript
import { InvalidAbi } from "@starton/sdk/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_minus_sign:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `context`                                                                                 | [errors.SchemasINVALIDABIContext](../../../sdk/models/errors/schemasinvalidabicontext.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `errorCode`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `message`                                                                                 | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `path`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `timestamp`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |