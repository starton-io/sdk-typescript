/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Abi = {};

export type CompilationDetails = {};

export type SmartContractMetadata = {};

export enum State {
  Success = "SUCCESS",
  Pending = "PENDING",
  ManualActionRequired = "MANUAL_ACTION_REQUIRED",
  Error = "ERROR",
}

export enum SmartContractStatus {
  Unsigned = "UNSIGNED",
  ErrorTx = "ERROR_TX",
  ErrorPublish = "ERROR_PUBLISH",
  Published = "PUBLISHED",
  ReceivedByStarton = "RECEIVED_BY_STARTON",
  CreatedByStarton = "CREATED_BY_STARTON",
  CouldNotEstimateGasPrice = "COULD_NOT_ESTIMATE_GAS_PRICE",
  CouldNotIncreaseGasPrice = "COULD_NOT_INCREASE_GAS_PRICE",
  GasPriceEstimated = "GAS_PRICE_ESTIMATED",
  InvalidGasPrice = "INVALID_GAS_PRICE",
  ReplacementGasPriceUnderpriced = "REPLACEMENT_GAS_PRICE_UNDERPRICED",
  CouldNotEstimateGasLimit = "COULD_NOT_ESTIMATE_GAS_LIMIT",
  GasLimitEstimated = "GAS_LIMIT_ESTIMATED",
  ExecutionWillFail = "EXECUTION_WILL_FAIL",
  InvalidArgument = "INVALID_ARGUMENT",
  InsufficientFunds = "INSUFFICIENT_FUNDS",
  InsufficientFundsAfterBroadcast = "INSUFFICIENT_FUNDS_AFTER_BROADCAST",
  CouldNotAssignNonce = "COULD_NOT_ASSIGN_NONCE",
  CouldNotUnstuckNonce = "COULD_NOT_UNSTUCK_NONCE",
  NonceAssigned = "NONCE_ASSIGNED",
  NonceExpired = "NONCE_EXPIRED",
  CouldNotSign = "COULD_NOT_SIGN",
  Signed = "SIGNED",
  SentToMempool = "SENT_TO_MEMPOOL",
  CouldNotBroadcast = "COULD_NOT_BROADCAST",
  AlreadyKnown = "ALREADY_KNOWN",
  Mined = "MINED",
  Confirmed = "CONFIRMED",
  Replaced = "REPLACED",
  Failed = "FAILED",
  MonitoringInProgress = "MONITORING_IN_PROGRESS",
  StuckByPreviousTransaction = "STUCK_BY_PREVIOUS_TRANSACTION",
  MaxGasPriceReach = "MAX_GAS_PRICE_REACH",
  GasPriceIncreased = "GAS_PRICE_INCREASED",
  NewTransactionHash = "NEW_TRANSACTION_HASH",
  Unknown = "UNKNOWN",
  MonitoringInterrupted = "MONITORING_INTERRUPTED",
}

export enum SmartContractDeployMethod {
  Web3 = "web3",
  Kms = "kms",
}

export enum SmartContractVersion {
  One = "1",
}

export type SmartContractUiData = {
  chainId?: number | undefined;
  deployMethod: SmartContractDeployMethod;
  deployType?: string | undefined;
  imported: boolean;
  version: SmartContractVersion;
};

export type SmartContract = {
  abi?: Array<Abi> | undefined;
  address: string;
  blockNumber?: number | null | undefined;
  compilationDetails?: CompilationDetails | null | undefined;
  createdAt?: Date | undefined;
  creationHash?: string | null | undefined;
  description?: string | null | undefined;
  id: string;
  metadata?: SmartContractMetadata | null | undefined;
  minedDate?: Date | null | undefined;
  name: string;
  network: string;
  params?: Array<string> | null | undefined;
  projectId: string;
  state: State;
  status: SmartContractStatus;
  templateId?: string | null | undefined;
  uiData?: SmartContractUiData | null | undefined;
  updatedAt?: Date | undefined;
};

