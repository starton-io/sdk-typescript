/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasMAXIMUMSTORAGEREACHEDContext = {};

export type MaximumStorageReachedData = {
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
    context?: SchemasMAXIMUMSTORAGEREACHEDContext | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class MaximumStorageReached extends Error {
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
    context?: SchemasMAXIMUMSTORAGEREACHEDContext | null | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: MaximumStorageReachedData;

    constructor(err: MaximumStorageReachedData) {
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

        this.name = "MaximumStorageReached";
    }
}

/** @internal */
export const SchemasMAXIMUMSTORAGEREACHEDContext$inboundSchema: z.ZodType<
    SchemasMAXIMUMSTORAGEREACHEDContext,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type SchemasMAXIMUMSTORAGEREACHEDContext$Outbound = {};

/** @internal */
export const SchemasMAXIMUMSTORAGEREACHEDContext$outboundSchema: z.ZodType<
    SchemasMAXIMUMSTORAGEREACHEDContext$Outbound,
    z.ZodTypeDef,
    SchemasMAXIMUMSTORAGEREACHEDContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasMAXIMUMSTORAGEREACHEDContext$ {
    /** @deprecated use `SchemasMAXIMUMSTORAGEREACHEDContext$inboundSchema` instead. */
    export const inboundSchema = SchemasMAXIMUMSTORAGEREACHEDContext$inboundSchema;
    /** @deprecated use `SchemasMAXIMUMSTORAGEREACHEDContext$outboundSchema` instead. */
    export const outboundSchema = SchemasMAXIMUMSTORAGEREACHEDContext$outboundSchema;
    /** @deprecated use `SchemasMAXIMUMSTORAGEREACHEDContext$Outbound` instead. */
    export type Outbound = SchemasMAXIMUMSTORAGEREACHEDContext$Outbound;
}

/** @internal */
export const MaximumStorageReached$inboundSchema: z.ZodType<
    MaximumStorageReached,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RawResponse: z.instanceof(Response).optional(),
        RawResponse1: z.instanceof(Response).optional(),
        RawResponse2: z.instanceof(Response).optional(),
        RawResponse3: z.instanceof(Response).optional(),
        context: z
            .nullable(z.lazy(() => SchemasMAXIMUMSTORAGEREACHEDContext$inboundSchema))
            .optional(),
        errorCode: z.string().default("MAXIMUM_STORAGE_REACHED"),
        message: z
            .string()
            .default("The max storage size allowed for this project would be exceeded."),
        path: z.string(),
        statusCode: z.number().default(413),
        timestamp: z.string(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
            RawResponse1: "rawResponse1",
            RawResponse2: "rawResponse2",
            RawResponse3: "rawResponse3",
        });

        return new MaximumStorageReached(remapped);
    });

/** @internal */
export type MaximumStorageReached$Outbound = {
    RawResponse?: never | undefined;
    RawResponse1?: never | undefined;
    RawResponse2?: never | undefined;
    RawResponse3?: never | undefined;
    context?: SchemasMAXIMUMSTORAGEREACHEDContext$Outbound | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

/** @internal */
export const MaximumStorageReached$outboundSchema: z.ZodType<
    MaximumStorageReached$Outbound,
    z.ZodTypeDef,
    MaximumStorageReached
> = z
    .instanceof(MaximumStorageReached)
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
                    .nullable(z.lazy(() => SchemasMAXIMUMSTORAGEREACHEDContext$outboundSchema))
                    .optional(),
                errorCode: z.string().default("MAXIMUM_STORAGE_REACHED"),
                message: z
                    .string()
                    .default("The max storage size allowed for this project would be exceeded."),
                path: z.string(),
                statusCode: z.number().default(413),
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
export namespace MaximumStorageReached$ {
    /** @deprecated use `MaximumStorageReached$inboundSchema` instead. */
    export const inboundSchema = MaximumStorageReached$inboundSchema;
    /** @deprecated use `MaximumStorageReached$outboundSchema` instead. */
    export const outboundSchema = MaximumStorageReached$outboundSchema;
    /** @deprecated use `MaximumStorageReached$Outbound` instead. */
    export type Outbound = MaximumStorageReached$Outbound;
}
