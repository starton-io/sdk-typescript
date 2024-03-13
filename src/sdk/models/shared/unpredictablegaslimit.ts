/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UNPREDICTABLEGASLIMITContext = {};

export type UnpredictableGasLimit = {
    context?: UNPREDICTABLEGASLIMITContext | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace UNPREDICTABLEGASLIMITContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<UNPREDICTABLEGASLIMITContext, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UNPREDICTABLEGASLIMITContext> =
        z.object({});
}

/** @internal */
export namespace UnpredictableGasLimit$ {
    export type Inbound = {
        context?: UNPREDICTABLEGASLIMITContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<UnpredictableGasLimit, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.lazy(() => UNPREDICTABLEGASLIMITContext$.inboundSchema).optional(),
            errorCode: z.string().default("UNPREDICTABLE_GAS_LIMIT"),
            message: z.string().default("Could not estimate gas limit for this transaction."),
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
        context?: UNPREDICTABLEGASLIMITContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnpredictableGasLimit> = z
        .object({
            context: z.lazy(() => UNPREDICTABLEGASLIMITContext$.outboundSchema).optional(),
            errorCode: z.string().default("UNPREDICTABLE_GAS_LIMIT"),
            message: z.string().default("Could not estimate gas limit for this transaction."),
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