/** @internal */
export const Abi$inboundSchema: z.ZodType<Abi, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Abi$Outbound = {};

/** @internal */
export const Abi$outboundSchema: z.ZodType<Abi$Outbound, z.ZodTypeDef, Abi> = z
  .object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Abi$ {
  /** @deprecated use `Abi$inboundSchema` instead. */
  export const inboundSchema = Abi$inboundSchema;
  /** @deprecated use `Abi$outboundSchema` instead. */
  export const outboundSchema = Abi$outboundSchema;
  /** @deprecated use `Abi$Outbound` instead. */
  export type Outbound = Abi$Outbound;
}

export function abiToJSON(abi: Abi): string {
  return JSON.stringify(Abi$outboundSchema.parse(abi));
}

export function abiFromJSON(
  jsonString: string,
): SafeParseResult<Abi, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Abi$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Abi' from JSON`,
  );
}

/** @internal */
export const CompilationDetails$inboundSchema: z.ZodType<
  CompilationDetails,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CompilationDetails$Outbound = {};

/** @internal */
export const CompilationDetails$outboundSchema: z.ZodType<
  CompilationDetails$Outbound,
  z.ZodTypeDef,
  CompilationDetails
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompilationDetails$ {
  /** @deprecated use `CompilationDetails$inboundSchema` instead. */
  export const inboundSchema = CompilationDetails$inboundSchema;
  /** @deprecated use `CompilationDetails$outboundSchema` instead. */
  export const outboundSchema = CompilationDetails$outboundSchema;
  /** @deprecated use `CompilationDetails$Outbound` instead. */
  export type Outbound = CompilationDetails$Outbound;
}

export function compilationDetailsToJSON(
  compilationDetails: CompilationDetails,
): string {
  return JSON.stringify(
    CompilationDetails$outboundSchema.parse(compilationDetails),
  );
}

export function compilationDetailsFromJSON(
  jsonString: string,
): SafeParseResult<CompilationDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompilationDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompilationDetails' from JSON`,
  );
}

/** @internal */
export const SmartContractMetadata$inboundSchema: z.ZodType<
  SmartContractMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SmartContractMetadata$Outbound = {};

/** @internal */
export const SmartContractMetadata$outboundSchema: z.ZodType<
  SmartContractMetadata$Outbound,
  z.ZodTypeDef,
  SmartContractMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmartContractMetadata$ {
  /** @deprecated use `SmartContractMetadata$inboundSchema` instead. */
  export const inboundSchema = SmartContractMetadata$inboundSchema;
  /** @deprecated use `SmartContractMetadata$outboundSchema` instead. */
  export const outboundSchema = SmartContractMetadata$outboundSchema;
  /** @deprecated use `SmartContractMetadata$Outbound` instead. */
  export type Outbound = SmartContractMetadata$Outbound;
}

export function smartContractMetadataToJSON(
  smartContractMetadata: SmartContractMetadata,
): string {
  return JSON.stringify(
    SmartContractMetadata$outboundSchema.parse(smartContractMetadata),
  );
}

export function smartContractMetadataFromJSON(
  jsonString: string,
): SafeParseResult<SmartContractMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SmartContractMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SmartContractMetadata' from JSON`,
  );
}

/** @internal */
export const State$inboundSchema: z.ZodNativeEnum<typeof State> = z.nativeEnum(
  State,
);

/** @internal */
export const State$outboundSchema: z.ZodNativeEnum<typeof State> =
  State$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace State$ {
  /** @deprecated use `State$inboundSchema` instead. */
  export const inboundSchema = State$inboundSchema;
  /** @deprecated use `State$outboundSchema` instead. */
  export const outboundSchema = State$outboundSchema;
}

/** @internal */
export const SmartContractStatus$inboundSchema: z.ZodNativeEnum<
  typeof SmartContractStatus
