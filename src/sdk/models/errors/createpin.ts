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
  MaximumStorageReached,
  MaximumStorageReached$inboundSchema,
  MaximumStorageReached$Outbound,
  MaximumStorageReached$outboundSchema,
} from "./maximumstoragereached.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type CreatePinIpfsResponseBody = MaximumStorageReached;

export type CreatePinResponseBody = BadRequestException;

/** @internal */
export const CreatePinIpfsResponseBody$inboundSchema: z.ZodType<
  CreatePinIpfsResponseBody,
  z.ZodTypeDef,
  unknown
> = MaximumStorageReached$inboundSchema;

/** @internal */
export type CreatePinIpfsResponseBody$Outbound = MaximumStorageReached$Outbound;

/** @internal */
export const CreatePinIpfsResponseBody$outboundSchema: z.ZodType<
  CreatePinIpfsResponseBody$Outbound,
  z.ZodTypeDef,
  CreatePinIpfsResponseBody
> = MaximumStorageReached$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePinIpfsResponseBody$ {
  /** @deprecated use `CreatePinIpfsResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreatePinIpfsResponseBody$inboundSchema;
  /** @deprecated use `CreatePinIpfsResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreatePinIpfsResponseBody$outboundSchema;
  /** @deprecated use `CreatePinIpfsResponseBody$Outbound` instead. */
  export type Outbound = CreatePinIpfsResponseBody$Outbound;
}

export function createPinIpfsResponseBodyToJSON(
  createPinIpfsResponseBody: CreatePinIpfsResponseBody,
): string {
  return JSON.stringify(
    CreatePinIpfsResponseBody$outboundSchema.parse(createPinIpfsResponseBody),
  );
}

export function createPinIpfsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreatePinIpfsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePinIpfsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePinIpfsResponseBody' from JSON`,
  );
}

/** @internal */
export const CreatePinResponseBody$inboundSchema: z.ZodType<
  CreatePinResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type CreatePinResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const CreatePinResponseBody$outboundSchema: z.ZodType<
  CreatePinResponseBody$Outbound,
  z.ZodTypeDef,
  CreatePinResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePinResponseBody$ {
  /** @deprecated use `CreatePinResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreatePinResponseBody$inboundSchema;
  /** @deprecated use `CreatePinResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreatePinResponseBody$outboundSchema;
  /** @deprecated use `CreatePinResponseBody$Outbound` instead. */
  export type Outbound = CreatePinResponseBody$Outbound;
}

export function createPinResponseBodyToJSON(
  createPinResponseBody: CreatePinResponseBody,
): string {
  return JSON.stringify(
    CreatePinResponseBody$outboundSchema.parse(createPinResponseBody),
  );
}

export function createPinResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreatePinResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePinResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePinResponseBody' from JSON`,
  );
}
