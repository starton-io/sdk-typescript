/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasCONTRACTNOTYETDEPLOYEDContext = {};

export type ContractNotYetDeployedData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    context?: SchemasCONTRACTNOTYETDEPLOYEDContext | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class ContractNotYetDeployed extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    context?: SchemasCONTRACTNOTYETDEPLOYEDContext | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: ContractNotYetDeployedData;

    constructor(err: ContractNotYetDeployedData) {
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

        this.name = "ContractNotYetDeployed";
    }
}

/** @internal */
export namespace SchemasCONTRACTNOTYETDEPLOYEDContext$ {
    export const inboundSchema: z.ZodType<
        SchemasCONTRACTNOTYETDEPLOYEDContext,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SchemasCONTRACTNOTYETDEPLOYEDContext
    > = z.object({});
}

/** @internal */
export namespace ContractNotYetDeployed$ {
    export const inboundSchema: z.ZodType<ContractNotYetDeployed, z.ZodTypeDef, unknown> = z
        .object({
            RawResponse: z.instanceof(Response).optional(),
            context: z.lazy(() => SchemasCONTRACTNOTYETDEPLOYEDContext$.inboundSchema).optional(),
            errorCode: z.string().default("CONTRACT_NOT_YET_DEPLOYED"),
            message: z.string().default("Smart contract is not deployed on the blockchain yet."),
            path: z.string(),
            statusCode: z.number().default(400),
            timestamp: z.string(),
        })
        .transform((v) => {
            const remapped = remap$(v, {
                RawResponse: "rawResponse",
            });

            return new ContractNotYetDeployed(remapped);
        });

    export type Outbound = {
        RawResponse?: never | undefined;
        context?: SchemasCONTRACTNOTYETDEPLOYEDContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContractNotYetDeployed> = z
        .instanceof(ContractNotYetDeployed)
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
                        .lazy(() => SchemasCONTRACTNOTYETDEPLOYEDContext$.outboundSchema)
                        .optional(),
                    errorCode: z.string().default("CONTRACT_NOT_YET_DEPLOYED"),
                    message: z
                        .string()
                        .default("Smart contract is not deployed on the blockchain yet."),
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