> = z.nativeEnum(SmartContractStatus);

/** @internal */
export const SmartContractStatus$outboundSchema: z.ZodNativeEnum<
  typeof SmartContractStatus
> = SmartContractStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmartContractStatus$ {
  /** @deprecated use `SmartContractStatus$inboundSchema` instead. */
  export const inboundSchema = SmartContractStatus$inboundSchema;
  /** @deprecated use `SmartContractStatus$outboundSchema` instead. */
  export const outboundSchema = SmartContractStatus$outboundSchema;
}

/** @internal */
export const SmartContractDeployMethod$inboundSchema: z.ZodNativeEnum<
  typeof SmartContractDeployMethod
> = z.nativeEnum(SmartContractDeployMethod);

/** @internal */
export const SmartContractDeployMethod$outboundSchema: z.ZodNativeEnum<
  typeof SmartContractDeployMethod
> = SmartContractDeployMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmartContractDeployMethod$ {
  /** @deprecated use `SmartContractDeployMethod$inboundSchema` instead. */
  export const inboundSchema = SmartContractDeployMethod$inboundSchema;
  /** @deprecated use `SmartContractDeployMethod$outboundSchema` instead. */
  export const outboundSchema = SmartContractDeployMethod$outboundSchema;
}

/** @internal */
export const SmartContractVersion$inboundSchema: z.ZodNativeEnum<
  typeof SmartContractVersion
> = z.nativeEnum(SmartContractVersion);

/** @internal */
export const SmartContractVersion$outboundSchema: z.ZodNativeEnum<
  typeof SmartContractVersion
> = SmartContractVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmartContractVersion$ {
  /** @deprecated use `SmartContractVersion$inboundSchema` instead. */
  export const inboundSchema = SmartContractVersion$inboundSchema;
  /** @deprecated use `SmartContractVersion$outboundSchema` instead. */
  export const outboundSchema = SmartContractVersion$outboundSchema;
}

/** @internal */
export const SmartContractUiData$inboundSchema: z.ZodType<
  SmartContractUiData,
  z.ZodTypeDef,
  unknown
> = z.object({
  chainId: z.number().optional(),
  deployMethod: SmartContractDeployMethod$inboundSchema,
  deployType: z.string().optional(),
  imported: z.boolean(),
  version: SmartContractVersion$inboundSchema,
});

/** @internal */
export type SmartContractUiData$Outbound = {
  chainId?: number | undefined;
  deployMethod: string;
  deployType?: string | undefined;
  imported: boolean;
  version: string;
};

/** @internal */
export const SmartContractUiData$outboundSchema: z.ZodType<
  SmartContractUiData$Outbound,
  z.ZodTypeDef,
  SmartContractUiData
> = z.object({
  chainId: z.number().optional(),
  deployMethod: SmartContractDeployMethod$outboundSchema,
  deployType: z.string().optional(),
  imported: z.boolean(),
  version: SmartContractVersion$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmartContractUiData$ {
  /** @deprecated use `SmartContractUiData$inboundSchema` instead. */
  export const inboundSchema = SmartContractUiData$inboundSchema;
  /** @deprecated use `SmartContractUiData$outboundSchema` instead. */
  export const outboundSchema = SmartContractUiData$outboundSchema;
  /** @deprecated use `SmartContractUiData$Outbound` instead. */
  export type Outbound = SmartContractUiData$Outbound;
}

export function smartContractUiDataToJSON(
  smartContractUiData: SmartContractUiData,
): string {
  return JSON.stringify(
    SmartContractUiData$outboundSchema.parse(smartContractUiData),
  );
}

export function smartContractUiDataFromJSON(
  jsonString: string,
): SafeParseResult<SmartContractUiData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SmartContractUiData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SmartContractUiData' from JSON`,
  );
}

/** @internal */
export const SmartContract$inboundSchema: z.ZodType<
  SmartContract,
  z.ZodTypeDef,
  unknown
