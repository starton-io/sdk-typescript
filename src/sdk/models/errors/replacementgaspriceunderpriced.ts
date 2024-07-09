/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasREPLACEMENTGASPRICEUNDERPRICEDContext = {};

export type ReplacementGasPriceUnderpricedData = {
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
    context?: SchemasREPLACEMENTGASPRICEUNDERPRICEDContext | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class ReplacementGasPriceUnderpriced extends Error {
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
    context?: SchemasREPLACEMENTGASPRICEUNDERPRICEDContext | null | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: ReplacementGasPriceUnderpricedData;

    constructor(err: ReplacementGasPriceUnderpricedData) {
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
        if (err.context != null) {
            this.context = err.context;
        }
        this.errorCode = err.errorCode;
        this.path = err.path;
        this.statusCode = err.statusCode;
        this.timestamp = err.timestamp;

        this.name = "ReplacementGasPriceUnderpriced";
    }
}

/** @internal */
export const SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$inboundSchema: z.ZodType<
    SchemasREPLACEMENTGASPRICEUNDERPRICEDContext,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$Outbound = {};

/** @internal */
export const SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$outboundSchema: z.ZodType<
    SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$Outbound,
    z.ZodTypeDef,
    SchemasREPLACEMENTGASPRICEUNDERPRICEDContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$ {
    /** @deprecated use `SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$inboundSchema` instead. */
    export const inboundSchema = SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$inboundSchema;
    /** @deprecated use `SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$outboundSchema` instead. */
    export const outboundSchema = SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$outboundSchema;
    /** @deprecated use `SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$Outbound` instead. */
    export type Outbound = SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$Outbound;
}

/** @internal */
export const ReplacementGasPriceUnderpriced$inboundSchema: z.ZodType<
    ReplacementGasPriceUnderpriced,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RawResponse: z.instanceof(Response).optional(),
        RawResponse1: z.instanceof(Response).optional(),
        RawResponse2: z.instanceof(Response).optional(),
        context: z
            .nullable(z.lazy(() => SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$inboundSchema))
            .optional(),
        errorCode: z.string().default("REPLACEMENT_GAS_PRICE_UNDERPRICED"),
        message: z
            .string()
            .default(
                "Your transaction is underpriced. You try to replace an existing transaction with not enough gas fee."
            ),
        path: z.string(),
        statusCode: z.number().default(422),
        timestamp: z.string(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
            RawResponse1: "rawResponse1",
            RawResponse2: "rawResponse2",
        });

        return new ReplacementGasPriceUnderpriced(remapped);
    });

/** @internal */
export type ReplacementGasPriceUnderpriced$Outbound = {
    RawResponse?: never | undefined;
    RawResponse1?: never | undefined;
    RawResponse2?: never | undefined;
    context?: SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$Outbound | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

/** @internal */
export const ReplacementGasPriceUnderpriced$outboundSchema: z.ZodType<
    ReplacementGasPriceUnderpriced$Outbound,
    z.ZodTypeDef,
    ReplacementGasPriceUnderpriced
> = z
    .instanceof(ReplacementGasPriceUnderpriced)
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
                context: z
                    .nullable(
                        z.lazy(() => SchemasREPLACEMENTGASPRICEUNDERPRICEDContext$outboundSchema)
                    )
                    .optional(),
                errorCode: z.string().default("REPLACEMENT_GAS_PRICE_UNDERPRICED"),
                message: z
                    .string()
                    .default(
                        "Your transaction is underpriced. You try to replace an existing transaction with not enough gas fee."
                    ),
                path: z.string(),
                statusCode: z.number().default(422),
                timestamp: z.string(),
            })
            .transform((v) => {
                return remap$(v, {
                    rawResponse: "RawResponse",
                    rawResponse1: "RawResponse1",
                    rawResponse2: "RawResponse2",
                });
            })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReplacementGasPriceUnderpriced$ {
    /** @deprecated use `ReplacementGasPriceUnderpriced$inboundSchema` instead. */
    export const inboundSchema = ReplacementGasPriceUnderpriced$inboundSchema;
    /** @deprecated use `ReplacementGasPriceUnderpriced$outboundSchema` instead. */
    export const outboundSchema = ReplacementGasPriceUnderpriced$outboundSchema;
    /** @deprecated use `ReplacementGasPriceUnderpriced$Outbound` instead. */
    export type Outbound = ReplacementGasPriceUnderpriced$Outbound;
}
