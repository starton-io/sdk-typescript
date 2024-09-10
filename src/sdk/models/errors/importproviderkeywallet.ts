/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  BadRequestException,
  BadRequestException$inboundSchema,
  BadRequestException$Outbound,
  BadRequestException$outboundSchema,
} from "./badrequestexception.js";

export type ImportProviderKeyWalletResponseBody = BadRequestException;

/** @internal */
export const ImportProviderKeyWalletResponseBody$inboundSchema: z.ZodType<
  ImportProviderKeyWalletResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type ImportProviderKeyWalletResponseBody$Outbound =
  BadRequestException$Outbound;

/** @internal */
export const ImportProviderKeyWalletResponseBody$outboundSchema: z.ZodType<
  ImportProviderKeyWalletResponseBody$Outbound,
  z.ZodTypeDef,
  ImportProviderKeyWalletResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportProviderKeyWalletResponseBody$ {
  /** @deprecated use `ImportProviderKeyWalletResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ImportProviderKeyWalletResponseBody$inboundSchema;
  /** @deprecated use `ImportProviderKeyWalletResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ImportProviderKeyWalletResponseBody$outboundSchema;
  /** @deprecated use `ImportProviderKeyWalletResponseBody$Outbound` instead. */
  export type Outbound = ImportProviderKeyWalletResponseBody$Outbound;
}
