/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasNONCEEXPIREDContext = {};

export type NonceExpiredData = {
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
    context?: SchemasNONCEEXPIREDContext | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class NonceExpired extends Error {
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
    context?: SchemasNONCEEXPIREDContext | null | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: NonceExpiredData;

    constructor(err: NonceExpiredData) {
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

        this.name = "NonceExpired";
    }
}

/** @internal */
export const SchemasNONCEEXPIREDContext$inboundSchema: z.ZodType<
    SchemasNONCEEXPIREDContext,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type SchemasNONCEEXPIREDContext$Outbound = {};

/** @internal */
export const SchemasNONCEEXPIREDContext$outboundSchema: z.ZodType<
    SchemasNONCEEXPIREDContext$Outbound,
    z.ZodTypeDef,
    SchemasNONCEEXPIREDContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasNONCEEXPIREDContext$ {
    /** @deprecated use `SchemasNONCEEXPIREDContext$inboundSchema` instead. */
    export const inboundSchema = SchemasNONCEEXPIREDContext$inboundSchema;
    /** @deprecated use `SchemasNONCEEXPIREDContext$outboundSchema` instead. */
    export const outboundSchema = SchemasNONCEEXPIREDContext$outboundSchema;
    /** @deprecated use `SchemasNONCEEXPIREDContext$Outbound` instead. */
    export type Outbound = SchemasNONCEEXPIREDContext$Outbound;
}

/** @internal */
export const NonceExpired$inboundSchema: z.ZodType<NonceExpired, z.ZodTypeDef, unknown> = z
    .object({
        RawResponse: z.instanceof(Response).optional(),
        RawResponse1: z.instanceof(Response).optional(),
        RawResponse2: z.instanceof(Response).optional(),
        RawResponse3: z.instanceof(Response).optional(),
        context: z.nullable(z.lazy(() => SchemasNONCEEXPIREDContext$inboundSchema)).optional(),
        errorCode: z.string().default("NONCE_EXPIRED"),
        message: z.string().default("Your nonce is too low."),
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

        return new NonceExpired(remapped);
    });

/** @internal */
export type NonceExpired$Outbound = {
    RawResponse?: never | undefined;
    RawResponse1?: never | undefined;
    RawResponse2?: never | undefined;
    RawResponse3?: never | undefined;
    context?: SchemasNONCEEXPIREDContext$Outbound | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

/** @internal */
export const NonceExpired$outboundSchema: z.ZodType<
    NonceExpired$Outbound,
    z.ZodTypeDef,
    NonceExpired
> = z
    .instanceof(NonceExpired)
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
                context: z
                    .nullable(z.lazy(() => SchemasNONCEEXPIREDContext$outboundSchema))
                    .optional(),
                errorCode: z.string().default("NONCE_EXPIRED"),
                message: z.string().default("Your nonce is too low."),
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
export namespace NonceExpired$ {
    /** @deprecated use `NonceExpired$inboundSchema` instead. */
    export const inboundSchema = NonceExpired$inboundSchema;
    /** @deprecated use `NonceExpired$outboundSchema` instead. */
    export const outboundSchema = NonceExpired$outboundSchema;
    /** @deprecated use `NonceExpired$Outbound` instead. */
    export type Outbound = NonceExpired$Outbound;
}
