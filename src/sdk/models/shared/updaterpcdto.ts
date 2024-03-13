/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateRpcDto = {
    url?: string | undefined;
};

/** @internal */
export namespace UpdateRpcDto$ {
    export type Inbound = {
        url?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateRpcDto, z.ZodTypeDef, Inbound> = z
        .object({
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });

    export type Outbound = {
        url?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateRpcDto> = z
        .object({
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });
}
