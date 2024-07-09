/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    AlreadyKnown,
    AlreadyKnown$inboundSchema,
    AlreadyKnown$Outbound,
    AlreadyKnown$outboundSchema,
} from "./alreadyknown.js";
import {
    BadRequestException,
    BadRequestException$inboundSchema,
    BadRequestException$Outbound,
    BadRequestException$outboundSchema,
} from "./badrequestexception.js";
import {
    CallException,
    CallException$inboundSchema,
    CallException$Outbound,
    CallException$outboundSchema,
} from "./callexception.js";
import {
    CouldNotAssignNonce,
    CouldNotAssignNonce$inboundSchema,
    CouldNotAssignNonce$Outbound,
    CouldNotAssignNonce$outboundSchema,
} from "./couldnotassignnonce.js";
import {
    CouldNotBroadcast,
    CouldNotBroadcast$inboundSchema,
    CouldNotBroadcast$Outbound,
    CouldNotBroadcast$outboundSchema,
} from "./couldnotbroadcast.js";
import {
    CouldNotEstimateGasPrice,
    CouldNotEstimateGasPrice$inboundSchema,
    CouldNotEstimateGasPrice$Outbound,
    CouldNotEstimateGasPrice$outboundSchema,
} from "./couldnotestimategasprice.js";
import {
    CouldNotFindResource,
    CouldNotFindResource$inboundSchema,
    CouldNotFindResource$Outbound,
    CouldNotFindResource$outboundSchema,
} from "./couldnotfindresource.js";
import {
    CouldNotSign,
    CouldNotSign$inboundSchema,
    CouldNotSign$Outbound,
    CouldNotSign$outboundSchema,
} from "./couldnotsign.js";
import {
    EnsNotSupported,
    EnsNotSupported$inboundSchema,
    EnsNotSupported$Outbound,
    EnsNotSupported$outboundSchema,
} from "./ensnotsupported.js";
import {
    ExecutionWillFail,
    ExecutionWillFail$inboundSchema,
    ExecutionWillFail$Outbound,
    ExecutionWillFail$outboundSchema,
} from "./executionwillfail.js";
import {
    InsufficientFunds,
    InsufficientFunds$inboundSchema,
    InsufficientFunds$Outbound,
    InsufficientFunds$outboundSchema,
} from "./insufficientfunds.js";
import {
    InvalidAbi,
    InvalidAbi$inboundSchema,
    InvalidAbi$Outbound,
    InvalidAbi$outboundSchema,
} from "./invalidabi.js";
import {
    InvalidArgument,
    InvalidArgument$inboundSchema,
    InvalidArgument$Outbound,
    InvalidArgument$outboundSchema,
} from "./invalidargument.js";
import {
    InvalidBytecode,
    InvalidBytecode$inboundSchema,
    InvalidBytecode$Outbound,
    InvalidBytecode$outboundSchema,
} from "./invalidbytecode.js";
import {
    InvalidGasPrice,
    InvalidGasPrice$inboundSchema,
    InvalidGasPrice$Outbound,
    InvalidGasPrice$outboundSchema,
} from "./invalidgasprice.js";
import {
    MissingArgument,
    MissingArgument$inboundSchema,
    MissingArgument$Outbound,
    MissingArgument$outboundSchema,
} from "./missingargument.js";
import {
    NonceExpired,
    NonceExpired$inboundSchema,
    NonceExpired$Outbound,
    NonceExpired$outboundSchema,
} from "./nonceexpired.js";
import {
    NoProviderForNetwork,
    NoProviderForNetwork$inboundSchema,
    NoProviderForNetwork$Outbound,
    NoProviderForNetwork$outboundSchema,
} from "./noproviderfornetwork.js";
import {
    NumericFault,
    NumericFault$inboundSchema,
    NumericFault$Outbound,
    NumericFault$outboundSchema,
} from "./numericfault.js";
import {
    ReplacementGasPriceUnderpriced,
    ReplacementGasPriceUnderpriced$inboundSchema,
    ReplacementGasPriceUnderpriced$Outbound,
    ReplacementGasPriceUnderpriced$outboundSchema,
} from "./replacementgaspriceunderpriced.js";
import {
    UnexpectedArgument,
    UnexpectedArgument$inboundSchema,
    UnexpectedArgument$Outbound,
    UnexpectedArgument$outboundSchema,
} from "./unexpectedargument.js";
import {
    Unknown,
    Unknown$inboundSchema,
    Unknown$Outbound,
    Unknown$outboundSchema,
} from "./unknown.js";
import {
    UnpredictableGasLimit,
    UnpredictableGasLimit$inboundSchema,
    UnpredictableGasLimit$Outbound,
    UnpredictableGasLimit$outboundSchema,
} from "./unpredictablegaslimit.js";
import * as z from "zod";

