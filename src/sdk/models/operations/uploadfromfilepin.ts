/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../../lib/base64";
import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type FileT = {
    content: Uint8Array | string;
    fileName: string;
};

export type Metadata = {};

export type UploadFromFilePinRequestBody = {
    file?: FileT | File | Blob | undefined;
    metadata?: Metadata | undefined;
};

export type UploadFromFilePinResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    pin?: shared.Pin | undefined;
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
export namespace FileT$ {
    export type Inbound = {
        content: Uint8Array | string;
        fileName: string;
    };

    export const inboundSchema: z.ZodType<FileT, z.ZodTypeDef, Inbound> = z
        .object({
            content: b64$.zodInbound,
            fileName: z.string(),
        })
        .transform((v) => {
            return {
                content: v.content,
                fileName: v.fileName,
            };
        });

    export type Outbound = {
        content: Uint8Array;
        fileName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FileT> = z
        .object({
            content: b64$.zodOutbound,
            fileName: z.string(),
        })
        .transform((v) => {
            return {
                content: v.content,
                fileName: v.fileName,
            };
        });
}

/** @internal */
export namespace Metadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Metadata, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Metadata> = z.object({});
}

/** @internal */
export namespace UploadFromFilePinRequestBody$ {
    export type Inbound = {
        file?: FileT$.Inbound | undefined;
        metadata?: Metadata$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UploadFromFilePinRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            file: z.lazy(() => FileT$.inboundSchema).optional(),
            metadata: z.lazy(() => Metadata$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.file === undefined ? null : { file: v.file }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
            };
        });

    export type Outbound = {
        file?: FileT$.Outbound | File | Blob | undefined;
        metadata?: Metadata$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadFromFilePinRequestBody> = z
        .object({
            file: z
                .lazy(() => FileT$.outboundSchema)
                .or(z.instanceof(Blob))
                .optional(),
            metadata: z.lazy(() => Metadata$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.file === undefined ? null : { file: v.file }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
            };
        });
}

/** @internal */
export namespace UploadFromFilePinResponse$ {
    export type Inbound = {
        ContentType: string;
        Pin?: shared.Pin$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<UploadFromFilePinResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Pin: shared.Pin$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Pin === undefined ? null : { pin: v.Pin }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Pin?: shared.Pin$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadFromFilePinResponse> = z
        .object({
            contentType: z.string(),
            pin: shared.Pin$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.pin === undefined ? null : { Pin: v.pin }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
