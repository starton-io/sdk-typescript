/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SignMessageDto = {
  message: string;
};

/** @internal */
export const SignMessageDto$inboundSchema: z.ZodType<
  SignMessageDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type SignMessageDto$Outbound = {
  message: string;
};

/** @internal */
export const SignMessageDto$outboundSchema: z.ZodType<
  SignMessageDto$Outbound,
  z.ZodTypeDef,
  SignMessageDto
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SignMessageDto$ {
  /** @deprecated use `SignMessageDto$inboundSchema` instead. */
  export const inboundSchema = SignMessageDto$inboundSchema;
  /** @deprecated use `SignMessageDto$outboundSchema` instead. */
  export const outboundSchema = SignMessageDto$outboundSchema;
  /** @deprecated use `SignMessageDto$Outbound` instead. */
  export type Outbound = SignMessageDto$Outbound;
}

export function signMessageDtoToJSON(signMessageDto: SignMessageDto): string {
  return JSON.stringify(SignMessageDto$outboundSchema.parse(signMessageDto));
}

export function signMessageDtoFromJSON(
  jsonString: string,
): SafeParseResult<SignMessageDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SignMessageDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SignMessageDto' from JSON`,
  );
}
