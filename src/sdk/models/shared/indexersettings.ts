/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type IndexerSettings = {
  confirmationBlocks: number;
  verifyBlockIntegrity: boolean;
  verifyTxIntegrity: boolean;
};

/** @internal */
export const IndexerSettings$inboundSchema: z.ZodType<
  IndexerSettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  confirmationBlocks: z.number(),
  verifyBlockIntegrity: z.boolean(),
  verifyTxIntegrity: z.boolean(),
});

/** @internal */
export type IndexerSettings$Outbound = {
  confirmationBlocks: number;
  verifyBlockIntegrity: boolean;
  verifyTxIntegrity: boolean;
};

/** @internal */
export const IndexerSettings$outboundSchema: z.ZodType<
  IndexerSettings$Outbound,
  z.ZodTypeDef,
  IndexerSettings
> = z.object({
  confirmationBlocks: z.number(),
  verifyBlockIntegrity: z.boolean(),
  verifyTxIntegrity: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IndexerSettings$ {
  /** @deprecated use `IndexerSettings$inboundSchema` instead. */
  export const inboundSchema = IndexerSettings$inboundSchema;
  /** @deprecated use `IndexerSettings$outboundSchema` instead. */
  export const outboundSchema = IndexerSettings$outboundSchema;
  /** @deprecated use `IndexerSettings$Outbound` instead. */
  export type Outbound = IndexerSettings$Outbound;
}
