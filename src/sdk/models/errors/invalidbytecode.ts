/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasINVALIDBYTECODEContext = {};

export type InvalidBytecodeData = {
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
    context?: SchemasINVALIDBYTECODEContext | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class InvalidBytecode extends Error {
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
    context?: SchemasINVALIDBYTECODEContext | null | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: InvalidBytecodeData;

    constructor(err: InvalidBytecodeData) {
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

        this.name = "InvalidBytecode";
    }
}

/** @internal */
export namespace SchemasINVALIDBYTECODEContext$ {
    export const inboundSchema: z.ZodType<SchemasINVALIDBYTECODEContext, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SchemasINVALIDBYTECODEContext> =
        z.object({});
}

/** @internal */
export namespace InvalidBytecode$ {
    export const inboundSchema: z.ZodType<InvalidBytecode, z.ZodTypeDef, unknown> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            RawResponse1: z.instanceof(Response).optional(),
            RawResponse2: z.instanceof(Response).optional(),
            RawResponse3: z.instanceof(Response).optional(),
            RawResponse4: z.instanceof(Response).optional(),
            RawResponse5: z.instanceof(Response).optional(),
            context: z
                .nullable(z.lazy(() => SchemasINVALIDBYTECODEContext$.inboundSchema))
                .optional(),
            errorCode: z.string().default("INVALID_BYTECODE"),
            message: z.string().default("Your bytecode is invalid."),
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
                RawResponse5: "rawResponse5",
            });

            return new InvalidBytecode(remapped);
        });

    export type Outbound = {
        RawResponse?: never | undefined;
        RawResponse1?: never | undefined;
        RawResponse2?: never | undefined;
        RawResponse3?: never | undefined;
        RawResponse4?: never | undefined;
        RawResponse5?: never | undefined;
        context?: SchemasINVALIDBYTECODEContext$.Outbound | null | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvalidBytecode> = z
        .instanceof(InvalidBytecode)
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
                        .nullable(z.lazy(() => SchemasINVALIDBYTECODEContext$.outboundSchema))
                        .optional(),
                    errorCode: z.string().default("INVALID_BYTECODE"),
                    message: z.string().default("Your bytecode is invalid."),
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
                        rawResponse5: "RawResponse5",
                    });
                })
        );
}
