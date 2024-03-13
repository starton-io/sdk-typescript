/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

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
export namespace UpdateSettingRelayerDto$ {
    export type Inbound = {
        unstuckAutomaticGasPrice?: boolean | undefined;
        unstuckCustomGasPrice?: boolean | undefined;
        unstuckGasPriceDelay?: number | undefined;
        unstuckMaxGasPrice?: string | undefined;
        unstuckMissingNonce?: boolean | undefined;
        unstuckMissingNonceDelay?: number | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateSettingRelayerDto, z.ZodTypeDef, Inbound> = z
        .object({
            unstuckAutomaticGasPrice: z.boolean().optional(),
            unstuckCustomGasPrice: z.boolean().optional(),
            unstuckGasPriceDelay: z.number().optional(),
            unstuckMaxGasPrice: z.string().optional(),
            unstuckMissingNonce: z.boolean().optional(),
            unstuckMissingNonceDelay: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.unstuckAutomaticGasPrice === undefined
                    ? null
                    : { unstuckAutomaticGasPrice: v.unstuckAutomaticGasPrice }),
                ...(v.unstuckCustomGasPrice === undefined
                    ? null
                    : { unstuckCustomGasPrice: v.unstuckCustomGasPrice }),
                ...(v.unstuckGasPriceDelay === undefined
                    ? null
                    : { unstuckGasPriceDelay: v.unstuckGasPriceDelay }),
                ...(v.unstuckMaxGasPrice === undefined
                    ? null
                    : { unstuckMaxGasPrice: v.unstuckMaxGasPrice }),
                ...(v.unstuckMissingNonce === undefined
                    ? null
                    : { unstuckMissingNonce: v.unstuckMissingNonce }),
                ...(v.unstuckMissingNonceDelay === undefined
                    ? null
                    : { unstuckMissingNonceDelay: v.unstuckMissingNonceDelay }),
            };
        });

    export type Outbound = {
        unstuckAutomaticGasPrice?: boolean | undefined;
        unstuckCustomGasPrice?: boolean | undefined;
        unstuckGasPriceDelay?: number | undefined;
        unstuckMaxGasPrice?: string | undefined;
        unstuckMissingNonce?: boolean | undefined;
        unstuckMissingNonceDelay?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSettingRelayerDto> = z
        .object({
            unstuckAutomaticGasPrice: z.boolean().optional(),
            unstuckCustomGasPrice: z.boolean().optional(),
            unstuckGasPriceDelay: z.number().optional(),
            unstuckMaxGasPrice: z.string().optional(),
            unstuckMissingNonce: z.boolean().optional(),
            unstuckMissingNonceDelay: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.unstuckAutomaticGasPrice === undefined
                    ? null
                    : { unstuckAutomaticGasPrice: v.unstuckAutomaticGasPrice }),
                ...(v.unstuckCustomGasPrice === undefined
                    ? null
                    : { unstuckCustomGasPrice: v.unstuckCustomGasPrice }),
                ...(v.unstuckGasPriceDelay === undefined
                    ? null
                    : { unstuckGasPriceDelay: v.unstuckGasPriceDelay }),
                ...(v.unstuckMaxGasPrice === undefined
                    ? null
                    : { unstuckMaxGasPrice: v.unstuckMaxGasPrice }),
                ...(v.unstuckMissingNonce === undefined
                    ? null
                    : { unstuckMissingNonce: v.unstuckMissingNonce }),
                ...(v.unstuckMissingNonceDelay === undefined
                    ? null
                    : { unstuckMissingNonceDelay: v.unstuckMissingNonceDelay }),
            };
        });
}
