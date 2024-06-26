/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AlreadyKnown, AlreadyKnown$ } from "./alreadyknown.js";
import { BadRequestException, BadRequestException$ } from "./badrequestexception.js";
import { CallException, CallException$ } from "./callexception.js";
import { CouldNotAssignNonce, CouldNotAssignNonce$ } from "./couldnotassignnonce.js";
import { CouldNotBroadcast, CouldNotBroadcast$ } from "./couldnotbroadcast.js";
import { CouldNotEstimateGasPrice, CouldNotEstimateGasPrice$ } from "./couldnotestimategasprice.js";
import { CouldNotFindResource, CouldNotFindResource$ } from "./couldnotfindresource.js";
import { CouldNotSign, CouldNotSign$ } from "./couldnotsign.js";
import { EnsNotSupported, EnsNotSupported$ } from "./ensnotsupported.js";
import { ExecutionWillFail, ExecutionWillFail$ } from "./executionwillfail.js";
import { InsufficientFunds, InsufficientFunds$ } from "./insufficientfunds.js";
import { InvalidAbi, InvalidAbi$ } from "./invalidabi.js";
import { InvalidArgument, InvalidArgument$ } from "./invalidargument.js";
import { InvalidBytecode, InvalidBytecode$ } from "./invalidbytecode.js";
import { InvalidGasPrice, InvalidGasPrice$ } from "./invalidgasprice.js";
import { MissingArgument, MissingArgument$ } from "./missingargument.js";
import { NonceExpired, NonceExpired$ } from "./nonceexpired.js";
import { NoProviderForNetwork, NoProviderForNetwork$ } from "./noproviderfornetwork.js";
import { NumericFault, NumericFault$ } from "./numericfault.js";
import {
    ReplacementGasPriceUnderpriced,
    ReplacementGasPriceUnderpriced$,
} from "./replacementgaspriceunderpriced.js";
import { UnexpectedArgument, UnexpectedArgument$ } from "./unexpectedargument.js";
import { Unknown, Unknown$ } from "./unknown.js";
import { UnpredictableGasLimit, UnpredictableGasLimit$ } from "./unpredictablegaslimit.js";
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
export namespace DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$ {
    export const inboundSchema: z.ZodType<
        DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.union([
        Unknown$.inboundSchema,
        NoProviderForNetwork$.inboundSchema,
        CouldNotEstimateGasPrice$.inboundSchema,
        CouldNotSign$.inboundSchema,
        CouldNotAssignNonce$.inboundSchema,
        CouldNotBroadcast$.inboundSchema,
    ]);

    export type Outbound =
        | Unknown$.Outbound
        | NoProviderForNetwork$.Outbound
        | CouldNotEstimateGasPrice$.Outbound
        | CouldNotSign$.Outbound
        | CouldNotAssignNonce$.Outbound
        | CouldNotBroadcast$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody
    > = z.union([
        Unknown$.outboundSchema,
        NoProviderForNetwork$.outboundSchema,
        CouldNotEstimateGasPrice$.outboundSchema,
        CouldNotSign$.outboundSchema,
        CouldNotAssignNonce$.outboundSchema,
        CouldNotBroadcast$.outboundSchema,
    ]);
}

/** @internal */
export namespace DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$ {
    export const inboundSchema: z.ZodType<
        DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody,
        z.ZodTypeDef,
        unknown
    > = ReplacementGasPriceUnderpriced$.inboundSchema;

    export type Outbound = ReplacementGasPriceUnderpriced$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody
    > = ReplacementGasPriceUnderpriced$.outboundSchema;
}

/** @internal */
export namespace DeployFromBytecodeSmartContractSmartContractManagementResponseBody$ {
    export const inboundSchema: z.ZodType<
        DeployFromBytecodeSmartContractSmartContractManagementResponseBody,
        z.ZodTypeDef,
        unknown
    > = CouldNotFindResource$.inboundSchema;

    export type Outbound = CouldNotFindResource$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeployFromBytecodeSmartContractSmartContractManagementResponseBody
    > = CouldNotFindResource$.outboundSchema;
}

/** @internal */
export namespace DeployFromBytecodeSmartContractResponseBody$ {
    export const inboundSchema: z.ZodType<
        DeployFromBytecodeSmartContractResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.union([
        InvalidBytecode$.inboundSchema,
        InvalidAbi$.inboundSchema,
        MissingArgument$.inboundSchema,
        UnexpectedArgument$.inboundSchema,
        InvalidArgument$.inboundSchema,
        CallException$.inboundSchema,
        NumericFault$.inboundSchema,
        EnsNotSupported$.inboundSchema,
        ExecutionWillFail$.inboundSchema,
        InvalidGasPrice$.inboundSchema,
        InsufficientFunds$.inboundSchema,
        AlreadyKnown$.inboundSchema,
        NonceExpired$.inboundSchema,
        UnpredictableGasLimit$.inboundSchema,
        BadRequestException$.inboundSchema,
    ]);

    export type Outbound =
        | InvalidBytecode$.Outbound
        | InvalidAbi$.Outbound
        | MissingArgument$.Outbound
        | UnexpectedArgument$.Outbound
        | InvalidArgument$.Outbound
        | CallException$.Outbound
        | NumericFault$.Outbound
        | EnsNotSupported$.Outbound
        | ExecutionWillFail$.Outbound
        | InvalidGasPrice$.Outbound
        | InsufficientFunds$.Outbound
        | AlreadyKnown$.Outbound
        | NonceExpired$.Outbound
        | UnpredictableGasLimit$.Outbound
        | BadRequestException$.Outbound;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeployFromBytecodeSmartContractResponseBody
    > = z.union([
        InvalidBytecode$.outboundSchema,
        InvalidAbi$.outboundSchema,
        MissingArgument$.outboundSchema,
        UnexpectedArgument$.outboundSchema,
        InvalidArgument$.outboundSchema,
        CallException$.outboundSchema,
        NumericFault$.outboundSchema,
        EnsNotSupported$.outboundSchema,
        ExecutionWillFail$.outboundSchema,
        InvalidGasPrice$.outboundSchema,
        InsufficientFunds$.outboundSchema,
        AlreadyKnown$.outboundSchema,
        NonceExpired$.outboundSchema,
        UnpredictableGasLimit$.outboundSchema,
        BadRequestException$.outboundSchema,
    ]);
}
