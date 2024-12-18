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

export type GetOneWebhookSigningSecretResponseBody = BadRequestException;

/** @internal */
export const GetOneWebhookSigningSecretResponseBody$inboundSchema: z.ZodType<
  GetOneWebhookSigningSecretResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetOneWebhookSigningSecretResponseBody$Outbound =
  BadRequestException$Outbound;

/** @internal */
export const GetOneWebhookSigningSecretResponseBody$outboundSchema: z.ZodType<
  GetOneWebhookSigningSecretResponseBody$Outbound,
  z.ZodTypeDef,
  GetOneWebhookSigningSecretResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneWebhookSigningSecretResponseBody$ {
  /** @deprecated use `GetOneWebhookSigningSecretResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetOneWebhookSigningSecretResponseBody$inboundSchema;
  /** @deprecated use `GetOneWebhookSigningSecretResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetOneWebhookSigningSecretResponseBody$outboundSchema;
  /** @deprecated use `GetOneWebhookSigningSecretResponseBody$Outbound` instead. */
  export type Outbound = GetOneWebhookSigningSecretResponseBody$Outbound;
}

export function getOneWebhookSigningSecretResponseBodyToJSON(
  getOneWebhookSigningSecretResponseBody:
    GetOneWebhookSigningSecretResponseBody,
): string {
  return JSON.stringify(
    GetOneWebhookSigningSecretResponseBody$outboundSchema.parse(
      getOneWebhookSigningSecretResponseBody,
    ),
  );
}

export function getOneWebhookSigningSecretResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetOneWebhookSigningSecretResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetOneWebhookSigningSecretResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOneWebhookSigningSecretResponseBody' from JSON`,
  );
}
