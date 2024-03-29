/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type COULDNOTESTIMATEGASPRICEContext = {};

export type CouldNotEstimateGasPrice = {
    context?: COULDNOTESTIMATEGASPRICEContext | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace COULDNOTESTIMATEGASPRICEContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<COULDNOTESTIMATEGASPRICEContext, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        COULDNOTESTIMATEGASPRICEContext
    > = z.object({});
}

/** @internal */
export namespace CouldNotEstimateGasPrice$ {
    export type Inbound = {
        context?: COULDNOTESTIMATEGASPRICEContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<CouldNotEstimateGasPrice, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.lazy(() => COULDNOTESTIMATEGASPRICEContext$.inboundSchema).optional(),
            errorCode: z.string().default("COULD_NOT_ESTIMATE_GAS_PRICE"),
            message: z.string().default("Could not estimate gas price."),
            path: z.string(),
            statusCode: z.number().default(500),
            timestamp: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.context === undefined ? null : { context: v.context }),
                errorCode: v.errorCode,
                message: v.message,
                path: v.path,
                statusCode: v.statusCode,
                timestamp: v.timestamp,
            };
        });

    export type Outbound = {
        context?: COULDNOTESTIMATEGASPRICEContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CouldNotEstimateGasPrice> = z
        .object({
            context: z.lazy(() => COULDNOTESTIMATEGASPRICEContext$.outboundSchema).optional(),
            errorCode: z.string().default("COULD_NOT_ESTIMATE_GAS_PRICE"),
            message: z.string().default("Could not estimate gas price."),
            path: z.string(),
            statusCode: z.number().default(500),
            timestamp: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.context === undefined ? null : { context: v.context }),
                errorCode: v.errorCode,
                message: v.message,
                path: v.path,
                statusCode: v.statusCode,
                timestamp: v.timestamp,
            };
        });
}
