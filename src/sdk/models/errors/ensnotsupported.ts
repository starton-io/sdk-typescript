/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasENSNOTSUPPORTEDContext = {};

export type EnsNotSupportedData = {
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
    context?: SchemasENSNOTSUPPORTEDContext | null | undefined;
    errorCode?: string;
    message?: string;
    path: string;
    statusCode?: number;
    timestamp: string;
};

export class EnsNotSupported extends Error {
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
    context?: SchemasENSNOTSUPPORTEDContext | null | undefined;
    errorCode?: string;
    path: string;
    statusCode?: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: EnsNotSupportedData;

    constructor(err: EnsNotSupportedData) {
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

        this.name = "EnsNotSupported";
    }
}

/** @internal */
export const SchemasENSNOTSUPPORTEDContext$inboundSchema: z.ZodType<
    SchemasENSNOTSUPPORTEDContext,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type SchemasENSNOTSUPPORTEDContext$Outbound = {};

/** @internal */
export const SchemasENSNOTSUPPORTEDContext$outboundSchema: z.ZodType<
    SchemasENSNOTSUPPORTEDContext$Outbound,
    z.ZodTypeDef,
    SchemasENSNOTSUPPORTEDContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasENSNOTSUPPORTEDContext$ {
    /** @deprecated use `SchemasENSNOTSUPPORTEDContext$inboundSchema` instead. */
    export const inboundSchema = SchemasENSNOTSUPPORTEDContext$inboundSchema;
    /** @deprecated use `SchemasENSNOTSUPPORTEDContext$outboundSchema` instead. */
    export const outboundSchema = SchemasENSNOTSUPPORTEDContext$outboundSchema;
    /** @deprecated use `SchemasENSNOTSUPPORTEDContext$Outbound` instead. */
    export type Outbound = SchemasENSNOTSUPPORTEDContext$Outbound;
}

/** @internal */
export const EnsNotSupported$inboundSchema: z.ZodType<EnsNotSupported, z.ZodTypeDef, unknown> = z
    .object({
        RawResponse: z.instanceof(Response).optional(),
        RawResponse1: z.instanceof(Response).optional(),
        RawResponse2: z.instanceof(Response).optional(),
        RawResponse3: z.instanceof(Response).optional(),
        RawResponse4: z.instanceof(Response).optional(),
        context: z.nullable(z.lazy(() => SchemasENSNOTSUPPORTEDContext$inboundSchema)).optional(),
        errorCode: z.string().default("ENS_NOT_SUPPORTED"),
        message: z.string().default("ENS is not supported on this network."),
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

        return new EnsNotSupported(remapped);
    });

/** @internal */
export type EnsNotSupported$Outbound = {
    RawResponse?: never | undefined;
    RawResponse1?: never | undefined;
    RawResponse2?: never | undefined;
    RawResponse3?: never | undefined;
    RawResponse4?: never | undefined;
    context?: SchemasENSNOTSUPPORTEDContext$Outbound | null | undefined;
    errorCode?: string;
    message?: string;
    path: string;
    statusCode?: number;
    timestamp: string;
};

/** @internal */
export const EnsNotSupported$outboundSchema: z.ZodType<
    EnsNotSupported$Outbound,
    z.ZodTypeDef,
    EnsNotSupported
> = z
    .instanceof(EnsNotSupported)
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
                    .nullable(z.lazy(() => SchemasENSNOTSUPPORTEDContext$outboundSchema))
                    .optional(),
                errorCode: z.string().default("ENS_NOT_SUPPORTED"),
                message: z.string().default("ENS is not supported on this network."),
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
export namespace EnsNotSupported$ {
    /** @deprecated use `EnsNotSupported$inboundSchema` instead. */
    export const inboundSchema = EnsNotSupported$inboundSchema;
    /** @deprecated use `EnsNotSupported$outboundSchema` instead. */
    export const outboundSchema = EnsNotSupported$outboundSchema;
    /** @deprecated use `EnsNotSupported$Outbound` instead. */
    export type Outbound = EnsNotSupported$Outbound;
}
