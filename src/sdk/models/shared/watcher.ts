/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type WatcherCustomEventAbi = {};

export type WatcherCustomFilters = {};

export type WatcherMetadata = {};

export enum TriggerType {
  Block = "BLOCK",
  Transaction = "TRANSACTION",
  Event = "EVENT",
  GasPrice = "GAS_PRICE",
}

export enum WatcherType {
  MinedTransaction = "MINED_TRANSACTION",
  AddressActivity = "ADDRESS_ACTIVITY",
  AddressReceivedNativeCurrency = "ADDRESS_RECEIVED_NATIVE_CURRENCY",
  AddressSentNativeCurrency = "ADDRESS_SENT_NATIVE_CURRENCY",
  EventTransfer = "EVENT_TRANSFER",
  Erc721EventTransfer = "ERC721_EVENT_TRANSFER",
  Erc1155EventTransferSingle = "ERC1155_EVENT_TRANSFER_SINGLE",
  Erc1155EventTransferBatch = "ERC1155_EVENT_TRANSFER_BATCH",
  EventMint = "EVENT_MINT",
  EventApproval = "EVENT_APPROVAL",
  EventCustom = "EVENT_CUSTOM",
}

export type Watcher = {
  address: string;
  confirmationsBlocks: number;
  createdAt?: Date | undefined;
  customEventAbi?: Array<WatcherCustomEventAbi> | null | undefined;
  customFilters?: WatcherCustomFilters | undefined;
  description?: string | null | undefined;
  id: string;
  metadata?: WatcherMetadata | null | undefined;
  name?: string | null | undefined;
  network: string;
  paused: boolean;
  pausedReason?: string | null | undefined;
  projectId: string;
  triggerType: TriggerType;
  type: WatcherType;
  updatedAt?: Date | undefined;
  webhookUrl: string;
};

/** @internal */
export const WatcherCustomEventAbi$inboundSchema: z.ZodType<
  WatcherCustomEventAbi,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type WatcherCustomEventAbi$Outbound = {};

/** @internal */
export const WatcherCustomEventAbi$outboundSchema: z.ZodType<
  WatcherCustomEventAbi$Outbound,
  z.ZodTypeDef,
  WatcherCustomEventAbi
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WatcherCustomEventAbi$ {
  /** @deprecated use `WatcherCustomEventAbi$inboundSchema` instead. */
  export const inboundSchema = WatcherCustomEventAbi$inboundSchema;
  /** @deprecated use `WatcherCustomEventAbi$outboundSchema` instead. */
  export const outboundSchema = WatcherCustomEventAbi$outboundSchema;
  /** @deprecated use `WatcherCustomEventAbi$Outbound` instead. */
  export type Outbound = WatcherCustomEventAbi$Outbound;
}

/** @internal */
export const WatcherCustomFilters$inboundSchema: z.ZodType<
  WatcherCustomFilters,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type WatcherCustomFilters$Outbound = {};

/** @internal */
export const WatcherCustomFilters$outboundSchema: z.ZodType<
  WatcherCustomFilters$Outbound,
  z.ZodTypeDef,
  WatcherCustomFilters
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WatcherCustomFilters$ {
  /** @deprecated use `WatcherCustomFilters$inboundSchema` instead. */
  export const inboundSchema = WatcherCustomFilters$inboundSchema;
  /** @deprecated use `WatcherCustomFilters$outboundSchema` instead. */
  export const outboundSchema = WatcherCustomFilters$outboundSchema;
  /** @deprecated use `WatcherCustomFilters$Outbound` instead. */
  export type Outbound = WatcherCustomFilters$Outbound;
}

/** @internal */
export const WatcherMetadata$inboundSchema: z.ZodType<
  WatcherMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type WatcherMetadata$Outbound = {};

/** @internal */
export const WatcherMetadata$outboundSchema: z.ZodType<
  WatcherMetadata$Outbound,
  z.ZodTypeDef,
  WatcherMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WatcherMetadata$ {
  /** @deprecated use `WatcherMetadata$inboundSchema` instead. */
  export const inboundSchema = WatcherMetadata$inboundSchema;
  /** @deprecated use `WatcherMetadata$outboundSchema` instead. */
  export const outboundSchema = WatcherMetadata$outboundSchema;
  /** @deprecated use `WatcherMetadata$Outbound` instead. */
  export type Outbound = WatcherMetadata$Outbound;
}

/** @internal */
export const TriggerType$inboundSchema: z.ZodNativeEnum<typeof TriggerType> = z
  .nativeEnum(TriggerType);

