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
export namespace EncodeDto3$ {
    export const inboundSchema: z.ZodType<EncodeDto3, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EncodeDto3> = z.object({});
}

/** @internal */
export namespace EncodeDtoParams$ {
    export const inboundSchema: z.ZodType<EncodeDtoParams, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => EncodeDto3$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = EncodeDto3$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EncodeDtoParams> = z.union([
        z.lazy(() => EncodeDto3$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace EncodeDto$ {
    export const inboundSchema: z.ZodType<EncodeDto, z.ZodTypeDef, unknown> = z.object({
        functionName: z.string(),
        params: z
            .array(
                z.union([
                    z.lazy(() => EncodeDto3$.inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
    });

    export type Outbound = {
        functionName: string;
        params?: Array<EncodeDto3$.Outbound | string | number | boolean> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EncodeDto> = z.object({
        functionName: z.string(),
        params: z
            .array(
                z.union([
                    z.lazy(() => EncodeDto3$.outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
    });
}
