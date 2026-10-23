# Feliclean 产品上架维护手册

> 适用站点：https://feliclean.com ｜ 仓库：https://github.com/Graces109/feliclean.git
> 本手册说明：**总览页与类目页设计已经固化保存**，以后上新产品只需准备图片、复制详情页模板、在登记表加一条记录，**不需要再改动任何列表页、布局、样式或筛选脚本**。

---

## 一、哪些设计已经固定（以后不要改动结构）

以下内容已写死在网站仓库里，新增产品时**保持原样即可**，不要去改页面骨架、CSS 样式或筛选分页脚本：

| 已固化内容 | 所在文件 | 说明 |
|---|---|---|
| 产品总览页 | `products.html` | 显示全部产品，`data-scope-group="all"` |
| 六个一级类目列表页 | `cleaning-equipment.html`、`plastic.html`、`service-cart.html`、`cleaning-tools.html`、`mop.html`、`hotel-supplies.html` | 各页只显示所属一级分组产品 |
| 左侧三级类目导航树 | 上述七个页面侧栏 | 一级手风琴展开、二级点击筛选、三级悬浮显示 |
| 卡片样式（1:1 缩略图、型号、品名、12 条/页分页、空状态提示） | `assets/css/main.css` + `assets/js/catalog.js` | 由登记表自动渲染，无需手工复制卡片 |
| 详情页母版（左图库右信息、参数表、产品描述、数量框、黄色 Get a Quote、WhatsApp、图库点击切换与放大） | `cn-102.html`（作为复制母版） | 新详情页一律复制此文件再替换文字与参数 |
| 询盘表单 | `quote.html` | 自动接收链接里的型号、品名、数量并回填，提交到 FormSubmit |

**设计保存位置**：网站全部代码同时保存在**本地仓库**和 **GitHub 远程仓库**，二者提交记录一致（当前版本 `7d34694`），不会因浏览器缓存或换电脑而丢失。以后只要不改动上表文件的结构，页面外观就始终保持一致。

---

## 二、以后上一款新品，只做 3 件事

### 第 1 步：图片入站
在 `assets/img/products/` 下新建一个以**型号小写**命名的文件夹，把产品图放进去：

```
assets/img/products/型号小写/
├── scene.jpg      ← 第一张主图（正面、主体饱满、白底、已去掉超宝/chaobao 等旧品牌标）
├── runtime.jpg    ← 可选：使用场景 / 多款式合集
├── spec.jpg       ← 可选：参数 / 款式规格图
└── detail.jpg     ← 可选：另一角度细节图
```

