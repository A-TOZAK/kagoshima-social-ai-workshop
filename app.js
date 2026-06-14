(function () {
  "use strict";

  const prompts = [
    {
      id: "local-research",
      category: "prep",
      meta: "授業準備 / Deep Research",
      title: "地域素材に「あたり」をつける",
      summary: "単元の地域素材候補を広く集め、出典確認前のたたき台を作ります。",
      body: `あなたは小学校社会科の授業づくりを支援する専門家です。

次の条件で、地域素材の候補を整理してください。

地域:
[都道府県・市町村名]

学年・単元:
[例: 小学4年 社会「ごみの処理と利用」]

子どもに持たせたい問い:
[例: わたしたちのくらしは、どのような人や仕組みに支えられているのか]

出してほしいもの:
1. 地域素材の候補を5つ
2. それぞれが社会科の学習問題につながる理由
3. 子どもが調べられそうな資料・施設・人
4. 追加で確認すべき出典や公式情報
5. 生成AIの出力を鵜呑みにしないための確認観点

注意:
事実と推測を分けて書いてください。
個人情報や未確認情報は含めないでください。`
    },
    {
      id: "easy-material",
      category: "prep",
      meta: "授業準備 / 資料整理",
      title: "自治体・企業の資料を子ども向けに整理する",
      summary: "大人向けのWebページやPDFを、小学生が読める資料へ変換するためのプロンプトです。",
      body: `あなたは小学校社会科の教材編集者です。

下の資料を、小学生が社会科の授業で読める形に整理してください。

対象学年:
[例: 小学4年]

単元:
[例: 水はどこから / ごみの処理と利用 / 地域の産業]

資料本文:
[ここに自治体・企業・施設などの資料を貼る]

整理してほしい形:
1. 小学生向けの短い本文
2. 難しい言葉の言い換え
3. 子どもが気づきそうなこと
4. 子どもが持ちそうな疑問
5. 授業で使える発問を3つ

条件:
本文は事実を変えずに、やさしい言葉にしてください。
資料に書かれていないことは「推測」として分けてください。
個人名・住所・連絡先などの個人情報は扱わないでください。`
    },
    {
      id: "unit-website",
      category: "site",
      meta: "Webサイト / リンク集",
      title: "単元のWebサイトを作るための設計",
      summary: "単元で使うリンクや資料を、児童が迷わず開けるページ構成にします。",
      body: `あなたは小学校社会科の単元Webサイトを設計するアシスタントです。

次の条件をもとに、児童が授業中に使えるWebサイトの構成案を作ってください。

学年:
[例: 小学4年]

単元:
[例: ごみの処理と利用]

授業で扱う地域素材:
[例: 鹿児島市のごみ処理、清掃工場、リサイクル施設]

使いたいリンク・資料:
[URLや資料名を貼る]

サイトに必要な要素:
1. 最初に見るページの見出し
2. 児童向けの説明文
3. リンクカードの分類
4. 授業で使う順番
5. 児童が記録する問い
6. 先生向けの注意点

条件:
スマホでも見やすいように、1カード1目的で整理してください。
ボタン名は「読む」「見る」「記録する」など行動が分かる言葉にしてください。
授業中に迷わない導線を優先してください。`
    },
    {
      id: "feedback-writing",
      category: "classroom",
      meta: "授業中 / 個別フィードバック",
      title: "児童の記述にフィードバックする",
      summary: "評価基準をもとに、児童の考えを深める問い返しを作ります。",
      body: `あなたは小学校社会科の教師です。

次の児童の記述に対して、教師が確認・修正して返せるフィードバック案を作成してください。

学年:
[例: 小学6年]

単元:
[例: 明治の国づくり]

本時のねらい:
[例: 明治政府の政策を時代背景と関連づけて考える]

評価の観点:
[例: 時代背景との関連 / 根拠の明確さ / 自分の言葉での説明]

児童の記述:
[ここに児童の記述を貼る]

出力してほしいもの:
1. 現時点のよさ
2. もう一歩深められる点
3. 児童に返す短いフィードバック文
4. 追加で考えさせたい問い
5. 先生が確認すべき注意点

条件:
児童の考えを否定せず、次の一歩が分かる言葉にしてください。
AIの判断をそのまま成績評価に使わず、必ず教師が確認する前提で書いてください。`
    },
    {
      id: "reflection-analysis",
      category: "classroom",
      meta: "授業中 / 振り返り分析",
      title: "振り返りから次の支援を見つける",
      summary: "振り返りを分類し、支援が必要な子とモデルになりそうな子を見つけます。",
      body: `あなたは小学校社会科の授業改善を支援する分析者です。

以下の児童の振り返りを分析し、次の授業づくりに使える形で整理してください。

学年:
[例: 小学4年]

単元:
[例: 県の地図を広げて]

本時のねらい:
[ここに本時のねらいを書く]

児童の振り返り:
[ここに複数人分の振り返りを貼る]

分析してほしいこと:
1. 多くの児童に共通する気づき
2. まだ曖昧な理解
3. 支援が必要そうな児童のサイン
4. 次時のモデルになりそうな記述
5. 次の授業で使える発問
6. 先生が全体に返すコメント案

注意:
児童名がある場合は、外部共有用の出力では匿名化してください。
個人情報や成績評価に直結する表現は避けてください。`
    },
    {
      id: "student-prompt-site",
      category: "site",
      meta: "授業中 / 児童向けプロンプト集",
      title: "児童向けプロンプト集を作る",
      summary: "調べる・比べる・まとめる場面で使う、児童向けの短いプロンプトを作ります。",
      body: `あなたは小学校社会科の授業で児童が使うプロンプト集を作る編集者です。

次の単元で、児童が安全に使える短いプロンプトを作ってください。

学年:
[例: 小学5年]

単元:
[例: 日本の工業生産]

児童が使えるAI:
[例: Gemini / ChatGPT / 学校で許可されたAI]

作ってほしいプロンプト:
1. 資料から気づきを見つける
2. 2つの資料を比べる
3. 分からない言葉をやさしく説明してもらう
4. 自分の考えに足りない根拠を探す
5. 発表原稿を分かりやすく直す

条件:
児童が答えを丸写ししないように、「まず自分の考えを書く」流れを入れてください。
個人情報を入れない注意を、子どもに分かる言葉で入れてください。
各プロンプトは短く、コピーしてすぐ使える形にしてください。`
    },
    {
      id: "viewer-json",
      category: "site",
      meta: "研修後 / 振り返りビューワー",
      title: "研修の発言をJSONに整理する",
      summary: "ふきだしくん等で集めた発言を、ビューワーに貼れるJSONへ整えます。",
      body: `次の研修参加者の発言を分析し、下のJSON形式だけで出力してください。

研修タイトル:
[例: 社会科における生成AIの活用]

開催日:
[例: 2026年6月18日]

研修テーマ:
[例: 指導と評価の一体化 × 生成AI]

参加者の発言:
[ここに発言一覧を貼る]

出力形式:
{
  "meta": {
    "title": "研修タイトル",
    "date": "開催日",
    "theme": "研修テーマ"
  },
  "comments": [
    {
      "text": "発言本文",
      "author": "参加者",
      "theme": "テーマ名"
    }
  ],
  "themes": [
    {
      "name": "テーマ名",
      "summary": "短い要約",
      "count": 0
    }
  ],
  "questions": [
    "さらに考えたい問い"
  ],
  "actions": [
    {
      "title": "明日からの一歩",
      "detail": "具体的な行動"
    }
  ]
}

条件:
JSON以外の説明文は出力しないでください。
個人名が含まれる場合は、参加者A、参加者Bのように匿名化してください。`
    },
    {
      id: "diagram-learning-path",
      category: "diagram",
      meta: "図解 / スライド・note",
      title: "学び、変わっていく人がたどる道",
      summary: "スライドp23に入れられる、16:9の情報整理図解プロンプトです。",
      body: `横長16:9の情報整理型図解を作成してください。

目的:
研修スライドで「学び、変わっていく人がたどる道」をひと目で理解できるようにする。雰囲気イラストではなく、教師研修で使える情報整理された図解にする。

対象:
小学校の先生、社会科研究会の先生、ICTや生成AI活用に関心のある先生

用途:
研修スライド、note記事、配布資料

図解タイプ:
流れ

見出し:
学び、変わっていく人がたどる道

レイアウト:
白背景。左から右へ5ステップで流れを示す。
各ステップは大きな面で整理し、矢印は細く少なくする。
下部に短い補足として「まずは目の前の子ども、同僚の役に立つことからはじめる」を置く。

図解内容:
1. 知る
2. やってみる
3. 振り返る
4. 改善する
5. 整理して分け合う

ビジュアル指定:
完全フラット、ベクター風、ベタ塗り。
人物はシンプルな先生の後ろ姿程度にし、表情は描かない。
黒板、タブレット、ノートの要素を1〜2個だけ使う。
日本語は自然な正体のゴシック体。

配色:
ベースは白、メインは深い緑 #1F5F4A、補助に青 #245F9B、アクセントに橙 #B97821 を少量。

NG:
グラデーション、発光、3D、写真風、情報詰め込み、長文テキスト、装飾過多、人物の表情あり。`
    }
  ];

  const labels = {
    all: "すべて",
    prep: "授業準備",
    classroom: "授業中",
    site: "Webサイト",
    diagram: "図解"
  };

  const state = {
    filter: "all",
    query: ""
  };

  const grid = document.getElementById("promptGrid");
  const count = document.getElementById("promptCount");
  const search = document.getElementById("promptSearch");
  const filters = document.getElementById("promptFilters");
  const toast = document.getElementById("toast");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalize(value) {
    return String(value || "").toLowerCase().normalize("NFKC");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 2200);
  }

  async function copyText(text, successMessage) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(successMessage || "コピーしました");
    } catch (error) {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      showToast(successMessage || "コピーしました");
    }
  }

  function getVisiblePrompts() {
    const q = normalize(state.query);
    return prompts.filter(function (prompt) {
      const categoryMatch = state.filter === "all" || prompt.category === state.filter;
      const haystack = normalize([prompt.title, prompt.summary, prompt.meta, prompt.body].join(" "));
      return categoryMatch && (!q || haystack.includes(q));
    });
  }

  function renderPrompts() {
    const visible = getVisiblePrompts();
    count.textContent = visible.length + "件のプロンプト";

    if (!visible.length) {
      grid.innerHTML = '<p class="empty-prompt">見つかりませんでした。検索語を短くするか、カテゴリを「すべて」に戻してください。</p>';
      return;
    }

    grid.innerHTML = visible.map(function (prompt) {
      return `
        <article class="prompt-card" data-category="${escapeHtml(prompt.category)}">
          <p class="prompt-meta">${escapeHtml(labels[prompt.category])} / ${escapeHtml(prompt.meta)}</p>
          <h3>${escapeHtml(prompt.title)}</h3>
          <p>${escapeHtml(prompt.summary)}</p>
          <details>
            <summary>プロンプト本文を見る</summary>
            <pre class="prompt-body">${escapeHtml(prompt.body)}</pre>
          </details>
          <div class="prompt-actions">
            <button class="copy-button" type="button" data-copy="${escapeHtml(prompt.id)}">コピー</button>
            <a class="open-ai" href="https://gemini.google.com/" target="_blank" rel="noopener">Gemini</a>
            <a class="open-ai" href="https://chatgpt.com/" target="_blank" rel="noopener">ChatGPT</a>
          </div>
        </article>
      `;
    }).join("");
  }

  filters.addEventListener("click", function (event) {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    state.filter = button.dataset.filter;
    filters.querySelectorAll("[data-filter]").forEach(function (item) {
      const active = item.dataset.filter === state.filter;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", active ? "true" : "false");
    });
    renderPrompts();
  });

  search.addEventListener("input", function () {
    state.query = search.value;
    renderPrompts();
  });

  grid.addEventListener("click", function (event) {
    const button = event.target.closest("[data-copy]");
    if (!button) return;
    const prompt = prompts.find(function (item) {
      return item.id === button.dataset.copy;
    });
    if (prompt) copyText(prompt.body, "プロンプトをコピーしました");
  });

  document.getElementById("sharePage").addEventListener("click", function () {
    copyText(window.location.href, "ページURLをコピーしました");
  });

  const mobileActions = document.querySelector(".mobile-actions");
  function toggleMobileActions() {
    mobileActions.classList.toggle("show", window.scrollY > 360);
  }

  window.addEventListener("scroll", toggleMobileActions, { passive: true });
  toggleMobileActions();

  renderPrompts();
})();
