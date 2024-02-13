/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type MISSINGARGUMENTContext = {};

export type MissingArgument = {
    context?: MISSINGARGUMENTContext | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace MISSINGARGUMENTContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<MISSINGARGUMENTContext, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MISSINGARGUMENTContext> =
        z.object({});
}

/** @internal */
export namespace MissingArgument$ {
    export type Inbound = {
        context?: MISSINGARGUMENTContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<MissingArgument, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.lazy(() => MISSINGARGUMENTContext$.inboundSchema).optional(),
            errorCode: z.string().default("MISSING_ARGUMENT"),
            message: z.string().default("Some params are missing."),
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
        context?: MISSINGARGUMENTContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MissingArgument> = z
        .object({
            context: z.lazy(() => MISSINGARGUMENTContext$.outboundSchema).optional(),
            errorCode: z.string().default("MISSING_ARGUMENT"),
            message: z.string().default("Some params are missing."),
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
