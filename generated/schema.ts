// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Rune extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Rune entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Rune must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Rune", id.toString(), this);
    }
  }

  static load(id: string): Rune | null {
    return changetype<Rune | null>(store.get("Rune", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get image(): string | null {
    let value = this.get("image");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set image(value: string | null) {
    if (!value) {
      this.unset("image");
    } else {
      this.set("image", Value.fromString(<string>value));
    }
  }

  get itemId(): BigInt | null {
    let value = this.get("itemId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set itemId(value: BigInt | null) {
    if (!value) {
      this.unset("itemId");
    } else {
      this.set("itemId", Value.fromBigInt(<BigInt>value));
    }
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get tokenURI(): string | null {
    let value = this.get("tokenURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenURI(value: string | null) {
    if (!value) {
      this.unset("tokenURI");
    } else {
      this.set("tokenURI", Value.fromString(<string>value));
    }
  }

  get nftAddress(): Bytes | null {
    let value = this.get("nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes | null) {
    if (!value) {
      this.unset("nftAddress");
    } else {
      this.set("nftAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(<Bytes>value));
    }
  }

  get seller(): Bytes | null {
    let value = this.get("seller");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set seller(value: Bytes | null) {
    if (!value) {
      this.unset("seller");
    } else {
      this.set("seller", Value.fromBytes(<Bytes>value));
    }
  }

  get price(): BigInt | null {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt | null) {
    if (!value) {
      this.unset("price");
    } else {
      this.set("price", Value.fromBigInt(<BigInt>value));
    }
  }

  get sold(): boolean {
    let value = this.get("sold");
    return value!.toBoolean();
  }

  set sold(value: boolean) {
    this.set("sold", Value.fromBoolean(value));
  }

  get level(): i32 {
    let value = this.get("level");
    return value!.toI32();
  }

  set level(value: i32) {
    this.set("level", Value.fromI32(value));
  }

  get basePower(): i32 {
    let value = this.get("basePower");
    return value!.toI32();
  }

  set basePower(value: i32) {
    this.set("basePower", Value.fromI32(value));
  }

  get baseDurability(): i32 {
    let value = this.get("baseDurability");
    return value!.toI32();
  }

  set baseDurability(value: i32) {
    this.set("baseDurability", Value.fromI32(value));
  }

  get baseIntelligence(): i32 {
    let value = this.get("baseIntelligence");
    return value!.toI32();
  }

  set baseIntelligence(value: i32) {
    this.set("baseIntelligence", Value.fromI32(value));
  }

  get power(): i32 {
    let value = this.get("power");
    return value!.toI32();
  }

  set power(value: i32) {
    this.set("power", Value.fromI32(value));
  }

  get durability(): i32 {
    let value = this.get("durability");
    return value!.toI32();
  }

  set durability(value: i32) {
    this.set("durability", Value.fromI32(value));
  }

  get intelligence(): i32 {
    let value = this.get("intelligence");
    return value!.toI32();
  }

  set intelligence(value: i32) {
    this.set("intelligence", Value.fromI32(value));
  }
}