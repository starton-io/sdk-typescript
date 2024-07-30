/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
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
    context?: SchemasCOULDNOTASSIGNNONCEContext | null | undefined;
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
    context?: SchemasCOULDNOTASSIGNNONCEContext | null | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: CouldNotAssignNonceData;

    constructor(err: CouldNotAssignNonceData) {
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

        this.name = "CouldNotAssignNonce";
    }
}

/** @internal */
export const SchemasCOULDNOTASSIGNNONCEContext$inboundSchema: z.ZodType<
    SchemasCOULDNOTASSIGNNONCEContext,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type SchemasCOULDNOTASSIGNNONCEContext$Outbound = {};

/** @internal */
export const SchemasCOULDNOTASSIGNNONCEContext$outboundSchema: z.ZodType<
    SchemasCOULDNOTASSIGNNONCEContext$Outbound,
    z.ZodTypeDef,
    SchemasCOULDNOTASSIGNNONCEContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasCOULDNOTASSIGNNONCEContext$ {
    /** @deprecated use `SchemasCOULDNOTASSIGNNONCEContext$inboundSchema` instead. */
    export const inboundSchema = SchemasCOULDNOTASSIGNNONCEContext$inboundSchema;
    /** @deprecated use `SchemasCOULDNOTASSIGNNONCEContext$outboundSchema` instead. */
    export const outboundSchema = SchemasCOULDNOTASSIGNNONCEContext$outboundSchema;
    /** @deprecated use `SchemasCOULDNOTASSIGNNONCEContext$Outbound` instead. */
    export type Outbound = SchemasCOULDNOTASSIGNNONCEContext$Outbound;
}

/** @internal */
export const CouldNotAssignNonce$inboundSchema: z.ZodType<
    CouldNotAssignNonce,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RawResponse: z.instanceof(Response).optional(),
        RawResponse1: z.instanceof(Response).optional(),
        RawResponse2: z.instanceof(Response).optional(),
        RawResponse3: z.instanceof(Response).optional(),
        RawResponse4: z.instanceof(Response).optional(),
        RawResponse5: z.instanceof(Response).optional(),
        context: z
            .nullable(z.lazy(() => SchemasCOULDNOTASSIGNNONCEContext$inboundSchema))
            .optional(),
        errorCode: z.string().default("COULD_NOT_ASSIGN_NONCE"),
        message: z.string().default("Could not assign nonce."),
        path: z.string(),
        statusCode: z.number().default(500),
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

        return new CouldNotAssignNonce(remapped);
    });

/** @internal */
export type CouldNotAssignNonce$Outbound = {
    RawResponse?: never | undefined;
    RawResponse1?: never | undefined;
    RawResponse2?: never | undefined;
    RawResponse3?: never | undefined;
    RawResponse4?: never | undefined;
    RawResponse5?: never | undefined;
    context?: SchemasCOULDNOTASSIGNNONCEContext$Outbound | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

/** @internal */
export const CouldNotAssignNonce$outboundSchema: z.ZodType<
    CouldNotAssignNonce$Outbound,
    z.ZodTypeDef,
    CouldNotAssignNonce
> = z
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
                    .nullable(z.lazy(() => SchemasCOULDNOTASSIGNNONCEContext$outboundSchema))
                    .optional(),
                errorCode: z.string().default("COULD_NOT_ASSIGN_NONCE"),
                message: z.string().default("Could not assign nonce."),
                path: z.string(),
                statusCode: z.number().default(500),
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
export namespace CouldNotAssignNonce$ {
    /** @deprecated use `CouldNotAssignNonce$inboundSchema` instead. */
    export const inboundSchema = CouldNotAssignNonce$inboundSchema;
    /** @deprecated use `CouldNotAssignNonce$outboundSchema` instead. */
    export const outboundSchema = CouldNotAssignNonce$outboundSchema;
    /** @deprecated use `CouldNotAssignNonce$Outbound` instead. */
    export type Outbound = CouldNotAssignNonce$Outbound;
}