> = z.object({
  abi: z.array(z.lazy(() => Abi$inboundSchema)).optional(),
  address: z.string(),
  blockNumber: z.nullable(z.number()).optional(),
  compilationDetails: z.nullable(z.lazy(() => CompilationDetails$inboundSchema))
    .optional(),
  createdAt: z.string().datetime({ offset: true }).default(
    "2024-10-07T18:00:44.828Z",
  ).transform(v => new Date(v)),
  creationHash: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  id: z.string(),
  metadata: z.nullable(z.lazy(() => SmartContractMetadata$inboundSchema))
    .optional(),
  minedDate: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  name: z.string(),
  network: z.string(),
  params: z.nullable(z.array(z.string())).optional(),
  projectId: z.string(),
  state: State$inboundSchema,
  status: SmartContractStatus$inboundSchema,
  templateId: z.nullable(z.string()).optional(),
  uiData: z.nullable(z.lazy(() => SmartContractUiData$inboundSchema))
    .optional(),
  updatedAt: z.string().datetime({ offset: true }).default(
    "2024-10-07T18:00:44.828Z",
  ).transform(v => new Date(v)),
});

/** @internal */
export type SmartContract$Outbound = {
  abi?: Array<Abi$Outbound> | undefined;
  address: string;
  blockNumber?: number | null | undefined;
  compilationDetails?: CompilationDetails$Outbound | null | undefined;
  createdAt: string;
  creationHash?: string | null | undefined;
  description?: string | null | undefined;
  id: string;
  metadata?: SmartContractMetadata$Outbound | null | undefined;
  minedDate?: string | null | undefined;
  name: string;
  network: string;
  params?: Array<string> | null | undefined;
  projectId: string;
  state: string;
  status: string;
  templateId?: string | null | undefined;
  uiData?: SmartContractUiData$Outbound | null | undefined;
  updatedAt: string;
};

/** @internal */
export const SmartContract$outboundSchema: z.ZodType<
  SmartContract$Outbound,
  z.ZodTypeDef,
  SmartContract
> = z.object({
  abi: z.array(z.lazy(() => Abi$outboundSchema)).optional(),
  address: z.string(),
  blockNumber: z.nullable(z.number()).optional(),
  compilationDetails: z.nullable(
    z.lazy(() => CompilationDetails$outboundSchema),
  ).optional(),
  createdAt: z.date().default(() => new Date("2024-10-07T18:00:44.828Z"))
    .transform(v => v.toISOString()),
  creationHash: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  id: z.string(),
  metadata: z.nullable(z.lazy(() => SmartContractMetadata$outboundSchema))
    .optional(),
  minedDate: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  name: z.string(),
  network: z.string(),
  params: z.nullable(z.array(z.string())).optional(),
  projectId: z.string(),
  state: State$outboundSchema,
  status: SmartContractStatus$outboundSchema,
  templateId: z.nullable(z.string()).optional(),
  uiData: z.nullable(z.lazy(() => SmartContractUiData$outboundSchema))
    .optional(),
  updatedAt: z.date().default(() => new Date("2024-10-07T18:00:44.828Z"))
    .transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmartContract$ {
  /** @deprecated use `SmartContract$inboundSchema` instead. */
  export const inboundSchema = SmartContract$inboundSchema;
  /** @deprecated use `SmartContract$outboundSchema` instead. */
  export const outboundSchema = SmartContract$outboundSchema;
  /** @deprecated use `SmartContract$Outbound` instead. */
  export type Outbound = SmartContract$Outbound;
}

export function smartContractToJSON(smartContract: SmartContract): string {
  return JSON.stringify(SmartContract$outboundSchema.parse(smartContract));
}

export function smartContractFromJSON(
  jsonString: string,
): SafeParseResult<SmartContract, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SmartContract$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SmartContract' from JSON`,
  );
}
