/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasNOTAUTHENTICATEDContext = {};

export type NotAuthenticatedData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse1?: Response | undefined;
    context?: SchemasNOTAUTHENTICATEDContext | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class NotAuthenticated extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse1?: Response | undefined;
    context?: SchemasNOTAUTHENTICATEDContext | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: NotAuthenticatedData;

    constructor(err: NotAuthenticatedData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }
        if (err.rawResponse1 != null) {
            this.rawResponse1 = err.rawResponse1;
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

        this.name = "NotAuthenticated";
    }
}

/** @internal */
export namespace SchemasNOTAUTHENTICATEDContext$ {
    export const inboundSchema: z.ZodType<SchemasNOTAUTHENTICATEDContext, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SchemasNOTAUTHENTICATEDContext> =
        z.object({});
}

/** @internal */
export namespace NotAuthenticated$ {
    export const inboundSchema: z.ZodType<NotAuthenticated, z.ZodTypeDef, unknown> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            RawResponse1: z.instanceof(Response).optional(),
            context: z.lazy(() => SchemasNOTAUTHENTICATEDContext$.inboundSchema).optional(),
            errorCode: z.string().default("NOT_AUTHENTICATED"),
            message: z.string().default("Not authenticated."),
            path: z.string(),
            statusCode: z.number().default(401),
            timestamp: z.string(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
                RawResponse1: "rawResponse1",
            });

            return new NotAuthenticated(remapped);
        });

    export type Outbound = {
        RawResponse?: never | undefined;
        RawResponse1?: never | undefined;
        context?: SchemasNOTAUTHENTICATEDContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NotAuthenticated> = z
        .instanceof(NotAuthenticated)
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
                    context: z
                        .lazy(() => SchemasNOTAUTHENTICATEDContext$.outboundSchema)
                        .optional(),
                    errorCode: z.string().default("NOT_AUTHENTICATED"),
                    message: z.string().default("Not authenticated."),
                    path: z.string(),
                    statusCode: z.number().default(401),
                    timestamp: z.string(),
                })
                .transform((v) => {
                    return remap$(v, {
                        rawResponse: "RawResponse",
                        rawResponse1: "RawResponse1",
                    });
                })
        );
}
