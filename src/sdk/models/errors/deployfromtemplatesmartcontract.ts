/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
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
  MicroserviceNotResponding,
  MicroserviceNotResponding$inboundSchema,
  MicroserviceNotResponding$Outbound,
  MicroserviceNotResponding$outboundSchema,
} from "./microservicenotresponding.js";
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
import { SDKValidationError } from "./sdkvalidationerror.js";
import {
  SmartContractNotActivated,
  SmartContractNotActivated$inboundSchema,
  SmartContractNotActivated$Outbound,
  SmartContractNotActivated$outboundSchema,
} from "./smartcontractnotactivated.js";
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

export type DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody =
  | MicroserviceNotResponding
  | Unknown
  | CouldNotEstimateGasPrice
  | CouldNotBroadcast
  | CouldNotAssignNonce
  | CouldNotSign
  | NoProviderForNetwork;

export type DeployFromTemplateSmartContractSmartContractManagementResponseBody =
  CouldNotFindResource;

export type DeployFromTemplateSmartContractResponseBody =
  | SmartContractNotActivated
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
export const DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$inboundSchema:
  z.ZodType<
    DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.union([
    MicroserviceNotResponding$inboundSchema,
    Unknown$inboundSchema,
    CouldNotEstimateGasPrice$inboundSchema,
    CouldNotBroadcast$inboundSchema,
    CouldNotAssignNonce$inboundSchema,
    CouldNotSign$inboundSchema,
    NoProviderForNetwork$inboundSchema,
  ]);

/** @internal */
export type DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$Outbound =
  | MicroserviceNotResponding$Outbound
  | Unknown$Outbound
  | CouldNotEstimateGasPrice$Outbound
  | CouldNotBroadcast$Outbound
  | CouldNotAssignNonce$Outbound
  | CouldNotSign$Outbound
  | NoProviderForNetwork$Outbound;

/** @internal */
export const DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$outboundSchema:
  z.ZodType<
    DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$Outbound,
    z.ZodTypeDef,
    DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody
  > = z.union([
    MicroserviceNotResponding$outboundSchema,
    Unknown$outboundSchema,
    CouldNotEstimateGasPrice$outboundSchema,
    CouldNotBroadcast$outboundSchema,
    CouldNotAssignNonce$outboundSchema,
    CouldNotSign$outboundSchema,
    NoProviderForNetwork$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$ {
  /** @deprecated use `DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$inboundSchema;
  /** @deprecated use `DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$outboundSchema;
  /** @deprecated use `DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$Outbound` instead. */
  export type Outbound =
    DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$Outbound;
}

export function deployFromTemplateSmartContractSmartContractManagementResponseResponseBodyToJSON(
  deployFromTemplateSmartContractSmartContractManagementResponseResponseBody:
    DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody,
): string {
  return JSON.stringify(
    DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$outboundSchema
      .parse(
        deployFromTemplateSmartContractSmartContractManagementResponseResponseBody,
      ),
  );
}

export function deployFromTemplateSmartContractSmartContractManagementResponseResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody' from JSON`,
  );
}

/** @internal */
export const DeployFromTemplateSmartContractSmartContractManagementResponseBody$inboundSchema:
  z.ZodType<
    DeployFromTemplateSmartContractSmartContractManagementResponseBody,
    z.ZodTypeDef,
    unknown
  > = CouldNotFindResource$inboundSchema;

/** @internal */
export type DeployFromTemplateSmartContractSmartContractManagementResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const DeployFromTemplateSmartContractSmartContractManagementResponseBody$outboundSchema:
  z.ZodType<
    DeployFromTemplateSmartContractSmartContractManagementResponseBody$Outbound,
    z.ZodTypeDef,
    DeployFromTemplateSmartContractSmartContractManagementResponseBody
  > = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeployFromTemplateSmartContractSmartContractManagementResponseBody$ {
  /** @deprecated use `DeployFromTemplateSmartContractSmartContractManagementResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DeployFromTemplateSmartContractSmartContractManagementResponseBody$inboundSchema;
  /** @deprecated use `DeployFromTemplateSmartContractSmartContractManagementResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DeployFromTemplateSmartContractSmartContractManagementResponseBody$outboundSchema;
  /** @deprecated use `DeployFromTemplateSmartContractSmartContractManagementResponseBody$Outbound` instead. */
  export type Outbound =
    DeployFromTemplateSmartContractSmartContractManagementResponseBody$Outbound;
}

export function deployFromTemplateSmartContractSmartContractManagementResponseBodyToJSON(
  deployFromTemplateSmartContractSmartContractManagementResponseBody:
    DeployFromTemplateSmartContractSmartContractManagementResponseBody,
): string {
  return JSON.stringify(
    DeployFromTemplateSmartContractSmartContractManagementResponseBody$outboundSchema
      .parse(
        deployFromTemplateSmartContractSmartContractManagementResponseBody,
      ),
  );
}

export function deployFromTemplateSmartContractSmartContractManagementResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  DeployFromTemplateSmartContractSmartContractManagementResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeployFromTemplateSmartContractSmartContractManagementResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeployFromTemplateSmartContractSmartContractManagementResponseBody' from JSON`,
  );
}

/** @internal */
export const DeployFromTemplateSmartContractResponseBody$inboundSchema:
  z.ZodType<
    DeployFromTemplateSmartContractResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.union([
    SmartContractNotActivated$inboundSchema,
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
export type DeployFromTemplateSmartContractResponseBody$Outbound =
  | SmartContractNotActivated$Outbound
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
export const DeployFromTemplateSmartContractResponseBody$outboundSchema:
  z.ZodType<
    DeployFromTemplateSmartContractResponseBody$Outbound,
    z.ZodTypeDef,
    DeployFromTemplateSmartContractResponseBody
  > = z.union([
    SmartContractNotActivated$outboundSchema,
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
export namespace DeployFromTemplateSmartContractResponseBody$ {
  /** @deprecated use `DeployFromTemplateSmartContractResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DeployFromTemplateSmartContractResponseBody$inboundSchema;
  /** @deprecated use `DeployFromTemplateSmartContractResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DeployFromTemplateSmartContractResponseBody$outboundSchema;
  /** @deprecated use `DeployFromTemplateSmartContractResponseBody$Outbound` instead. */
  export type Outbound = DeployFromTemplateSmartContractResponseBody$Outbound;
}

export function deployFromTemplateSmartContractResponseBodyToJSON(
  deployFromTemplateSmartContractResponseBody:
    DeployFromTemplateSmartContractResponseBody,
): string {
  return JSON.stringify(
    DeployFromTemplateSmartContractResponseBody$outboundSchema.parse(
      deployFromTemplateSmartContractResponseBody,
    ),
  );
}

export function deployFromTemplateSmartContractResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  DeployFromTemplateSmartContractResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeployFromTemplateSmartContractResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeployFromTemplateSmartContractResponseBody' from JSON`,
  );
}
