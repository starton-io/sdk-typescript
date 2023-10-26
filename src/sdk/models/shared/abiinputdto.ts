/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AbiInputDtoComponents extends SpeakeasyBase {}

export class AbiInputDto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "components" })
    @Type(() => AbiInputDtoComponents)
    components?: AbiInputDtoComponents;

    @SpeakeasyMetadata()
    @Expose({ name: "indexed" })
    indexed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "internalType" })
    internalType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;
}
