/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type MAXIMUMSTORAGEREACHEDContext = {};

export type MaximumStorageReached = {
    context?: MAXIMUMSTORAGEREACHEDContext | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace MAXIMUMSTORAGEREACHEDContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<MAXIMUMSTORAGEREACHEDContext, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MAXIMUMSTORAGEREACHEDContext> =
        z.object({});
}

/** @internal */
export namespace MaximumStorageReached$ {
    export type Inbound = {
        context?: MAXIMUMSTORAGEREACHEDContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<MaximumStorageReached, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.lazy(() => MAXIMUMSTORAGEREACHEDContext$.inboundSchema).optional(),
            errorCode: z.string().default("MAXIMUM_STORAGE_REACHED"),
            message: z
                .string()
                .default("The max storage size allowed for this project would be exceeded."),
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
        context?: MAXIMUMSTORAGEREACHEDContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MaximumStorageReached> = z
        .object({
            context: z.lazy(() => MAXIMUMSTORAGEREACHEDContext$.outboundSchema).optional(),
            errorCode: z.string().default("MAXIMUM_STORAGE_REACHED"),
            message: z
                .string()
                .default("The max storage size allowed for this project would be exceeded."),
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
