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

export type DeletePinIpfsResponseBody = CouldNotFindResource;

export type DeletePinResponseBody = BadRequestException;

/** @internal */
export const DeletePinIpfsResponseBody$inboundSchema: z.ZodType<
  DeletePinIpfsResponseBody,
  z.ZodTypeDef,
  unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type DeletePinIpfsResponseBody$Outbound = CouldNotFindResource$Outbound;

/** @internal */
export const DeletePinIpfsResponseBody$outboundSchema: z.ZodType<
  DeletePinIpfsResponseBody$Outbound,
  z.ZodTypeDef,
  DeletePinIpfsResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeletePinIpfsResponseBody$ {
  /** @deprecated use `DeletePinIpfsResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeletePinIpfsResponseBody$inboundSchema;
  /** @deprecated use `DeletePinIpfsResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeletePinIpfsResponseBody$outboundSchema;
  /** @deprecated use `DeletePinIpfsResponseBody$Outbound` instead. */
  export type Outbound = DeletePinIpfsResponseBody$Outbound;
}

export function deletePinIpfsResponseBodyToJSON(
  deletePinIpfsResponseBody: DeletePinIpfsResponseBody,
): string {
  return JSON.stringify(
    DeletePinIpfsResponseBody$outboundSchema.parse(deletePinIpfsResponseBody),
  );
}

export function deletePinIpfsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeletePinIpfsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeletePinIpfsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeletePinIpfsResponseBody' from JSON`,
  );
}

/** @internal */
export const DeletePinResponseBody$inboundSchema: z.ZodType<
  DeletePinResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type DeletePinResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const DeletePinResponseBody$outboundSchema: z.ZodType<
  DeletePinResponseBody$Outbound,
  z.ZodTypeDef,
  DeletePinResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeletePinResponseBody$ {
  /** @deprecated use `DeletePinResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeletePinResponseBody$inboundSchema;
  /** @deprecated use `DeletePinResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeletePinResponseBody$outboundSchema;
  /** @deprecated use `DeletePinResponseBody$Outbound` instead. */
  export type Outbound = DeletePinResponseBody$Outbound;
}

export function deletePinResponseBodyToJSON(
  deletePinResponseBody: DeletePinResponseBody,
): string {
  return JSON.stringify(
    DeletePinResponseBody$outboundSchema.parse(deletePinResponseBody),
  );
}

export function deletePinResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeletePinResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeletePinResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeletePinResponseBody' from JSON`,
  );
}
