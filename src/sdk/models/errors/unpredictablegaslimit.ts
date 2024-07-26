/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasUNPREDICTABLEGASLIMITContext = {};

export type UnpredictableGasLimitData = {
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
    context?: SchemasUNPREDICTABLEGASLIMITContext | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class UnpredictableGasLimit extends Error {
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
    context?: SchemasUNPREDICTABLEGASLIMITContext | null | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: UnpredictableGasLimitData;

    constructor(err: UnpredictableGasLimitData) {
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

        this.name = "UnpredictableGasLimit";
    }
}

/** @internal */
export const SchemasUNPREDICTABLEGASLIMITContext$inboundSchema: z.ZodType<
    SchemasUNPREDICTABLEGASLIMITContext,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type SchemasUNPREDICTABLEGASLIMITContext$Outbound = {};

/** @internal */
export const SchemasUNPREDICTABLEGASLIMITContext$outboundSchema: z.ZodType<
    SchemasUNPREDICTABLEGASLIMITContext$Outbound,
    z.ZodTypeDef,
    SchemasUNPREDICTABLEGASLIMITContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasUNPREDICTABLEGASLIMITContext$ {
    /** @deprecated use `SchemasUNPREDICTABLEGASLIMITContext$inboundSchema` instead. */
    export const inboundSchema = SchemasUNPREDICTABLEGASLIMITContext$inboundSchema;
    /** @deprecated use `SchemasUNPREDICTABLEGASLIMITContext$outboundSchema` instead. */
    export const outboundSchema = SchemasUNPREDICTABLEGASLIMITContext$outboundSchema;
    /** @deprecated use `SchemasUNPREDICTABLEGASLIMITContext$Outbound` instead. */
    export type Outbound = SchemasUNPREDICTABLEGASLIMITContext$Outbound;
}

/** @internal */
export const UnpredictableGasLimit$inboundSchema: z.ZodType<
    UnpredictableGasLimit,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RawResponse: z.instanceof(Response).optional(),
        RawResponse1: z.instanceof(Response).optional(),
        RawResponse2: z.instanceof(Response).optional(),
        RawResponse3: z.instanceof(Response).optional(),
        context: z
            .nullable(z.lazy(() => SchemasUNPREDICTABLEGASLIMITContext$inboundSchema))
            .optional(),
        errorCode: z.string().default("UNPREDICTABLE_GAS_LIMIT"),
        message: z.string().default("Could not estimate gas limit for this transaction."),
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

        return new UnpredictableGasLimit(remapped);
    });

/** @internal */
export type UnpredictableGasLimit$Outbound = {
    RawResponse?: never | undefined;
    RawResponse1?: never | undefined;
    RawResponse2?: never | undefined;
    RawResponse3?: never | undefined;
    context?: SchemasUNPREDICTABLEGASLIMITContext$Outbound | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

/** @internal */
export const UnpredictableGasLimit$outboundSchema: z.ZodType<
    UnpredictableGasLimit$Outbound,
    z.ZodTypeDef,
    UnpredictableGasLimit
> = z
    .instanceof(UnpredictableGasLimit)
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
                    .nullable(z.lazy(() => SchemasUNPREDICTABLEGASLIMITContext$outboundSchema))
                    .optional(),
                errorCode: z.string().default("UNPREDICTABLE_GAS_LIMIT"),
                message: z.string().default("Could not estimate gas limit for this transaction."),
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
export namespace UnpredictableGasLimit$ {
    /** @deprecated use `UnpredictableGasLimit$inboundSchema` instead. */
    export const inboundSchema = UnpredictableGasLimit$inboundSchema;
    /** @deprecated use `UnpredictableGasLimit$outboundSchema` instead. */
    export const outboundSchema = UnpredictableGasLimit$outboundSchema;
    /** @deprecated use `UnpredictableGasLimit$Outbound` instead. */
    export type Outbound = UnpredictableGasLimit$Outbound;
}
