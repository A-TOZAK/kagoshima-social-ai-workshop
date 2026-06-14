# 社会科における生成AIの活用 - 鹿児島小社研 研修サイト

鹿児島小学校社会科研究会オンライン研修用のGitHub Pagesサイトです。

## 公開想定URL

`https://a-tozak.github.io/kagoshima-social-ai-workshop/`

## 構成

- `index.html`: 研修サイト本体
- `styles.css`: レイアウト・デザイン
- `app.js`: プロンプト検索、コピー、URLコピー
- `assets/docs/kagoshima-social-ai-workshop.pdf`: 研修スライドPDF
- `assets/slides/`: スライドプレビュー画像

## 差し替えポイント

### ワークシート

Illustratorで作成した印刷用PDFを追加する場合は、次のように配置します。

```text
assets/docs/worksheet.pdf
```

その後、`index.html` の「ワークシート」カードをリンクに変更します。

### 公式LINE

現在のリンク:

```text
https://line.me/R/ti/p/@bkb6975y?ts=09011113&oat_content=url
```

### Googleフォーム

現在のリンク:

```text
https://docs.google.com/forms/d/e/1FAIpQLSd-lXEyDQKFLjC3BntdDVM34FQZeUlgVTwWFIVuADohss1G_Q/viewform?usp=header
```

## パスワードについて

GitHub Pagesの公開サイトには、サーバー側の本格的なパスワード保護はありません。
今回は「今はかけなくていい」という方針で、パスワードなしの公開前提にしています。

必要になった場合は、公開範囲の設計を次のいずれかに変更します。

- GitHub Pagesは公開のまま、URLを研修参加者にだけ案内する
- クライアント側の簡易パスワード画面を付ける。ただしHTML/JSを見れば回避できるため、本格的な制限ではありません
- 別サービスで認証付き配布にする

## 研修の導線

1. 研修中: WebAppで「社会科×生成AIのはてな？」を出す
2. 研修中/後: スライドPDFとnoteで見返す
3. 授業準備: プロンプトカードをコピーして試す
4. 研修後: Googleフォームに回答、公式LINEで次の教材・研修案内を受け取る
