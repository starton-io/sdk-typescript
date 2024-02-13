/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type INVALIDCONTRACTADDRESSContext = {};

export type InvalidContractAddress = {
    context?: INVALIDCONTRACTADDRESSContext | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace INVALIDCONTRACTADDRESSContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<INVALIDCONTRACTADDRESSContext, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, INVALIDCONTRACTADDRESSContext> =
        z.object({});
}

/** @internal */
export namespace InvalidContractAddress$ {
    export type Inbound = {
        context?: INVALIDCONTRACTADDRESSContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<InvalidContractAddress, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.lazy(() => INVALIDCONTRACTADDRESSContext$.inboundSchema).optional(),
            errorCode: z.string().default("INVALID_CONTRACT_ADDRESS"),
            message: z
                .string()
                .default("This address doesn't refer to a smart-contract on this network."),
            path: z.string(),
            statusCode: z.number().default(400),
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
        context?: INVALIDCONTRACTADDRESSContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InvalidContractAddress> = z
        .object({
            context: z.lazy(() => INVALIDCONTRACTADDRESSContext$.outboundSchema).optional(),
            errorCode: z.string().default("INVALID_CONTRACT_ADDRESS"),
            message: z
                .string()
                .default("This address doesn't refer to a smart-contract on this network."),
            path: z.string(),
            statusCode: z.number().default(400),
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
