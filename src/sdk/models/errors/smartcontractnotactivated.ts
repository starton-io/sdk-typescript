/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasSMARTCONTRACTNOTACTIVATEDContext = {};

export type SmartContractNotActivatedData = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    context?: SchemasSMARTCONTRACTNOTACTIVATEDContext | null | undefined;
    errorCode?: string;
    message?: string;
    path: string;
    statusCode?: number;
    timestamp: string;
};

export class SmartContractNotActivated extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    context?: SchemasSMARTCONTRACTNOTACTIVATEDContext | null | undefined;
    errorCode?: string;
    path: string;
    statusCode?: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: SmartContractNotActivatedData;

    constructor(err: SmartContractNotActivatedData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }
        if (err.context != null) {
            this.context = err.context;
        }
        if (err.errorCode != null) {
            this.errorCode = err.errorCode;
        }
        this.path = err.path;
        if (err.statusCode != null) {
            this.statusCode = err.statusCode;
        }
        this.timestamp = err.timestamp;

        this.name = "SmartContractNotActivated";
    }
}

/** @internal */
export const SchemasSMARTCONTRACTNOTACTIVATEDContext$inboundSchema: z.ZodType<
    SchemasSMARTCONTRACTNOTACTIVATEDContext,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type SchemasSMARTCONTRACTNOTACTIVATEDContext$Outbound = {};

/** @internal */
export const SchemasSMARTCONTRACTNOTACTIVATEDContext$outboundSchema: z.ZodType<
    SchemasSMARTCONTRACTNOTACTIVATEDContext$Outbound,
    z.ZodTypeDef,
    SchemasSMARTCONTRACTNOTACTIVATEDContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasSMARTCONTRACTNOTACTIVATEDContext$ {
    /** @deprecated use `SchemasSMARTCONTRACTNOTACTIVATEDContext$inboundSchema` instead. */
    export const inboundSchema = SchemasSMARTCONTRACTNOTACTIVATEDContext$inboundSchema;
    /** @deprecated use `SchemasSMARTCONTRACTNOTACTIVATEDContext$outboundSchema` instead. */
    export const outboundSchema = SchemasSMARTCONTRACTNOTACTIVATEDContext$outboundSchema;
    /** @deprecated use `SchemasSMARTCONTRACTNOTACTIVATEDContext$Outbound` instead. */
    export type Outbound = SchemasSMARTCONTRACTNOTACTIVATEDContext$Outbound;
}

/** @internal */
export const SmartContractNotActivated$inboundSchema: z.ZodType<
    SmartContractNotActivated,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RawResponse: z.instanceof(Response).optional(),
        context: z
            .nullable(z.lazy(() => SchemasSMARTCONTRACTNOTACTIVATEDContext$inboundSchema))
            .optional(),
        errorCode: z.string().default("SMART_CONTRACT_NOT_ACTIVATED"),
        message: z.string().default("This smart contract is not active."),
        path: z.string(),
        statusCode: z.number().default(400),
        timestamp: z.string(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
        });

        return new SmartContractNotActivated(remapped);
    });

/** @internal */
export type SmartContractNotActivated$Outbound = {
    RawResponse?: never | undefined;
    context?: SchemasSMARTCONTRACTNOTACTIVATEDContext$Outbound | null | undefined;
    errorCode?: string;
    message?: string;
    path: string;
    statusCode?: number;
    timestamp: string;
};

/** @internal */
export const SmartContractNotActivated$outboundSchema: z.ZodType<
    SmartContractNotActivated$Outbound,
    z.ZodTypeDef,
    SmartContractNotActivated
> = z
    .instanceof(SmartContractNotActivated)
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
                    .nullable(z.lazy(() => SchemasSMARTCONTRACTNOTACTIVATEDContext$outboundSchema))
                    .optional(),
                errorCode: z.string().default("SMART_CONTRACT_NOT_ACTIVATED"),
                message: z.string().default("This smart contract is not active."),
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmartContractNotActivated$ {
    /** @deprecated use `SmartContractNotActivated$inboundSchema` instead. */
    export const inboundSchema = SmartContractNotActivated$inboundSchema;
    /** @deprecated use `SmartContractNotActivated$outboundSchema` instead. */
    export const outboundSchema = SmartContractNotActivated$outboundSchema;
    /** @deprecated use `SmartContractNotActivated$Outbound` instead. */
    export type Outbound = SmartContractNotActivated$Outbound;
}