/** @internal */
export const TriggerType$outboundSchema: z.ZodNativeEnum<typeof TriggerType> =
  TriggerType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggerType$ {
  /** @deprecated use `TriggerType$inboundSchema` instead. */
  export const inboundSchema = TriggerType$inboundSchema;
  /** @deprecated use `TriggerType$outboundSchema` instead. */
  export const outboundSchema = TriggerType$outboundSchema;
}

/** @internal */
export const WatcherType$inboundSchema: z.ZodNativeEnum<typeof WatcherType> = z
  .nativeEnum(WatcherType);

/** @internal */
export const WatcherType$outboundSchema: z.ZodNativeEnum<typeof WatcherType> =
  WatcherType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WatcherType$ {
  /** @deprecated use `WatcherType$inboundSchema` instead. */
  export const inboundSchema = WatcherType$inboundSchema;
  /** @deprecated use `WatcherType$outboundSchema` instead. */
  export const outboundSchema = WatcherType$outboundSchema;
}

/** @internal */
export const Watcher$inboundSchema: z.ZodType<Watcher, z.ZodTypeDef, unknown> =
  z.object({
    address: z.string(),
    confirmationsBlocks: z.number(),
    createdAt: z.string().datetime({ offset: true }).default(
      "2024-10-07T18:00:22.732Z",
    ).transform(v => new Date(v)),
    customEventAbi: z.nullable(
      z.array(z.lazy(() => WatcherCustomEventAbi$inboundSchema)),
    ).optional(),
    customFilters: z.lazy(() => WatcherCustomFilters$inboundSchema).optional(),
    description: z.nullable(z.string()).optional(),
    id: z.string(),
    metadata: z.nullable(z.lazy(() => WatcherMetadata$inboundSchema))
      .optional(),
    name: z.nullable(z.string()).optional(),
    network: z.string(),
    paused: z.boolean(),
    pausedReason: z.nullable(z.string()).optional(),
    projectId: z.string(),
    triggerType: TriggerType$inboundSchema,
    type: WatcherType$inboundSchema,
    updatedAt: z.string().datetime({ offset: true }).default(
      "2024-10-07T18:00:22.732Z",
    ).transform(v => new Date(v)),
    webhookUrl: z.string(),
  });

/** @internal */
export type Watcher$Outbound = {
  address: string;
  confirmationsBlocks: number;
  createdAt: string;
  customEventAbi?: Array<WatcherCustomEventAbi$Outbound> | null | undefined;
  customFilters?: WatcherCustomFilters$Outbound | undefined;
  description?: string | null | undefined;
  id: string;
  metadata?: WatcherMetadata$Outbound | null | undefined;
  name?: string | null | undefined;
  network: string;
  paused: boolean;
  pausedReason?: string | null | undefined;
  projectId: string;
  triggerType: string;
  type: string;
  updatedAt: string;
  webhookUrl: string;
};

/** @internal */
export const Watcher$outboundSchema: z.ZodType<
  Watcher$Outbound,
  z.ZodTypeDef,
  Watcher
> = z.object({
  address: z.string(),
  confirmationsBlocks: z.number(),
  createdAt: z.date().default(() => new Date("2024-10-07T18:00:22.732Z"))
    .transform(v => v.toISOString()),
  customEventAbi: z.nullable(
    z.array(z.lazy(() => WatcherCustomEventAbi$outboundSchema)),
  ).optional(),
  customFilters: z.lazy(() => WatcherCustomFilters$outboundSchema).optional(),
  description: z.nullable(z.string()).optional(),
  id: z.string(),
  metadata: z.nullable(z.lazy(() => WatcherMetadata$outboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
  network: z.string(),
  paused: z.boolean(),
  pausedReason: z.nullable(z.string()).optional(),
  projectId: z.string(),
  triggerType: TriggerType$outboundSchema,
  type: WatcherType$outboundSchema,
  updatedAt: z.date().default(() => new Date("2024-10-07T18:00:22.732Z"))
    .transform(v => v.toISOString()),
  webhookUrl: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Watcher$ {
  /** @deprecated use `Watcher$inboundSchema` instead. */
  export const inboundSchema = Watcher$inboundSchema;
  /** @deprecated use `Watcher$outboundSchema` instead. */
  export const outboundSchema = Watcher$outboundSchema;
  /** @deprecated use `Watcher$Outbound` instead. */
  export type Outbound = Watcher$Outbound;
}
