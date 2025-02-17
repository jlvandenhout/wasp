// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]

use wasmlib::*;
use wasmlib::host::*;

#[derive(Clone, Copy)]
pub struct ArrayOfImmutableString {
	pub(crate) obj_id: i32,
}

impl ArrayOfImmutableString {
    pub fn length(&self) -> i32 {
        get_length(self.obj_id)
    }

    pub fn get_string(&self, index: i32) -> ScImmutableString {
        ScImmutableString::new(self.obj_id, Key32(index))
    }
}

pub type ImmutableStringArray = ArrayOfImmutableString;

#[derive(Clone, Copy)]
pub struct ArrayOfMutableString {
	pub(crate) obj_id: i32,
}

impl ArrayOfMutableString {
    pub fn clear(&self) {
        clear(self.obj_id);
    }

    pub fn length(&self) -> i32 {
        get_length(self.obj_id)
    }

    pub fn get_string(&self, index: i32) -> ScMutableString {
        ScMutableString::new(self.obj_id, Key32(index))
    }
}

pub type MutableStringArray = ArrayOfMutableString;

#[derive(Clone, Copy)]
pub struct MapStringToImmutableString {
	pub(crate) obj_id: i32,
}

impl MapStringToImmutableString {
    pub fn get_string(&self, key: &str) -> ScImmutableString {
        ScImmutableString::new(self.obj_id, key.get_key_id())
    }
}

pub type ImmutableStringMap = MapStringToImmutableString;

#[derive(Clone, Copy)]
pub struct MapStringToMutableString {
	pub(crate) obj_id: i32,
}

impl MapStringToMutableString {
    pub fn clear(&self) {
        clear(self.obj_id);
    }

    pub fn get_string(&self, key: &str) -> ScMutableString {
        ScMutableString::new(self.obj_id, key.get_key_id())
    }
}

pub type MutableStringMap = MapStringToMutableString;
