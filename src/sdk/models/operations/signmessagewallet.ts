/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type SignMessageWalletRequest = {
  signMessageDto: shared.SignMessageDto;
  address: string;
};

export type SignMessageWalletResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  signMessageResponse?: shared.SignMessageResponse | undefined;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
};

/** @internal */
export const SignMessageWalletRequest$inboundSchema: z.ZodType<
  SignMessageWalletRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  SignMessageDto: shared.SignMessageDto$inboundSchema,
  address: z.string(),
}).transform((v) => {
  return remap$(v, {
    "SignMessageDto": "signMessageDto",
  });
});

/** @internal */
export type SignMessageWalletRequest$Outbound = {
  SignMessageDto: shared.SignMessageDto$Outbound;
  address: string;
};

/** @internal */
export const SignMessageWalletRequest$outboundSchema: z.ZodType<
  SignMessageWalletRequest$Outbound,
  z.ZodTypeDef,
  SignMessageWalletRequest
> = z.object({
  signMessageDto: shared.SignMessageDto$outboundSchema,
  address: z.string(),
}).transform((v) => {
  return remap$(v, {
    signMessageDto: "SignMessageDto",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SignMessageWalletRequest$ {
  /** @deprecated use `SignMessageWalletRequest$inboundSchema` instead. */
  export const inboundSchema = SignMessageWalletRequest$inboundSchema;
  /** @deprecated use `SignMessageWalletRequest$outboundSchema` instead. */
  export const outboundSchema = SignMessageWalletRequest$outboundSchema;
  /** @deprecated use `SignMessageWalletRequest$Outbound` instead. */
  export type Outbound = SignMessageWalletRequest$Outbound;
}

/** @internal */
export const SignMessageWalletResponse$inboundSchema: z.ZodType<
  SignMessageWalletResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  SignMessageResponse: shared.SignMessageResponse$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "SignMessageResponse": "signMessageResponse",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type SignMessageWalletResponse$Outbound = {
  ContentType: string;
  SignMessageResponse?: shared.SignMessageResponse$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const SignMessageWalletResponse$outboundSchema: z.ZodType<
  SignMessageWalletResponse$Outbound,
  z.ZodTypeDef,
  SignMessageWalletResponse
> = z.object({
  contentType: z.string(),
  signMessageResponse: shared.SignMessageResponse$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    signMessageResponse: "SignMessageResponse",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SignMessageWalletResponse$ {
  /** @deprecated use `SignMessageWalletResponse$inboundSchema` instead. */
  export const inboundSchema = SignMessageWalletResponse$inboundSchema;
  /** @deprecated use `SignMessageWalletResponse$outboundSchema` instead. */
  export const outboundSchema = SignMessageWalletResponse$outboundSchema;
  /** @deprecated use `SignMessageWalletResponse$Outbound` instead. */
  export type Outbound = SignMessageWalletResponse$Outbound;
}
