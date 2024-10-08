# WatcherType

## Example Usage

```typescript
import { WatcherType } from "@starton/sdk/sdk/models/shared";

let value: WatcherType = WatcherType.MinedTransaction;
```

## Values

| Name                             | Value                            |
| -------------------------------- | -------------------------------- |
| `MinedTransaction`               | MINED_TRANSACTION                |
| `AddressActivity`                | ADDRESS_ACTIVITY                 |
| `AddressReceivedNativeCurrency`  | ADDRESS_RECEIVED_NATIVE_CURRENCY |
| `AddressSentNativeCurrency`      | ADDRESS_SENT_NATIVE_CURRENCY     |
| `EventTransfer`                  | EVENT_TRANSFER                   |
| `Erc721EventTransfer`            | ERC721_EVENT_TRANSFER            |
| `Erc1155EventTransferSingle`     | ERC1155_EVENT_TRANSFER_SINGLE    |
| `Erc1155EventTransferBatch`      | ERC1155_EVENT_TRANSFER_BATCH     |
| `EventMint`                      | EVENT_MINT                       |
| `EventApproval`                  | EVENT_APPROVAL                   |
| `EventCustom`                    | EVENT_CUSTOM                     |