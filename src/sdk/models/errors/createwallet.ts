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
import {
  MaximumWalletReached,
  MaximumWalletReached$inboundSchema,
  MaximumWalletReached$Outbound,
  MaximumWalletReached$outboundSchema,
} from "./maximumwalletreached.js";

export type CreateWalletWalletResponseBody = MaximumWalletReached;

export type CreateWalletResponseBody = BadRequestException;

/** @internal */
export const CreateWalletWalletResponseBody$inboundSchema: z.ZodType<
  CreateWalletWalletResponseBody,
  z.ZodTypeDef,
  unknown
> = MaximumWalletReached$inboundSchema;

/** @internal */
export type CreateWalletWalletResponseBody$Outbound =
  MaximumWalletReached$Outbound;

/** @internal */
export const CreateWalletWalletResponseBody$outboundSchema: z.ZodType<
  CreateWalletWalletResponseBody$Outbound,
  z.ZodTypeDef,
  CreateWalletWalletResponseBody
> = MaximumWalletReached$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWalletWalletResponseBody$ {
  /** @deprecated use `CreateWalletWalletResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateWalletWalletResponseBody$inboundSchema;
  /** @deprecated use `CreateWalletWalletResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateWalletWalletResponseBody$outboundSchema;
  /** @deprecated use `CreateWalletWalletResponseBody$Outbound` instead. */
  export type Outbound = CreateWalletWalletResponseBody$Outbound;
}

/** @internal */
export const CreateWalletResponseBody$inboundSchema: z.ZodType<
  CreateWalletResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type CreateWalletResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const CreateWalletResponseBody$outboundSchema: z.ZodType<
  CreateWalletResponseBody$Outbound,
  z.ZodTypeDef,
  CreateWalletResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWalletResponseBody$ {
  /** @deprecated use `CreateWalletResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateWalletResponseBody$inboundSchema;
  /** @deprecated use `CreateWalletResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateWalletResponseBody$outboundSchema;
  /** @deprecated use `CreateWalletResponseBody$Outbound` instead. */
  export type Outbound = CreateWalletResponseBody$Outbound;
}
