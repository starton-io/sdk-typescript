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

export type UpdateNetworkNetworkResponseBody = CouldNotFindResource;

export type UpdateNetworkResponseBody = BadRequestException;

/** @internal */
export const UpdateNetworkNetworkResponseBody$inboundSchema: z.ZodType<
  UpdateNetworkNetworkResponseBody,
  z.ZodTypeDef,
  unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type UpdateNetworkNetworkResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const UpdateNetworkNetworkResponseBody$outboundSchema: z.ZodType<
  UpdateNetworkNetworkResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateNetworkNetworkResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateNetworkNetworkResponseBody$ {
  /** @deprecated use `UpdateNetworkNetworkResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateNetworkNetworkResponseBody$inboundSchema;
  /** @deprecated use `UpdateNetworkNetworkResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateNetworkNetworkResponseBody$outboundSchema;
  /** @deprecated use `UpdateNetworkNetworkResponseBody$Outbound` instead. */
  export type Outbound = UpdateNetworkNetworkResponseBody$Outbound;
}

/** @internal */
export const UpdateNetworkResponseBody$inboundSchema: z.ZodType<
  UpdateNetworkResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type UpdateNetworkResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const UpdateNetworkResponseBody$outboundSchema: z.ZodType<
  UpdateNetworkResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateNetworkResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateNetworkResponseBody$ {
  /** @deprecated use `UpdateNetworkResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateNetworkResponseBody$inboundSchema;
  /** @deprecated use `UpdateNetworkResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateNetworkResponseBody$outboundSchema;
  /** @deprecated use `UpdateNetworkResponseBody$Outbound` instead. */
  export type Outbound = UpdateNetworkResponseBody$Outbound;
}
