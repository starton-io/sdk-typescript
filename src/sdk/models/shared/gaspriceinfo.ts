/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type GasPriceInfo = {
    /**
     * Pre eip-1159 gas format.
     */
    gasPrice: string | null;
    /**
     * Post eip-1159 gas format.
     */
    maxFeePerGas: string | null;
    /**
     * Post eip-1159 gas format.
     */
    maxPriorityFeePerGas: string | null;
};

/** @internal */
export namespace GasPriceInfo$ {
    export type Inbound = {
        gasPrice: string | null;
        maxFeePerGas: string | null;
        maxPriorityFeePerGas: string | null;
    };

    export const inboundSchema: z.ZodType<GasPriceInfo, z.ZodTypeDef, Inbound> = z
        .object({
            gasPrice: z.string().nullable(),
            maxFeePerGas: z.string().nullable(),
            maxPriorityFeePerGas: z.string().nullable(),
        })
        .transform((v) => {
            return {
                gasPrice: v.gasPrice,
                maxFeePerGas: v.maxFeePerGas,
                maxPriorityFeePerGas: v.maxPriorityFeePerGas,
            };
        });

    export type Outbound = {
        gasPrice: string | null;
        maxFeePerGas: string | null;
        maxPriorityFeePerGas: string | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GasPriceInfo> = z
        .object({
            gasPrice: z.string().nullable(),
            maxFeePerGas: z.string().nullable(),
            maxPriorityFeePerGas: z.string().nullable(),
        })
        .transform((v) => {
            return {
                gasPrice: v.gasPrice,
                maxFeePerGas: v.maxFeePerGas,
                maxPriorityFeePerGas: v.maxPriorityFeePerGas,
            };
        });
}
