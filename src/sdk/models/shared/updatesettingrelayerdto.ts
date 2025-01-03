/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateSettingRelayerDto = {
  /**
   * Tells if you allow Starton to unstuck transactions with automatic gas price.
   */
  unstuckAutomaticGasPrice?: boolean | undefined;
  /**
   * Tells if you allow Starton to unstuck transactions with custom gasPrices.
   */
  unstuckCustomGasPrice?: boolean | undefined;
  /**
   * The delay Starton will wait to increase gasPrice on stuck transactions.
   */
  unstuckGasPriceDelay?: number | undefined;
  /**
   * The max amount of gas price you are ready to pay in wei.
   */
  unstuckMaxGasPrice?: string | undefined;
  /**
   * Allowing Starton to unstuck missing nonce by creating an empty transaction.
   */
  unstuckMissingNonce?: boolean | undefined;
  /**
   * The delay Starton will wait to create empty transaction to unstuck nonces.
   */
  unstuckMissingNonceDelay?: number | undefined;
};

/** @internal */
export const UpdateSettingRelayerDto$inboundSchema: z.ZodType<
  UpdateSettingRelayerDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  unstuckAutomaticGasPrice: z.boolean().optional(),
  unstuckCustomGasPrice: z.boolean().optional(),
  unstuckGasPriceDelay: z.number().optional(),
  unstuckMaxGasPrice: z.string().optional(),
  unstuckMissingNonce: z.boolean().optional(),
  unstuckMissingNonceDelay: z.number().optional(),
});

/** @internal */
export type UpdateSettingRelayerDto$Outbound = {
  unstuckAutomaticGasPrice?: boolean | undefined;
  unstuckCustomGasPrice?: boolean | undefined;
  unstuckGasPriceDelay?: number | undefined;
  unstuckMaxGasPrice?: string | undefined;
  unstuckMissingNonce?: boolean | undefined;
  unstuckMissingNonceDelay?: number | undefined;
};

/** @internal */
export const UpdateSettingRelayerDto$outboundSchema: z.ZodType<
  UpdateSettingRelayerDto$Outbound,
  z.ZodTypeDef,
  UpdateSettingRelayerDto
> = z.object({
  unstuckAutomaticGasPrice: z.boolean().optional(),
  unstuckCustomGasPrice: z.boolean().optional(),
  unstuckGasPriceDelay: z.number().optional(),
  unstuckMaxGasPrice: z.string().optional(),
  unstuckMissingNonce: z.boolean().optional(),
  unstuckMissingNonceDelay: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSettingRelayerDto$ {
  /** @deprecated use `UpdateSettingRelayerDto$inboundSchema` instead. */
  export const inboundSchema = UpdateSettingRelayerDto$inboundSchema;
  /** @deprecated use `UpdateSettingRelayerDto$outboundSchema` instead. */
  export const outboundSchema = UpdateSettingRelayerDto$outboundSchema;
  /** @deprecated use `UpdateSettingRelayerDto$Outbound` instead. */
  export type Outbound = UpdateSettingRelayerDto$Outbound;
}

export function updateSettingRelayerDtoToJSON(
  updateSettingRelayerDto: UpdateSettingRelayerDto,
): string {
  return JSON.stringify(
    UpdateSettingRelayerDto$outboundSchema.parse(updateSettingRelayerDto),
  );
}

export function updateSettingRelayerDtoFromJSON(
  jsonString: string,
): SafeParseResult<UpdateSettingRelayerDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateSettingRelayerDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateSettingRelayerDto' from JSON`,
  );
}
