# CreateRpcDto

## Example Usage

```typescript
import { CreateRpcDto, CreateRpcDtoType } from "@starton/sdk/sdk/models/shared";

let value: CreateRpcDto = {
  type: CreateRpcDtoType.Archive,
  url: "https://grim-quinoa.info",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `type`                                                                    | [shared.CreateRpcDtoType](../../../sdk/models/shared/createrpcdtotype.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `url`                                                                     | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |