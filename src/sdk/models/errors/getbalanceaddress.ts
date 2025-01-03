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

export type GetBalanceAddressResponseBody = BadRequestException;

/** @internal */
export const GetBalanceAddressResponseBody$inboundSchema: z.ZodType<
  GetBalanceAddressResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetBalanceAddressResponseBody$Outbound =
  BadRequestException$Outbound;

/** @internal */
export const GetBalanceAddressResponseBody$outboundSchema: z.ZodType<
  GetBalanceAddressResponseBody$Outbound,
  z.ZodTypeDef,
  GetBalanceAddressResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBalanceAddressResponseBody$ {
  /** @deprecated use `GetBalanceAddressResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetBalanceAddressResponseBody$inboundSchema;
  /** @deprecated use `GetBalanceAddressResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetBalanceAddressResponseBody$outboundSchema;
  /** @deprecated use `GetBalanceAddressResponseBody$Outbound` instead. */
  export type Outbound = GetBalanceAddressResponseBody$Outbound;
}

export function getBalanceAddressResponseBodyToJSON(
  getBalanceAddressResponseBody: GetBalanceAddressResponseBody,
): string {
  return JSON.stringify(
    GetBalanceAddressResponseBody$outboundSchema.parse(
      getBalanceAddressResponseBody,
    ),
  );
}

export function getBalanceAddressResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetBalanceAddressResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetBalanceAddressResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetBalanceAddressResponseBody' from JSON`,
  );
}
