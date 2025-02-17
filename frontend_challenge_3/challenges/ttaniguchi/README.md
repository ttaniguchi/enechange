# 電気料金シミュレーションページの開発

表題の開発をおこないました。

## 技術選定理由

手早くSPA開発をおこなうため、Reactを選定しました。
（Vue.jsを選定しなかった理由は自身の業務経験値によるところ）

## パッケージ選定理由

### react-template

<https://github.com/ttaniguchi/react-template>

Reactで手早く開発を行うため、自身のテンプレートを用意してありました。
typescript/eslint/prettierを用いたコーディング制約を徹底するのが目的です。

<https://tak-taniguchi.hatenablog.com/entry/2022/04/08/020706>

GitHubでの公開に併せて、構成等についてブログでも説明しています。
今回の作業に合わせて、以下をアレンジしました。

- npmコマンドベースですが、直近実務なれしているyarnに置き換えました。
- React18ベースですがStorybookが未対応のため、v17.0.2にダウングレードしました。

### Storybook

<https://storybook.js.org/>

Storybookを用いることで、小粒度のパーツから開発することが可能になり、モックアップを割愛できます。

### styled-components

<https://styled-components.com/>

CSSをコンポーネントにそのまま記載できるため、ブラウザやデザインツールからの転記に向いています。

### Jest

<https://jestjs.io/ja/>

JSのテストランナーです。
バリデーション等は求める結果が明瞭なため、テスト駆動でコーディングしました。

## 課題について

### 要件

郵便番号、現在の電力会社、現在のプラン、現在の契約容量、現在の電気代、メールアドレスを聴取する。
リアルタイムバリデーションを行い、invalidな場合は先に進めないようにする。
全ての入力が完了したら、submitボタン「結果を見る」を活性化する。

### 実装チェックリスト

- [x] 郵便番号でシミュレーション可能なエリアか判定する。
  - [x] 後々、APIを用いてサーバーサイドにリクエストを送り判定するが、サーバーサイドの実装が未完了であるため、仮で以下の判定で実装する。
    - [x] 郵便番号の上1桁が1なら東京電力エリア。
    - [x] 郵便番号の上1桁が5なら関西電力エリア。
    - [x] それ以外の場合は対象エリア外とし、「サービスエリア対象外です。」とメッセージを表示する。
- [x] エリアに応じて、選択できる現在の電力会社を出し分ける。
  - [x] 東京電力エリアの場合の選択肢は、「東京電力」と「その他」。
  - [x] 関西電力エリアの場合の選択肢は、「関西電力」と「その他」。
  - [x] 電力会社で「その他」を選んだ場合は、「シミュレーション対象外です。」とメッセージを表示する。
- [x] 選択した電力会社に応じて、選択できる現在のプランを出し分ける。
  - [x] 東京電力の場合の選択肢は「従量電灯B」と「従量電灯C」。
  - [x] 関西電力の場合の選択肢は「従量電灯A」と「従量電灯B」。
- [x] 選択したプランに応じて、選択できる契約容量を出し分ける。
  - [x] 東京電力従量電灯Bの場合の選択肢は、10A/15A/20A/30A/40A/50A/60A。
  - [x] 東京電力従量電灯Cの場合の選択肢は、6kVAから49kVAまで1kVA刻み。
  - [x] 関西電力従量電灯Aの場合は、契約容量を聴取しない。
  - [x] 関西電力従量電灯Bの場合の選択肢は、6kVAから49kVAまで1kVA刻み。
- [x] どのプランも最低料金は1000円とする。
  - [x] 最低料金未満が入力された場合は、「電気代を正しく入力してください。」とメッセージを表示する。
- [x] メールアドレス入力のバリデーションチェックを適切に行う。
  - [x] 不適切な場合は、「メールアドレスを正しく入力してください。」とメッセージを表示する。
- [x] スマートフォンでの表示をメインに考え、PCでは表示が崩れなければ良いです。
  - [x] ダイアログレイヤーのタップすり抜けがおこらないようにする。
  - [x] 電気代フィールドに数字以外が入らないようにする。
- [x] HTML/CSS/JavaScriptのコーディングをお願いします。
  - [x] CSSはSASSもしくはSCSSで実装してください。
- [x] 主要ブラウザの最新バージョンを対象とします。
  - [x] Chromeでの動作確認（PC）
  - [x] Safariでの動作確認（PC/スマホ）
  - Edgeは動作環境がないので割愛（Chrome互換と推測）
- [x] github-pages 等で作成したページが閲覧できる環境を作成してくださるのが好ましいです。
