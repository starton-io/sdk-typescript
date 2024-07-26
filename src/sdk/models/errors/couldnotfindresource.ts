/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type SchemasCOULDNOTFINDRESOURCEContext = {};

export type CouldNotFindResourceData = {
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
    rawResponse10?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse11?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse12?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse13?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse14?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse15?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse16?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse17?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse18?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse19?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse2?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse20?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse21?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse22?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse23?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse24?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse25?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse26?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse27?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse28?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse29?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse3?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse30?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse31?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse32?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse33?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse34?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse35?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse36?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse37?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse38?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse39?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse4?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse40?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse41?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse5?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse6?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse7?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse8?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse9?: Response | undefined;
    context?: SchemasCOULDNOTFINDRESOURCEContext | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

export class CouldNotFindResource extends Error {
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
    rawResponse10?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse11?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse12?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse13?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse14?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse15?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse16?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse17?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse18?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse19?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse2?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse20?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse21?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse22?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse23?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse24?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse25?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse26?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse27?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse28?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse29?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse3?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse30?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse31?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse32?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse33?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse34?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse35?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse36?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse37?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse38?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse39?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse4?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse40?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse41?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse5?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse6?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse7?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse8?: Response | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse9?: Response | undefined;
    context?: SchemasCOULDNOTFINDRESOURCEContext | null | undefined;
    errorCode: string;
    path: string;
    statusCode: number;
    timestamp: string;

    /** The original data that was passed to this error instance. */
    data$: CouldNotFindResourceData;

    constructor(err: CouldNotFindResourceData) {
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
        if (err.rawResponse10 != null) {
            this.rawResponse10 = err.rawResponse10;
        }
        if (err.rawResponse11 != null) {
            this.rawResponse11 = err.rawResponse11;
        }
        if (err.rawResponse12 != null) {
            this.rawResponse12 = err.rawResponse12;
        }
        if (err.rawResponse13 != null) {
            this.rawResponse13 = err.rawResponse13;
        }
        if (err.rawResponse14 != null) {
            this.rawResponse14 = err.rawResponse14;
        }
        if (err.rawResponse15 != null) {
            this.rawResponse15 = err.rawResponse15;
        }
        if (err.rawResponse16 != null) {
            this.rawResponse16 = err.rawResponse16;
        }
        if (err.rawResponse17 != null) {
            this.rawResponse17 = err.rawResponse17;
        }
        if (err.rawResponse18 != null) {
            this.rawResponse18 = err.rawResponse18;
        }
        if (err.rawResponse19 != null) {
            this.rawResponse19 = err.rawResponse19;
        }
        if (err.rawResponse2 != null) {
            this.rawResponse2 = err.rawResponse2;
        }
        if (err.rawResponse20 != null) {
            this.rawResponse20 = err.rawResponse20;
        }
        if (err.rawResponse21 != null) {
            this.rawResponse21 = err.rawResponse21;
        }
        if (err.rawResponse22 != null) {
            this.rawResponse22 = err.rawResponse22;
        }
        if (err.rawResponse23 != null) {
            this.rawResponse23 = err.rawResponse23;
        }
        if (err.rawResponse24 != null) {
            this.rawResponse24 = err.rawResponse24;
        }
        if (err.rawResponse25 != null) {
            this.rawResponse25 = err.rawResponse25;
        }
        if (err.rawResponse26 != null) {
            this.rawResponse26 = err.rawResponse26;
        }
        if (err.rawResponse27 != null) {
            this.rawResponse27 = err.rawResponse27;
        }
        if (err.rawResponse28 != null) {
            this.rawResponse28 = err.rawResponse28;
        }
        if (err.rawResponse29 != null) {
            this.rawResponse29 = err.rawResponse29;
        }
        if (err.rawResponse3 != null) {
            this.rawResponse3 = err.rawResponse3;
        }
        if (err.rawResponse30 != null) {
            this.rawResponse30 = err.rawResponse30;
        }
        if (err.rawResponse31 != null) {
            this.rawResponse31 = err.rawResponse31;
        }
        if (err.rawResponse32 != null) {
            this.rawResponse32 = err.rawResponse32;
        }
        if (err.rawResponse33 != null) {
            this.rawResponse33 = err.rawResponse33;
        }
        if (err.rawResponse34 != null) {
            this.rawResponse34 = err.rawResponse34;
        }
        if (err.rawResponse35 != null) {
            this.rawResponse35 = err.rawResponse35;
        }
        if (err.rawResponse36 != null) {
            this.rawResponse36 = err.rawResponse36;
        }
        if (err.rawResponse37 != null) {
            this.rawResponse37 = err.rawResponse37;
        }
        if (err.rawResponse38 != null) {
            this.rawResponse38 = err.rawResponse38;
        }
        if (err.rawResponse39 != null) {
            this.rawResponse39 = err.rawResponse39;
        }
        if (err.rawResponse4 != null) {
            this.rawResponse4 = err.rawResponse4;
        }
        if (err.rawResponse40 != null) {
            this.rawResponse40 = err.rawResponse40;
        }
        if (err.rawResponse41 != null) {
            this.rawResponse41 = err.rawResponse41;
        }
        if (err.rawResponse5 != null) {
            this.rawResponse5 = err.rawResponse5;
        }
        if (err.rawResponse6 != null) {
            this.rawResponse6 = err.rawResponse6;
        }
        if (err.rawResponse7 != null) {
            this.rawResponse7 = err.rawResponse7;
        }
        if (err.rawResponse8 != null) {
            this.rawResponse8 = err.rawResponse8;
        }
        if (err.rawResponse9 != null) {
            this.rawResponse9 = err.rawResponse9;
        }
        if (err.context != null) {
            this.context = err.context;
        }
        this.errorCode = err.errorCode;
        this.path = err.path;
        this.statusCode = err.statusCode;
        this.timestamp = err.timestamp;

        this.name = "CouldNotFindResource";
    }
}

/** @internal */
export const SchemasCOULDNOTFINDRESOURCEContext$inboundSchema: z.ZodType<
    SchemasCOULDNOTFINDRESOURCEContext,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type SchemasCOULDNOTFINDRESOURCEContext$Outbound = {};

/** @internal */
export const SchemasCOULDNOTFINDRESOURCEContext$outboundSchema: z.ZodType<
    SchemasCOULDNOTFINDRESOURCEContext$Outbound,
    z.ZodTypeDef,
    SchemasCOULDNOTFINDRESOURCEContext
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SchemasCOULDNOTFINDRESOURCEContext$ {
    /** @deprecated use `SchemasCOULDNOTFINDRESOURCEContext$inboundSchema` instead. */
    export const inboundSchema = SchemasCOULDNOTFINDRESOURCEContext$inboundSchema;
    /** @deprecated use `SchemasCOULDNOTFINDRESOURCEContext$outboundSchema` instead. */
    export const outboundSchema = SchemasCOULDNOTFINDRESOURCEContext$outboundSchema;
    /** @deprecated use `SchemasCOULDNOTFINDRESOURCEContext$Outbound` instead. */
    export type Outbound = SchemasCOULDNOTFINDRESOURCEContext$Outbound;
}

/** @internal */
export const CouldNotFindResource$inboundSchema: z.ZodType<
    CouldNotFindResource,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        RawResponse: z.instanceof(Response).optional(),
        RawResponse1: z.instanceof(Response).optional(),
        RawResponse10: z.instanceof(Response).optional(),
        RawResponse11: z.instanceof(Response).optional(),
        RawResponse12: z.instanceof(Response).optional(),
        RawResponse13: z.instanceof(Response).optional(),
        RawResponse14: z.instanceof(Response).optional(),
        RawResponse15: z.instanceof(Response).optional(),
        RawResponse16: z.instanceof(Response).optional(),
        RawResponse17: z.instanceof(Response).optional(),
        RawResponse18: z.instanceof(Response).optional(),
        RawResponse19: z.instanceof(Response).optional(),
        RawResponse2: z.instanceof(Response).optional(),
        RawResponse20: z.instanceof(Response).optional(),
        RawResponse21: z.instanceof(Response).optional(),
        RawResponse22: z.instanceof(Response).optional(),
        RawResponse23: z.instanceof(Response).optional(),
        RawResponse24: z.instanceof(Response).optional(),
        RawResponse25: z.instanceof(Response).optional(),
        RawResponse26: z.instanceof(Response).optional(),
        RawResponse27: z.instanceof(Response).optional(),
        RawResponse28: z.instanceof(Response).optional(),
        RawResponse29: z.instanceof(Response).optional(),
        RawResponse3: z.instanceof(Response).optional(),
        RawResponse30: z.instanceof(Response).optional(),
        RawResponse31: z.instanceof(Response).optional(),
        RawResponse32: z.instanceof(Response).optional(),
        RawResponse33: z.instanceof(Response).optional(),
        RawResponse34: z.instanceof(Response).optional(),
        RawResponse35: z.instanceof(Response).optional(),
        RawResponse36: z.instanceof(Response).optional(),
        RawResponse37: z.instanceof(Response).optional(),
        RawResponse38: z.instanceof(Response).optional(),
        RawResponse39: z.instanceof(Response).optional(),
        RawResponse4: z.instanceof(Response).optional(),
        RawResponse40: z.instanceof(Response).optional(),
        RawResponse41: z.instanceof(Response).optional(),
        RawResponse5: z.instanceof(Response).optional(),
        RawResponse6: z.instanceof(Response).optional(),
        RawResponse7: z.instanceof(Response).optional(),
        RawResponse8: z.instanceof(Response).optional(),
        RawResponse9: z.instanceof(Response).optional(),
        context: z
            .nullable(z.lazy(() => SchemasCOULDNOTFINDRESOURCEContext$inboundSchema))
            .optional(),
        errorCode: z.string().default("COULD_NOT_FIND_RESOURCE"),
        message: z.string().default("Could not found resource."),
        path: z.string(),
        statusCode: z.number().default(404),
        timestamp: z.string(),
    })
    .transform((v) => {
        const remapped = remap$(v, {
            RawResponse: "rawResponse",
            RawResponse1: "rawResponse1",
            RawResponse10: "rawResponse10",
            RawResponse11: "rawResponse11",
            RawResponse12: "rawResponse12",
            RawResponse13: "rawResponse13",
            RawResponse14: "rawResponse14",
            RawResponse15: "rawResponse15",
            RawResponse16: "rawResponse16",
            RawResponse17: "rawResponse17",
            RawResponse18: "rawResponse18",
            RawResponse19: "rawResponse19",
            RawResponse2: "rawResponse2",
            RawResponse20: "rawResponse20",
            RawResponse21: "rawResponse21",
            RawResponse22: "rawResponse22",
            RawResponse23: "rawResponse23",
            RawResponse24: "rawResponse24",
            RawResponse25: "rawResponse25",
            RawResponse26: "rawResponse26",
            RawResponse27: "rawResponse27",
            RawResponse28: "rawResponse28",
            RawResponse29: "rawResponse29",
            RawResponse3: "rawResponse3",
            RawResponse30: "rawResponse30",
            RawResponse31: "rawResponse31",
            RawResponse32: "rawResponse32",
            RawResponse33: "rawResponse33",
            RawResponse34: "rawResponse34",
            RawResponse35: "rawResponse35",
            RawResponse36: "rawResponse36",
            RawResponse37: "rawResponse37",
            RawResponse38: "rawResponse38",
            RawResponse39: "rawResponse39",
            RawResponse4: "rawResponse4",
            RawResponse40: "rawResponse40",
            RawResponse41: "rawResponse41",
            RawResponse5: "rawResponse5",
            RawResponse6: "rawResponse6",
            RawResponse7: "rawResponse7",
            RawResponse8: "rawResponse8",
            RawResponse9: "rawResponse9",
        });

        return new CouldNotFindResource(remapped);
    });

