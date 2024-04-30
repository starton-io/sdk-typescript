/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SchemasCOULDNOTRESENDWEBHOOKContext = {};

export type CouldNotResendWebhookData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    context?: SchemasCOULDNOTRESENDWEBHOOKContext | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class CouldNotResendWebhook extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    context?: SchemasCOULDNOTRESENDWEBHOOKContext | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: CouldNotResendWebhookData;

    constructor(err: CouldNotResendWebhookData) {
        super("");
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
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

        this.name = "CouldNotResendWebhook";
    }
}

/** @internal */
export namespace SchemasCOULDNOTRESENDWEBHOOKContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<
        SchemasCOULDNOTRESENDWEBHOOKContext,
        z.ZodTypeDef,
        Inbound
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SchemasCOULDNOTRESENDWEBHOOKContext
    > = z.object({});
}

/** @internal */
export namespace CouldNotResendWebhook$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        context?: SchemasCOULDNOTRESENDWEBHOOKContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<CouldNotResendWebhook, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            context: z.lazy(() => SchemasCOULDNOTRESENDWEBHOOKContext$.inboundSchema).optional(),
            errorCode: z.string().default("COULD_NOT_RESEND_WEBHOOK"),
            message: z.string().default("Could not resend webhook."),
            path: z.string(),
            statusCode: z.number().default(412),
            timestamp: z.string(),
        })
        .transform((v) => {
            return new CouldNotResendWebhook({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
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
        context?: SchemasCOULDNOTRESENDWEBHOOKContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CouldNotResendWebhook> = z
        .instanceof(CouldNotResendWebhook)
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
                    context: z
                        .lazy(() => SchemasCOULDNOTRESENDWEBHOOKContext$.outboundSchema)
                        .optional(),
                    errorCode: z.string().default("COULD_NOT_RESEND_WEBHOOK"),
                    message: z.string().default("Could not resend webhook."),
                    path: z.string(),
                    statusCode: z.number().default(412),
                    timestamp: z.string(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
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