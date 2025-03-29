# ParticleSpawner ライブラリ

パーティクル管理のための 簡易的な ScriptAPI ライブラリです

[ダウンロード](https://github.com/haya-to8810/Scoreboarder/releases/download/minecraft/scoreBoarder.js)

> [!NOTE]
> 質問やエラーは以下のDiscordアカウントへ
> .shoborn

## 使い方
1. アドオンをインポートし、ワールドに適応
2. ベータAPI の有効化
3. 使いたいアドオンで、ファイルを インポートする

## Example Code

[Documentation](docs/particleSpawner.md)

```javascript
import ParticleSpawner from "./utils/particleSpawner.js";

const testParticles = new ParticleSpawner([
    { typeId: "custom:particle" },
    { typeId: "custom:particle2", delay: 1 },
    { typeId: "custom:particle3", delay: 10 },
])
testParticles.player(<Player>,(molang,location) => {
    molang.setColorRGB("color",{ red: 1, green: 1, blue: 1 });
    location //player.location
})
```
