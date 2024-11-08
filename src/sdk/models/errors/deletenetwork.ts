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

export type DeleteNetworkNetworkResponseBody = CouldNotFindResource;

export type DeleteNetworkResponseBody = BadRequestException;

/** @internal */
export const DeleteNetworkNetworkResponseBody$inboundSchema: z.ZodType<
  DeleteNetworkNetworkResponseBody,
  z.ZodTypeDef,
  unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type DeleteNetworkNetworkResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const DeleteNetworkNetworkResponseBody$outboundSchema: z.ZodType<
  DeleteNetworkNetworkResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteNetworkNetworkResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteNetworkNetworkResponseBody$ {
  /** @deprecated use `DeleteNetworkNetworkResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteNetworkNetworkResponseBody$inboundSchema;
  /** @deprecated use `DeleteNetworkNetworkResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteNetworkNetworkResponseBody$outboundSchema;
  /** @deprecated use `DeleteNetworkNetworkResponseBody$Outbound` instead. */
  export type Outbound = DeleteNetworkNetworkResponseBody$Outbound;
}

/** @internal */
export const DeleteNetworkResponseBody$inboundSchema: z.ZodType<
  DeleteNetworkResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type DeleteNetworkResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const DeleteNetworkResponseBody$outboundSchema: z.ZodType<
  DeleteNetworkResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteNetworkResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteNetworkResponseBody$ {
  /** @deprecated use `DeleteNetworkResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteNetworkResponseBody$inboundSchema;
  /** @deprecated use `DeleteNetworkResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteNetworkResponseBody$outboundSchema;
  /** @deprecated use `DeleteNetworkResponseBody$Outbound` instead. */
  export type Outbound = DeleteNetworkResponseBody$Outbound;
}
