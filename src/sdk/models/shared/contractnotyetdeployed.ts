/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type CONTRACTNOTYETDEPLOYEDContext = {};

export type ContractNotYetDeployed = {
    context?: CONTRACTNOTYETDEPLOYEDContext | undefined;
    errorCode?: string | undefined;
    message?: string | undefined;
    path: string;
    statusCode?: number | undefined;
    timestamp: string;
};

/** @internal */
export namespace CONTRACTNOTYETDEPLOYEDContext$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<CONTRACTNOTYETDEPLOYEDContext, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CONTRACTNOTYETDEPLOYEDContext> =
        z.object({});
}

/** @internal */
export namespace ContractNotYetDeployed$ {
    export type Inbound = {
        context?: CONTRACTNOTYETDEPLOYEDContext$.Inbound | undefined;
        errorCode?: string | undefined;
        message?: string | undefined;
        path: string;
        statusCode?: number | undefined;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<ContractNotYetDeployed, z.ZodTypeDef, Inbound> = z
        .object({
            context: z.lazy(() => CONTRACTNOTYETDEPLOYEDContext$.inboundSchema).optional(),
            errorCode: z.string().default("CONTRACT_NOT_YET_DEPLOYED"),
            message: z.string().default("Smart contract is not deployed on the blockchain yet."),
            path: z.string(),
            statusCode: z.number().default(400),
            timestamp: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.context === undefined ? null : { context: v.context }),
                ...(v.errorCode === undefined ? null : { errorCode: v.errorCode }),
                ...(v.message === undefined ? null : { message: v.message }),
                path: v.path,
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                timestamp: v.timestamp,
            };
        });

    export type Outbound = {
        context?: CONTRACTNOTYETDEPLOYEDContext$.Outbound | undefined;
        errorCode: string;
        message: string;
        path: string;
        statusCode: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContractNotYetDeployed> = z
        .object({
            context: z.lazy(() => CONTRACTNOTYETDEPLOYEDContext$.outboundSchema).optional(),
            errorCode: z.string().default("CONTRACT_NOT_YET_DEPLOYED"),
            message: z.string().default("Smart contract is not deployed on the blockchain yet."),
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