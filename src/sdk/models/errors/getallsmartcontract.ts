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

export type GetAllSmartContractResponseBody = BadRequestException;

/** @internal */
export const GetAllSmartContractResponseBody$inboundSchema: z.ZodType<
  GetAllSmartContractResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetAllSmartContractResponseBody$Outbound =
  BadRequestException$Outbound;

/** @internal */
export const GetAllSmartContractResponseBody$outboundSchema: z.ZodType<
  GetAllSmartContractResponseBody$Outbound,
  z.ZodTypeDef,
  GetAllSmartContractResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllSmartContractResponseBody$ {
  /** @deprecated use `GetAllSmartContractResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetAllSmartContractResponseBody$inboundSchema;
  /** @deprecated use `GetAllSmartContractResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetAllSmartContractResponseBody$outboundSchema;
  /** @deprecated use `GetAllSmartContractResponseBody$Outbound` instead. */
  export type Outbound = GetAllSmartContractResponseBody$Outbound;
}

export function getAllSmartContractResponseBodyToJSON(
  getAllSmartContractResponseBody: GetAllSmartContractResponseBody,
): string {
  return JSON.stringify(
    GetAllSmartContractResponseBody$outboundSchema.parse(
      getAllSmartContractResponseBody,
    ),
  );
}

export function getAllSmartContractResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetAllSmartContractResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAllSmartContractResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAllSmartContractResponseBody' from JSON`,
  );
}
