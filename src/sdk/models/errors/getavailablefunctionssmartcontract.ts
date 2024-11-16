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
  CouldNotFindResource,
  CouldNotFindResource$inboundSchema,
  CouldNotFindResource$Outbound,
  CouldNotFindResource$outboundSchema,
} from "./couldnotfindresource.js";
import {
  InvalidAbi,
  InvalidAbi$inboundSchema,
  InvalidAbi$Outbound,
  InvalidAbi$outboundSchema,
} from "./invalidabi.js";
import {
  InvalidBytecode,
  InvalidBytecode$inboundSchema,
  InvalidBytecode$Outbound,
  InvalidBytecode$outboundSchema,
} from "./invalidbytecode.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import {
  Unknown,
  Unknown$inboundSchema,
  Unknown$Outbound,
  Unknown$outboundSchema,
} from "./unknown.js";

export type GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody =
  Unknown;

export type GetAvailableFunctionsSmartContractSmartContractManagementResponseBody =
  CouldNotFindResource;

export type GetAvailableFunctionsSmartContractResponseBody =
  | InvalidBytecode
  | InvalidAbi
  | BadRequestException;

/** @internal */
export const GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$inboundSchema:
  z.ZodType<
    GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody,
    z.ZodTypeDef,
    unknown
  > = Unknown$inboundSchema;

/** @internal */
export type GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$Outbound =
  Unknown$Outbound;

/** @internal */
export const GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$outboundSchema:
  z.ZodType<
    GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$Outbound,
    z.ZodTypeDef,
    GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody
  > = Unknown$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$ {
  /** @deprecated use `GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$inboundSchema;
  /** @deprecated use `GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$outboundSchema;
  /** @deprecated use `GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$Outbound` instead. */
  export type Outbound =
    GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$Outbound;
}

export function getAvailableFunctionsSmartContractSmartContractManagementResponseResponseBodyToJSON(
  getAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody:
    GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody,
): string {
  return JSON.stringify(
    GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$outboundSchema
      .parse(
        getAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody,
      ),
  );
}

export function getAvailableFunctionsSmartContractSmartContractManagementResponseResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody' from JSON`,
  );
}

/** @internal */
export const GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$inboundSchema:
  z.ZodType<
    GetAvailableFunctionsSmartContractSmartContractManagementResponseBody,
    z.ZodTypeDef,
    unknown
  > = CouldNotFindResource$inboundSchema;

/** @internal */
export type GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$outboundSchema:
  z.ZodType<
    GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$Outbound,
    z.ZodTypeDef,
    GetAvailableFunctionsSmartContractSmartContractManagementResponseBody
  > = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$ {
  /** @deprecated use `GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$inboundSchema;
  /** @deprecated use `GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$outboundSchema;
  /** @deprecated use `GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$Outbound` instead. */
  export type Outbound =
    GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$Outbound;
}

export function getAvailableFunctionsSmartContractSmartContractManagementResponseBodyToJSON(
  getAvailableFunctionsSmartContractSmartContractManagementResponseBody:
    GetAvailableFunctionsSmartContractSmartContractManagementResponseBody,
): string {
  return JSON.stringify(
    GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$outboundSchema
      .parse(
        getAvailableFunctionsSmartContractSmartContractManagementResponseBody,
      ),
  );
}

export function getAvailableFunctionsSmartContractSmartContractManagementResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetAvailableFunctionsSmartContractSmartContractManagementResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetAvailableFunctionsSmartContractSmartContractManagementResponseBody' from JSON`,
  );
}

/** @internal */
export const GetAvailableFunctionsSmartContractResponseBody$inboundSchema:
  z.ZodType<
    GetAvailableFunctionsSmartContractResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.union([
    InvalidBytecode$inboundSchema,
    InvalidAbi$inboundSchema,
    BadRequestException$inboundSchema,
  ]);

/** @internal */
export type GetAvailableFunctionsSmartContractResponseBody$Outbound =
  | InvalidBytecode$Outbound
  | InvalidAbi$Outbound
  | BadRequestException$Outbound;

/** @internal */
export const GetAvailableFunctionsSmartContractResponseBody$outboundSchema:
  z.ZodType<
    GetAvailableFunctionsSmartContractResponseBody$Outbound,
    z.ZodTypeDef,
    GetAvailableFunctionsSmartContractResponseBody
  > = z.union([
    InvalidBytecode$outboundSchema,
    InvalidAbi$outboundSchema,
    BadRequestException$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAvailableFunctionsSmartContractResponseBody$ {
  /** @deprecated use `GetAvailableFunctionsSmartContractResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetAvailableFunctionsSmartContractResponseBody$inboundSchema;
  /** @deprecated use `GetAvailableFunctionsSmartContractResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetAvailableFunctionsSmartContractResponseBody$outboundSchema;
  /** @deprecated use `GetAvailableFunctionsSmartContractResponseBody$Outbound` instead. */
  export type Outbound =
    GetAvailableFunctionsSmartContractResponseBody$Outbound;
}

export function getAvailableFunctionsSmartContractResponseBodyToJSON(
  getAvailableFunctionsSmartContractResponseBody:
    GetAvailableFunctionsSmartContractResponseBody,
): string {
  return JSON.stringify(
    GetAvailableFunctionsSmartContractResponseBody$outboundSchema.parse(
      getAvailableFunctionsSmartContractResponseBody,
    ),
  );
}

export function getAvailableFunctionsSmartContractResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  GetAvailableFunctionsSmartContractResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetAvailableFunctionsSmartContractResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetAvailableFunctionsSmartContractResponseBody' from JSON`,
  );
}
