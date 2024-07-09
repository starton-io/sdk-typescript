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
    ContractNotYetDeployed,
    ContractNotYetDeployed$inboundSchema,
    ContractNotYetDeployed$Outbound,
    ContractNotYetDeployed$outboundSchema,
} from "./contractnotyetdeployed.js";
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
    InvalidFunction,
    InvalidFunction$inboundSchema,
    InvalidFunction$Outbound,
    InvalidFunction$outboundSchema,
} from "./invalidfunction.js";
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

export type CallSmartContractSmartContractManagementResponse500ResponseBody =
    | Unknown
    | CouldNotBroadcast
    | NoProviderForNetwork
    | CouldNotEstimateGasPrice
    | CouldNotAssignNonce
    | CouldNotSign;

export type CallSmartContractSmartContractManagementResponseResponseBody =
    ReplacementGasPriceUnderpriced;

export type CallSmartContractSmartContractManagementResponseBody = CouldNotFindResource;

export type CallSmartContractResponseBody =
    | InvalidBytecode
    | InvalidAbi
    | InvalidFunction
    | MissingArgument
    | UnexpectedArgument
    | InvalidArgument
    | CallException
    | NumericFault
    | EnsNotSupported
    | UnpredictableGasLimit
    | ExecutionWillFail
    | InvalidGasPrice
    | InsufficientFunds
    | AlreadyKnown
    | NonceExpired
    | ContractNotYetDeployed
    | BadRequestException;

/** @internal */
export const CallSmartContractSmartContractManagementResponse500ResponseBody$inboundSchema: z.ZodType<
    CallSmartContractSmartContractManagementResponse500ResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    Unknown$inboundSchema,
    CouldNotBroadcast$inboundSchema,
    NoProviderForNetwork$inboundSchema,
    CouldNotEstimateGasPrice$inboundSchema,
    CouldNotAssignNonce$inboundSchema,
    CouldNotSign$inboundSchema,
]);

/** @internal */
export type CallSmartContractSmartContractManagementResponse500ResponseBody$Outbound =
    | Unknown$Outbound
    | CouldNotBroadcast$Outbound
    | NoProviderForNetwork$Outbound
    | CouldNotEstimateGasPrice$Outbound
    | CouldNotAssignNonce$Outbound
    | CouldNotSign$Outbound;

/** @internal */
export const CallSmartContractSmartContractManagementResponse500ResponseBody$outboundSchema: z.ZodType<
    CallSmartContractSmartContractManagementResponse500ResponseBody$Outbound,
    z.ZodTypeDef,
    CallSmartContractSmartContractManagementResponse500ResponseBody