/** @internal */
export type CouldNotFindResource$Outbound = {
    RawResponse?: never | undefined;
    RawResponse1?: never | undefined;
    RawResponse10?: never | undefined;
    RawResponse11?: never | undefined;
    RawResponse12?: never | undefined;
    RawResponse13?: never | undefined;
    RawResponse14?: never | undefined;
    RawResponse15?: never | undefined;
    RawResponse16?: never | undefined;
    RawResponse17?: never | undefined;
    RawResponse18?: never | undefined;
    RawResponse19?: never | undefined;
    RawResponse2?: never | undefined;
    RawResponse20?: never | undefined;
    RawResponse21?: never | undefined;
    RawResponse22?: never | undefined;
    RawResponse23?: never | undefined;
    RawResponse24?: never | undefined;
    RawResponse25?: never | undefined;
    RawResponse26?: never | undefined;
    RawResponse27?: never | undefined;
    RawResponse28?: never | undefined;
    RawResponse29?: never | undefined;
    RawResponse3?: never | undefined;
    RawResponse30?: never | undefined;
    RawResponse31?: never | undefined;
    RawResponse32?: never | undefined;
    RawResponse33?: never | undefined;
    RawResponse34?: never | undefined;
    RawResponse35?: never | undefined;
    RawResponse36?: never | undefined;
    RawResponse37?: never | undefined;
    RawResponse38?: never | undefined;
    RawResponse39?: never | undefined;
    RawResponse4?: never | undefined;
    RawResponse40?: never | undefined;
    RawResponse41?: never | undefined;
    RawResponse5?: never | undefined;
    RawResponse6?: never | undefined;
    RawResponse7?: never | undefined;
    RawResponse8?: never | undefined;
    RawResponse9?: never | undefined;
    context?: SchemasCOULDNOTFINDRESOURCEContext$Outbound | null | undefined;
    errorCode: string;
    message: string;
    path: string;
    statusCode: number;
    timestamp: string;
};

