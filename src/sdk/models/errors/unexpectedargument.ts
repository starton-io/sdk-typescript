/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasUNEXPECTEDARGUMENTContext = {};

export type UnexpectedArgumentData = {
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
    context?: SchemasUNEXPECTEDARGUMENTContext | null | undefined;
    errorCode?: string;
    message?: string;
    path: string;
    statusCode?: number;
    timestamp: string;
};

export class UnexpectedArgument extends Error {
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
    context?: SchemasUNEXPECTEDARGUMENTContext | null | undefined;
    errorCode?: string;
    path: string;
    statusCode?: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: UnexpectedArgumentData;

    constructor(err: UnexpectedArgumentData) {
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
        if (err.context != null) {
            this.context = err.context;
        }
        if (err.errorCode != null) {
            this.errorCode = err.errorCode;
        }
        this.path = err.path;
        if (err.statusCode != null) {
            this.statusCode = err.statusCode;
        }
        this.timestamp = err.timestamp;

        this.name = "UnexpectedArgument";
    }
}

/** @internal */
export const SchemasUNEXPECTEDARGUMENTContext$inboundSchema: z.ZodType<
    SchemasUNEXPECTEDARGUMENTContext,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type SchemasUNEXPECTEDARGUMENTContext$Outbound = {};

/** @internal */
export const SchemasUNEXPECTEDARGUMENTContext$outboundSchema: z.ZodType<
    SchemasUNEXPECTEDARGUMENTContext$Outbound,
    z.ZodTypeDef,
    SchemasUNEXPECTEDARGUMENTContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasUNEXPECTEDARGUMENTContext$ {
    /** @deprecated use `SchemasUNEXPECTEDARGUMENTContext$inboundSchema` instead. */
    export const inboundSchema = SchemasUNEXPECTEDARGUMENTContext$inboundSchema;
    /** @deprecated use `SchemasUNEXPECTEDARGUMENTContext$outboundSchema` instead. */
    export const outboundSchema = SchemasUNEXPECTEDARGUMENTContext$outboundSchema;
    /** @deprecated use `SchemasUNEXPECTEDARGUMENTContext$Outbound` instead. */
    export type Outbound = SchemasUNEXPECTEDARGUMENTContext$Outbound;
}

/** @internal */
export const UnexpectedArgument$inboundSchema: z.ZodType<
    UnexpectedArgument,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RawResponse: z.instanceof(Response).optional(),
        RawResponse1: z.instanceof(Response).optional(),
        RawResponse2: z.instanceof(Response).optional(),
        RawResponse3: z.instanceof(Response).optional(),
        RawResponse4: z.instanceof(Response).optional(),
        context: z
            .nullable(z.lazy(() => SchemasUNEXPECTEDARGUMENTContext$inboundSchema))
            .optional(),
        errorCode: z.string().default("UNEXPECTED_ARGUMENT"),
        message: z.string().default("Your params are invalid."),
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
        });

        return new UnexpectedArgument(remapped);
    });

/** @internal */
export type UnexpectedArgument$Outbound = {
    RawResponse?: never | undefined;
    RawResponse1?: never | undefined;
    RawResponse2?: never | undefined;
    RawResponse3?: never | undefined;
    RawResponse4?: never | undefined;
    context?: SchemasUNEXPECTEDARGUMENTContext$Outbound | null | undefined;
    errorCode?: string;
    message?: string;
    path: string;
    statusCode?: number;
    timestamp: string;
};

/** @internal */
export const UnexpectedArgument$outboundSchema: z.ZodType<
    UnexpectedArgument$Outbound,
    z.ZodTypeDef,
    UnexpectedArgument
> = z
    .instanceof(UnexpectedArgument)
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
                context: z
                    .nullable(z.lazy(() => SchemasUNEXPECTEDARGUMENTContext$outboundSchema))
                    .optional(),
                errorCode: z.string().default("UNEXPECTED_ARGUMENT"),
                message: z.string().default("Your params are invalid."),
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
                });
            })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnexpectedArgument$ {
    /** @deprecated use `UnexpectedArgument$inboundSchema` instead. */
    export const inboundSchema = UnexpectedArgument$inboundSchema;
    /** @deprecated use `UnexpectedArgument$outboundSchema` instead. */
    export const outboundSchema = UnexpectedArgument$outboundSchema;
    /** @deprecated use `UnexpectedArgument$Outbound` instead. */
    export type Outbound = UnexpectedArgument$Outbound;
}
