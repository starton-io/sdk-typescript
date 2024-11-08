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
  CouldNotFindResource,
  CouldNotFindResource$inboundSchema,
  CouldNotFindResource$Outbound,
  CouldNotFindResource$outboundSchema,
} from "./couldnotfindresource.js";
import {
  Forbidden,
  Forbidden$inboundSchema,
  Forbidden$Outbound,
  Forbidden$outboundSchema,
} from "./forbidden.js";

export type SignMessageWalletWalletResponseResponseBody = CouldNotFindResource;

export type SignMessageWalletWalletResponseBody = Forbidden;

export type SignMessageWalletResponseBody = BadRequestException;

/** @internal */
export const SignMessageWalletWalletResponseResponseBody$inboundSchema:
  z.ZodType<
    SignMessageWalletWalletResponseResponseBody,
    z.ZodTypeDef,
    unknown
  > = CouldNotFindResource$inboundSchema;

/** @internal */
export type SignMessageWalletWalletResponseResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const SignMessageWalletWalletResponseResponseBody$outboundSchema:
  z.ZodType<
    SignMessageWalletWalletResponseResponseBody$Outbound,
    z.ZodTypeDef,
    SignMessageWalletWalletResponseResponseBody
  > = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SignMessageWalletWalletResponseResponseBody$ {
  /** @deprecated use `SignMessageWalletWalletResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    SignMessageWalletWalletResponseResponseBody$inboundSchema;
  /** @deprecated use `SignMessageWalletWalletResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    SignMessageWalletWalletResponseResponseBody$outboundSchema;
  /** @deprecated use `SignMessageWalletWalletResponseResponseBody$Outbound` instead. */
  export type Outbound = SignMessageWalletWalletResponseResponseBody$Outbound;
}

/** @internal */
export const SignMessageWalletWalletResponseBody$inboundSchema: z.ZodType<
  SignMessageWalletWalletResponseBody,
  z.ZodTypeDef,
  unknown
> = Forbidden$inboundSchema;

/** @internal */
export type SignMessageWalletWalletResponseBody$Outbound = Forbidden$Outbound;

/** @internal */
export const SignMessageWalletWalletResponseBody$outboundSchema: z.ZodType<
  SignMessageWalletWalletResponseBody$Outbound,
  z.ZodTypeDef,
  SignMessageWalletWalletResponseBody
> = Forbidden$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SignMessageWalletWalletResponseBody$ {
  /** @deprecated use `SignMessageWalletWalletResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    SignMessageWalletWalletResponseBody$inboundSchema;
  /** @deprecated use `SignMessageWalletWalletResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    SignMessageWalletWalletResponseBody$outboundSchema;
  /** @deprecated use `SignMessageWalletWalletResponseBody$Outbound` instead. */
  export type Outbound = SignMessageWalletWalletResponseBody$Outbound;
}

/** @internal */
export const SignMessageWalletResponseBody$inboundSchema: z.ZodType<
  SignMessageWalletResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type SignMessageWalletResponseBody$Outbound =
  BadRequestException$Outbound;

/** @internal */
export const SignMessageWalletResponseBody$outboundSchema: z.ZodType<
  SignMessageWalletResponseBody$Outbound,
  z.ZodTypeDef,
  SignMessageWalletResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SignMessageWalletResponseBody$ {
  /** @deprecated use `SignMessageWalletResponseBody$inboundSchema` instead. */
  export const inboundSchema = SignMessageWalletResponseBody$inboundSchema;
  /** @deprecated use `SignMessageWalletResponseBody$outboundSchema` instead. */
  export const outboundSchema = SignMessageWalletResponseBody$outboundSchema;
  /** @deprecated use `SignMessageWalletResponseBody$Outbound` instead. */
  export type Outbound = SignMessageWalletResponseBody$Outbound;
}
