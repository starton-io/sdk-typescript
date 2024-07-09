/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    CustomGasDto,
    CustomGasDto$inboundSchema,
    CustomGasDto$Outbound,
    CustomGasDto$outboundSchema,
} from "./customgasdto.js";
import * as z from "zod";

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
export const Three$inboundSchema: z.ZodType<Three, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Three$Outbound = {};

/** @internal */
export const Three$outboundSchema: z.ZodType<Three$Outbound, z.ZodTypeDef, Three> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Three$ {
    /** @deprecated use `Three$inboundSchema` instead. */
    export const inboundSchema = Three$inboundSchema;
    /** @deprecated use `Three$outboundSchema` instead. */
    export const outboundSchema = Three$outboundSchema;
    /** @deprecated use `Three$Outbound` instead. */
    export type Outbound = Three$Outbound;
}

/** @internal */
export const Params$inboundSchema: z.ZodType<Params, z.ZodTypeDef, unknown> = z.union([
    z.lazy(() => Three$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type Params$Outbound = Three$Outbound | string | number | boolean;

/** @internal */
export const Params$outboundSchema: z.ZodType<Params$Outbound, z.ZodTypeDef, Params> = z.union([
    z.lazy(() => Three$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Params$ {
    /** @deprecated use `Params$inboundSchema` instead. */
    export const inboundSchema = Params$inboundSchema;
    /** @deprecated use `Params$outboundSchema` instead. */
    export const outboundSchema = Params$outboundSchema;
    /** @deprecated use `Params$Outbound` instead. */
    export type Outbound = Params$Outbound;
}

/** @internal */
export const Speed$inboundSchema: z.ZodNativeEnum<typeof Speed> = z.nativeEnum(Speed);

/** @internal */
export const Speed$outboundSchema: z.ZodNativeEnum<typeof Speed> = Speed$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Speed$ {
    /** @deprecated use `Speed$inboundSchema` instead. */
    export const inboundSchema = Speed$inboundSchema;
    /** @deprecated use `Speed$outboundSchema` instead. */
    export const outboundSchema = Speed$outboundSchema;
}

/** @internal */
export const CallDto$inboundSchema: z.ZodType<CallDto, z.ZodTypeDef, unknown> = z.object({
    customGas: CustomGasDto$inboundSchema.optional(),
    functionName: z.string(),
    gasLimit: z.string().optional(),
    nonce: z.number().optional(),
    params: z.array(
        z.union([z.lazy(() => Three$inboundSchema), z.string(), z.number(), z.boolean()])
    ),
    signerWallet: z.string(),
    speed: Speed$inboundSchema.optional(),
    value: z.string().optional(),
});

/** @internal */
export type CallDto$Outbound = {
    customGas?: CustomGasDto$Outbound | undefined;
    functionName: string;
    gasLimit?: string | undefined;
    nonce?: number | undefined;
    params: Array<Three$Outbound | string | number | boolean>;
    signerWallet: string;
    speed?: string | undefined;
    value?: string | undefined;
};

/** @internal */
export const CallDto$outboundSchema: z.ZodType<CallDto$Outbound, z.ZodTypeDef, CallDto> = z.object({
    customGas: CustomGasDto$outboundSchema.optional(),
    functionName: z.string(),
    gasLimit: z.string().optional(),
    nonce: z.number().optional(),
    params: z.array(
        z.union([z.lazy(() => Three$outboundSchema), z.string(), z.number(), z.boolean()])
    ),
    signerWallet: z.string(),
    speed: Speed$outboundSchema.optional(),
    value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CallDto$ {
    /** @deprecated use `CallDto$inboundSchema` instead. */
    export const inboundSchema = CallDto$inboundSchema;
    /** @deprecated use `CallDto$outboundSchema` instead. */
    export const outboundSchema = CallDto$outboundSchema;
    /** @deprecated use `CallDto$Outbound` instead. */
    export type Outbound = CallDto$Outbound;
}
