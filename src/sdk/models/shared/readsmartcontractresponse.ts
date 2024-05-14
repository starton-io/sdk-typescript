/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ReadSmartContractResponse3 = {};

export type ReadSmartContractResponseParams =
    | ReadSmartContractResponse3
    | string
    | number
    | boolean;

export type ReadSmartContractResponseSchemas3 = {};

export type Response = ReadSmartContractResponseSchemas3 | string | number | boolean | Array<any>;

export type ReadSmartContractResponse = {
    address: string;
    functionName: string;
    network: string;
    /**
     * Smart contract parameters.
     */
    params: Array<ReadSmartContractResponse3 | string | number | boolean>;
    response: ReadSmartContractResponseSchemas3 | string | number | boolean | Array<any>;
};

/** @internal */
export namespace ReadSmartContractResponse3$ {
    export const inboundSchema: z.ZodType<ReadSmartContractResponse3, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadSmartContractResponse3> =
        z.object({});
}

/** @internal */
export namespace ReadSmartContractResponseParams$ {
    export const inboundSchema: z.ZodType<ReadSmartContractResponseParams, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => ReadSmartContractResponse3$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export type Outbound = ReadSmartContractResponse3$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ReadSmartContractResponseParams
    > = z.union([
        z.lazy(() => ReadSmartContractResponse3$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace ReadSmartContractResponseSchemas3$ {
    export const inboundSchema: z.ZodType<
        ReadSmartContractResponseSchemas3,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ReadSmartContractResponseSchemas3
    > = z.object({});
}

/** @internal */
export namespace Response$ {
    export const inboundSchema: z.ZodType<Response, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => ReadSmartContractResponseSchemas3$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
        z.array(z.any()),
    ]);

    export type Outbound =
        | ReadSmartContractResponseSchemas3$.Outbound
        | string
        | number
        | boolean
        | Array<any>;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Response> = z.union([
        z.lazy(() => ReadSmartContractResponseSchemas3$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
        z.array(z.any()),
    ]);
}

/** @internal */
export namespace ReadSmartContractResponse$ {
    export const inboundSchema: z.ZodType<ReadSmartContractResponse, z.ZodTypeDef, unknown> = z
        .object({
            address: z.string(),
            functionName: z.string(),
            network: z.string(),
            params: z.array(
                z.union([
                    z.lazy(() => ReadSmartContractResponse3$.inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            ),
            response: z.union([
                z.lazy(() => ReadSmartContractResponseSchemas3$.inboundSchema),
                z.string(),
                z.number(),
                z.boolean(),
                z.array(z.any()),
            ]),
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
        params: Array<ReadSmartContractResponse3$.Outbound | string | number | boolean>;
        response:
            | ReadSmartContractResponseSchemas3$.Outbound
            | string
            | number
            | boolean
            | Array<any>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ReadSmartContractResponse> = z
        .object({
            address: z.string(),
            functionName: z.string(),
            network: z.string(),
            params: z.array(
                z.union([
                    z.lazy(() => ReadSmartContractResponse3$.outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            ),
            response: z.union([
                z.lazy(() => ReadSmartContractResponseSchemas3$.outboundSchema),
                z.string(),
                z.number(),
                z.boolean(),
                z.array(z.any()),
            ]),
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
