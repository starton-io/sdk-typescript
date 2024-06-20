/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasINVALIDCONTRACTADDRESSContext = {};

export type InvalidContractAddressData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    context?: SchemasINVALIDCONTRACTADDRESSContext | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class InvalidContractAddress extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    context?: SchemasINVALIDCONTRACTADDRESSContext | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: InvalidContractAddressData;

    constructor(err: InvalidContractAddressData) {
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

        this.name = "InvalidContractAddress";
    }
}

/** @internal */
export namespace SchemasINVALIDCONTRACTADDRESSContext$ {
    export const inboundSchema: z.ZodType<
        SchemasINVALIDCONTRACTADDRESSContext,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SchemasINVALIDCONTRACTADDRESSContext
    > = z.object({});
}

/** @internal */
export namespace InvalidContractAddress$ {
    export const inboundSchema: z.ZodType<InvalidContractAddress, z.ZodTypeDef, unknown> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            context: z.lazy(() => SchemasINVALIDCONTRACTADDRESSContext$.inboundSchema).optional(),
            errorCode: z.string().default("INVALID_CONTRACT_ADDRESS"),
            message: z
                .string()
                .default("This address doesn't refer to a smart-contract on this network."),
            path: z.string(),
            statusCode: z.number().default(400),
            timestamp: z.string(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new InvalidContractAddress(remapped);
        });

    export type Outbound = {
        RawResponse?: never | undefined;
        context?: SchemasINVALIDCONTRACTADDRESSContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvalidContractAddress> = z
        .instanceof(InvalidContractAddress)
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
                        .lazy(() => SchemasINVALIDCONTRACTADDRESSContext$.outboundSchema)
                        .optional(),
                    errorCode: z.string().default("INVALID_CONTRACT_ADDRESS"),
                    message: z
                        .string()
                        .default("This address doesn't refer to a smart-contract on this network."),
                    path: z.string(),
                    statusCode: z.number().default(400),
                    timestamp: z.string(),
                })
                .transform((v) => {
                    return remap$(v, {
                        rawResponse: "RawResponse",
                    });
                })
        );
}
