/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TransactionLog, TransactionLog$ } from "./transactionlog";
import { z } from "zod";

export type TransactionMetadata = {};

export enum TransactionSpeed {
    Low = "low",
    Average = "average",
    Fast = "fast",
    Fastest = "fastest",
    Custom = "custom",
}

export enum TransactionState {
    Success = "SUCCESS",
    Pending = "PENDING",
    ManualActionRequired = "MANUAL_ACTION_REQUIRED",
    Error = "ERROR",
}

export enum TransactionStatus {
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

export type Transaction = {
    automaticNonce: boolean;
    blockHash?: string | null | undefined;
    blockNumber?: number | null | undefined;
    chainId: number;
    createdAt: Date;
    data?: string | null | undefined;
    from: string;
    gasLimit?: string | null | undefined;
    gasPrice?: string | null | undefined;
    id: string;
    isDeployTransaction: boolean;
    logs: Array<TransactionLog>;
    maxFeePerGas?: string | null | undefined;
    maxPriorityFeePerGas?: string | null | undefined;
    metadata?: TransactionMetadata | null | undefined;
    minedDate?: Date | null | undefined;
    network: string;
    nonce?: number | null | undefined;
    parentTransaction?: string | null | undefined;
    projectId: string;
    publishedDate?: Date | null | undefined;
    signedTransaction?: string | null | undefined;
    signerWallet: string;
    speed?: TransactionSpeed | null | undefined;
    state: TransactionState;
    status: TransactionStatus;
    to?: string | null | undefined;
    transactionHash?: string | null | undefined;
    type?: number | null | undefined;
    updatedAt: Date;
    value: string;
};

/** @internal */
export namespace TransactionMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<TransactionMetadata, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionMetadata> = z.object(
        {}
    );
}

/** @internal */
export const TransactionSpeed$ = z.nativeEnum(TransactionSpeed);

/** @internal */
export const TransactionState$ = z.nativeEnum(TransactionState);

/** @internal */
export const TransactionStatus$ = z.nativeEnum(TransactionStatus);

/** @internal */
export namespace Transaction$ {
    export type Inbound = {
        automaticNonce: boolean;
        blockHash?: string | null | undefined;
        blockNumber?: number | null | undefined;
        chainId: number;
        createdAt: string;
        data?: string | null | undefined;
        from: string;
        gasLimit?: string | null | undefined;
        gasPrice?: string | null | undefined;
        id: string;
        isDeployTransaction: boolean;
        logs: Array<TransactionLog$.Inbound>;
        maxFeePerGas?: string | null | undefined;
        maxPriorityFeePerGas?: string | null | undefined;
        metadata?: TransactionMetadata$.Inbound | null | undefined;
        minedDate?: string | null | undefined;
        network: string;
        nonce?: number | null | undefined;
        parentTransaction?: string | null | undefined;
        projectId: string;
        publishedDate?: string | null | undefined;
        signedTransaction?: string | null | undefined;
        signerWallet: string;
        speed?: TransactionSpeed | null | undefined;
        state: TransactionState;
        status: TransactionStatus;
        to?: string | null | undefined;
        transactionHash?: string | null | undefined;
        type?: number | null | undefined;
        updatedAt: string;
        value: string;
    };

