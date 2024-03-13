/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type INSUFFICIENTFUNDSContext = {};

export type InsufficientFunds = {
    context?: INSUFFICIENTFUNDSContext | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace INSUFFICIENTFUNDSContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<INSUFFICIENTFUNDSContext, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, INSUFFICIENTFUNDSContext> =
        z.object({});
}

/** @internal */
export namespace InsufficientFunds$ {
    export type Inbound = {
        context?: INSUFFICIENTFUNDSContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<InsufficientFunds, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.lazy(() => INSUFFICIENTFUNDSContext$.inboundSchema).optional(),
            errorCode: z.string().default("INSUFFICIENT_FUNDS"),
            message: z.string().default("Your funds are insufficient."),
            path: z.string(),
            statusCode: z.number().default(400),
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

    export type Outbound = {
        context?: INSUFFICIENTFUNDSContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InsufficientFunds> = z
        .object({
            context: z.lazy(() => INSUFFICIENTFUNDSContext$.outboundSchema).optional(),
            errorCode: z.string().default("INSUFFICIENT_FUNDS"),
            message: z.string().default("Your funds are insufficient."),
            path: z.string(),
            statusCode: z.number().default(400),
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
