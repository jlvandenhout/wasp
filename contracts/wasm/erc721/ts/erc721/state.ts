// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as sc from "./index";

export class MapHashToImmutableAgentID {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    getAgentID(key: wasmlib.ScHash): wasmlib.ScImmutableAgentID {
        return new wasmlib.ScImmutableAgentID(this.objID, key.getKeyID());
    }
}

export class MapAgentIDToImmutableOperators {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    getOperators(key: wasmlib.ScAgentID): sc.ImmutableOperators {
        let subID = wasmlib.getObjectID(this.objID, key.getKeyID(), wasmlib.TYPE_MAP);
        return new sc.ImmutableOperators(subID);
    }
}

export class MapAgentIDToImmutableUint64 {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    getUint64(key: wasmlib.ScAgentID): wasmlib.ScImmutableUint64 {
        return new wasmlib.ScImmutableUint64(this.objID, key.getKeyID());
    }
}

export class MapHashToImmutableString {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    getString(key: wasmlib.ScHash): wasmlib.ScImmutableString {
        return new wasmlib.ScImmutableString(this.objID, key.getKeyID());
    }
}

export class ImmutableErc721State extends wasmlib.ScMapID {
    approvedAccounts(): sc.MapHashToImmutableAgentID {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateApprovedAccounts), wasmlib.TYPE_MAP);
		return new sc.MapHashToImmutableAgentID(mapID);
	}

    approvedOperators(): sc.MapAgentIDToImmutableOperators {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateApprovedOperators), wasmlib.TYPE_MAP);
		return new sc.MapAgentIDToImmutableOperators(mapID);
	}

    balances(): sc.MapAgentIDToImmutableUint64 {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateBalances), wasmlib.TYPE_MAP);
		return new sc.MapAgentIDToImmutableUint64(mapID);
	}

    name(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.StateName));
	}

    owners(): sc.MapHashToImmutableAgentID {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateOwners), wasmlib.TYPE_MAP);
		return new sc.MapHashToImmutableAgentID(mapID);
	}

    symbol(): wasmlib.ScImmutableString {
		return new wasmlib.ScImmutableString(this.mapID, wasmlib.Key32.fromString(sc.StateSymbol));
	}

    tokenURIs(): sc.MapHashToImmutableString {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateTokenURIs), wasmlib.TYPE_MAP);
		return new sc.MapHashToImmutableString(mapID);
	}
}

export class MapHashToMutableAgentID {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    clear(): void {
        wasmlib.clear(this.objID);
    }

    getAgentID(key: wasmlib.ScHash): wasmlib.ScMutableAgentID {
        return new wasmlib.ScMutableAgentID(this.objID, key.getKeyID());
    }
}

export class MapAgentIDToMutableOperators {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    clear(): void {
        wasmlib.clear(this.objID);
    }

    getOperators(key: wasmlib.ScAgentID): sc.MutableOperators {
        let subID = wasmlib.getObjectID(this.objID, key.getKeyID(), wasmlib.TYPE_MAP);
        return new sc.MutableOperators(subID);
    }
}

export class MapAgentIDToMutableUint64 {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    clear(): void {
        wasmlib.clear(this.objID);
    }

    getUint64(key: wasmlib.ScAgentID): wasmlib.ScMutableUint64 {
        return new wasmlib.ScMutableUint64(this.objID, key.getKeyID());
    }
}

export class MapHashToMutableString {
	objID: i32;

    constructor(objID: i32) {
        this.objID = objID;
    }

    clear(): void {
        wasmlib.clear(this.objID);
    }

    getString(key: wasmlib.ScHash): wasmlib.ScMutableString {
        return new wasmlib.ScMutableString(this.objID, key.getKeyID());
    }
}

export class MutableErc721State extends wasmlib.ScMapID {
    asImmutable(): sc.ImmutableErc721State {
		const imm = new sc.ImmutableErc721State();
		imm.mapID = this.mapID;
		return imm;
	}

    approvedAccounts(): sc.MapHashToMutableAgentID {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateApprovedAccounts), wasmlib.TYPE_MAP);
		return new sc.MapHashToMutableAgentID(mapID);
	}

    approvedOperators(): sc.MapAgentIDToMutableOperators {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateApprovedOperators), wasmlib.TYPE_MAP);
		return new sc.MapAgentIDToMutableOperators(mapID);
	}

    balances(): sc.MapAgentIDToMutableUint64 {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateBalances), wasmlib.TYPE_MAP);
		return new sc.MapAgentIDToMutableUint64(mapID);
	}

    name(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.StateName));
	}

    owners(): sc.MapHashToMutableAgentID {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateOwners), wasmlib.TYPE_MAP);
		return new sc.MapHashToMutableAgentID(mapID);
	}

    symbol(): wasmlib.ScMutableString {
		return new wasmlib.ScMutableString(this.mapID, wasmlib.Key32.fromString(sc.StateSymbol));
	}

    tokenURIs(): sc.MapHashToMutableString {
		let mapID = wasmlib.getObjectID(this.mapID, wasmlib.Key32.fromString(sc.StateTokenURIs), wasmlib.TYPE_MAP);
		return new sc.MapHashToMutableString(mapID);
	}
}