    export const inboundSchema: z.ZodType<Transaction, z.ZodTypeDef, Inbound> = z
        .object({
            automaticNonce: z.boolean(),
            blockHash: z.nullable(z.string()).optional(),
            blockNumber: z.nullable(z.number()).optional(),
            chainId: z.number(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            data: z.nullable(z.string()).optional(),
            from: z.string(),
            gasLimit: z.nullable(z.string()).optional(),
            gasPrice: z.nullable(z.string()).optional(),
            id: z.string(),
            isDeployTransaction: z.boolean(),
            logs: z.array(TransactionLog$.inboundSchema),
            maxFeePerGas: z.nullable(z.string()).optional(),
            maxPriorityFeePerGas: z.nullable(z.string()).optional(),
            metadata: z.nullable(z.lazy(() => TransactionMetadata$.inboundSchema)).optional(),
            minedDate: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            network: z.string(),
            nonce: z.nullable(z.number()).optional(),
            parentTransaction: z.nullable(z.string()).optional(),
            projectId: z.string(),
            publishedDate: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            signedTransaction: z.nullable(z.string()).optional(),
            signerWallet: z.string(),
            speed: z.nullable(TransactionSpeed$).optional(),
            state: TransactionState$,
            status: TransactionStatus$,
            to: z.nullable(z.string()).optional(),
            transactionHash: z.nullable(z.string()).optional(),
            type: z.nullable(z.number()).optional(),
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            value: z.string(),
        })
        .transform((v) => {
            return {
                automaticNonce: v.automaticNonce,
                ...(v.blockHash === undefined ? null : { blockHash: v.blockHash }),
                ...(v.blockNumber === undefined ? null : { blockNumber: v.blockNumber }),
                chainId: v.chainId,
                createdAt: v.createdAt,
                ...(v.data === undefined ? null : { data: v.data }),
                from: v.from,
                ...(v.gasLimit === undefined ? null : { gasLimit: v.gasLimit }),
                ...(v.gasPrice === undefined ? null : { gasPrice: v.gasPrice }),
                id: v.id,
                isDeployTransaction: v.isDeployTransaction,
                logs: v.logs,
                ...(v.maxFeePerGas === undefined ? null : { maxFeePerGas: v.maxFeePerGas }),
                ...(v.maxPriorityFeePerGas === undefined
                    ? null
                    : { maxPriorityFeePerGas: v.maxPriorityFeePerGas }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.minedDate === undefined ? null : { minedDate: v.minedDate }),
                network: v.network,
                ...(v.nonce === undefined ? null : { nonce: v.nonce }),
                ...(v.parentTransaction === undefined
                    ? null
                    : { parentTransaction: v.parentTransaction }),
                projectId: v.projectId,
                ...(v.publishedDate === undefined ? null : { publishedDate: v.publishedDate }),
                ...(v.signedTransaction === undefined
                    ? null
                    : { signedTransaction: v.signedTransaction }),
                signerWallet: v.signerWallet,
                ...(v.speed === undefined ? null : { speed: v.speed }),
                state: v.state,
                status: v.status,
                ...(v.to === undefined ? null : { to: v.to }),
                ...(v.transactionHash === undefined
                    ? null
                    : { transactionHash: v.transactionHash }),
                ...(v.type === undefined ? null : { type: v.type }),
                updatedAt: v.updatedAt,
                value: v.value,
            };
        });

    export type Outbound = {
        automaticNonce: boolean;
        blockHash?: string | null | undefined;
        blockNumber?: number | null | undefined;
        chainId: number;
        createdAt: string;
        data?: string | null | undefined;
        from: string;
        gasLimit?: string | null | undefined;
        gasPrice?: string | null | undefined;
        id: string;
        isDeployTransaction: boolean;
        logs: Array<TransactionLog$.Outbound>;
        maxFeePerGas?: string | null | undefined;
        maxPriorityFeePerGas?: string | null | undefined;
        metadata?: TransactionMetadata$.Outbound | null | undefined;
        minedDate?: string | null | undefined;
        network: string;
        nonce?: number | null | undefined;
        parentTransaction?: string | null | undefined;
        projectId: string;
        publishedDate?: string | null | undefined;
        signedTransaction?: string | null | undefined;
        signerWallet: string;
        speed?: TransactionSpeed | null | undefined;
        state: TransactionState;
        status: TransactionStatus;
        to?: string | null | undefined;
        transactionHash?: string | null | undefined;
        type?: number | null | undefined;
        updatedAt: string;
        value: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Transaction> = z
        .object({
            automaticNonce: z.boolean(),
            blockHash: z.nullable(z.string()).optional(),
            blockNumber: z.nullable(z.number()).optional(),
            chainId: z.number(),
            createdAt: z.date().transform((v) => v.toISOString()),
            data: z.nullable(z.string()).optional(),
            from: z.string(),
            gasLimit: z.nullable(z.string()).optional(),
            gasPrice: z.nullable(z.string()).optional(),
            id: z.string(),
            isDeployTransaction: z.boolean(),
            logs: z.array(TransactionLog$.outboundSchema),
            maxFeePerGas: z.nullable(z.string()).optional(),
            maxPriorityFeePerGas: z.nullable(z.string()).optional(),
            metadata: z.nullable(z.lazy(() => TransactionMetadata$.outboundSchema)).optional(),
            minedDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            network: z.string(),
            nonce: z.nullable(z.number()).optional(),
            parentTransaction: z.nullable(z.string()).optional(),
            projectId: z.string(),
            publishedDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            signedTransaction: z.nullable(z.string()).optional(),
            signerWallet: z.string(),
            speed: z.nullable(TransactionSpeed$).optional(),
            state: TransactionState$,
            status: TransactionStatus$,
            to: z.nullable(z.string()).optional(),
            transactionHash: z.nullable(z.string()).optional(),
            type: z.nullable(z.number()).optional(),
            updatedAt: z.date().transform((v) => v.toISOString()),
            value: z.string(),
        })
        .transform((v) => {
            return {
                automaticNonce: v.automaticNonce,
                ...(v.blockHash === undefined ? null : { blockHash: v.blockHash }),
                ...(v.blockNumber === undefined ? null : { blockNumber: v.blockNumber }),
                chainId: v.chainId,
                createdAt: v.createdAt,
                ...(v.data === undefined ? null : { data: v.data }),
                from: v.from,
                ...(v.gasLimit === undefined ? null : { gasLimit: v.gasLimit }),
                ...(v.gasPrice === undefined ? null : { gasPrice: v.gasPrice }),
                id: v.id,
                isDeployTransaction: v.isDeployTransaction,
                logs: v.logs,
                ...(v.maxFeePerGas === undefined ? null : { maxFeePerGas: v.maxFeePerGas }),
                ...(v.maxPriorityFeePerGas === undefined
                    ? null
                    : { maxPriorityFeePerGas: v.maxPriorityFeePerGas }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.minedDate === undefined ? null : { minedDate: v.minedDate }),
                network: v.network,
                ...(v.nonce === undefined ? null : { nonce: v.nonce }),
                ...(v.parentTransaction === undefined
                    ? null
                    : { parentTransaction: v.parentTransaction }),
                projectId: v.projectId,
                ...(v.publishedDate === undefined ? null : { publishedDate: v.publishedDate }),
                ...(v.signedTransaction === undefined
                    ? null
                    : { signedTransaction: v.signedTransaction }),
                signerWallet: v.signerWallet,
                ...(v.speed === undefined ? null : { speed: v.speed }),
                state: v.state,
                status: v.status,
                ...(v.to === undefined ? null : { to: v.to }),
                ...(v.transactionHash === undefined
                    ? null
                    : { transactionHash: v.transactionHash }),
                ...(v.type === undefined ? null : { type: v.type }),
                updatedAt: v.updatedAt,
                value: v.value,
            };
        });
}
