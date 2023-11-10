/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class Content extends SpeakeasyBase {}

export class UploadJsonDtoMetadata extends SpeakeasyBase {}

export class UploadJsonDto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    @Type(() => Content)
    content: Content;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => UploadJsonDtoMetadata)
    metadata?: UploadJsonDtoMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}