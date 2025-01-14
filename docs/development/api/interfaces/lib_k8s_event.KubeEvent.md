---
title: "Interface: KubeEvent"
linkTitle: "KubeEvent"
slug: "lib_k8s_event.KubeEvent"
---

[lib/k8s/event](../modules/lib_k8s_event.md).KubeEvent

## Indexable

▪ [otherProps: `string`]: `any`

## Properties

### involvedObject

• **involvedObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apiVersion` | `string` |
| `fieldPath` | `string` |
| `kind` | `string` |
| `name` | `string` |
| `namespace` | `string` |
| `resourceVersion` | `string` |
| `uid` | `string` |

#### Defined in

[lib/k8s/event.ts:10](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/k8s/event.ts#L10)

___

### message

• **message**: `string`

#### Defined in

[lib/k8s/event.ts:8](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/k8s/event.ts#L8)

___

### metadata

• **metadata**: [`KubeMetadata`](lib_k8s_cluster.KubeMetadata.md)

#### Defined in

[lib/k8s/event.ts:9](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/k8s/event.ts#L9)

___

### reason

• **reason**: `string`

#### Defined in

[lib/k8s/event.ts:7](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/k8s/event.ts#L7)

___

### type

• **type**: `string`

#### Defined in

[lib/k8s/event.ts:6](https://github.com/kinvolk/headlamp/blob/2fb68817/frontend/src/lib/k8s/event.ts#L6)
