/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type EXECUTIONWILLFAILContext = {};

export type ExecutionWillFail = {
    context?: EXECUTIONWILLFAILContext | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace EXECUTIONWILLFAILContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<EXECUTIONWILLFAILContext, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EXECUTIONWILLFAILContext> =
        z.object({});
}

/** @internal */
export namespace ExecutionWillFail$ {
    export type Inbound = {
        context?: EXECUTIONWILLFAILContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<ExecutionWillFail, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.lazy(() => EXECUTIONWILLFAILContext$.inboundSchema).optional(),
            errorCode: z.string().default("EXECUTION_WILL_FAIL"),
            message: z.string().default("This call will revert."),
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
        context?: EXECUTIONWILLFAILContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExecutionWillFail> = z
        .object({
            context: z.lazy(() => EXECUTIONWILLFAILContext$.outboundSchema).optional(),
            errorCode: z.string().default("EXECUTION_WILL_FAIL"),
            message: z.string().default("This call will revert."),
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