> = z.union([
    Unknown$outboundSchema,
    CouldNotBroadcast$outboundSchema,
    NoProviderForNetwork$outboundSchema,
    CouldNotEstimateGasPrice$outboundSchema,
    CouldNotAssignNonce$outboundSchema,
    CouldNotSign$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CallSmartContractSmartContractManagementResponse500ResponseBody$ {
    /** @deprecated use `CallSmartContractSmartContractManagementResponse500ResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        CallSmartContractSmartContractManagementResponse500ResponseBody$inboundSchema;
    /** @deprecated use `CallSmartContractSmartContractManagementResponse500ResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        CallSmartContractSmartContractManagementResponse500ResponseBody$outboundSchema;
    /** @deprecated use `CallSmartContractSmartContractManagementResponse500ResponseBody$Outbound` instead. */
    export type Outbound = CallSmartContractSmartContractManagementResponse500ResponseBody$Outbound;
}

/** @internal */
export const CallSmartContractSmartContractManagementResponseResponseBody$inboundSchema: z.ZodType<
    CallSmartContractSmartContractManagementResponseResponseBody,
    z.ZodTypeDef,
    unknown
> = ReplacementGasPriceUnderpriced$inboundSchema;

/** @internal */
export type CallSmartContractSmartContractManagementResponseResponseBody$Outbound =
    ReplacementGasPriceUnderpriced$Outbound;

/** @internal */
export const CallSmartContractSmartContractManagementResponseResponseBody$outboundSchema: z.ZodType<
    CallSmartContractSmartContractManagementResponseResponseBody$Outbound,
    z.ZodTypeDef,
    CallSmartContractSmartContractManagementResponseResponseBody
> = ReplacementGasPriceUnderpriced$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CallSmartContractSmartContractManagementResponseResponseBody$ {
    /** @deprecated use `CallSmartContractSmartContractManagementResponseResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        CallSmartContractSmartContractManagementResponseResponseBody$inboundSchema;
    /** @deprecated use `CallSmartContractSmartContractManagementResponseResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        CallSmartContractSmartContractManagementResponseResponseBody$outboundSchema;
    /** @deprecated use `CallSmartContractSmartContractManagementResponseResponseBody$Outbound` instead. */
    export type Outbound = CallSmartContractSmartContractManagementResponseResponseBody$Outbound;
}

/** @internal */
export const CallSmartContractSmartContractManagementResponseBody$inboundSchema: z.ZodType<
    CallSmartContractSmartContractManagementResponseBody,
    z.ZodTypeDef,
    unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type CallSmartContractSmartContractManagementResponseBody$Outbound =
    CouldNotFindResource$Outbound;

/** @internal */
export const CallSmartContractSmartContractManagementResponseBody$outboundSchema: z.ZodType<
    CallSmartContractSmartContractManagementResponseBody$Outbound,
    z.ZodTypeDef,
    CallSmartContractSmartContractManagementResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CallSmartContractSmartContractManagementResponseBody$ {
    /** @deprecated use `CallSmartContractSmartContractManagementResponseBody$inboundSchema` instead. */
    export const inboundSchema = CallSmartContractSmartContractManagementResponseBody$inboundSchema;
    /** @deprecated use `CallSmartContractSmartContractManagementResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        CallSmartContractSmartContractManagementResponseBody$outboundSchema;
    /** @deprecated use `CallSmartContractSmartContractManagementResponseBody$Outbound` instead. */
    export type Outbound = CallSmartContractSmartContractManagementResponseBody$Outbound;
}

/** @internal */
export const CallSmartContractResponseBody$inboundSchema: z.ZodType<
    CallSmartContractResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    InvalidBytecode$inboundSchema,
    InvalidAbi$inboundSchema,
    InvalidFunction$inboundSchema,
    MissingArgument$inboundSchema,
    UnexpectedArgument$inboundSchema,
    InvalidArgument$inboundSchema,
    CallException$inboundSchema,
    NumericFault$inboundSchema,
    EnsNotSupported$inboundSchema,
    UnpredictableGasLimit$inboundSchema,
    ExecutionWillFail$inboundSchema,
    InvalidGasPrice$inboundSchema,
    InsufficientFunds$inboundSchema,
    AlreadyKnown$inboundSchema,
    NonceExpired$inboundSchema,
    ContractNotYetDeployed$inboundSchema,
    BadRequestException$inboundSchema,
]);

/** @internal */
export type CallSmartContractResponseBody$Outbound =
    | InvalidBytecode$Outbound
    | InvalidAbi$Outbound
    | InvalidFunction$Outbound
    | MissingArgument$Outbound
    | UnexpectedArgument$Outbound
    | InvalidArgument$Outbound
    | CallException$Outbound
    | NumericFault$Outbound
    | EnsNotSupported$Outbound
    | UnpredictableGasLimit$Outbound
    | ExecutionWillFail$Outbound
    | InvalidGasPrice$Outbound
    | InsufficientFunds$Outbound
    | AlreadyKnown$Outbound
    | NonceExpired$Outbound
    | ContractNotYetDeployed$Outbound
    | BadRequestException$Outbound;

/** @internal */
export const CallSmartContractResponseBody$outboundSchema: z.ZodType<
    CallSmartContractResponseBody$Outbound,
    z.ZodTypeDef,
    CallSmartContractResponseBody
> = z.union([
    InvalidBytecode$outboundSchema,
    InvalidAbi$outboundSchema,
    InvalidFunction$outboundSchema,
    MissingArgument$outboundSchema,
    UnexpectedArgument$outboundSchema,
    InvalidArgument$outboundSchema,
    CallException$outboundSchema,
    NumericFault$outboundSchema,
    EnsNotSupported$outboundSchema,
    UnpredictableGasLimit$outboundSchema,
    ExecutionWillFail$outboundSchema,
    InvalidGasPrice$outboundSchema,
    InsufficientFunds$outboundSchema,
    AlreadyKnown$outboundSchema,
    NonceExpired$outboundSchema,
    ContractNotYetDeployed$outboundSchema,
    BadRequestException$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CallSmartContractResponseBody$ {
    /** @deprecated use `CallSmartContractResponseBody$inboundSchema` instead. */
    export const inboundSchema = CallSmartContractResponseBody$inboundSchema;
    /** @deprecated use `CallSmartContractResponseBody$outboundSchema` instead. */
    export const outboundSchema = CallSmartContractResponseBody$outboundSchema;
    /** @deprecated use `CallSmartContractResponseBody$Outbound` instead. */
    export type Outbound = CallSmartContractResponseBody$Outbound;
}
