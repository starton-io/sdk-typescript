/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type Context = {};

export type AlreadyKnownData = {
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
    context?: Context | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class AlreadyKnown extends Error {
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
    context?: Context | null | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: AlreadyKnownData;

    constructor(err: AlreadyKnownData) {
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
        if (err.context != null) {
            this.context = err.context;
        }
        this.errorCode = err.errorCode;
        this.path = err.path;
        this.statusCode = err.statusCode;
        this.timestamp = err.timestamp;

        this.name = "AlreadyKnown";
    }
}

/** @internal */
export const Context$inboundSchema: z.ZodType<Context, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Context$Outbound = {};

/** @internal */
export const Context$outboundSchema: z.ZodType<Context$Outbound, z.ZodTypeDef, Context> = z.object(
    {}
);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Context$ {
    /** @deprecated use `Context$inboundSchema` instead. */
    export const inboundSchema = Context$inboundSchema;
    /** @deprecated use `Context$outboundSchema` instead. */
    export const outboundSchema = Context$outboundSchema;
    /** @deprecated use `Context$Outbound` instead. */
    export type Outbound = Context$Outbound;
}

/** @internal */
export const AlreadyKnown$inboundSchema: z.ZodType<AlreadyKnown, z.ZodTypeDef, unknown> = z
    .object({
        RawResponse: z.instanceof(Response).optional(),
        RawResponse1: z.instanceof(Response).optional(),
        RawResponse2: z.instanceof(Response).optional(),
        RawResponse3: z.instanceof(Response).optional(),
        context: z.nullable(z.lazy(() => Context$inboundSchema)).optional(),
        errorCode: z.string().default("ALREADY_KNOWN"),
        message: z.string().default("This transaction is already known by the node."),
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
        });

        return new AlreadyKnown(remapped);
    });

/** @internal */
export type AlreadyKnown$Outbound = {
    RawResponse?: never | undefined;
    RawResponse1?: never | undefined;
    RawResponse2?: never | undefined;
    RawResponse3?: never | undefined;
    context?: Context$Outbound | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

/** @internal */
export const AlreadyKnown$outboundSchema: z.ZodType<
    AlreadyKnown$Outbound,
    z.ZodTypeDef,
    AlreadyKnown
> = z
    .instanceof(AlreadyKnown)
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
                context: z.nullable(z.lazy(() => Context$outboundSchema)).optional(),
                errorCode: z.string().default("ALREADY_KNOWN"),
                message: z.string().default("This transaction is already known by the node."),
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
                });
            })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AlreadyKnown$ {
    /** @deprecated use `AlreadyKnown$inboundSchema` instead. */
    export const inboundSchema = AlreadyKnown$inboundSchema;
    /** @deprecated use `AlreadyKnown$outboundSchema` instead. */
    export const outboundSchema = AlreadyKnown$outboundSchema;
    /** @deprecated use `AlreadyKnown$Outbound` instead. */
    export type Outbound = AlreadyKnown$Outbound;
}