export type DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody =
    | Unknown
    | NoProviderForNetwork
    | CouldNotEstimateGasPrice
    | CouldNotSign
    | CouldNotAssignNonce
    | CouldNotBroadcast;

export type DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody =
    ReplacementGasPriceUnderpriced;

export type DeployFromBytecodeSmartContractSmartContractManagementResponseBody =
    CouldNotFindResource;

export type DeployFromBytecodeSmartContractResponseBody =
    | InvalidBytecode
    | InvalidAbi
    | MissingArgument
    | UnexpectedArgument
    | InvalidArgument
    | CallException
    | NumericFault
    | EnsNotSupported
    | ExecutionWillFail
    | InvalidGasPrice
    | InsufficientFunds
    | AlreadyKnown
    | NonceExpired
    | UnpredictableGasLimit
    | BadRequestException;

/** @internal */
export const DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$inboundSchema: z.ZodType<
    DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    Unknown$inboundSchema,
    NoProviderForNetwork$inboundSchema,
    CouldNotEstimateGasPrice$inboundSchema,
    CouldNotSign$inboundSchema,
    CouldNotAssignNonce$inboundSchema,
    CouldNotBroadcast$inboundSchema,
]);

/** @internal */
export type DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$Outbound =

        | Unknown$Outbound
        | NoProviderForNetwork$Outbound
        | CouldNotEstimateGasPrice$Outbound
        | CouldNotSign$Outbound
        | CouldNotAssignNonce$Outbound
        | CouldNotBroadcast$Outbound;

/** @internal */
export const DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$outboundSchema: z.ZodType<
    DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$Outbound,
    z.ZodTypeDef,
    DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody
> = z.union([
    Unknown$outboundSchema,
    NoProviderForNetwork$outboundSchema,
    CouldNotEstimateGasPrice$outboundSchema,
    CouldNotSign$outboundSchema,
    CouldNotAssignNonce$outboundSchema,
    CouldNotBroadcast$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$ {
    /** @deprecated use `DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$inboundSchema;
    /** @deprecated use `DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$outboundSchema;
    /** @deprecated use `DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$Outbound` instead. */
    export type Outbound =
        DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$Outbound;
}

/** @internal */
export const DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$inboundSchema: z.ZodType<
    DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody,
    z.ZodTypeDef,
    unknown
> = ReplacementGasPriceUnderpriced$inboundSchema;

/** @internal */
export type DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$Outbound =
    ReplacementGasPriceUnderpriced$Outbound;

/** @internal */
export const DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$outboundSchema: z.ZodType<
    DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$Outbound,
    z.ZodTypeDef,
    DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody
> = ReplacementGasPriceUnderpriced$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$ {
    /** @deprecated use `DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$inboundSchema;
    /** @deprecated use `DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$outboundSchema;
    /** @deprecated use `DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$Outbound` instead. */
    export type Outbound =
        DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$Outbound;
}

/** @internal */
export const DeployFromBytecodeSmartContractSmartContractManagementResponseBody$inboundSchema: z.ZodType<
    DeployFromBytecodeSmartContractSmartContractManagementResponseBody,
    z.ZodTypeDef,
    unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type DeployFromBytecodeSmartContractSmartContractManagementResponseBody$Outbound =
    CouldNotFindResource$Outbound;

/** @internal */
export const DeployFromBytecodeSmartContractSmartContractManagementResponseBody$outboundSchema: z.ZodType<
    DeployFromBytecodeSmartContractSmartContractManagementResponseBody$Outbound,
    z.ZodTypeDef,
    DeployFromBytecodeSmartContractSmartContractManagementResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeployFromBytecodeSmartContractSmartContractManagementResponseBody$ {
    /** @deprecated use `DeployFromBytecodeSmartContractSmartContractManagementResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        DeployFromBytecodeSmartContractSmartContractManagementResponseBody$inboundSchema;
    /** @deprecated use `DeployFromBytecodeSmartContractSmartContractManagementResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        DeployFromBytecodeSmartContractSmartContractManagementResponseBody$outboundSchema;
    /** @deprecated use `DeployFromBytecodeSmartContractSmartContractManagementResponseBody$Outbound` instead. */
    export type Outbound =
        DeployFromBytecodeSmartContractSmartContractManagementResponseBody$Outbound;
}

/** @internal */
export const DeployFromBytecodeSmartContractResponseBody$inboundSchema: z.ZodType<
    DeployFromBytecodeSmartContractResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    InvalidBytecode$inboundSchema,
    InvalidAbi$inboundSchema,
    MissingArgument$inboundSchema,
    UnexpectedArgument$inboundSchema,
    InvalidArgument$inboundSchema,
    CallException$inboundSchema,
    NumericFault$inboundSchema,
    EnsNotSupported$inboundSchema,
    ExecutionWillFail$inboundSchema,
    InvalidGasPrice$inboundSchema,
    InsufficientFunds$inboundSchema,
    AlreadyKnown$inboundSchema,
    NonceExpired$inboundSchema,
    UnpredictableGasLimit$inboundSchema,
    BadRequestException$inboundSchema,
]);

/** @internal */
export type DeployFromBytecodeSmartContractResponseBody$Outbound =
    | InvalidBytecode$Outbound
    | InvalidAbi$Outbound
    | MissingArgument$Outbound
    | UnexpectedArgument$Outbound
    | InvalidArgument$Outbound
    | CallException$Outbound
    | NumericFault$Outbound
    | EnsNotSupported$Outbound
    | ExecutionWillFail$Outbound
    | InvalidGasPrice$Outbound
    | InsufficientFunds$Outbound
    | AlreadyKnown$Outbound
    | NonceExpired$Outbound
    | UnpredictableGasLimit$Outbound
    | BadRequestException$Outbound;

/** @internal */
export const DeployFromBytecodeSmartContractResponseBody$outboundSchema: z.ZodType<
    DeployFromBytecodeSmartContractResponseBody$Outbound,
    z.ZodTypeDef,
    DeployFromBytecodeSmartContractResponseBody
> = z.union([
    InvalidBytecode$outboundSchema,
    InvalidAbi$outboundSchema,
    MissingArgument$outboundSchema,
    UnexpectedArgument$outboundSchema,
    InvalidArgument$outboundSchema,
    CallException$outboundSchema,
    NumericFault$outboundSchema,
    EnsNotSupported$outboundSchema,
    ExecutionWillFail$outboundSchema,
    InvalidGasPrice$outboundSchema,
    InsufficientFunds$outboundSchema,
    AlreadyKnown$outboundSchema,
    NonceExpired$outboundSchema,
    UnpredictableGasLimit$outboundSchema,
    BadRequestException$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeployFromBytecodeSmartContractResponseBody$ {
    /** @deprecated use `DeployFromBytecodeSmartContractResponseBody$inboundSchema` instead. */
    export const inboundSchema = DeployFromBytecodeSmartContractResponseBody$inboundSchema;
    /** @deprecated use `DeployFromBytecodeSmartContractResponseBody$outboundSchema` instead. */
    export const outboundSchema = DeployFromBytecodeSmartContractResponseBody$outboundSchema;
    /** @deprecated use `DeployFromBytecodeSmartContractResponseBody$Outbound` instead. */
    export type Outbound = DeployFromBytecodeSmartContractResponseBody$Outbound;
}
