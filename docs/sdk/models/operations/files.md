# Files

## Example Usage

```typescript
import { Files } from "@starton/sdk/sdk/models/operations";

let value: Files = {
    content: new TextEncoder().encode("0xbBe2fec3bE"),
    fileName: "your_file_here",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `content`          | *Uint8Array*       | :heavy_check_mark: | N/A                |
| `fileName`         | *string*           | :heavy_check_mark: | N/A                |