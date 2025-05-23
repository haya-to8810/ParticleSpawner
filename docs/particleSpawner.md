# ParticleSpawner Class Documentation

## 概要

Minecraft Bedrock の ScriptAPI で Particle の管理をより、
簡易的に操作するために設計されたクラスです。

## constructor
### `constructor(particles): ParticleSpawner`

- **particles** `{ typeId: "particleId", delay?: number }[]`

## Instance Methods

> **MolangVariableMapCallback** -
> (molang: MolangVariableMap, location: Vector3) => void;

> **Vector3** -
> { x: number, y: number, z: number };

### `dimension(dimension,location,molang)`
- **dimension** `"overworld" | "nether" | "end"`
- **location** `Vector3`
- **molang** `MolangVariableMapCallback`

特定のディメンションの座標にパーティクルを出現させます

### `player(player,molang,location?)`
- **player** `Player`
- **molang** `MolangVariableMapCallback`
- **[location]** `Vector3` 引数がなかった場合、playerの位置を起点とします

特定のプレイヤーの座標にパーティクルを出現させます
