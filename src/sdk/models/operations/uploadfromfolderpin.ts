/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../../lib/base64";
import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

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
    export const inboundSchema: z.ZodType<Files, z.ZodTypeDef, unknown> = z.object({
        content: b64$.zodInbound,
        fileName: z.string(),
    });

    export type Outbound = {
        content: Uint8Array;
        fileName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Files> = z.object({
        content: b64$.zodOutbound,
        fileName: z.string(),
    });
}

/** @internal */
export namespace UploadFromFolderPinMetadata$ {
    export const inboundSchema: z.ZodType<UploadFromFolderPinMetadata, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadFromFolderPinMetadata> =
        z.object({});
}

/** @internal */
export namespace UploadFromFolderPinRequestBody$ {
    export const inboundSchema: z.ZodType<UploadFromFolderPinRequestBody, z.ZodTypeDef, unknown> =
        z.object({
            files: z.array(z.lazy(() => Files$.inboundSchema)).optional(),
            metadata: z.lazy(() => UploadFromFolderPinMetadata$.inboundSchema).optional(),
        });

    export type Outbound = {
        files?: Array<Files$.Outbound> | undefined;
        metadata?: UploadFromFolderPinMetadata$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadFromFolderPinRequestBody> =
        z.object({
            files: z.array(z.lazy(() => Files$.outboundSchema)).optional(),
            metadata: z.lazy(() => UploadFromFolderPinMetadata$.outboundSchema).optional(),
        });
}

/** @internal */
export namespace UploadFromFolderPinResponse$ {
    export const inboundSchema: z.ZodType<UploadFromFolderPinResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            Pin: shared.Pin$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                Pin: "pin",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
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
            return remap$(v, {
                contentType: "ContentType",
                pin: "Pin",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
