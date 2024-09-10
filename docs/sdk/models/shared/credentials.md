# Credentials

## Example Usage

```typescript
import { Credentials } from "@starton/sdk/sdk/models/shared";

let value: Credentials = {
  baseUrl: "<value>",
  id: "<id>",
  loginPath: "<value>",
  role: "<value>",
  rootPath: "<value>",
  selfSigned: false,
  timeout: 5013.24,
  tokenPath: "<value>",
};
```

## Supported Types

### `shared.AwsKmsCredentialsDto`

```typescript
const value: shared.AwsKmsCredentialsDto = /* values here */
```

### `shared.VaultKmsCredentialsDto`

```typescript
const value: shared.VaultKmsCredentialsDto = /* values here */
```

