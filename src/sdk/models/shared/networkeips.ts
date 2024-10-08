/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type NetworkEips = {
  eip1159: boolean;
  eip155: boolean;
};

/** @internal */
export const NetworkEips$inboundSchema: z.ZodType<
  NetworkEips,
  z.ZodTypeDef,
  unknown
> = z.object({
  eip1159: z.boolean(),
  eip155: z.boolean(),
});

/** @internal */
export type NetworkEips$Outbound = {
  eip1159: boolean;
  eip155: boolean;
};

/** @internal */
export const NetworkEips$outboundSchema: z.ZodType<
  NetworkEips$Outbound,
  z.ZodTypeDef,
  NetworkEips
> = z.object({
  eip1159: z.boolean(),
  eip155: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NetworkEips$ {
  /** @deprecated use `NetworkEips$inboundSchema` instead. */
  export const inboundSchema = NetworkEips$inboundSchema;
  /** @deprecated use `NetworkEips$outboundSchema` instead. */
  export const outboundSchema = NetworkEips$outboundSchema;
  /** @deprecated use `NetworkEips$Outbound` instead. */
  export type Outbound = NetworkEips$Outbound;
}
