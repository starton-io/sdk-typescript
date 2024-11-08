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

export type GetAllNetworkResponseBody = BadRequestException;

/** @internal */
export const GetAllNetworkResponseBody$inboundSchema: z.ZodType<
  GetAllNetworkResponseBody,
  z.ZodTypeDef,
  unknown
> = BadRequestException$inboundSchema;

/** @internal */
export type GetAllNetworkResponseBody$Outbound = BadRequestException$Outbound;

/** @internal */
export const GetAllNetworkResponseBody$outboundSchema: z.ZodType<
  GetAllNetworkResponseBody$Outbound,
  z.ZodTypeDef,
  GetAllNetworkResponseBody
> = BadRequestException$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllNetworkResponseBody$ {
  /** @deprecated use `GetAllNetworkResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetAllNetworkResponseBody$inboundSchema;
  /** @deprecated use `GetAllNetworkResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetAllNetworkResponseBody$outboundSchema;
  /** @deprecated use `GetAllNetworkResponseBody$Outbound` instead. */
  export type Outbound = GetAllNetworkResponseBody$Outbound;
}
