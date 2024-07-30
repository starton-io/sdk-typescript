/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasEXECUTIONWILLFAILContext = {};

export type ExecutionWillFailData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse1?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse2?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse3?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse4?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse5?: Response | undefined;
    context?: SchemasEXECUTIONWILLFAILContext | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class ExecutionWillFail extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse1?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse2?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse3?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse4?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse5?: Response | undefined;
    context?: SchemasEXECUTIONWILLFAILContext | null | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: ExecutionWillFailData;

    constructor(err: ExecutionWillFailData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }
        if (err.rawResponse1 != null) {
            this.rawResponse1 = err.rawResponse1;
        }
        if (err.rawResponse2 != null) {
            this.rawResponse2 = err.rawResponse2;
        }
        if (err.rawResponse3 != null) {
            this.rawResponse3 = err.rawResponse3;
        }
        if (err.rawResponse4 != null) {
            this.rawResponse4 = err.rawResponse4;
        }
        if (err.rawResponse5 != null) {
            this.rawResponse5 = err.rawResponse5;
        }
        if (err.context != null) {
            this.context = err.context;
        }
        this.errorCode = err.errorCode;
        this.path = err.path;
        this.statusCode = err.statusCode;
        this.timestamp = err.timestamp;

        this.name = "ExecutionWillFail";
    }
}

/** @internal */
export const SchemasEXECUTIONWILLFAILContext$inboundSchema: z.ZodType<
    SchemasEXECUTIONWILLFAILContext,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type SchemasEXECUTIONWILLFAILContext$Outbound = {};

/** @internal */
export const SchemasEXECUTIONWILLFAILContext$outboundSchema: z.ZodType<
    SchemasEXECUTIONWILLFAILContext$Outbound,
    z.ZodTypeDef,
    SchemasEXECUTIONWILLFAILContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasEXECUTIONWILLFAILContext$ {
    /** @deprecated use `SchemasEXECUTIONWILLFAILContext$inboundSchema` instead. */
    export const inboundSchema = SchemasEXECUTIONWILLFAILContext$inboundSchema;
    /** @deprecated use `SchemasEXECUTIONWILLFAILContext$outboundSchema` instead. */
    export const outboundSchema = SchemasEXECUTIONWILLFAILContext$outboundSchema;
    /** @deprecated use `SchemasEXECUTIONWILLFAILContext$Outbound` instead. */
    export type Outbound = SchemasEXECUTIONWILLFAILContext$Outbound;
}

/** @internal */
export const ExecutionWillFail$inboundSchema: z.ZodType<ExecutionWillFail, z.ZodTypeDef, unknown> =
    z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            RawResponse1: z.instanceof(Response).optional(),
            RawResponse2: z.instanceof(Response).optional(),
            RawResponse3: z.instanceof(Response).optional(),
            RawResponse4: z.instanceof(Response).optional(),
            RawResponse5: z.instanceof(Response).optional(),
            context: z
                .nullable(z.lazy(() => SchemasEXECUTIONWILLFAILContext$inboundSchema))
                .optional(),
            errorCode: z.string().default("EXECUTION_WILL_FAIL"),
            message: z.string().default("This call will revert."),
            path: z.string(),
            statusCode: z.number().default(400),
            timestamp: z.string(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
                RawResponse1: "rawResponse1",
                RawResponse2: "rawResponse2",
                RawResponse3: "rawResponse3",
                RawResponse4: "rawResponse4",
                RawResponse5: "rawResponse5",
            });

            return new ExecutionWillFail(remapped);
        });

/** @internal */
export type ExecutionWillFail$Outbound = {
    RawResponse?: never | undefined;
    RawResponse1?: never | undefined;
    RawResponse2?: never | undefined;
    RawResponse3?: never | undefined;
    RawResponse4?: never | undefined;
    RawResponse5?: never | undefined;
    context?: SchemasEXECUTIONWILLFAILContext$Outbound | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

/** @internal */
export const ExecutionWillFail$outboundSchema: z.ZodType<
    ExecutionWillFail$Outbound,
    z.ZodTypeDef,
    ExecutionWillFail
> = z
    .instanceof(ExecutionWillFail)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                rawResponse: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse1: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse2: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse3: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse4: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse5: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                context: z
                    .nullable(z.lazy(() => SchemasEXECUTIONWILLFAILContext$outboundSchema))
                    .optional(),
                errorCode: z.string().default("EXECUTION_WILL_FAIL"),
                message: z.string().default("This call will revert."),
                path: z.string(),
                statusCode: z.number().default(400),
                timestamp: z.string(),
            })
            .transform((v) => {
                return remap$(v, {
                    rawResponse: "RawResponse",
                    rawResponse1: "RawResponse1",
                    rawResponse2: "RawResponse2",
                    rawResponse3: "RawResponse3",
                    rawResponse4: "RawResponse4",
                    rawResponse5: "RawResponse5",
                });
            })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExecutionWillFail$ {
    /** @deprecated use `ExecutionWillFail$inboundSchema` instead. */
    export const inboundSchema = ExecutionWillFail$inboundSchema;
    /** @deprecated use `ExecutionWillFail$outboundSchema` instead. */
    export const outboundSchema = ExecutionWillFail$outboundSchema;
    /** @deprecated use `ExecutionWillFail$Outbound` instead. */
    export type Outbound = ExecutionWillFail$Outbound;
}
