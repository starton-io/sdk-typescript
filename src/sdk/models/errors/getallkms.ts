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
import { SDKValidationError } from "./sdkvalidationerror.js";

export type GetAllKmsResponseBody = BadRequestException;

/** @internal */
export const GetAllKmsResponseBody$inboundSchema: z.ZodType<
  GetAllKmsResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetAllKmsResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetAllKmsResponseBody$outboundSchema: z.ZodType<
  GetAllKmsResponseBody$Outbound,
  z.ZodTypeDef,
  GetAllKmsResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllKmsResponseBody$ {
  /** @deprecated use `GetAllKmsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetAllKmsResponseBody$inboundSchema;
  /** @deprecated use `GetAllKmsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetAllKmsResponseBody$outboundSchema;
  /** @deprecated use `GetAllKmsResponseBody$Outbound` instead. */
  export type Outbound = GetAllKmsResponseBody$Outbound;
}

export function getAllKmsResponseBodyToJSON(
  getAllKmsResponseBody: GetAllKmsResponseBody,
): string {
  return JSON.stringify(
    GetAllKmsResponseBody$outboundSchema.parse(getAllKmsResponseBody),
  );
}

export function getAllKmsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetAllKmsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllKmsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllKmsResponseBody' from JSON`,
  );
}
