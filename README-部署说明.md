# 上海文化社网站：Common App 展示版

这是一个**零依赖的静态网站**：HTML + CSS + JavaScript。

- 不需要购买服务器，也不需要配置数据库或安装 Node.js。
- 使用 GitHub Pages 免费托管。
- 和你原来 `audio1/`、`audio2/`……等目录**直接共用**图片及 `.m4a` 音频。
- 主页、词卡索引、详情页、项目介绍都已经完成。
- 英文优先，适合让美国大学招生官直接阅读。

## 1. 文件应怎样放

下面是**合并到原来仓库之后**的结构：

```text
phshcultureclub/                        <- 你的 GitHub 仓库根目录
├── index.html                         <- 新首页（新增）
├── cards.html                         <- 单词卡目录（新增）
├── word.html                          <- 统一词卡详情页（新增）
├── about.html                         <- 项目故事（新增）
├── .nojekyll                           <- GitHub Pages 配置（新增）
├── assets/                             <- 新增整个文件夹
│   ├── mark.svg
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── site.js
├── data/                               <- 新增整个文件夹
│   └── cards.js                       <- 26 张卡片的信息、图片、音频路径
├── audio1/                             <- 原有，保持不动
│   ├── index.html
│   ├── gym.png
│   ├── gym.m4a
│   └── gym-example.m4a
├── audio2/ ... audio27/                <- 原有，保持不动
├── docs/                               <- 原有，可暂时保留
├── test2/                              <- 原有，可暂时保留
└── README.md                           <- 原有，可暂时保留
```

**注意：这个压缩包只包括新增文件，没有包含原来音频目录。**

不要把压缩包里面的整个 `shanghai-culture-club-commonapp` 文件夹上传成一个子文件夹。应将文件夹**内部的文件和目录**复制到原来 `phshcultureclub` 仓库的根目录，和 `audio1`、`audio2` 平级。

## 2. 最简单的上传方法（推荐使用 GitHub Desktop）

1. 从 GitHub 下载并安装 [GitHub Desktop](https://desktop.github.com/)，登录自己的 GitHub 账号。
2. `File` → `Clone repository`，克隆 `jerrymcnba/phshcultureclub` 到电脑。
3. 解压这个压缩包，把**包内的文件与文件夹**复制到克隆的本地 `phshcultureclub` 文件夹。
4. GitHub Desktop 会显示新增文件。填入 commit message，例如 `Build Common App website homepage and word card catalog`，点击 `Commit to main`。
5. 点击 `Push origin`，新文件就上传到了 GitHub。

也可以直接在 GitHub 网站 `Add file` → `Upload files` 上传，但用 GitHub Desktop 维护整个网站会更方便。

## 3. GitHub Pages 设置（重要）

1. 打开仓库：<https://github.com/jerrymcnba/phshcultureclub>
2. 打开 `Settings` → 左侧 `Pages`。
3. 在 **Build and deployment** 中：
   - `Source`：选择 **Deploy from a branch**
   - `Branch`：选择 **main**
   - `Folder`：选择 **/(root)**
   - 点击 **Save**
4. 等待 GitHub 部署完成；通常需要几分钟。
5. 打开以下预计网址：

   **https://jerrymcnba.github.io/phshcultureclub/**

如果你的 Pages 当前设置是从 `/docs` 发布，**必须改成 `/(root)`**，否则看不到新版首页。

## 4. 网站功能

- `index.html` — 英文首页，项目主题、原有卡片的展示拼贴、项目数据、精选词卡、项目故事。
- `cards.html` — 可按类别浏览全部词卡、支持英文/中文关键字搜索。
- `word.html?id=8` — 统一详情页，显示原来的卡片图片，并提供词语 + 例句两个音频播放器。可继续浏览上一张 / 下一张。
- `about.html` — 简洁介绍校园卡片项目、网站制作目的、对语言表达的思考。
- `data/cards.js` — 所有可编辑的词卡数据。

## 5. 如何新增一张词卡

假设未来新增 `audio28/`，其中有：

```text
audio28/
├── card.png
├── word.m4a
└── sentence.m4a
```

只要在 `data/cards.js` 数组最后添加一个对象（注意：倒数第二个对象后要有英文逗号）：

```javascript
{ id: 28, zh: "新词语", en: "English translation", category: "spaces",
  folder: "audio28/", image: "card.png", word: "word.m4a", example: "sentence.m4a" }
```

不用编辑 `cards.html`、`index.html` 或 `word.html`。详情页会自动生成。

可用类别：

- `spaces` — School spaces
- `sports` — Sports & recreation
- `objects` — Everyday objects
- `food` — Food & drink

也可以改 `CARD_CATEGORIES` 定义，增加类别。

**注意：旧目录的部分文件名包含空格，例如 `gym e.m4a`。已按照旧页面的实际引用写好路径，不要随手重命名。**

## 6. 已发现的特殊情况

当前 GitHub 仓库存在 `audio1` 到 `audio27` 共 27 个目录，但我通过公开页面只核实到了 **26 张可用词卡**。

**`audio26/index.html` 没有在公开路径中找到。** 因此初版索引收录 `audio1`—`audio25` 加 `audio27`，暂未加 `audio26`。你若找到 `audio26` 里实际的图和音频文件名，就可以照第 5 节把第 26 张补上。

网站首页展示的 **100+** 是**实体词卡设计数量**，而 **26** 是当前能核实的**在线音频词卡数量**，两者在网站中明确区分。

## 7. 申请提交前建议你检查的内容

- 仔细读 `index.html` 和 `about.html` 的英文叙述，确认每句话都忠实于你们真实开展的项目。
- 用手机、电脑各打开一遍首页、索引和 3–5 张详情页，确认图片和两段声音能播放。
- 检查 `word.html?id=13` 与 `word.html?id=27`：这几张音频名里有空格，是较容易出错的地方。
- 如愿意，未来可以在 `about.html` 插入你们真实的校园张贴照片；**当前版本没有编造现场照片**。
- 网站上线成功后，再把链接放进 Common App Additional Information。

## 8. 如何本地预览（可选）

把新文件复制到原仓库的根目录后，可以用 VS Code 的 Live Server 打开，或在仓库目录中运行：

```bash
python -m http.server 8000
```

再访问 <http://localhost:8000/>。直接双击 `index.html` 也能显示，但使用本地服务器更接近 GitHub Pages 的真实环境。

## 9. 未来升级

以后可在根目录新建 `culture/`、`blog/`，再把导航链接加进去。现在不需要引入 Astro、WordPress 或云服务器。等文章数量大了再重构，当前 URL 仍可继续使用。

---

注：这套网站文件与现有公开代码的相对路径做了匹配，但由于无法直接克隆原仓库完整内容进行端到端测试，部署后的图片与录音仍需要按照第 7 节亲自点开验证。
