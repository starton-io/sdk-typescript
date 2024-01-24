/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CustomGasDto, CustomGasDto$ } from "./customgasdto";
import { z } from "zod";

export type Three = {};

export type Params = Three | string | number | boolean;

export enum Speed {
    Low = "low",
    Average = "average",
    Fast = "fast",
    Fastest = "fastest",
    Custom = "custom",
}

export type CallDto = {
    customGas?: CustomGasDto | undefined;
    functionName: string;
    gasLimit?: string | undefined;
    nonce?: number | undefined;
    /**
     * Smart contract parameters.
     */
    params: Array<Three | string | number | boolean>;
    signerWallet: string;
    speed?: Speed | undefined;
    value?: string | undefined;
};

/** @internal */
export namespace Three$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Three, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Three> = z.object({});
}

/** @internal */
export namespace Params$ {
    export type Inbound = Three$.Inbound | string | number | boolean;

    export type Outbound = Three$.Outbound | string | number | boolean;

    export const inboundSchema: z.ZodType<Params, z.ZodTypeDef, Inbound> = z.union([
        z.lazy(() => Three$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Params> = z.union([
        z.lazy(() => Three$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export const Speed$ = z.nativeEnum(Speed);

/** @internal */
export namespace CallDto$ {
    export type Inbound = {
        customGas?: CustomGasDto$.Inbound | undefined;
        functionName: string;
        gasLimit?: string | undefined;
        nonce?: number | undefined;
        params: Array<Three$.Inbound | string | number | boolean>;
        signerWallet: string;
        speed?: Speed | undefined;
        value?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CallDto, z.ZodTypeDef, Inbound> = z
        .object({
            customGas: CustomGasDto$.inboundSchema.optional(),
            functionName: z.string(),
            gasLimit: z.string().optional(),
            nonce: z.number().optional(),
            params: z.array(
                z.union([z.lazy(() => Three$.inboundSchema), z.string(), z.number(), z.boolean()])
            ),
            signerWallet: z.string(),
            speed: Speed$.optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.customGas === undefined ? null : { customGas: v.customGas }),
                functionName: v.functionName,
                ...(v.gasLimit === undefined ? null : { gasLimit: v.gasLimit }),
                ...(v.nonce === undefined ? null : { nonce: v.nonce }),
                params: v.params,
                signerWallet: v.signerWallet,
                ...(v.speed === undefined ? null : { speed: v.speed }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        customGas?: CustomGasDto$.Outbound | undefined;
        functionName: string;
        gasLimit?: string | undefined;
        nonce?: number | undefined;
        params: Array<Three$.Outbound | string | number | boolean>;
        signerWallet: string;
        speed?: Speed | undefined;
        value?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CallDto> = z
        .object({
            customGas: CustomGasDto$.outboundSchema.optional(),
            functionName: z.string(),
            gasLimit: z.string().optional(),
            nonce: z.number().optional(),
            params: z.array(
                z.union([z.lazy(() => Three$.outboundSchema), z.string(), z.number(), z.boolean()])
            ),
            signerWallet: z.string(),
            speed: Speed$.optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.customGas === undefined ? null : { customGas: v.customGas }),
                functionName: v.functionName,
                ...(v.gasLimit === undefined ? null : { gasLimit: v.gasLimit }),
                ...(v.nonce === undefined ? null : { nonce: v.nonce }),
                params: v.params,
                signerWallet: v.signerWallet,
                ...(v.speed === undefined ? null : { speed: v.speed }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}
