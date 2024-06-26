/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Context = {};

export type TooEarly = {
    context?: Context | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace Context$ {
    export const inboundSchema: z.ZodType<Context, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Context> = z.object({});
}

/** @internal */
export namespace TooEarly$ {
    export const inboundSchema: z.ZodType<TooEarly, z.ZodTypeDef, unknown> = z.object({
        context: z.lazy(() => Context$.inboundSchema).optional(),
        errorCode: z.string().default("TOO_EARLY"),
        message: z.string().default("Please try later, you already tried too recently"),
        path: z.string(),
        statusCode: z.number().default(425),
        timestamp: z.string(),
    });

    export type Outbound = {
        context?: Context$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TooEarly> = z.object({
        context: z.lazy(() => Context$.outboundSchema).optional(),
        errorCode: z.string().default("TOO_EARLY"),
        message: z.string().default("Please try later, you already tried too recently"),
        path: z.string(),
        statusCode: z.number().default(425),
        timestamp: z.string(),
    });
}
