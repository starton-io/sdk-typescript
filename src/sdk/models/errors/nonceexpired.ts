/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
    context?: SchemasNONCEEXPIREDContext | undefined;
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
    context?: SchemasNONCEEXPIREDContext | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: NonceExpiredData;

    constructor(err: NonceExpiredData) {
        super("");
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

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "NonceExpired";
    }
}

/** @internal */
export namespace SchemasNONCEEXPIREDContext$ {
    export const inboundSchema: z.ZodType<SchemasNONCEEXPIREDContext, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SchemasNONCEEXPIREDContext> =
        z.object({});
}

/** @internal */
export namespace NonceExpired$ {
    export const inboundSchema: z.ZodType<NonceExpired, z.ZodTypeDef, unknown> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            RawResponse1: z.instanceof(Response).optional(),
            RawResponse2: z.instanceof(Response).optional(),
            RawResponse3: z.instanceof(Response).optional(),
            context: z.lazy(() => SchemasNONCEEXPIREDContext$.inboundSchema).optional(),
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

    export type Outbound = {
        RawResponse?: never | undefined;
        RawResponse1?: never | undefined;
        RawResponse2?: never | undefined;
        RawResponse3?: never | undefined;
        context?: SchemasNONCEEXPIREDContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NonceExpired> = z
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
                    context: z.lazy(() => SchemasNONCEEXPIREDContext$.outboundSchema).optional(),
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
}
