// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package coreroot

import "github.com/iotaledger/wasp/packages/vm/wasmlib"

type DeployContractCall struct {
	Func   *wasmlib.ScFunc
	Params MutableDeployContractParams
}

type GrantDeployPermissionCall struct {
	Func   *wasmlib.ScFunc
	Params MutableGrantDeployPermissionParams
}

type RevokeDeployPermissionCall struct {
	Func   *wasmlib.ScFunc
	Params MutableRevokeDeployPermissionParams
}

type FindContractCall struct {
	Func    *wasmlib.ScView
	Params  MutableFindContractParams
	Results ImmutableFindContractResults
}

type GetContractRecordsCall struct {
	Func    *wasmlib.ScView
	Results ImmutableGetContractRecordsResults
}

type Funcs struct{}

var ScFuncs Funcs

func (sc Funcs) DeployContract(ctx wasmlib.ScFuncCallContext) *DeployContractCall {
	f := &DeployContractCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncDeployContract)}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) GrantDeployPermission(ctx wasmlib.ScFuncCallContext) *GrantDeployPermissionCall {
	f := &GrantDeployPermissionCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncGrantDeployPermission)}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) RevokeDeployPermission(ctx wasmlib.ScFuncCallContext) *RevokeDeployPermissionCall {
	f := &RevokeDeployPermissionCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncRevokeDeployPermission)}
	f.Func.SetPtrs(&f.Params.id, nil)
	return f
}

func (sc Funcs) FindContract(ctx wasmlib.ScViewCallContext) *FindContractCall {
	f := &FindContractCall{Func: wasmlib.NewScView(ctx, HScName, HViewFindContract)}
	f.Func.SetPtrs(&f.Params.id, &f.Results.id)
	return f
}

func (sc Funcs) GetContractRecords(ctx wasmlib.ScViewCallContext) *GetContractRecordsCall {
	f := &GetContractRecordsCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetContractRecords)}
	f.Func.SetPtrs(nil, &f.Results.id)
	return f
}

func OnLoad() {
	exports := wasmlib.NewScExports()
	exports.AddFunc(FuncDeployContract, nil)
	exports.AddFunc(FuncGrantDeployPermission, nil)
	exports.AddFunc(FuncRevokeDeployPermission, nil)
	exports.AddView(ViewFindContract, nil)
	exports.AddView(ViewGetContractRecords, nil)
}
