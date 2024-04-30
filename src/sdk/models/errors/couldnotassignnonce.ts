/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SchemasCOULDNOTASSIGNNONCEContext = {};

export type CouldNotAssignNonceData = {
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
    context?: SchemasCOULDNOTASSIGNNONCEContext | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class CouldNotAssignNonce extends Error {
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
    context?: SchemasCOULDNOTASSIGNNONCEContext | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: CouldNotAssignNonceData;

    constructor(err: CouldNotAssignNonceData) {
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

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "CouldNotAssignNonce";
    }
}

/** @internal */
export namespace SchemasCOULDNOTASSIGNNONCEContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<
        SchemasCOULDNOTASSIGNNONCEContext,
        z.ZodTypeDef,
        Inbound
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SchemasCOULDNOTASSIGNNONCEContext
    > = z.object({});
}

/** @internal */
export namespace CouldNotAssignNonce$ {
    export type Inbound = {
        RawResponse?: Response | undefined;
        RawResponse1?: Response | undefined;
        RawResponse2?: Response | undefined;
        RawResponse3?: Response | undefined;
        RawResponse4?: Response | undefined;
        RawResponse5?: Response | undefined;
        context?: SchemasCOULDNOTASSIGNNONCEContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<CouldNotAssignNonce, z.ZodTypeDef, Inbound> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            RawResponse1: z.instanceof(Response).optional(),
            RawResponse2: z.instanceof(Response).optional(),
            RawResponse3: z.instanceof(Response).optional(),
            RawResponse4: z.instanceof(Response).optional(),
            RawResponse5: z.instanceof(Response).optional(),
            context: z.lazy(() => SchemasCOULDNOTASSIGNNONCEContext$.inboundSchema).optional(),
            errorCode: z.string().default("COULD_NOT_ASSIGN_NONCE"),
            message: z.string().default("Could not assign nonce."),
            path: z.string(),
            statusCode: z.number().default(500),
            timestamp: z.string(),
        })
        .transform((v) => {
            return new CouldNotAssignNonce({
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
                ...(v.RawResponse1 === undefined ? null : { rawResponse1: v.RawResponse1 }),
                ...(v.RawResponse2 === undefined ? null : { rawResponse2: v.RawResponse2 }),
                ...(v.RawResponse3 === undefined ? null : { rawResponse3: v.RawResponse3 }),
                ...(v.RawResponse4 === undefined ? null : { rawResponse4: v.RawResponse4 }),
                ...(v.RawResponse5 === undefined ? null : { rawResponse5: v.RawResponse5 }),
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
        RawResponse2?: never | undefined;
        RawResponse3?: never | undefined;
        RawResponse4?: never | undefined;
        RawResponse5?: never | undefined;
        context?: SchemasCOULDNOTASSIGNNONCEContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CouldNotAssignNonce> = z
        .instanceof(CouldNotAssignNonce)
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
                        .lazy(() => SchemasCOULDNOTASSIGNNONCEContext$.outboundSchema)
                        .optional(),
                    errorCode: z.string().default("COULD_NOT_ASSIGN_NONCE"),
                    message: z.string().default("Could not assign nonce."),
                    path: z.string(),
                    statusCode: z.number().default(500),
                    timestamp: z.string(),
                })
                .transform((v) => {
                    return {
                        ...(v.rawResponse === undefined ? null : { RawResponse: v.rawResponse }),
                        ...(v.rawResponse1 === undefined ? null : { RawResponse1: v.rawResponse1 }),
                        ...(v.rawResponse2 === undefined ? null : { RawResponse2: v.rawResponse2 }),
                        ...(v.rawResponse3 === undefined ? null : { RawResponse3: v.rawResponse3 }),
                        ...(v.rawResponse4 === undefined ? null : { RawResponse4: v.rawResponse4 }),
                        ...(v.rawResponse5 === undefined ? null : { RawResponse5: v.rawResponse5 }),
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