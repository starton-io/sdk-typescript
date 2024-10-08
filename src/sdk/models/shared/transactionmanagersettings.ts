/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  GasPriceRecommendation,
  GasPriceRecommendation$inboundSchema,
  GasPriceRecommendation$Outbound,
  GasPriceRecommendation$outboundSchema,
} from "./gaspricerecommendation.js";

export type TransactionManagerSettings = {
  confirmationBlocks: number;
  gasPriceRecommendation?: GasPriceRecommendation | undefined;
};

/** @internal */
export const TransactionManagerSettings$inboundSchema: z.ZodType<
  TransactionManagerSettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  confirmationBlocks: z.number(),
  gasPriceRecommendation: GasPriceRecommendation$inboundSchema.optional(),
});

/** @internal */
export type TransactionManagerSettings$Outbound = {
  confirmationBlocks: number;
  gasPriceRecommendation?: GasPriceRecommendation$Outbound | undefined;
};

/** @internal */
export const TransactionManagerSettings$outboundSchema: z.ZodType<
  TransactionManagerSettings$Outbound,
  z.ZodTypeDef,
  TransactionManagerSettings
> = z.object({
  confirmationBlocks: z.number(),
  gasPriceRecommendation: GasPriceRecommendation$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionManagerSettings$ {
  /** @deprecated use `TransactionManagerSettings$inboundSchema` instead. */
  export const inboundSchema = TransactionManagerSettings$inboundSchema;
  /** @deprecated use `TransactionManagerSettings$outboundSchema` instead. */
  export const outboundSchema = TransactionManagerSettings$outboundSchema;
  /** @deprecated use `TransactionManagerSettings$Outbound` instead. */
  export type Outbound = TransactionManagerSettings$Outbound;
}