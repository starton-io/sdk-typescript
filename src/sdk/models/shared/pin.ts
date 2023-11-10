/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DirectoryContent } from "./directorycontent";
import { Expose, Transform, Type } from "class-transformer";

export class PinMetadata extends SpeakeasyBase {}

export enum Status {
    Queued = "queued",
    Pinning = "pinning",
    Pinned = "pinned",
    Failed = "failed",
    Deleted = "deleted",
}

export enum PinType {
    Directory = "directory",
    File = "file",
}

export class Pin extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "cid" })
    cid?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "delegates" })
    delegates?: string[];

    @SpeakeasyMetadata({ elemType: DirectoryContent })
    @Expose({ name: "directoryContent" })
    @Type(() => DirectoryContent)
    directoryContent?: DirectoryContent[];

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => PinMetadata)
    metadata?: PinMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "origins" })
    origins?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "projectId" })
    projectId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: Status;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: PinType;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}