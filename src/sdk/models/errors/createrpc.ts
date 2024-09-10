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

export type CreateRpcNetworkRpcResponseBody = CouldNotFindResource;

export type CreateRpcResponseBody = BadRequestException;

/** @internal */
export const CreateRpcNetworkRpcResponseBody$inboundSchema: z.ZodType<
  CreateRpcNetworkRpcResponseBody,
  z.ZodTypeDef,
  unknown
> = CouldNotFindResource$inboundSchema;

/** @internal */
export type CreateRpcNetworkRpcResponseBody$Outbound =
  CouldNotFindResource$Outbound;

/** @internal */
export const CreateRpcNetworkRpcResponseBody$outboundSchema: z.ZodType<
  CreateRpcNetworkRpcResponseBody$Outbound,
  z.ZodTypeDef,
  CreateRpcNetworkRpcResponseBody
> = CouldNotFindResource$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRpcNetworkRpcResponseBody$ {
  /** @deprecated use `CreateRpcNetworkRpcResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateRpcNetworkRpcResponseBody$inboundSchema;
  /** @deprecated use `CreateRpcNetworkRpcResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateRpcNetworkRpcResponseBody$outboundSchema;
  /** @deprecated use `CreateRpcNetworkRpcResponseBody$Outbound` instead. */
  export type Outbound = CreateRpcNetworkRpcResponseBody$Outbound;
}

/** @internal */
export const CreateRpcResponseBody$inboundSchema: z.ZodType<
  CreateRpcResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type CreateRpcResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const CreateRpcResponseBody$outboundSchema: z.ZodType<
  CreateRpcResponseBody$Outbound,
  z.ZodTypeDef,
  CreateRpcResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRpcResponseBody$ {
  /** @deprecated use `CreateRpcResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateRpcResponseBody$inboundSchema;
  /** @deprecated use `CreateRpcResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateRpcResponseBody$outboundSchema;
  /** @deprecated use `CreateRpcResponseBody$Outbound` instead. */
  export type Outbound = CreateRpcResponseBody$Outbound;
}
