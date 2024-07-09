/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type EncodeDto3 = {};

export type EncodeDtoParams = EncodeDto3 | string | number | boolean;

export type EncodeDto = {
    functionName: string;
    /**
     * Smart contract parameters.
     */
    params?: Array<EncodeDto3 | string | number | boolean> | undefined;
};

/** @internal */
export const EncodeDto3$inboundSchema: z.ZodType<EncodeDto3, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type EncodeDto3$Outbound = {};

/** @internal */
export const EncodeDto3$outboundSchema: z.ZodType<EncodeDto3$Outbound, z.ZodTypeDef, EncodeDto3> =
    z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EncodeDto3$ {
    /** @deprecated use `EncodeDto3$inboundSchema` instead. */
    export const inboundSchema = EncodeDto3$inboundSchema;
    /** @deprecated use `EncodeDto3$outboundSchema` instead. */
    export const outboundSchema = EncodeDto3$outboundSchema;
    /** @deprecated use `EncodeDto3$Outbound` instead. */
    export type Outbound = EncodeDto3$Outbound;
}

/** @internal */
export const EncodeDtoParams$inboundSchema: z.ZodType<EncodeDtoParams, z.ZodTypeDef, unknown> =
    z.union([z.lazy(() => EncodeDto3$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type EncodeDtoParams$Outbound = EncodeDto3$Outbound | string | number | boolean;

/** @internal */
export const EncodeDtoParams$outboundSchema: z.ZodType<
    EncodeDtoParams$Outbound,
    z.ZodTypeDef,
    EncodeDtoParams
> = z.union([z.lazy(() => EncodeDto3$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EncodeDtoParams$ {
    /** @deprecated use `EncodeDtoParams$inboundSchema` instead. */
    export const inboundSchema = EncodeDtoParams$inboundSchema;
    /** @deprecated use `EncodeDtoParams$outboundSchema` instead. */
    export const outboundSchema = EncodeDtoParams$outboundSchema;
    /** @deprecated use `EncodeDtoParams$Outbound` instead. */
    export type Outbound = EncodeDtoParams$Outbound;
}

/** @internal */
export const EncodeDto$inboundSchema: z.ZodType<EncodeDto, z.ZodTypeDef, unknown> = z.object({
    functionName: z.string(),
    params: z
        .array(
            z.union([z.lazy(() => EncodeDto3$inboundSchema), z.string(), z.number(), z.boolean()])
        )
        .optional(),
});

/** @internal */
export type EncodeDto$Outbound = {
    functionName: string;
    params?: Array<EncodeDto3$Outbound | string | number | boolean> | undefined;
};

/** @internal */
export const EncodeDto$outboundSchema: z.ZodType<EncodeDto$Outbound, z.ZodTypeDef, EncodeDto> =
    z.object({
        functionName: z.string(),
        params: z
            .array(
                z.union([
                    z.lazy(() => EncodeDto3$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EncodeDto$ {
    /** @deprecated use `EncodeDto$inboundSchema` instead. */
    export const inboundSchema = EncodeDto$inboundSchema;
    /** @deprecated use `EncodeDto$outboundSchema` instead. */
    export const outboundSchema = EncodeDto$outboundSchema;
    /** @deprecated use `EncodeDto$Outbound` instead. */
    export type Outbound = EncodeDto$Outbound;
}
