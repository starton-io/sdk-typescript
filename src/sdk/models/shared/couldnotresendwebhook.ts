/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type COULDNOTRESENDWEBHOOKContext = {};

export type CouldNotResendWebhook = {
    context?: COULDNOTRESENDWEBHOOKContext | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace COULDNOTRESENDWEBHOOKContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<COULDNOTRESENDWEBHOOKContext, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, COULDNOTRESENDWEBHOOKContext> =
        z.object({});
}

/** @internal */
export namespace CouldNotResendWebhook$ {
    export type Inbound = {
        context?: COULDNOTRESENDWEBHOOKContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<CouldNotResendWebhook, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.lazy(() => COULDNOTRESENDWEBHOOKContext$.inboundSchema).optional(),
            errorCode: z.string().default("COULD_NOT_RESEND_WEBHOOK"),
            message: z.string().default("Could not resend webhook."),
            path: z.string(),
            statusCode: z.number().default(412),
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
        context?: COULDNOTRESENDWEBHOOKContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CouldNotResendWebhook> = z
        .object({
            context: z.lazy(() => COULDNOTRESENDWEBHOOKContext$.outboundSchema).optional(),
            errorCode: z.string().default("COULD_NOT_RESEND_WEBHOOK"),
            message: z.string().default("Could not resend webhook."),
            path: z.string(),
            statusCode: z.number().default(412),
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
