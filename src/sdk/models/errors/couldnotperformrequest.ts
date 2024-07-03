/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasCOULDNOTPERFORMREQUESTContext = {};

export type CouldNotPerformRequestData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    context?: SchemasCOULDNOTPERFORMREQUESTContext | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class CouldNotPerformRequest extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    context?: SchemasCOULDNOTPERFORMREQUESTContext | null | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: CouldNotPerformRequestData;

    constructor(err: CouldNotPerformRequestData) {
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

        this.name = "CouldNotPerformRequest";
    }
}

/** @internal */
export namespace SchemasCOULDNOTPERFORMREQUESTContext$ {
    export const inboundSchema: z.ZodType<
        SchemasCOULDNOTPERFORMREQUESTContext,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SchemasCOULDNOTPERFORMREQUESTContext
    > = z.object({});
}

/** @internal */
export namespace CouldNotPerformRequest$ {
    export const inboundSchema: z.ZodType<CouldNotPerformRequest, z.ZodTypeDef, unknown> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            context: z
                .nullable(z.lazy(() => SchemasCOULDNOTPERFORMREQUESTContext$.inboundSchema))
                .optional(),
            errorCode: z.string().default("COULD_NOT_PERFORM_REQUEST"),
            message: z.string().default("Unexpected error occurred performing the request."),
            path: z.string(),
            statusCode: z.number().default(500),
            timestamp: z.string(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new CouldNotPerformRequest(remapped);
        });

    export type Outbound = {
        RawResponse?: never | undefined;
        context?: SchemasCOULDNOTPERFORMREQUESTContext$.Outbound | null | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CouldNotPerformRequest> = z
        .instanceof(CouldNotPerformRequest)
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
                        .nullable(
                            z.lazy(() => SchemasCOULDNOTPERFORMREQUESTContext$.outboundSchema)
                        )
                        .optional(),
                    errorCode: z.string().default("COULD_NOT_PERFORM_REQUEST"),
                    message: z
                        .string()
                        .default("Unexpected error occurred performing the request."),
                    path: z.string(),
                    statusCode: z.number().default(500),
                    timestamp: z.string(),
                })
                .transform((v) => {
                    return remap$(v, {
                        rawResponse: "RawResponse",
                    });
                })
        );
}
