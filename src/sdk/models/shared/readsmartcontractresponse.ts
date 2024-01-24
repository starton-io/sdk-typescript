/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type ReadSmartContractResponseParams =
    | string
    | number
    | Array<string | number | Array<models.Params>>;

export type ReadSmartContractResponse = {
    address: string;
    functionName: string;
    network: string;
    /**
     * Smart contract parameters.
     */
    params: Array<string | number | Array<string | number | Array<models.Params>>>;
    response: string;
};

/** @internal */
export namespace ReadSmartContractResponseParams$ {
    export type Inbound = string | number | Array<string | number | Array<models.Params$.Inbound>>;

    export type Outbound =
        | string
        | number
        | Array<string | number | Array<models.Params$.Outbound>>;

    export const inboundSchema: z.ZodType<ReadSmartContractResponseParams, z.ZodTypeDef, Inbound> =
        z.union([
            z.string(),
            z.number(),
            z.array(z.union([z.string(), z.number(), z.array(models.Params$.inboundSchema)])),
        ]);

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ReadSmartContractResponseParams
    > = z.union([
        z.string(),
        z.number(),
        z.array(z.union([z.string(), z.number(), z.array(models.Params$.outboundSchema)])),
    ]);
}

/** @internal */
export namespace ReadSmartContractResponse$ {
    export type Inbound = {
        address: string;
        functionName: string;
        network: string;
        params: Array<string | number | Array<string | number | Array<models.Params$.Inbound>>>;
        response: string;
    };

    export const inboundSchema: z.ZodType<ReadSmartContractResponse, z.ZodTypeDef, Inbound> = z
        .object({
            address: z.string(),
            functionName: z.string(),
            network: z.string(),
            params: z.array(
                z.union([
                    z.string(),
                    z.number(),
                    z.array(
                        z.union([z.string(), z.number(), z.array(models.Params$.inboundSchema)])
                    ),
                ])
            ),
            response: z.string(),
        })
        .transform((v) => {
            return {
                address: v.address,
                functionName: v.functionName,
                network: v.network,
                params: v.params,
                response: v.response,
            };
        });

    export type Outbound = {
        address: string;
        functionName: string;
        network: string;
        params: Array<string | number | Array<string | number | Array<models.Params$.Outbound>>>;
        response: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadSmartContractResponse> = z
        .object({
            address: z.string(),
            functionName: z.string(),
            network: z.string(),
            params: z.array(
                z.union([
                    z.string(),
                    z.number(),
                    z.array(
                        z.union([z.string(), z.number(), z.array(models.Params$.outboundSchema)])
                    ),
                ])
            ),
            response: z.string(),
        })
        .transform((v) => {
            return {
                address: v.address,
                functionName: v.functionName,
                network: v.network,
                params: v.params,
                response: v.response,
            };
        });
}
