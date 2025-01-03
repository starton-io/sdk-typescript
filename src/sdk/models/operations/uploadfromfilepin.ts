/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type FileT = {
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
  fileName: string;
};

export type Metadata = {};

export type UploadFromFilePinRequestBody = {
  file?: FileT | Blob | undefined;
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
export const FileT$inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown> = z
  .object({
    content: z.union([
      z.instanceof(ReadableStream<Uint8Array>),
      z.instanceof(Blob),
      z.instanceof(ArrayBuffer),
      z.instanceof(Uint8Array),
    ]),
    fileName: z.string(),
  });

/** @internal */
export type FileT$Outbound = {
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
  fileName: string;
};

/** @internal */
export const FileT$outboundSchema: z.ZodType<
  FileT$Outbound,
  z.ZodTypeDef,
  FileT
> = z.object({
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
  fileName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileT$ {
  /** @deprecated use `FileT$inboundSchema` instead. */
  export const inboundSchema = FileT$inboundSchema;
  /** @deprecated use `FileT$outboundSchema` instead. */
  export const outboundSchema = FileT$outboundSchema;
  /** @deprecated use `FileT$Outbound` instead. */
  export type Outbound = FileT$Outbound;
}

export function fileToJSON(fileT: FileT): string {
  return JSON.stringify(FileT$outboundSchema.parse(fileT));
}

export function fileFromJSON(
  jsonString: string,
): SafeParseResult<FileT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileT' from JSON`,
  );
}

/** @internal */
export const Metadata$inboundSchema: z.ZodType<
  Metadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Metadata$Outbound = {};

/** @internal */
export const Metadata$outboundSchema: z.ZodType<
  Metadata$Outbound,
  z.ZodTypeDef,
  Metadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Metadata$ {
  /** @deprecated use `Metadata$inboundSchema` instead. */
  export const inboundSchema = Metadata$inboundSchema;
  /** @deprecated use `Metadata$outboundSchema` instead. */
  export const outboundSchema = Metadata$outboundSchema;
  /** @deprecated use `Metadata$Outbound` instead. */
  export type Outbound = Metadata$Outbound;
}

export function metadataToJSON(metadata: Metadata): string {
  return JSON.stringify(Metadata$outboundSchema.parse(metadata));
}

export function metadataFromJSON(
  jsonString: string,
): SafeParseResult<Metadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Metadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Metadata' from JSON`,
  );
}

/** @internal */
export const UploadFromFilePinRequestBody$inboundSchema: z.ZodType<
  UploadFromFilePinRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  file: z.lazy(() => FileT$inboundSchema).optional(),
  metadata: z.lazy(() => Metadata$inboundSchema).optional(),
});

/** @internal */
export type UploadFromFilePinRequestBody$Outbound = {
  file?: FileT$Outbound | Blob | undefined;
  metadata?: Metadata$Outbound | undefined;
};

/** @internal */
export const UploadFromFilePinRequestBody$outboundSchema: z.ZodType<
  UploadFromFilePinRequestBody$Outbound,
  z.ZodTypeDef,
  UploadFromFilePinRequestBody
> = z.object({
  file: z.lazy(() => FileT$outboundSchema).or(blobLikeSchema).optional(),
  metadata: z.lazy(() => Metadata$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadFromFilePinRequestBody$ {
  /** @deprecated use `UploadFromFilePinRequestBody$inboundSchema` instead. */
  export const inboundSchema = UploadFromFilePinRequestBody$inboundSchema;
  /** @deprecated use `UploadFromFilePinRequestBody$outboundSchema` instead. */
  export const outboundSchema = UploadFromFilePinRequestBody$outboundSchema;
  /** @deprecated use `UploadFromFilePinRequestBody$Outbound` instead. */
  export type Outbound = UploadFromFilePinRequestBody$Outbound;
}

export function uploadFromFilePinRequestBodyToJSON(
  uploadFromFilePinRequestBody: UploadFromFilePinRequestBody,
): string {
  return JSON.stringify(
    UploadFromFilePinRequestBody$outboundSchema.parse(
      uploadFromFilePinRequestBody,
    ),
  );
}

export function uploadFromFilePinRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UploadFromFilePinRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadFromFilePinRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadFromFilePinRequestBody' from JSON`,
  );
}

/** @internal */
export const UploadFromFilePinResponse$inboundSchema: z.ZodType<
  UploadFromFilePinResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Pin: shared.Pin$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Pin": "pin",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type UploadFromFilePinResponse$Outbound = {
  ContentType: string;
  Pin?: shared.Pin$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const UploadFromFilePinResponse$outboundSchema: z.ZodType<
  UploadFromFilePinResponse$Outbound,
  z.ZodTypeDef,
  UploadFromFilePinResponse
> = z.object({
  contentType: z.string(),
  pin: shared.Pin$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    pin: "Pin",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadFromFilePinResponse$ {
  /** @deprecated use `UploadFromFilePinResponse$inboundSchema` instead. */
  export const inboundSchema = UploadFromFilePinResponse$inboundSchema;
  /** @deprecated use `UploadFromFilePinResponse$outboundSchema` instead. */
  export const outboundSchema = UploadFromFilePinResponse$outboundSchema;
  /** @deprecated use `UploadFromFilePinResponse$Outbound` instead. */
  export type Outbound = UploadFromFilePinResponse$Outbound;
}

export function uploadFromFilePinResponseToJSON(
  uploadFromFilePinResponse: UploadFromFilePinResponse,
): string {
  return JSON.stringify(
    UploadFromFilePinResponse$outboundSchema.parse(uploadFromFilePinResponse),
  );
}

export function uploadFromFilePinResponseFromJSON(
  jsonString: string,
): SafeParseResult<UploadFromFilePinResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UploadFromFilePinResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UploadFromFilePinResponse' from JSON`,
  );
}