/** @internal */
export const CouldNotFindResource$outboundSchema: z.ZodType<
    CouldNotFindResource$Outbound,
    z.ZodTypeDef,
    CouldNotFindResource
> = z
    .instanceof(CouldNotFindResource)
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
                rawResponse10: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse11: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse12: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse13: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse14: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse15: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse16: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse17: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse18: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse19: z
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
                rawResponse20: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse21: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse22: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse23: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse24: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse25: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse26: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse27: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse28: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse29: z
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
                rawResponse30: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse31: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse32: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse33: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse34: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse35: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse36: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse37: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse38: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse39: z
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
                rawResponse40: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse41: z
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
                rawResponse6: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse7: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse8: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                rawResponse9: z
                    .instanceof(Response)
                    .transform(() => {
                        throw new Error("Response cannot be serialized");
                    })
                    .optional(),
                context: z
                    .nullable(z.lazy(() => SchemasCOULDNOTFINDRESOURCEContext$outboundSchema))
                    .optional(),
                errorCode: z.string().default("COULD_NOT_FIND_RESOURCE"),
                message: z.string().default("Could not found resource."),
                path: z.string(),
                statusCode: z.number().default(404),
                timestamp: z.string(),
            })
            .transform((v) => {
                return remap$(v, {
                    rawResponse: "RawResponse",
                    rawResponse1: "RawResponse1",
                    rawResponse10: "RawResponse10",
                    rawResponse11: "RawResponse11",
                    rawResponse12: "RawResponse12",
                    rawResponse13: "RawResponse13",
                    rawResponse14: "RawResponse14",
                    rawResponse15: "RawResponse15",
                    rawResponse16: "RawResponse16",
                    rawResponse17: "RawResponse17",
                    rawResponse18: "RawResponse18",
                    rawResponse19: "RawResponse19",
                    rawResponse2: "RawResponse2",
                    rawResponse20: "RawResponse20",
                    rawResponse21: "RawResponse21",
                    rawResponse22: "RawResponse22",
                    rawResponse23: "RawResponse23",
                    rawResponse24: "RawResponse24",
                    rawResponse25: "RawResponse25",
                    rawResponse26: "RawResponse26",
                    rawResponse27: "RawResponse27",
                    rawResponse28: "RawResponse28",
                    rawResponse29: "RawResponse29",
                    rawResponse3: "RawResponse3",
                    rawResponse30: "RawResponse30",
                    rawResponse31: "RawResponse31",
                    rawResponse32: "RawResponse32",
                    rawResponse33: "RawResponse33",
                    rawResponse34: "RawResponse34",
                    rawResponse35: "RawResponse35",
                    rawResponse36: "RawResponse36",
                    rawResponse37: "RawResponse37",
                    rawResponse38: "RawResponse38",
                    rawResponse39: "RawResponse39",
                    rawResponse4: "RawResponse4",
                    rawResponse40: "RawResponse40",
                    rawResponse41: "RawResponse41",
                    rawResponse5: "RawResponse5",
                    rawResponse6: "RawResponse6",
                    rawResponse7: "RawResponse7",
                    rawResponse8: "RawResponse8",
                    rawResponse9: "RawResponse9",
                });
            })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CouldNotFindResource$ {
    /** @deprecated use `CouldNotFindResource$inboundSchema` instead. */
    export const inboundSchema = CouldNotFindResource$inboundSchema;
    /** @deprecated use `CouldNotFindResource$outboundSchema` instead. */
    export const outboundSchema = CouldNotFindResource$outboundSchema;
    /** @deprecated use `CouldNotFindResource$Outbound` instead. */
    export type Outbound = CouldNotFindResource$Outbound;
}
