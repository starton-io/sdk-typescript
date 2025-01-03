/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
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

export function transactionManagerSettingsToJSON(
  transactionManagerSettings: TransactionManagerSettings,
): string {
  return JSON.stringify(
    TransactionManagerSettings$outboundSchema.parse(transactionManagerSettings),
  );
}

export function transactionManagerSettingsFromJSON(
  jsonString: string,
): SafeParseResult<TransactionManagerSettings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransactionManagerSettings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransactionManagerSettings' from JSON`,
  );
}
