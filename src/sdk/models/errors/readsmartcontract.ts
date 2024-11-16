/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
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
import { SDKValidationError } from "./sdkvalidationerror.js";
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

export type ReadSmartContractSmartContractManagementResponseResponseBody =
  Unknown;

export type ReadSmartContractSmartContractManagementResponseBody =
  CouldNotFindResource;

export type ReadSmartContractResponseBody =
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
export const ReadSmartContractSmartContractManagementResponseResponseBody$inboundSchema:
  z.ZodType<
    ReadSmartContractSmartContractManagementResponseResponseBody,
    z.ZodTypeDef,
    unknown
  > = Unknown$inboundSchema;

/** @internal */
export type ReadSmartContractSmartContractManagementResponseResponseBody$Outbound =
  Unknown$Outbound;

/** @internal */
export const ReadSmartContractSmartContractManagementResponseResponseBody$outboundSchema:
  z.ZodType<
    ReadSmartContractSmartContractManagementResponseResponseBody$Outbound,
    z.ZodTypeDef,
    ReadSmartContractSmartContractManagementResponseResponseBody
  > = Unknown$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadSmartContractSmartContractManagementResponseResponseBody$ {
  /** @deprecated use `ReadSmartContractSmartContractManagementResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ReadSmartContractSmartContractManagementResponseResponseBody$inboundSchema;
  /** @deprecated use `ReadSmartContractSmartContractManagementResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ReadSmartContractSmartContractManagementResponseResponseBody$outboundSchema;
  /** @deprecated use `ReadSmartContractSmartContractManagementResponseResponseBody$Outbound` instead. */
  export type Outbound =
    ReadSmartContractSmartContractManagementResponseResponseBody$Outbound;
}

export function readSmartContractSmartContractManagementResponseResponseBodyToJSON(
  readSmartContractSmartContractManagementResponseResponseBody:
    ReadSmartContractSmartContractManagementResponseResponseBody,
): string {
  return JSON.stringify(
    ReadSmartContractSmartContractManagementResponseResponseBody$outboundSchema
      .parse(readSmartContractSmartContractManagementResponseResponseBody),
  );
}

export function readSmartContractSmartContractManagementResponseResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ReadSmartContractSmartContractManagementResponseResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ReadSmartContractSmartContractManagementResponseResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'ReadSmartContractSmartContractManagementResponseResponseBody' from JSON`,
  );
}

/** @internal */
export const ReadSmartContractSmartContractManagementResponseBody$inboundSchema:
  z.ZodType<
    ReadSmartContractSmartContractManagementResponseBody,
    z.ZodTypeDef,
    unknown
  > = CouldNotFindResource$inboundSchema;

/** @internal */
export type ReadSmartContractSmartContractManagementResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const ReadSmartContractSmartContractManagementResponseBody$outboundSchema:
  z.ZodType<
    ReadSmartContractSmartContractManagementResponseBody$Outbound,
    z.ZodTypeDef,
    ReadSmartContractSmartContractManagementResponseBody
  > = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadSmartContractSmartContractManagementResponseBody$ {
  /** @deprecated use `ReadSmartContractSmartContractManagementResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ReadSmartContractSmartContractManagementResponseBody$inboundSchema;
  /** @deprecated use `ReadSmartContractSmartContractManagementResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ReadSmartContractSmartContractManagementResponseBody$outboundSchema;
  /** @deprecated use `ReadSmartContractSmartContractManagementResponseBody$Outbound` instead. */
  export type Outbound =
    ReadSmartContractSmartContractManagementResponseBody$Outbound;
}

export function readSmartContractSmartContractManagementResponseBodyToJSON(
  readSmartContractSmartContractManagementResponseBody:
    ReadSmartContractSmartContractManagementResponseBody,
): string {
  return JSON.stringify(
    ReadSmartContractSmartContractManagementResponseBody$outboundSchema.parse(
      readSmartContractSmartContractManagementResponseBody,
    ),
  );
}

export function readSmartContractSmartContractManagementResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ReadSmartContractSmartContractManagementResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ReadSmartContractSmartContractManagementResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ReadSmartContractSmartContractManagementResponseBody' from JSON`,
  );
}

/** @internal */
export const ReadSmartContractResponseBody$inboundSchema: z.ZodType<
  ReadSmartContractResponseBody,
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
export type ReadSmartContractResponseBody$Outbound =
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
export const ReadSmartContractResponseBody$outboundSchema: z.ZodType<
  ReadSmartContractResponseBody$Outbound,
  z.ZodTypeDef,
  ReadSmartContractResponseBody
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
export namespace ReadSmartContractResponseBody$ {
  /** @deprecated use `ReadSmartContractResponseBody$inboundSchema` instead. */
  export const inboundSchema = ReadSmartContractResponseBody$inboundSchema;
  /** @deprecated use `ReadSmartContractResponseBody$outboundSchema` instead. */
  export const outboundSchema = ReadSmartContractResponseBody$outboundSchema;
  /** @deprecated use `ReadSmartContractResponseBody$Outbound` instead. */
  export type Outbound = ReadSmartContractResponseBody$Outbound;
}

export function readSmartContractResponseBodyToJSON(
  readSmartContractResponseBody: ReadSmartContractResponseBody,
): string {
  return JSON.stringify(
    ReadSmartContractResponseBody$outboundSchema.parse(
      readSmartContractResponseBody,
    ),
  );
}

export function readSmartContractResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ReadSmartContractResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadSmartContractResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadSmartContractResponseBody' from JSON`,
  );
}
