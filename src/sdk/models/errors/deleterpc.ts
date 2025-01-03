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

export type DeleteRpcNetworkRpcResponseBody = CouldNotFindResource;

export type DeleteRpcResponseBody = BadRequestException;

/** @internal */
export const DeleteRpcNetworkRpcResponseBody$inboundSchema: z.ZodType<
  DeleteRpcNetworkRpcResponseBody,
  z.ZodTypeDef,
  unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type DeleteRpcNetworkRpcResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const DeleteRpcNetworkRpcResponseBody$outboundSchema: z.ZodType<
  DeleteRpcNetworkRpcResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteRpcNetworkRpcResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteRpcNetworkRpcResponseBody$ {
  /** @deprecated use `DeleteRpcNetworkRpcResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteRpcNetworkRpcResponseBody$inboundSchema;
  /** @deprecated use `DeleteRpcNetworkRpcResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteRpcNetworkRpcResponseBody$outboundSchema;
  /** @deprecated use `DeleteRpcNetworkRpcResponseBody$Outbound` instead. */
  export type Outbound = DeleteRpcNetworkRpcResponseBody$Outbound;
}

export function deleteRpcNetworkRpcResponseBodyToJSON(
  deleteRpcNetworkRpcResponseBody: DeleteRpcNetworkRpcResponseBody,
): string {
  return JSON.stringify(
    DeleteRpcNetworkRpcResponseBody$outboundSchema.parse(
      deleteRpcNetworkRpcResponseBody,
    ),
  );
}

export function deleteRpcNetworkRpcResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteRpcNetworkRpcResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteRpcNetworkRpcResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteRpcNetworkRpcResponseBody' from JSON`,
  );
}

/** @internal */
export const DeleteRpcResponseBody$inboundSchema: z.ZodType<
  DeleteRpcResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type DeleteRpcResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const DeleteRpcResponseBody$outboundSchema: z.ZodType<
  DeleteRpcResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteRpcResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteRpcResponseBody$ {
  /** @deprecated use `DeleteRpcResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteRpcResponseBody$inboundSchema;
  /** @deprecated use `DeleteRpcResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteRpcResponseBody$outboundSchema;
  /** @deprecated use `DeleteRpcResponseBody$Outbound` instead. */
  export type Outbound = DeleteRpcResponseBody$Outbound;
}

export function deleteRpcResponseBodyToJSON(
  deleteRpcResponseBody: DeleteRpcResponseBody,
): string {
  return JSON.stringify(
    DeleteRpcResponseBody$outboundSchema.parse(deleteRpcResponseBody),
  );
}

export function deleteRpcResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteRpcResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteRpcResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteRpcResponseBody' from JSON`,
  );
}
