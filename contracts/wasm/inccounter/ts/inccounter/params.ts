// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

import * as wasmlib from "wasmlib";
import * as sc from "./index";

export class ImmutableIncrementWithDelayParams extends wasmlib.ScMapID {
    delay(): wasmlib.ScImmutableInt32 {
		return new wasmlib.ScImmutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamDelay));
	}
}

export class MutableIncrementWithDelayParams extends wasmlib.ScMapID {
    delay(): wasmlib.ScMutableInt32 {
		return new wasmlib.ScMutableInt32(this.mapID, wasmlib.Key32.fromString(sc.ParamDelay));
	}
}

export class ImmutableInitParams extends wasmlib.ScMapID {
    counter(): wasmlib.ScImmutableInt64 {
		return new wasmlib.ScImmutableInt64(this.mapID, sc.idxMap[sc.IdxParamCounter]);
	}
}

export class MutableInitParams extends wasmlib.ScMapID {
    counter(): wasmlib.ScMutableInt64 {
		return new wasmlib.ScMutableInt64(this.mapID, sc.idxMap[sc.IdxParamCounter]);
	}
}

export class ImmutableRepeatManyParams extends wasmlib.ScMapID {
    numRepeats(): wasmlib.ScImmutableInt64 {
		return new wasmlib.ScImmutableInt64(this.mapID, wasmlib.Key32.fromString(sc.ParamNumRepeats));
	}
}

export class MutableRepeatManyParams extends wasmlib.ScMapID {
    numRepeats(): wasmlib.ScMutableInt64 {
		return new wasmlib.ScMutableInt64(this.mapID, wasmlib.Key32.fromString(sc.ParamNumRepeats));
	}
}

export class ImmutableWhenMustIncrementParams extends wasmlib.ScMapID {
    dummy(): wasmlib.ScImmutableInt64 {
		return new wasmlib.ScImmutableInt64(this.mapID, wasmlib.Key32.fromString(sc.ParamDummy));
	}
}

export class MutableWhenMustIncrementParams extends wasmlib.ScMapID {
    dummy(): wasmlib.ScMutableInt64 {
		return new wasmlib.ScMutableInt64(this.mapID, wasmlib.Key32.fromString(sc.ParamDummy));
	}
}
