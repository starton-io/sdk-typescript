/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type SignMessageDto = {
    message: string;
};

/** @internal */
export namespace SignMessageDto$ {
    export type Inbound = {
        message: string;
    };

    export const inboundSchema: z.ZodType<SignMessageDto, z.ZodTypeDef, Inbound> = z
        .object({
            message: z.string(),
        })
        .transform((v) => {
            return {
                message: v.message,
            };
        });

    export type Outbound = {
        message: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SignMessageDto> = z
        .object({
            message: z.string(),
        })
        .transform((v) => {
            return {
                message: v.message,
            };
        });
}
