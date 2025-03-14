---
title: "Module: lib/util"
linkTitle: "lib/util"
slug: "lib_util"
---

## Interfaces

- [FilterState](../interfaces/lib_util.FilterState.md)

## Type aliases

### DateParam

Ƭ **DateParam**: `string` \| `number` \| `Date`

#### Defined in

[lib/util.ts:20](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L20)

## Variables

### CLUSTER\_ACTION\_GRACE\_PERIOD

• **CLUSTER\_ACTION\_GRACE\_PERIOD**: ``5000``

#### Defined in

[lib/util.ts:18](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L18)

## Functions

### filterResource

▸ **filterResource**(`item`, `filter`, `matchCriteria?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`KubeObjectInterface`](../interfaces/lib_k8s_cluster.KubeObjectInterface.md) |
| `filter` | [`FilterState`](../interfaces/lib_util.FilterState.md) |
| `matchCriteria?` | `string`[] |

#### Returns

`boolean`

#### Defined in

[lib/util.ts:85](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L85)

___

### getCluster

▸ **getCluster**(): `string` \| ``null``

#### Returns

`string` \| ``null``

#### Defined in

[lib/util.ts:154](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L154)

___

### getClusterPrefixedPath

▸ **getClusterPrefixedPath**(`path?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | ``null`` \| `string` |

#### Returns

`string`

#### Defined in

[lib/util.ts:146](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L146)

___

### getPercentStr

▸ **getPercentStr**(`value`, `total`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `total` | `number` |

#### Returns

``null`` \| `string`

#### Defined in

[lib/util.ts:34](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L34)

___

### getReadyReplicas

▸ **getReadyReplicas**(`item`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Workload`](lib_k8s_cluster.md#workload) |

#### Returns

`any`

#### Defined in

[lib/util.ts:43](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L43)

___

### getResourceMetrics

▸ **getResourceMetrics**(`item`, `metrics`, `resourceType`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Node`](../classes/lib_k8s_node.Node.md) |
| `metrics` | [`KubeMetrics`](../interfaces/lib_k8s_cluster.KubeMetrics.md)[] |
| `resourceType` | ``"cpu"`` \| ``"memory"`` |

#### Returns

`any`[]

#### Defined in

[lib/util.ts:61](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L61)

___

### getResourceStr

▸ **getResourceStr**(`value`, `resourceType`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `resourceType` | ``"cpu"`` \| ``"memory"`` |

#### Returns

`string`

#### Defined in

[lib/util.ts:51](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L51)

___

### getTotalReplicas

▸ **getTotalReplicas**(`item`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`Workload`](lib_k8s_cluster.md#workload) |

#### Returns

`any`

#### Defined in

[lib/util.ts:47](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L47)

___

### localeDate

▸ **localeDate**(`date`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | [`DateParam`](lib_util.md#dateparam) |

#### Returns

`string`

#### Defined in

[lib/util.ts:26](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L26)

___

### timeAgo

▸ **timeAgo**(`date`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | [`DateParam`](lib_util.md#dateparam) |

#### Returns

`string`

#### Defined in

[lib/util.ts:22](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L22)

___

### useErrorState

▸ **useErrorState**(`dependentSetter?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependentSetter?` | (...`args`: `any`) => `void` |

#### Returns

`any`[]

#### Defined in

[lib/util.ts:166](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L166)

___

### useFilterFunc

▸ **useFilterFunc**(`matchCriteria?`): (`item`: [`KubeObjectInterface`](../interfaces/lib_k8s_cluster.KubeObjectInterface.md)) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matchCriteria?` | `string`[] |

#### Returns

`fn`

▸ (`item`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`KubeObjectInterface`](../interfaces/lib_k8s_cluster.KubeObjectInterface.md) |

##### Returns

`boolean`

#### Defined in

[lib/util.ts:141](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/util.ts#L141)
