/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../../lib/base64";
import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type Files = {
    content: Uint8Array | string;
    fileName: string;
};

export type UploadFromFolderPinMetadata = {};

export type UploadFromFolderPinRequestBody = {
    files?: Array<Files> | undefined;
    metadata?: UploadFromFolderPinMetadata | undefined;
};

export type UploadFromFolderPinResponse = {
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
export namespace Files$ {
    export type Inbound = {
        content: Uint8Array | string;
        fileName: string;
    };

    export const inboundSchema: z.ZodType<Files, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Files> = z
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
export namespace UploadFromFolderPinMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<UploadFromFolderPinMetadata, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadFromFolderPinMetadata> =
        z.object({});
}

/** @internal */
export namespace UploadFromFolderPinRequestBody$ {
    export type Inbound = {
        files?: Array<Files$.Inbound> | undefined;
        metadata?: UploadFromFolderPinMetadata$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UploadFromFolderPinRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            files: z.array(z.lazy(() => Files$.inboundSchema)).optional(),
            metadata: z.lazy(() => UploadFromFolderPinMetadata$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.files === undefined ? null : { files: v.files }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
            };
        });

    export type Outbound = {
        files?: Array<Files$.Outbound> | undefined;
        metadata?: UploadFromFolderPinMetadata$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadFromFolderPinRequestBody> =
        z
            .object({
                files: z.array(z.lazy(() => Files$.outboundSchema)).optional(),
                metadata: z.lazy(() => UploadFromFolderPinMetadata$.outboundSchema).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.files === undefined ? null : { files: v.files }),
                    ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                };
            });
}

/** @internal */
export namespace UploadFromFolderPinResponse$ {
    export type Inbound = {
        ContentType: string;
        Pin?: shared.Pin$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<UploadFromFolderPinResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadFromFolderPinResponse> = z
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
