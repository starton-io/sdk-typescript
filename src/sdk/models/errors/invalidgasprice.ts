/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasINVALIDGASPRICEContext = {};

export type InvalidGasPriceData = {
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
    context?: SchemasINVALIDGASPRICEContext | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class InvalidGasPrice extends Error {
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
    context?: SchemasINVALIDGASPRICEContext | null | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: InvalidGasPriceData;

    constructor(err: InvalidGasPriceData) {
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

        this.name = "InvalidGasPrice";
    }
}

/** @internal */
export const SchemasINVALIDGASPRICEContext$inboundSchema: z.ZodType<
    SchemasINVALIDGASPRICEContext,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type SchemasINVALIDGASPRICEContext$Outbound = {};

/** @internal */
export const SchemasINVALIDGASPRICEContext$outboundSchema: z.ZodType<
    SchemasINVALIDGASPRICEContext$Outbound,
    z.ZodTypeDef,
    SchemasINVALIDGASPRICEContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasINVALIDGASPRICEContext$ {
    /** @deprecated use `SchemasINVALIDGASPRICEContext$inboundSchema` instead. */
    export const inboundSchema = SchemasINVALIDGASPRICEContext$inboundSchema;
    /** @deprecated use `SchemasINVALIDGASPRICEContext$outboundSchema` instead. */
    export const outboundSchema = SchemasINVALIDGASPRICEContext$outboundSchema;
    /** @deprecated use `SchemasINVALIDGASPRICEContext$Outbound` instead. */
    export type Outbound = SchemasINVALIDGASPRICEContext$Outbound;
}

/** @internal */
export const InvalidGasPrice$inboundSchema: z.ZodType<InvalidGasPrice, z.ZodTypeDef, unknown> = z
    .object({
        RawResponse: z.instanceof(Response).optional(),
        RawResponse1: z.instanceof(Response).optional(),
        RawResponse2: z.instanceof(Response).optional(),
        RawResponse3: z.instanceof(Response).optional(),
        context: z.nullable(z.lazy(() => SchemasINVALIDGASPRICEContext$inboundSchema)).optional(),
        errorCode: z.string().default("INVALID_GAS_PRICE"),
        message: z.string().default("Wrong gas price."),
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

        return new InvalidGasPrice(remapped);
    });

/** @internal */
export type InvalidGasPrice$Outbound = {
    RawResponse?: never | undefined;
    RawResponse1?: never | undefined;
    RawResponse2?: never | undefined;
    RawResponse3?: never | undefined;
    context?: SchemasINVALIDGASPRICEContext$Outbound | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

/** @internal */
export const InvalidGasPrice$outboundSchema: z.ZodType<
    InvalidGasPrice$Outbound,
    z.ZodTypeDef,
    InvalidGasPrice
> = z
    .instanceof(InvalidGasPrice)
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
                    .nullable(z.lazy(() => SchemasINVALIDGASPRICEContext$outboundSchema))
                    .optional(),
                errorCode: z.string().default("INVALID_GAS_PRICE"),
                message: z.string().default("Wrong gas price."),
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
export namespace InvalidGasPrice$ {
    /** @deprecated use `InvalidGasPrice$inboundSchema` instead. */
    export const inboundSchema = InvalidGasPrice$inboundSchema;
    /** @deprecated use `InvalidGasPrice$outboundSchema` instead. */
    export const outboundSchema = InvalidGasPrice$outboundSchema;
    /** @deprecated use `InvalidGasPrice$Outbound` instead. */
    export type Outbound = InvalidGasPrice$Outbound;
}
