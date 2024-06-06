/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as z from "zod";

export type SchemasNOPROVIDERFORNETWORKContext = {};

export type NoProviderForNetworkData = {
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
    context?: SchemasNOPROVIDERFORNETWORKContext | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class NoProviderForNetwork extends Error {
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
    context?: SchemasNOPROVIDERFORNETWORKContext | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: NoProviderForNetworkData;

    constructor(err: NoProviderForNetworkData) {
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

        this.name = "NoProviderForNetwork";
    }
}

/** @internal */
export namespace SchemasNOPROVIDERFORNETWORKContext$ {
    export const inboundSchema: z.ZodType<
        SchemasNOPROVIDERFORNETWORKContext,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SchemasNOPROVIDERFORNETWORKContext
    > = z.object({});
}

/** @internal */
export namespace NoProviderForNetwork$ {
    export const inboundSchema: z.ZodType<NoProviderForNetwork, z.ZodTypeDef, unknown> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            RawResponse1: z.instanceof(Response).optional(),
            RawResponse2: z.instanceof(Response).optional(),
            RawResponse3: z.instanceof(Response).optional(),
            context: z.lazy(() => SchemasNOPROVIDERFORNETWORKContext$.inboundSchema).optional(),
            errorCode: z.string().default("NO_PROVIDER_FOR_NETWORK"),
            message: z.string().default("No provider for network."),
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
            });

            return new NoProviderForNetwork(remapped);
        });

    export type Outbound = {
        RawResponse?: never | undefined;
        RawResponse1?: never | undefined;
        RawResponse2?: never | undefined;
        RawResponse3?: never | undefined;
        context?: SchemasNOPROVIDERFORNETWORKContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NoProviderForNetwork> = z
        .instanceof(NoProviderForNetwork)
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
                        .lazy(() => SchemasNOPROVIDERFORNETWORKContext$.outboundSchema)
                        .optional(),
                    errorCode: z.string().default("NO_PROVIDER_FOR_NETWORK"),
                    message: z.string().default("No provider for network."),
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
                    });
                })
        );
}
