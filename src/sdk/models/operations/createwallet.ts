/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CreateWalletResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  wallet?: shared.Wallet | undefined;
};

/** @internal */
export const CreateWalletResponse$inboundSchema: z.ZodType<
  CreateWalletResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  Wallet: shared.Wallet$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "Wallet": "wallet",
  });
});

/** @internal */
export type CreateWalletResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  Wallet?: shared.Wallet$Outbound | undefined;
};

/** @internal */
export const CreateWalletResponse$outboundSchema: z.ZodType<
  CreateWalletResponse$Outbound,
  z.ZodTypeDef,
  CreateWalletResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  wallet: shared.Wallet$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    wallet: "Wallet",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWalletResponse$ {
  /** @deprecated use `CreateWalletResponse$inboundSchema` instead. */
  export const inboundSchema = CreateWalletResponse$inboundSchema;
  /** @deprecated use `CreateWalletResponse$outboundSchema` instead. */
  export const outboundSchema = CreateWalletResponse$outboundSchema;
  /** @deprecated use `CreateWalletResponse$Outbound` instead. */
  export type Outbound = CreateWalletResponse$Outbound;
}
