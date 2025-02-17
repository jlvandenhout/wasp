// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_imports)]

use wasmlib::*;
use wasmlib::host::*;

use crate::*;
use crate::keys::*;

#[derive(Clone, Copy)]
pub struct ImmutableGetHelloWorldResults {
    pub(crate) id: i32,
}

impl ImmutableGetHelloWorldResults {
    pub fn hello_world(&self) -> ScImmutableString {
		ScImmutableString::new(self.id, RESULT_HELLO_WORLD.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutableGetHelloWorldResults {
    pub(crate) id: i32,
}

impl MutableGetHelloWorldResults {
    pub fn hello_world(&self) -> ScMutableString {
		ScMutableString::new(self.id, RESULT_HELLO_WORLD.get_key_id())
	}
}
