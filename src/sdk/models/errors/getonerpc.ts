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
import { SDKValidationError } from "./sdkvalidationerror.js";

export type GetOneRpcNetworkRpcResponseBody = CouldNotFindResource;

export type GetOneRpcResponseBody = BadRequestException;

/** @internal */
export const GetOneRpcNetworkRpcResponseBody$inboundSchema: z.ZodType<
  GetOneRpcNetworkRpcResponseBody,
  z.ZodTypeDef,
  unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type GetOneRpcNetworkRpcResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const GetOneRpcNetworkRpcResponseBody$outboundSchema: z.ZodType<
  GetOneRpcNetworkRpcResponseBody$Outbound,
  z.ZodTypeDef,
  GetOneRpcNetworkRpcResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneRpcNetworkRpcResponseBody$ {
  /** @deprecated use `GetOneRpcNetworkRpcResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetOneRpcNetworkRpcResponseBody$inboundSchema;
  /** @deprecated use `GetOneRpcNetworkRpcResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetOneRpcNetworkRpcResponseBody$outboundSchema;
  /** @deprecated use `GetOneRpcNetworkRpcResponseBody$Outbound` instead. */
  export type Outbound = GetOneRpcNetworkRpcResponseBody$Outbound;
}

export function getOneRpcNetworkRpcResponseBodyToJSON(
  getOneRpcNetworkRpcResponseBody: GetOneRpcNetworkRpcResponseBody,
): string {
  return JSON.stringify(
    GetOneRpcNetworkRpcResponseBody$outboundSchema.parse(
      getOneRpcNetworkRpcResponseBody,
    ),
  );
}

export function getOneRpcNetworkRpcResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetOneRpcNetworkRpcResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOneRpcNetworkRpcResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOneRpcNetworkRpcResponseBody' from JSON`,
  );
}

/** @internal */
export const GetOneRpcResponseBody$inboundSchema: z.ZodType<
  GetOneRpcResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetOneRpcResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetOneRpcResponseBody$outboundSchema: z.ZodType<
  GetOneRpcResponseBody$Outbound,
  z.ZodTypeDef,
  GetOneRpcResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneRpcResponseBody$ {
  /** @deprecated use `GetOneRpcResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetOneRpcResponseBody$inboundSchema;
  /** @deprecated use `GetOneRpcResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetOneRpcResponseBody$outboundSchema;
  /** @deprecated use `GetOneRpcResponseBody$Outbound` instead. */
  export type Outbound = GetOneRpcResponseBody$Outbound;
}

export function getOneRpcResponseBodyToJSON(
  getOneRpcResponseBody: GetOneRpcResponseBody,
): string {
  return JSON.stringify(
    GetOneRpcResponseBody$outboundSchema.parse(getOneRpcResponseBody),
  );
}

export function getOneRpcResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetOneRpcResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOneRpcResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOneRpcResponseBody' from JSON`,
  );
}
