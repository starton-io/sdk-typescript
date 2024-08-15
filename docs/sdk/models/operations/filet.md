# FileT

## Example Usage

```typescript
import { FileT } from "@starton/sdk/sdk/models/operations";

let value: FileT = {
    content: new TextEncoder().encode("0xCFB3DDFaBB"),
    fileName: "your_file_here",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `content`          | *Uint8Array*       | :heavy_check_mark: | N/A                |
| `fileName`         | *string*           | :heavy_check_mark: | N/A                |