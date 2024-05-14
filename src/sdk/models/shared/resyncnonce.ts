/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ResyncNonce = {
    nextNonce: number;
};

/** @internal */
export namespace ResyncNonce$ {
    export const inboundSchema: z.ZodType<ResyncNonce, z.ZodTypeDef, unknown> = z
        .object({
            nextNonce: z.number(),
        })
        .transform((v) => {
            return {
                nextNonce: v.nextNonce,
            };
        });

    export type Outbound = {
        nextNonce: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResyncNonce> = z
        .object({
            nextNonce: z.number(),
        })
        .transform((v) => {
            return {
                nextNonce: v.nextNonce,
            };
        });
}
