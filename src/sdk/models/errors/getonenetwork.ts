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

export type GetOneNetworkNetworkResponseBody = CouldNotFindResource;

export type GetOneNetworkResponseBody = BadRequestException;

/** @internal */
export const GetOneNetworkNetworkResponseBody$inboundSchema: z.ZodType<
  GetOneNetworkNetworkResponseBody,
  z.ZodTypeDef,
  unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type GetOneNetworkNetworkResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const GetOneNetworkNetworkResponseBody$outboundSchema: z.ZodType<
  GetOneNetworkNetworkResponseBody$Outbound,
  z.ZodTypeDef,
  GetOneNetworkNetworkResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneNetworkNetworkResponseBody$ {
  /** @deprecated use `GetOneNetworkNetworkResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetOneNetworkNetworkResponseBody$inboundSchema;
  /** @deprecated use `GetOneNetworkNetworkResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetOneNetworkNetworkResponseBody$outboundSchema;
  /** @deprecated use `GetOneNetworkNetworkResponseBody$Outbound` instead. */
  export type Outbound = GetOneNetworkNetworkResponseBody$Outbound;
}

/** @internal */
export const GetOneNetworkResponseBody$inboundSchema: z.ZodType<
  GetOneNetworkResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetOneNetworkResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetOneNetworkResponseBody$outboundSchema: z.ZodType<
  GetOneNetworkResponseBody$Outbound,
  z.ZodTypeDef,
  GetOneNetworkResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneNetworkResponseBody$ {
  /** @deprecated use `GetOneNetworkResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetOneNetworkResponseBody$inboundSchema;
  /** @deprecated use `GetOneNetworkResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetOneNetworkResponseBody$outboundSchema;
  /** @deprecated use `GetOneNetworkResponseBody$Outbound` instead. */
  export type Outbound = GetOneNetworkResponseBody$Outbound;
}
