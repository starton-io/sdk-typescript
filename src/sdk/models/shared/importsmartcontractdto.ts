/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  AbiObjectDto,
  AbiObjectDto$inboundSchema,
  AbiObjectDto$Outbound,
  AbiObjectDto$outboundSchema,
} from "./abiobjectdto.js";

export type ImportSmartContractDtoMetadata = {};

export type ImportSmartContractDto3 = {};

export type ImportSmartContractDtoParams =
  | ImportSmartContractDto3
  | string
  | number
  | boolean;

export enum ImportSmartContractDtoDeployMethod {
  Web3 = "web3",
  Kms = "kms",
}

export enum ImportSmartContractDtoVersion {
  One = "1",
}

export type ImportSmartContractDtoUiData = {
  chainId?: number | undefined;
  deployMethod: ImportSmartContractDtoDeployMethod;
  deployType?: string | undefined;
  imported: boolean;
  version: ImportSmartContractDtoVersion;
};

export type ImportSmartContractDto = {
  abi: Array<AbiObjectDto>;
  address: string;
  creationHash?: string | undefined;
  description?: string | undefined;
  metadata?: ImportSmartContractDtoMetadata | undefined;
  name: string;
  network: string;
  /**
   * Smart contract constructor parameters.
   */
  params?:
    | Array<ImportSmartContractDto3 | string | number | boolean>
    | undefined;
  templateId?: string | undefined;
  uiData?: ImportSmartContractDtoUiData | null | undefined;
};

/** @internal */
export const ImportSmartContractDtoMetadata$inboundSchema: z.ZodType<
  ImportSmartContractDtoMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ImportSmartContractDtoMetadata$Outbound = {};

/** @internal */
export const ImportSmartContractDtoMetadata$outboundSchema: z.ZodType<
  ImportSmartContractDtoMetadata$Outbound,
  z.ZodTypeDef,
  ImportSmartContractDtoMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportSmartContractDtoMetadata$ {
  /** @deprecated use `ImportSmartContractDtoMetadata$inboundSchema` instead. */
  export const inboundSchema = ImportSmartContractDtoMetadata$inboundSchema;
  /** @deprecated use `ImportSmartContractDtoMetadata$outboundSchema` instead. */
  export const outboundSchema = ImportSmartContractDtoMetadata$outboundSchema;
  /** @deprecated use `ImportSmartContractDtoMetadata$Outbound` instead. */
  export type Outbound = ImportSmartContractDtoMetadata$Outbound;
}

/** @internal */
export const ImportSmartContractDto3$inboundSchema: z.ZodType<
  ImportSmartContractDto3,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ImportSmartContractDto3$Outbound = {};

/** @internal */
export const ImportSmartContractDto3$outboundSchema: z.ZodType<
  ImportSmartContractDto3$Outbound,
  z.ZodTypeDef,
  ImportSmartContractDto3
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportSmartContractDto3$ {
  /** @deprecated use `ImportSmartContractDto3$inboundSchema` instead. */
  export const inboundSchema = ImportSmartContractDto3$inboundSchema;
  /** @deprecated use `ImportSmartContractDto3$outboundSchema` instead. */
  export const outboundSchema = ImportSmartContractDto3$outboundSchema;
  /** @deprecated use `ImportSmartContractDto3$Outbound` instead. */
  export type Outbound = ImportSmartContractDto3$Outbound;
}

/** @internal */
export const ImportSmartContractDtoParams$inboundSchema: z.ZodType<
  ImportSmartContractDtoParams,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ImportSmartContractDto3$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
]);

/** @internal */
export type ImportSmartContractDtoParams$Outbound =
  | ImportSmartContractDto3$Outbound
  | string
  | number
  | boolean;

/** @internal */
export const ImportSmartContractDtoParams$outboundSchema: z.ZodType<
  ImportSmartContractDtoParams$Outbound,
  z.ZodTypeDef,
  ImportSmartContractDtoParams
