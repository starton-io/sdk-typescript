/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SchemasPAYLOADTOOLARGEContext = {};

export type PayloadTooLargeData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse1?: Response | undefined;
    context?: SchemasPAYLOADTOOLARGEContext | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class PayloadTooLarge extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse1?: Response | undefined;
    context?: SchemasPAYLOADTOOLARGEContext | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: PayloadTooLargeData;

    constructor(err: PayloadTooLargeData) {
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

        this.name = "PayloadTooLarge";
    }
}

/** @internal */
export namespace SchemasPAYLOADTOOLARGEContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<SchemasPAYLOADTOOLARGEContext, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SchemasPAYLOADTOOLARGEContext> =
        z.object({});
}

/** @internal */
export namespace PayloadTooLarge$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        RawResponse1?: Response | undefined;
        context?: SchemasPAYLOADTOOLARGEContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<PayloadTooLarge, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            RawResponse1: z.instanceof(Response).optional(),
            context: z.lazy(() => SchemasPAYLOADTOOLARGEContext$.inboundSchema).optional(),
            errorCode: z.string().default("PAYLOAD_TOO_LARGE"),
            message: z.string().default("Payload too large."),
            path: z.string(),
            statusCode: z.number().default(413),
            timestamp: z.string(),
        })
        .transform((v) => {
            return new PayloadTooLarge({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.RawResponse1 === undefined ? null : { rawResponse1: v.RawResponse1 }),
                ...(v.context === undefined ? null : { context: v.context }),
                errorCode: v.errorCode,
                message: v.message,
                path: v.path,
                statusCode: v.statusCode,
                timestamp: v.timestamp,
            });
        });

    export type Outbound = {
        RawResponse?: never | undefined;
        RawResponse1?: never | undefined;
        context?: SchemasPAYLOADTOOLARGEContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayloadTooLarge> = z
        .instanceof(PayloadTooLarge)
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
                    context: z.lazy(() => SchemasPAYLOADTOOLARGEContext$.outboundSchema).optional(),
                    errorCode: z.string().default("PAYLOAD_TOO_LARGE"),
                    message: z.string().default("Payload too large."),
                    path: z.string(),
                    statusCode: z.number().default(413),
                    timestamp: z.string(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                        ...(v.rawResponse1 === undefined ? null : { RawResponse1: v.rawResponse1 }),
                        ...(v.context === undefined ? null : { context: v.context }),
                        errorCode: v.errorCode,
                        message: v.message,
                        path: v.path,
                        statusCode: v.statusCode,
                        timestamp: v.timestamp,
                    };
                })
        );
}