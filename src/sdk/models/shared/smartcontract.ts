/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Abi = {};

export type CompilationDetails = {};

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

export type SmartContract = {
    abi?: Array<Abi> | undefined;
    address: string;
    blockNumber?: number | null | undefined;
    compilationDetails?: CompilationDetails | null | undefined;
    createdAt?: Date | undefined;
    creationHash?: string | null | undefined;
    description?: string | null | undefined;
    id: string;
    minedDate?: Date | null | undefined;
    name: string;
    network: string;
    params?: Array<string> | null | undefined;
    projectId: string;
    state: State;
    status: SmartContractStatus;
    templateId?: string | null | undefined;
    updatedAt?: Date | undefined;
};

/** @internal */
export namespace Abi$ {
    export const inboundSchema: z.ZodType<Abi, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Abi> = z.object({});
}

/** @internal */
export namespace CompilationDetails$ {
    export const inboundSchema: z.ZodType<CompilationDetails, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CompilationDetails> = z.object(
        {}
    );
}

/** @internal */
export namespace State$ {
    export const inboundSchema = z.nativeEnum(State);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace SmartContractStatus$ {
    export const inboundSchema = z.nativeEnum(SmartContractStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace SmartContract$ {
    export const inboundSchema: z.ZodType<SmartContract, z.ZodTypeDef, unknown> = z
        .object({
            abi: z.array(z.lazy(() => Abi$.inboundSchema)).optional(),
            address: z.string(),
            blockNumber: z.nullable(z.number()).optional(),
            compilationDetails: z
                .nullable(z.lazy(() => CompilationDetails$.inboundSchema))
                .optional(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-31T13:57:38.131Z")
                .transform((v) => new Date(v)),
            creationHash: z.nullable(z.string()).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.string(),
            minedDate: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            name: z.string(),
            network: z.string(),
            params: z.nullable(z.array(z.string())).optional(),
            projectId: z.string(),
            state: State$.inboundSchema,
            status: SmartContractStatus$.inboundSchema,
            templateId: z.nullable(z.string()).optional(),
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-31T13:57:38.131Z")
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                ...(v.abi === undefined ? null : { abi: v.abi }),
                address: v.address,
                ...(v.blockNumber === undefined ? null : { blockNumber: v.blockNumber }),
                ...(v.compilationDetails === undefined
                    ? null
                    : { compilationDetails: v.compilationDetails }),
                createdAt: v.createdAt,
                ...(v.creationHash === undefined ? null : { creationHash: v.creationHash }),
                ...(v.description === undefined ? null : { description: v.description }),
                id: v.id,
                ...(v.minedDate === undefined ? null : { minedDate: v.minedDate }),
                name: v.name,
                network: v.network,
                ...(v.params === undefined ? null : { params: v.params }),
                projectId: v.projectId,
                state: v.state,
                status: v.status,
                ...(v.templateId === undefined ? null : { templateId: v.templateId }),
                updatedAt: v.updatedAt,
            };
        });

    export type Outbound = {
        abi?: Array<Abi$.Outbound> | undefined;
        address: string;
        blockNumber?: number | null | undefined;
        compilationDetails?: CompilationDetails$.Outbound | null | undefined;
        createdAt: string;
        creationHash?: string | null | undefined;
        description?: string | null | undefined;
        id: string;
        minedDate?: string | null | undefined;
        name: string;
        network: string;
        params?: Array<string> | null | undefined;
        projectId: string;
        state: string;
        status: string;
        templateId?: string | null | undefined;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SmartContract> = z
        .object({
            abi: z.array(z.lazy(() => Abi$.outboundSchema)).optional(),
            address: z.string(),
            blockNumber: z.nullable(z.number()).optional(),
            compilationDetails: z
                .nullable(z.lazy(() => CompilationDetails$.outboundSchema))
                .optional(),
            createdAt: z
                .date()
                .default(() => new Date("2024-01-31T13:57:38.131Z"))
                .transform((v) => v.toISOString()),
            creationHash: z.nullable(z.string()).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.string(),
            minedDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            name: z.string(),
            network: z.string(),
            params: z.nullable(z.array(z.string())).optional(),
            projectId: z.string(),
            state: State$.outboundSchema,
            status: SmartContractStatus$.outboundSchema,
            templateId: z.nullable(z.string()).optional(),
            updatedAt: z
                .date()
                .default(() => new Date("2024-01-31T13:57:38.131Z"))
                .transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                ...(v.abi === undefined ? null : { abi: v.abi }),
                address: v.address,
                ...(v.blockNumber === undefined ? null : { blockNumber: v.blockNumber }),
                ...(v.compilationDetails === undefined
                    ? null
                    : { compilationDetails: v.compilationDetails }),
                createdAt: v.createdAt,
                ...(v.creationHash === undefined ? null : { creationHash: v.creationHash }),
                ...(v.description === undefined ? null : { description: v.description }),
                id: v.id,
                ...(v.minedDate === undefined ? null : { minedDate: v.minedDate }),
                name: v.name,
                network: v.network,
                ...(v.params === undefined ? null : { params: v.params }),
                projectId: v.projectId,
                state: v.state,
                status: v.status,
                ...(v.templateId === undefined ? null : { templateId: v.templateId }),
                updatedAt: v.updatedAt,
            };
        });
}