### 第 2 步：建详情页
复制母版 `cn-102.html`，另存为 **`型号小写.html`**（例如 `cn-103.html`），按 [第六节 详情页替换清单](#六详情页母版替换清单以-cn-102html-为基准) 逐处替换标题、面包屑、图库、参数表、描述、卖点和询盘型号。

### 第 3 步：在登记表加一条记录
打开 `assets/js/products-data.js`，在 `window.FELI_PRODUCTS = [ ... ]` 数组末尾、最后一条记录的 `}` 后面加一条新记录（逗号不要漏）。保存后提交推送，**总览页和对应类目页会自动出现这款产品的卡片**，不用再打开任何列表页手工添加。

---

## 三、登记表字段说明（`assets/js/products-data.js`）

每条记录格式：

```js
{
  href: "cn-103.html",
  img: "assets/img/products/cn-103/scene.jpg",
  alt: "CN-103 description of the product",
  model: "CN-103",
  name: "Product English Name",
  group: "pl",
  cat: "new-shape-caution-board",
  parent: "caution-board"
}
```

| 字段 | 含义 | 填写规则 |
|---|---|---|
| `href` | 详情页文件名 | 与第 2 步新建的 HTML 文件名一致，如 `cn-103.html` |
| `img` | 卡片缩略图 | 指向第一张主图（`scene.jpg`），即详情页默认大图同一张 |
| `alt` | 图片无障碍说明 | 英文，简述产品与视角，便于 SEO |
| `model` | 型号 | 与页面标题、参数表、询盘里的型号完全一致 |
| `name` | 品名（卡片上显示） | 英文，沿用客户给定名称，**不要自行改写客户锁定的英文** |
| `group` | 一级分组代码 | 见 [第四节](#四一级分组-group-对照表)，决定卡片出现在哪个一级类目页 |
| `cat` | 三级类目 slug | 必须与侧栏 `data-filter` 完全一致；无三级类目时与 `parent` 填同一个二级 slug |
| `parent` | 二级类目 slug | 必须与侧栏 `data-filter` 完全一致，见 [第五节](#五完整类目-slug-树) |

> 注意：`cat` / `parent` 的英文 slug 必须和左侧导航里的 `data-filter` 一字不差，否则点击类目时筛选不到这款产品。

---

## 四、一级分组 group 对照表

| group 代码 | 一级类目 | 对应列表页 |
|---|---|---|
| `eq` | Cleaning Equipment | `cleaning-equipment.html` |
| `pl` | Plastic | `plastic.html` |
| `sc` | Service Cart | `service-cart.html` |
| `ct` | Cleaning Tools | `cleaning-tools.html` |
| `mo` | Mop | `mop.html` |
| `hs` | Hotel Supplies | `hotel-supplies.html` |
| （总览页不填 group 筛选） | Products 全部 | `products.html` |

---

## 五、完整类目 slug 树

> 结构：**一级 group** → 二级 `parent` → 三级 `cat`（有三级才填三级 slug；无三级时 `cat` 与 `parent` 相同）。

### eq — Cleaning Equipment
二级（均无三级，`cat` = `parent`）：
- `scrubber-dryer` — Scrubber Dryer
- `brush-machine` — Brush Machine
- `vacuum-cleaner` — Vacuum Cleaner
- `sofa-maintainer` — Sofa Maintainer
- `carpet-machine` — Carpet Machine
- `blower` — Blower
- `equipment-accessories` — Equipment Accessories

### pl — Plastic
- `parent: wringer-trolley` — Wringer Trolley（无三级，`cat = wringer-trolley`）
- `parent: dustbin` — Dustbin（无三级，`cat = dustbin`）
- `parent: tool-bucket` — Tool Bucket，三级 `cat` 可选：
  - `pedal-garbage-bin` — Pedal Garbage Bin
  - `turning-cover-dustbin` — Turning Cover Dustbin
  - `classification-dustbin` — Classification Dustbin
  - `bathroom-dustbin` — Bathroom Dustbin
  - `outdoor-garbage-cart` — Outdoor Garbage Cart
- `parent: stainless-steel-dustbin` — Stainless Steel Dustbin（无三级，`cat = stainless-steel-dustbin`）
- `parent: storage-bin` — Storage Bin（无三级，`cat = storage-bin`）
- `parent: caution-board` — Caution Board，三级 `cat` 可选：
  - `a-type-caution-board` — A Type caution board
  - `new-shape-caution-board` — New shape caution board
  - `upright-caution-board` — Upright caution board

### sc — Service Cart
二级（均无三级，`cat` = `parent`）：
- `multipurpose-cleaning-cart` — Multipurpose Cleaning Cart
- `restaurant-service-cart` — Restaurant Service Cart
- `guest-room-service-cart` — Guest Room Service Cart
- `medical-cleaning-cart` — Medical Cleaning Cart

### ct — Cleaning Tools
- `parent: broom-shovel` — Broom & Shovel（无三级，`cat = broom-shovel`）
- `parent: pick-up-tools` — Pick Up Tools（无三级，`cat = pick-up-tools`）
- `parent: brush` — Brush（无三级，`cat = brush`）
- `parent: squeegee` — Squeegee，三级 `cat` 可选：
  - `stainless-steel-squeegee` — Stainless Steel Squeegee
  - `plastic-squeegee` — Plastic Squeegee
- `parent: glass-scrape` — Glass Scrape（无三级，`cat = glass-scrape`）
- `parent: aluminum-telescopic-pole` — Aluminum Telescopic Pole（无三级，`cat = aluminum-telescopic-pole`）
- `parent: others` — Others（无三级，`cat = others`）

### mo — Mop
二级（均无三级，`cat` = `parent`）：
- `lobby-mop` — Lobby Mop
- `flat-mop` — Flat Mop
- `pressing-mop` — Pressing Mop
- `mop-head` — Mop Head
- `floor-mop` — Floor Mop
- `clip` — Clip

### hs — Hotel Supplies
二级（均无三级，`cat` = `parent`）：
- `tissue-box` — Tissue Box
- `dispenser` — Dispenser

---

## 六、详情页母版替换清单（以 `cn-102.html` 为基准）

复制母版后，按下表逐处替换；**页面框架、CSS 类名、脚本结构保持不动**。

| 位置（母版行号参考） | 要替换的内容 | 注意事项 |
|---|---|---|
| 第 7 行 `<title>` | 型号 + 品名 + `- Feliclean` | 与 `h1` 标题一致 |
| 第 8 行 `<meta name="description">` | 英文产品简介 | 含型号、材质、适用场景，用于 SEO |
| 第 60 行 `pdp-back` 返回链接 | 指向所属二级类目页锚点，如 `plastic.html#caution-board`，文字 `Back to 类目名` | 锚点 slug 与第五节一致 |
| 第 61–63 行 `pdp-crumb` 面包屑 | Home » Products » 一级 » 二级 » 三级 » 型号 | 链接逐级对应类目页 `#slug` |
| 第 68–72 行 `pdp-thumbs` 图库 | 每张 `<button>` 的 `data-full`、`<img src>`、`alt` | 第一张加 `active`；图片路径指向新文件夹 |
| 第 73–75 行 `pdp-main` 默认大图 | `src` 指向第一张主图 `scene.jpg`，`alt` 改为新品说明 | 与第一张缩略图同一张 |
| 第 78–88 行 `Detailed Specifications` 参数表 | 每行 `<th>` 参数名、`<td>` 参数值 | 按客户目录册原文填写，单位保留 |
| 第 90–94 行 `pdp-desc` 产品描述 | 英文段落，材质、工艺、卖点、适用场景 | 段落格式，不要加框 |
| 第 98 行 `pdp-title` | 品名 + 型号 | 与登记表 `name`、`model` 一致 |
| 第 99 行 `pdp-lead` | 一句话核心卖点 | 段落，不加边框 |
| 第 101–106 行 `pdp-meta` | Model / Type / Application / Quantity | Quantity 输入框 `id="pdpQty"` 保留不动 |
| 第 108–113 行 `sd-features` | 4 条核心卖点（`bi-check-circle-fill` 图标保留） | 每条一条 `<div class="sd-feature">` |
| 第 115–118 行 `pdp-actions` | Get a Quote 黄按钮、WhatsApp 图标 | 按钮颜色 `#ffc107` 与链接结构保留，不要改色 |
| 第 180 行 lightbox `alt` | 放大图说明 | 改为新品 |
| 第 241–242 行询盘脚本常量 | `MODEL`、`PRODUCT` | 只改这两个；`WA_NUMBER`、`MAIL_TO` 保持全站统一 |

### 询盘脚本中保持不变的常量（第 243–244 行）

```js
var WA_NUMBER = '8613427520701';
var MAIL_TO = 'info@feliclean.com';
```

- `Get a Quote` 按钮自动跳 `quote.html?model=型号&product=品名&qty=数量`，表单自动回填，无需另改 `quote.html`。
- WhatsApp 按钮自动带上品名与数量，无需另改号码。

---

## 七、图片规范

1. **目录与命名**：`assets/img/products/型号小写/`，主图固定 `scene.jpg`；其余按 `runtime / spec / detail` 命名。
2. **主体饱满**：正面主图主体高度占画面 80% 以上、宽度约 60% 以上，白底干净；留白过大会导致 1:1 卡片里产品显得过小、像空白。
3. **去旧品牌标**：图片上不得保留 `chaobao`、`超宝`、旧型号贴纸等旧品牌标识；旧型号文字一并去除。
4. **比例**：竖版接近 1:1，不拉伸变形；单图控制在约 200K，高清、无 AI 感、无多余水印。
5. **卡片图 = 第一张主图**：登记表 `img` 与详情页默认大图指向同一张 `scene.jpg`，不要另做一张留白很大的场景图当卡片图。

---

## 八、提交上线命令（PowerShell，仓库根目录 `feliclean-site`）

```powershell
cd "C:\Users\Leo-PC\Doubao\chats\2026-10-14\new-chat-3\feliclean-site"
git add -A
git commit -m "Add product 型号"
git push origin master:main
```

- 本机代理需保持开启（`127.0.0.1:7892`），否则 GitHub 连接超时。
- 推送成功后约 **1 分钟** CDN 刷新；浏览器查看时按 **Ctrl+F5** 强制刷新清缓存。
- 推送闭环核对：`git rev-parse HEAD` 与 `git ls-remote origin main` 返回同一串 hash 即上线成功。

---

## 九、全站统一联系信息（不要改动）

| 项目 | 值 |
|---|---|
| Phone / WhatsApp | +86 134 2752 0701 |
| WhatsApp 链接 | `https://wa.me/8613427520701` |
| Email | `info@feliclean.com` |
| 询盘提交接口 | `https://formsubmit.co/ajax/info@feliclean.com` |

> 备注：`info@feliclean.com` 邮箱收信配置尚未开通，询盘投递问题按后续单独安排处理；新增产品时不要自行更换上述邮箱与号码。

---

## 十、当前已上架产品登记（备查）

| 型号 | 品名 | 一级 group | 二级 parent | 三级 cat | 详情页 |
|---|---|---|---|---|---|
| SD-101 | Ride-On Scrubber Dryer Machine | eq | scrubber-dryer | scrubber-dryer | `sd-101.html` |
| SD-102 | 660mm Auto/Manual Ride-On Scrubber Dryer | eq | scrubber-dryer | scrubber-dryer | `sd-102.html` |
| CN-101 | Small Shape of A Caution Board | pl | caution-board | new-shape-caution-board | `cn-101.html` |
| CN-102 | Large Shape of A Caution Board | pl | caution-board | new-shape-caution-board | `cn-102.html` |
| CN-103 | The Shape of A Caution Board | pl | caution-board | new-shape-caution-board | `cn-103.html` |

---

## 附：固化文件清单（新增产品时不要改动其结构）

- 列表页：`products.html`、`cleaning-equipment.html`、`plastic.html`、`service-cart.html`、`cleaning-tools.html`、`mop.html`、`hotel-supplies.html`
- 脚本：`assets/js/catalog.js`（渲染 / 筛选 / 分页）、`assets/js/main.js`（全站交互）
- 样式：`assets/css/main.css`（卡片、详情页、侧栏类目树样式）
- 询盘表单：`quote.html`
- 详情页母版：`cn-102.html`（复制使用，不要在母版上直接改）
