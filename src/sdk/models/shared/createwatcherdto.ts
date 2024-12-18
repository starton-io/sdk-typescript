/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomEventAbi = {};

export type CustomFilters = {};

export type CreateWatcherDtoMetadata = {};

export enum CreateWatcherDtoType {
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

export type CreateWatcherDto = {
  address: string;
  confirmationsBlocks: number;
  customEventAbi?: CustomEventAbi | undefined;
  customFilters?: CustomFilters | undefined;
  description?: string | null | undefined;
  metadata?: CreateWatcherDtoMetadata | undefined;
  name?: string | null | undefined;
  network: string;
  type: CreateWatcherDtoType;
  webhookUrl: string;
};

/** @internal */
export const CustomEventAbi$inboundSchema: z.ZodType<
  CustomEventAbi,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CustomEventAbi$Outbound = {};

/** @internal */
export const CustomEventAbi$outboundSchema: z.ZodType<
  CustomEventAbi$Outbound,
  z.ZodTypeDef,
  CustomEventAbi
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomEventAbi$ {
  /** @deprecated use `CustomEventAbi$inboundSchema` instead. */
  export const inboundSchema = CustomEventAbi$inboundSchema;
  /** @deprecated use `CustomEventAbi$outboundSchema` instead. */
  export const outboundSchema = CustomEventAbi$outboundSchema;
  /** @deprecated use `CustomEventAbi$Outbound` instead. */
  export type Outbound = CustomEventAbi$Outbound;
}

export function customEventAbiToJSON(customEventAbi: CustomEventAbi): string {
  return JSON.stringify(CustomEventAbi$outboundSchema.parse(customEventAbi));
}

export function customEventAbiFromJSON(
  jsonString: string,
): SafeParseResult<CustomEventAbi, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomEventAbi$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomEventAbi' from JSON`,
  );
}

/** @internal */
export const CustomFilters$inboundSchema: z.ZodType<
  CustomFilters,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CustomFilters$Outbound = {};

/** @internal */
export const CustomFilters$outboundSchema: z.ZodType<
  CustomFilters$Outbound,
  z.ZodTypeDef,
  CustomFilters
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFilters$ {
  /** @deprecated use `CustomFilters$inboundSchema` instead. */
  export const inboundSchema = CustomFilters$inboundSchema;
  /** @deprecated use `CustomFilters$outboundSchema` instead. */
  export const outboundSchema = CustomFilters$outboundSchema;
  /** @deprecated use `CustomFilters$Outbound` instead. */
  export type Outbound = CustomFilters$Outbound;
}

export function customFiltersToJSON(customFilters: CustomFilters): string {
  return JSON.stringify(CustomFilters$outboundSchema.parse(customFilters));
}

export function customFiltersFromJSON(
  jsonString: string,
): SafeParseResult<CustomFilters, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFilters$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFilters' from JSON`,
  );
}

/** @internal */
export const CreateWatcherDtoMetadata$inboundSchema: z.ZodType<
  CreateWatcherDtoMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateWatcherDtoMetadata$Outbound = {};

/** @internal */
export const CreateWatcherDtoMetadata$outboundSchema: z.ZodType<
  CreateWatcherDtoMetadata$Outbound,
  z.ZodTypeDef,
  CreateWatcherDtoMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWatcherDtoMetadata$ {
  /** @deprecated use `CreateWatcherDtoMetadata$inboundSchema` instead. */
  export const inboundSchema = CreateWatcherDtoMetadata$inboundSchema;
  /** @deprecated use `CreateWatcherDtoMetadata$outboundSchema` instead. */
  export const outboundSchema = CreateWatcherDtoMetadata$outboundSchema;
  /** @deprecated use `CreateWatcherDtoMetadata$Outbound` instead. */
  export type Outbound = CreateWatcherDtoMetadata$Outbound;
}

export function createWatcherDtoMetadataToJSON(
  createWatcherDtoMetadata: CreateWatcherDtoMetadata,
): string {
  return JSON.stringify(
    CreateWatcherDtoMetadata$outboundSchema.parse(createWatcherDtoMetadata),
  );
}

export function createWatcherDtoMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CreateWatcherDtoMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateWatcherDtoMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateWatcherDtoMetadata' from JSON`,
  );
}

/** @internal */
export const CreateWatcherDtoType$inboundSchema: z.ZodNativeEnum<
  typeof CreateWatcherDtoType
> = z.nativeEnum(CreateWatcherDtoType);

/** @internal */
export const CreateWatcherDtoType$outboundSchema: z.ZodNativeEnum<
  typeof CreateWatcherDtoType
> = CreateWatcherDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWatcherDtoType$ {
  /** @deprecated use `CreateWatcherDtoType$inboundSchema` instead. */
  export const inboundSchema = CreateWatcherDtoType$inboundSchema;
  /** @deprecated use `CreateWatcherDtoType$outboundSchema` instead. */
  export const outboundSchema = CreateWatcherDtoType$outboundSchema;
}

/** @internal */
export const CreateWatcherDto$inboundSchema: z.ZodType<
  CreateWatcherDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: z.string(),
  confirmationsBlocks: z.number(),
  customEventAbi: z.lazy(() => CustomEventAbi$inboundSchema).optional(),
  customFilters: z.lazy(() => CustomFilters$inboundSchema).optional(),
  description: z.nullable(z.string()).optional(),
  metadata: z.lazy(() => CreateWatcherDtoMetadata$inboundSchema).optional(),
  name: z.nullable(z.string()).optional(),
  network: z.string(),
  type: CreateWatcherDtoType$inboundSchema,
  webhookUrl: z.string(),
});

/** @internal */
export type CreateWatcherDto$Outbound = {
  address: string;
  confirmationsBlocks: number;
  customEventAbi?: CustomEventAbi$Outbound | undefined;
  customFilters?: CustomFilters$Outbound | undefined;
  description?: string | null | undefined;
  metadata?: CreateWatcherDtoMetadata$Outbound | undefined;
  name?: string | null | undefined;
  network: string;
  type: string;
  webhookUrl: string;
};

/** @internal */
export const CreateWatcherDto$outboundSchema: z.ZodType<
  CreateWatcherDto$Outbound,
  z.ZodTypeDef,
  CreateWatcherDto
> = z.object({
  address: z.string(),
  confirmationsBlocks: z.number(),
  customEventAbi: z.lazy(() => CustomEventAbi$outboundSchema).optional(),
  customFilters: z.lazy(() => CustomFilters$outboundSchema).optional(),
  description: z.nullable(z.string()).optional(),
  metadata: z.lazy(() => CreateWatcherDtoMetadata$outboundSchema).optional(),
  name: z.nullable(z.string()).optional(),
  network: z.string(),
  type: CreateWatcherDtoType$outboundSchema,
  webhookUrl: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWatcherDto$ {
  /** @deprecated use `CreateWatcherDto$inboundSchema` instead. */
  export const inboundSchema = CreateWatcherDto$inboundSchema;
  /** @deprecated use `CreateWatcherDto$outboundSchema` instead. */
  export const outboundSchema = CreateWatcherDto$outboundSchema;
  /** @deprecated use `CreateWatcherDto$Outbound` instead. */
  export type Outbound = CreateWatcherDto$Outbound;
}

export function createWatcherDtoToJSON(
  createWatcherDto: CreateWatcherDto,
): string {
  return JSON.stringify(
    CreateWatcherDto$outboundSchema.parse(createWatcherDto),
  );
}

export function createWatcherDtoFromJSON(
  jsonString: string,
): SafeParseResult<CreateWatcherDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateWatcherDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateWatcherDto' from JSON`,
  );
}
