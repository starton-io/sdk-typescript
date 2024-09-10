/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
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
  CouldNotFindResource,
  CouldNotFindResource$inboundSchema,
  CouldNotFindResource$Outbound,
  CouldNotFindResource$outboundSchema,
} from "./couldnotfindresource.js";
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
  MissingArgument,
  MissingArgument$inboundSchema,
  MissingArgument$Outbound,
  MissingArgument$outboundSchema,
} from "./missingargument.js";
import {
  NumericFault,
  NumericFault$inboundSchema,
  NumericFault$Outbound,
  NumericFault$outboundSchema,
} from "./numericfault.js";
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

export type EncodeSmartContractSmartContractManagementResponseResponseBody =
  Unknown;

export type EncodeSmartContractSmartContractManagementResponseBody =
  CouldNotFindResource;

export type EncodeSmartContractResponseBody =
  | InvalidBytecode
  | InvalidAbi
  | InvalidFunction
  | MissingArgument
  | UnexpectedArgument
  | InvalidArgument
  | CallException
  | NumericFault
  | ExecutionWillFail
  | EnsNotSupported
  | BadRequestException;

/** @internal */
export const EncodeSmartContractSmartContractManagementResponseResponseBody$inboundSchema:
  z.ZodType<
    EncodeSmartContractSmartContractManagementResponseResponseBody,
    z.ZodTypeDef,
    unknown
  > = Unknown$inboundSchema;

/** @internal */
export type EncodeSmartContractSmartContractManagementResponseResponseBody$Outbound =
  Unknown$Outbound;

/** @internal */
export const EncodeSmartContractSmartContractManagementResponseResponseBody$outboundSchema:
  z.ZodType<
    EncodeSmartContractSmartContractManagementResponseResponseBody$Outbound,
    z.ZodTypeDef,
    EncodeSmartContractSmartContractManagementResponseResponseBody
  > = Unknown$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EncodeSmartContractSmartContractManagementResponseResponseBody$ {
  /** @deprecated use `EncodeSmartContractSmartContractManagementResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    EncodeSmartContractSmartContractManagementResponseResponseBody$inboundSchema;
  /** @deprecated use `EncodeSmartContractSmartContractManagementResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    EncodeSmartContractSmartContractManagementResponseResponseBody$outboundSchema;
  /** @deprecated use `EncodeSmartContractSmartContractManagementResponseResponseBody$Outbound` instead. */
  export type Outbound =
    EncodeSmartContractSmartContractManagementResponseResponseBody$Outbound;
}

/** @internal */
export const EncodeSmartContractSmartContractManagementResponseBody$inboundSchema:
  z.ZodType<
    EncodeSmartContractSmartContractManagementResponseBody,
    z.ZodTypeDef,
    unknown
  > = CouldNotFindResource$inboundSchema;

/** @internal */
export type EncodeSmartContractSmartContractManagementResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const EncodeSmartContractSmartContractManagementResponseBody$outboundSchema:
  z.ZodType<
    EncodeSmartContractSmartContractManagementResponseBody$Outbound,
    z.ZodTypeDef,
    EncodeSmartContractSmartContractManagementResponseBody
  > = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EncodeSmartContractSmartContractManagementResponseBody$ {
  /** @deprecated use `EncodeSmartContractSmartContractManagementResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    EncodeSmartContractSmartContractManagementResponseBody$inboundSchema;
  /** @deprecated use `EncodeSmartContractSmartContractManagementResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    EncodeSmartContractSmartContractManagementResponseBody$outboundSchema;
  /** @deprecated use `EncodeSmartContractSmartContractManagementResponseBody$Outbound` instead. */
  export type Outbound =
    EncodeSmartContractSmartContractManagementResponseBody$Outbound;
}

/** @internal */
export const EncodeSmartContractResponseBody$inboundSchema: z.ZodType<
  EncodeSmartContractResponseBody,
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
  ExecutionWillFail$inboundSchema,
  EnsNotSupported$inboundSchema,
  BadRequestException$inboundSchema,
]);

/** @internal */
export type EncodeSmartContractResponseBody$Outbound =
  | InvalidBytecode$Outbound
  | InvalidAbi$Outbound
  | InvalidFunction$Outbound
  | MissingArgument$Outbound
  | UnexpectedArgument$Outbound
  | InvalidArgument$Outbound
  | CallException$Outbound
  | NumericFault$Outbound
  | ExecutionWillFail$Outbound
  | EnsNotSupported$Outbound
  | BadRequestException$Outbound;

/** @internal */
export const EncodeSmartContractResponseBody$outboundSchema: z.ZodType<
  EncodeSmartContractResponseBody$Outbound,
  z.ZodTypeDef,
  EncodeSmartContractResponseBody
> = z.union([
  InvalidBytecode$outboundSchema,
  InvalidAbi$outboundSchema,
  InvalidFunction$outboundSchema,
  MissingArgument$outboundSchema,
  UnexpectedArgument$outboundSchema,
  InvalidArgument$outboundSchema,
  CallException$outboundSchema,
  NumericFault$outboundSchema,
  ExecutionWillFail$outboundSchema,
  EnsNotSupported$outboundSchema,
  BadRequestException$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EncodeSmartContractResponseBody$ {
  /** @deprecated use `EncodeSmartContractResponseBody$inboundSchema` instead. */
  export const inboundSchema = EncodeSmartContractResponseBody$inboundSchema;
  /** @deprecated use `EncodeSmartContractResponseBody$outboundSchema` instead. */
  export const outboundSchema = EncodeSmartContractResponseBody$outboundSchema;
  /** @deprecated use `EncodeSmartContractResponseBody$Outbound` instead. */
  export type Outbound = EncodeSmartContractResponseBody$Outbound;
}
