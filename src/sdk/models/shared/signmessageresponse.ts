/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SignMessageResponse = {
  signature: string;
};

/** @internal */
export const SignMessageResponse$inboundSchema: z.ZodType<
  SignMessageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  signature: z.string(),
});

/** @internal */
export type SignMessageResponse$Outbound = {
  signature: string;
};

/** @internal */
export const SignMessageResponse$outboundSchema: z.ZodType<
  SignMessageResponse$Outbound,
  z.ZodTypeDef,
  SignMessageResponse
> = z.object({
  signature: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SignMessageResponse$ {
  /** @deprecated use `SignMessageResponse$inboundSchema` instead. */
  export const inboundSchema = SignMessageResponse$inboundSchema;
  /** @deprecated use `SignMessageResponse$outboundSchema` instead. */
  export const outboundSchema = SignMessageResponse$outboundSchema;
  /** @deprecated use `SignMessageResponse$Outbound` instead. */
  export type Outbound = SignMessageResponse$Outbound;
}

export function signMessageResponseToJSON(
  signMessageResponse: SignMessageResponse,
): string {
  return JSON.stringify(
    SignMessageResponse$outboundSchema.parse(signMessageResponse),
  );
}

export function signMessageResponseFromJSON(
  jsonString: string,
): SafeParseResult<SignMessageResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SignMessageResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SignMessageResponse' from JSON`,
  );
}
