/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type PAYLOADTOOLARGEContext = {};

export type PayloadTooLarge = {
    context?: PAYLOADTOOLARGEContext | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace PAYLOADTOOLARGEContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<PAYLOADTOOLARGEContext, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PAYLOADTOOLARGEContext> =
        z.object({});
}

/** @internal */
export namespace PayloadTooLarge$ {
    export type Inbound = {
        context?: PAYLOADTOOLARGEContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<PayloadTooLarge, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.lazy(() => PAYLOADTOOLARGEContext$.inboundSchema).optional(),
            errorCode: z.string().default("PAYLOAD_TOO_LARGE"),
            message: z.string().default("Payload too large."),
            path: z.string(),
            statusCode: z.number().default(413),
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
        context?: PAYLOADTOOLARGEContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayloadTooLarge> = z
        .object({
            context: z.lazy(() => PAYLOADTOOLARGEContext$.outboundSchema).optional(),
            errorCode: z.string().default("PAYLOAD_TOO_LARGE"),
            message: z.string().default("Payload too large."),
            path: z.string(),
            statusCode: z.number().default(413),
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
