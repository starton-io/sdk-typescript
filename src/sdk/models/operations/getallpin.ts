/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export enum Status {
    Queued = "queued",
    Pinning = "pinning",
    Pinned = "pinned",
    Failed = "failed",
    Deleted = "deleted",
}

export type GetAllPinRequest = {
    cid?: string | undefined;
    includeDirectoryContent?: boolean | undefined;
    /**
     * Number of entities returned on each page. By default this number is set to 100.
     */
    limit?: number | undefined;
    name?: string | undefined;
    /**
     * Number of returned page. By default the returned page is the first.
     */
    page?: number | undefined;
    status?: Status | undefined;
};

export type GetAllPinPinPaginated = {
    items: Array<shared.Pin>;
    meta: shared.PaginationData;
};

export type GetAllPinResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    pinPaginated?: GetAllPinPinPaginated | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace Status$ {
    export const inboundSchema = z.nativeEnum(Status);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetAllPinRequest$ {
    export const inboundSchema: z.ZodType<GetAllPinRequest, z.ZodTypeDef, unknown> = z.object({
        cid: z.string().optional(),
        includeDirectoryContent: z.boolean().optional(),
        limit: z.number().int().optional(),
        name: z.string().optional(),
        page: z.number().int().optional(),
        status: Status$.inboundSchema.optional(),
    });

    export type Outbound = {
        cid?: string | undefined;
        includeDirectoryContent?: boolean | undefined;
        limit?: number | undefined;
        name?: string | undefined;
        page?: number | undefined;
        status?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllPinRequest> = z.object({
        cid: z.string().optional(),
        includeDirectoryContent: z.boolean().optional(),
        limit: z.number().int().optional(),
        name: z.string().optional(),
        page: z.number().int().optional(),
        status: Status$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace GetAllPinPinPaginated$ {
    export const inboundSchema: z.ZodType<GetAllPinPinPaginated, z.ZodTypeDef, unknown> = z.object({
        items: z.array(shared.Pin$.inboundSchema),
        meta: shared.PaginationData$.inboundSchema,
    });

    export type Outbound = {
        items: Array<shared.Pin$.Outbound>;
        meta: shared.PaginationData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllPinPinPaginated> =
        z.object({
            items: z.array(shared.Pin$.outboundSchema),
            meta: shared.PaginationData$.outboundSchema,
        });
}

/** @internal */
export namespace GetAllPinResponse$ {
    export const inboundSchema: z.ZodType<GetAllPinResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            PinPaginated: z.lazy(() => GetAllPinPinPaginated$.inboundSchema).optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                PinPaginated: "pinPaginated",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        PinPaginated?: GetAllPinPinPaginated$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllPinResponse> = z
        .object({
            contentType: z.string(),
            pinPaginated: z.lazy(() => GetAllPinPinPaginated$.outboundSchema).optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                pinPaginated: "PinPaginated",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
