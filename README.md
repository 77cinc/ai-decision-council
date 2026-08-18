# 智囊团 · AI 决策议事团 | AI Decision Council

> 让 65 位跨越两千年的谋士，成为你随叫随到的 AI 智囊团。
> Your on-demand brain trust of 65 historical advisors.

## 你是不是也这样？ | Sound familiar?

- 重大决策拿不准，怕一步错、步步错？
- 选择困难症，选项越多越焦虑？
- 一个人想问题，总绕不出同一个角度？

如果中了一条 → 你缺的不是更多信息，而是更多**视角**。
If any of these hit you, what you need isn't more information — it's more **perspectives**.

## 这东西干嘛用？ | What it does

一句话：把"一个人拍脑袋"升级成"65 位谋士廷议"。
In one line: turn lone brainstorming into a council of 65 advisors deliberating your problem.

你抛议题，系统帮你：

- **廷推入阁** — 按议题自动选出最合适的 5–7 位谋士
- **多角度辩论** — 谋士各抒己见、互相挑刺（含轮值反对派"给事中"专挑主流意见的漏洞）
- **票拟-批红** — 谋士建言（票拟），你拍板（批红）
- **丝纶簿存档** — 结构化留存，跨会话可追溯历史议事

灵感来自明朝内阁制（廷推 → 票拟 → 批红 → 丝纶簿），但落地成开箱即用的 Claude Code skill 系统。
Built on a Ming-Dynasty cabinet workflow, shipped as ready-to-use Claude Code skills.

## 谁该用？ | Who it's for

- 创业者 / 管理者：战略、用人、取舍等重大决策
- 内容创作者：选题、定位、多角度立意
- 研究 / 咨询：快速生成多视角分析框架
- 选择困难人群：把"纠结"交给智囊团
- 任何需要"多人多维度决策"的场景

Founders, creators, researchers, and anyone facing a hard choice.

## 30 秒上手 | Quick start

前置：Claude Code CLI 或兼容环境。
Prereq: Claude Code CLI (or compatible).

```bash
# 1. 把技能复制到你的项目
cp -r .claude/skills ./your-project/.claude/skills

# 2. 自动廷推（按议题选谋士）
/council 竞争对手降价了怎么办

# 3. 钦点谋士
/council 是否裁员 孔子,韩非子,德鲁克

# 4. 先调研后廷议
/council-with-research 是否进入新市场
```

每次议事产出：廷推名单 → 票拟（各方发言 + 共识 + 分歧）→ 给事中封驳 → 留空批红区由你拍板。
Each session outputs: lineup → petitions → dissent → a blank space for your final call.

> **关于谋士 Perspective Skill**：本仓库包含的 65 位谋士 perspective skill 为示例性质。
> 每位谋士的思维框架基于其历史著作和事迹独立提炼，如需使用请自行获取对应的人物 skill 文件。
> 本仓库的核心贡献在于 **council 内阁制协调系统**（廷推→议事→票拟→存档），而非单个人物 skill 的内容。

## 谋士阵容（65 位）| The roster

| 领域 | 代表谋士 | 人数 |
|------|---------|------|
| ⚔️ 战略/军事 | 孙武、诸葛亮、曹操、毛泽东、李世民 | 15 |
| ⚖️ 制度/法家 | 韩非子、商鞅、张居正、王安石 | 7 |
| ☯️ 哲学/道家 | 老子、庄子、荀子 | 5 |
| 📖 儒家/文学 | 孔子、孟子、王阳明、苏轼、武则天 | 11 |
| 🧠 逻辑/纵横 | 鬼谷子、苏秦、邓析 | 5 |
| 🔬 科学/创新 | 达芬奇、牛顿、图灵、冯·诺依曼 | 7 |
| 💼 商业/经济 | 德鲁克、马云、范蠡 | 3 |
| 🌍 现代哲学 | 苏格拉底、柏拉图、尼采、中本聪 | 6 |
| 🗡 其他 | 扁鹊、宫本武藏 | 5+ |

## 输出示例 | Example

以「竞争对手降价了怎么办」为例，系统自动廷推入阁：

| 角色 | 谋士 | 入选理由 |
|------|------|---------|
| **首辅** | 马云 | 近现代 · 商业实战匹配度 9/10，亲历多次市场博弈 |
| **次辅** | 诸葛亮 | 古代 · 全局谋略匹配度 8/10，守中寓攻 |
| **群辅** | 马斯克 | 当代 · 第一性原理，可重构竞争维度 |
| **给事中** | 韩非子 | 古代 · 制度性质疑，防主流意见盲区 |

议事中各谋士会依次发言、互相回应，最终形成甲策/乙策供主公选择。

## 目录结构 | Structure

```
├── .claude/skills/
│   ├── council/SKILL.md              # 内阁召集官（核心 orchestrator）
│   ├── council-registry/SKILL.md     # 缙绅录（65 位谋士花名册）
│   ├── council-with-research/SKILL.md # 先调研后廷议
│   └── *-perspective/SKILL.md        # 65 位谋士视角 skill
├── 智囊团议事录/                      # 丝纶簿档案库
│   ├── INDEX.md                      # 总索引
│   └── 000-示例议事.md               # 示例模板
└── 智囊团内阁制/                      # 实施计划文档
```

## 本项目原创贡献 | What we built

| 模块 | 说明 |
|------|------|
| council | 内阁召集官，核心协调流程（廷推→议事→票拟→存档） |
| council-registry | 缙绅录，65 位谋士花名册与角色分类 |
| council-with-research | 先调研后廷议工作流 |
| 智囊团议事录 | 丝纶簿存档系统与示例模板 |

## License

MIT
