/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type COULDNOTFINDRESOURCEContext = {};

export type CouldNotFindResource = {
    context?: COULDNOTFINDRESOURCEContext | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace COULDNOTFINDRESOURCEContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<COULDNOTFINDRESOURCEContext, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, COULDNOTFINDRESOURCEContext> =
        z.object({});
}

/** @internal */
export namespace CouldNotFindResource$ {
    export type Inbound = {
        context?: COULDNOTFINDRESOURCEContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<CouldNotFindResource, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.lazy(() => COULDNOTFINDRESOURCEContext$.inboundSchema).optional(),
            errorCode: z.string().default("COULD_NOT_FIND_RESOURCE"),
            message: z.string().default("Could not found resource."),
            path: z.string(),
            statusCode: z.number().default(404),
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
        context?: COULDNOTFINDRESOURCEContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CouldNotFindResource> = z
        .object({
            context: z.lazy(() => COULDNOTFINDRESOURCEContext$.outboundSchema).optional(),
            errorCode: z.string().default("COULD_NOT_FIND_RESOURCE"),
            message: z.string().default("Could not found resource."),
            path: z.string(),
            statusCode: z.number().default(404),
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
