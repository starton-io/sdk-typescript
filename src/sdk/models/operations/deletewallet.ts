/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteWalletRequest = {
    address: string;
    deleteKeyOnKms?: boolean | undefined;
};

export type DeleteWalletResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    number?: number | undefined;
};

/** @internal */
export namespace DeleteWalletRequest$ {
    export type Inbound = {
        address: string;
        deleteKeyOnKms?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteWalletRequest, z.ZodTypeDef, Inbound> = z
        .object({
            address: z.string(),
            deleteKeyOnKms: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                address: v.address,
                ...(v.deleteKeyOnKms === undefined ? null : { deleteKeyOnKms: v.deleteKeyOnKms }),
            };
        });

    export type Outbound = {
        address: string;
        deleteKeyOnKms?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteWalletRequest> = z
        .object({
            address: z.string(),
            deleteKeyOnKms: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                address: v.address,
                ...(v.deleteKeyOnKms === undefined ? null : { deleteKeyOnKms: v.deleteKeyOnKms }),
            };
        });
}

/** @internal */
export namespace DeleteWalletResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        number?: number | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteWalletResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            number: z.number().optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.number === undefined ? null : { number: v.number }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        number?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteWalletResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            number: z.number().optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.number === undefined ? null : { number: v.number }),
            };
        });
}
