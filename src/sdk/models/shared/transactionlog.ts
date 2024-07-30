/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type TransactionLogContext = {};

export enum TransactionLogType {
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

export type TransactionLog = {
    context?: TransactionLogContext | undefined;
    createdAt: string;
    message: string;
    type: TransactionLogType;
};

/** @internal */
export const TransactionLogContext$inboundSchema: z.ZodType<
    TransactionLogContext,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type TransactionLogContext$Outbound = {};

/** @internal */
export const TransactionLogContext$outboundSchema: z.ZodType<
    TransactionLogContext$Outbound,
    z.ZodTypeDef,
    TransactionLogContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionLogContext$ {
    /** @deprecated use `TransactionLogContext$inboundSchema` instead. */
    export const inboundSchema = TransactionLogContext$inboundSchema;
    /** @deprecated use `TransactionLogContext$outboundSchema` instead. */
    export const outboundSchema = TransactionLogContext$outboundSchema;
    /** @deprecated use `TransactionLogContext$Outbound` instead. */
    export type Outbound = TransactionLogContext$Outbound;
}

/** @internal */
export const TransactionLogType$inboundSchema: z.ZodNativeEnum<typeof TransactionLogType> =
    z.nativeEnum(TransactionLogType);

/** @internal */
export const TransactionLogType$outboundSchema: z.ZodNativeEnum<typeof TransactionLogType> =
    TransactionLogType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionLogType$ {
    /** @deprecated use `TransactionLogType$inboundSchema` instead. */
    export const inboundSchema = TransactionLogType$inboundSchema;
    /** @deprecated use `TransactionLogType$outboundSchema` instead. */
    export const outboundSchema = TransactionLogType$outboundSchema;
}

/** @internal */
export const TransactionLog$inboundSchema: z.ZodType<TransactionLog, z.ZodTypeDef, unknown> =
    z.object({
        context: z.lazy(() => TransactionLogContext$inboundSchema).optional(),
        createdAt: z.string(),
        message: z.string(),
        type: TransactionLogType$inboundSchema,
    });

/** @internal */
export type TransactionLog$Outbound = {
    context?: TransactionLogContext$Outbound | undefined;
    createdAt: string;
    message: string;
    type: string;
};

/** @internal */
export const TransactionLog$outboundSchema: z.ZodType<
    TransactionLog$Outbound,
    z.ZodTypeDef,
    TransactionLog
> = z.object({
    context: z.lazy(() => TransactionLogContext$outboundSchema).optional(),
    createdAt: z.string(),
    message: z.string(),
    type: TransactionLogType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionLog$ {
    /** @deprecated use `TransactionLog$inboundSchema` instead. */
    export const inboundSchema = TransactionLog$inboundSchema;
    /** @deprecated use `TransactionLog$outboundSchema` instead. */
    export const outboundSchema = TransactionLog$outboundSchema;
    /** @deprecated use `TransactionLog$Outbound` instead. */
    export type Outbound = TransactionLog$Outbound;
}
