/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type TOOEARLYContext = {};

export type TooEarly = {
    context?: TOOEARLYContext | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace TOOEARLYContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<TOOEARLYContext, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TOOEARLYContext> = z.object({});
}

/** @internal */
export namespace TooEarly$ {
    export type Inbound = {
        context?: TOOEARLYContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<TooEarly, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.lazy(() => TOOEARLYContext$.inboundSchema).optional(),
            errorCode: z.string().default("TOO_EARLY"),
            message: z.string().default("Please try later, you already tried too recently"),
            path: z.string(),
            statusCode: z.number().default(425),
            timestamp: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.context === undefined ? null : { context: v.context }),
                ...(v.errorCode === undefined ? null : { errorCode: v.errorCode }),
                ...(v.message === undefined ? null : { message: v.message }),
                path: v.path,
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                timestamp: v.timestamp,
            };
        });

    export type Outbound = {
        context?: TOOEARLYContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TooEarly> = z
        .object({
            context: z.lazy(() => TOOEARLYContext$.outboundSchema).optional(),
            errorCode: z.string().default("TOO_EARLY"),
            message: z.string().default("Please try later, you already tried too recently"),
            path: z.string(),
            statusCode: z.number().default(425),
            timestamp: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.context === undefined ? null : { context: v.context }),
                errorCode: v.errorCode,
                message: v.message,
                path: v.path,
                statusCode: v.statusCode,
                timestamp: v.timestamp,
            };
        });
}