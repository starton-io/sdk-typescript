/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CustomGasDto = {
    gasPrice?: string | undefined;
    maxFeePerGas?: string | undefined;
    maxPriorityFeePerGas?: string | undefined;
};

/** @internal */
export namespace CustomGasDto$ {
    export const inboundSchema: z.ZodType<CustomGasDto, z.ZodTypeDef, unknown> = z.object({
        gasPrice: z.string().optional(),
        maxFeePerGas: z.string().optional(),
        maxPriorityFeePerGas: z.string().optional(),
    });

    export type Outbound = {
        gasPrice?: string | undefined;
        maxFeePerGas?: string | undefined;
        maxPriorityFeePerGas?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CustomGasDto> = z.object({
        gasPrice: z.string().optional(),
        maxFeePerGas: z.string().optional(),
        maxPriorityFeePerGas: z.string().optional(),
    });
}