> = z.union([
  z.lazy(() => ImportSmartContractDto3$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportSmartContractDtoParams$ {
  /** @deprecated use `ImportSmartContractDtoParams$inboundSchema` instead. */
  export const inboundSchema = ImportSmartContractDtoParams$inboundSchema;
  /** @deprecated use `ImportSmartContractDtoParams$outboundSchema` instead. */
  export const outboundSchema = ImportSmartContractDtoParams$outboundSchema;
  /** @deprecated use `ImportSmartContractDtoParams$Outbound` instead. */
  export type Outbound = ImportSmartContractDtoParams$Outbound;
}

/** @internal */
export const ImportSmartContractDtoDeployMethod$inboundSchema: z.ZodNativeEnum<
  typeof ImportSmartContractDtoDeployMethod
> = z.nativeEnum(ImportSmartContractDtoDeployMethod);

/** @internal */
export const ImportSmartContractDtoDeployMethod$outboundSchema: z.ZodNativeEnum<
  typeof ImportSmartContractDtoDeployMethod
> = ImportSmartContractDtoDeployMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportSmartContractDtoDeployMethod$ {
  /** @deprecated use `ImportSmartContractDtoDeployMethod$inboundSchema` instead. */
  export const inboundSchema = ImportSmartContractDtoDeployMethod$inboundSchema;
  /** @deprecated use `ImportSmartContractDtoDeployMethod$outboundSchema` instead. */
  export const outboundSchema =
    ImportSmartContractDtoDeployMethod$outboundSchema;
}

/** @internal */
export const ImportSmartContractDtoVersion$inboundSchema: z.ZodNativeEnum<
  typeof ImportSmartContractDtoVersion
> = z.nativeEnum(ImportSmartContractDtoVersion);

/** @internal */
export const ImportSmartContractDtoVersion$outboundSchema: z.ZodNativeEnum<
  typeof ImportSmartContractDtoVersion
> = ImportSmartContractDtoVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportSmartContractDtoVersion$ {
  /** @deprecated use `ImportSmartContractDtoVersion$inboundSchema` instead. */
  export const inboundSchema = ImportSmartContractDtoVersion$inboundSchema;
  /** @deprecated use `ImportSmartContractDtoVersion$outboundSchema` instead. */
  export const outboundSchema = ImportSmartContractDtoVersion$outboundSchema;
}

/** @internal */
export const ImportSmartContractDtoUiData$inboundSchema: z.ZodType<
  ImportSmartContractDtoUiData,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.number().optional(),
  deployMethod: ImportSmartContractDtoDeployMethod$inboundSchema,
  deployType: z.string().optional(),
  imported: z.boolean(),
  version: ImportSmartContractDtoVersion$inboundSchema,
});

/** @internal */
export type ImportSmartContractDtoUiData$Outbound = {
  chainId?: number | undefined;
  deployMethod: string;
  deployType?: string | undefined;
  imported: boolean;
  version: string;
};

/** @internal */
export const ImportSmartContractDtoUiData$outboundSchema: z.ZodType<
  ImportSmartContractDtoUiData$Outbound,
  z.ZodTypeDef,
  ImportSmartContractDtoUiData
> = z.object({
  chainId: z.number().optional(),
  deployMethod: ImportSmartContractDtoDeployMethod$outboundSchema,
  deployType: z.string().optional(),
  imported: z.boolean(),
  version: ImportSmartContractDtoVersion$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportSmartContractDtoUiData$ {
  /** @deprecated use `ImportSmartContractDtoUiData$inboundSchema` instead. */
  export const inboundSchema = ImportSmartContractDtoUiData$inboundSchema;
  /** @deprecated use `ImportSmartContractDtoUiData$outboundSchema` instead. */
  export const outboundSchema = ImportSmartContractDtoUiData$outboundSchema;
  /** @deprecated use `ImportSmartContractDtoUiData$Outbound` instead. */
  export type Outbound = ImportSmartContractDtoUiData$Outbound;
}

/** @internal */
export const ImportSmartContractDto$inboundSchema: z.ZodType<
  ImportSmartContractDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  abi: z.array(AbiObjectDto$inboundSchema),
  address: z.string(),
  creationHash: z.string().optional(),
  description: z.string().optional(),
  metadata: z.lazy(() => ImportSmartContractDtoMetadata$inboundSchema)
    .optional(),
  name: z.string(),
  network: z.string(),
  params: z.array(
    z.union([
      z.lazy(() => ImportSmartContractDto3$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
    ]),
  ).optional(),
  templateId: z.string().optional(),
  uiData: z.nullable(z.lazy(() => ImportSmartContractDtoUiData$inboundSchema))
    .optional(),
});

/** @internal */
export type ImportSmartContractDto$Outbound = {
  abi: Array<AbiObjectDto$Outbound>;
  address: string;
  creationHash?: string | undefined;
  description?: string | undefined;
  metadata?: ImportSmartContractDtoMetadata$Outbound | undefined;
  name: string;
  network: string;
  params?:
    | Array<ImportSmartContractDto3$Outbound | string | number | boolean>
    | undefined;
  templateId?: string | undefined;
  uiData?: ImportSmartContractDtoUiData$Outbound | null | undefined;
};

/** @internal */
export const ImportSmartContractDto$outboundSchema: z.ZodType<
  ImportSmartContractDto$Outbound,
  z.ZodTypeDef,
  ImportSmartContractDto
> = z.object({
  abi: z.array(AbiObjectDto$outboundSchema),
  address: z.string(),
  creationHash: z.string().optional(),
  description: z.string().optional(),
  metadata: z.lazy(() => ImportSmartContractDtoMetadata$outboundSchema)
    .optional(),
  name: z.string(),
  network: z.string(),
  params: z.array(
    z.union([
      z.lazy(() => ImportSmartContractDto3$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
    ]),
  ).optional(),
  templateId: z.string().optional(),
  uiData: z.nullable(z.lazy(() => ImportSmartContractDtoUiData$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportSmartContractDto$ {
  /** @deprecated use `ImportSmartContractDto$inboundSchema` instead. */
  export const inboundSchema = ImportSmartContractDto$inboundSchema;
  /** @deprecated use `ImportSmartContractDto$outboundSchema` instead. */
  export const outboundSchema = ImportSmartContractDto$outboundSchema;
  /** @deprecated use `ImportSmartContractDto$Outbound` instead. */
  export type Outbound = ImportSmartContractDto$Outbound;
}
