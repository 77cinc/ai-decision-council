---
name: council-registry
description: |
  智囊团·缙绅录（明朝内阁花名册）。记录所有 65 位谋士的领域分类、专长标签、候选角色标记、给事中资质。
  供 /council 召集官 skill 在廷推环节读取，选拔入阁谋士。
  主公可随时编辑此文件增删谋士、调整标签、更换候选标记。
  触发：由 /council skill 内部调用，或用户说"查看缙绅录"、"查看智囊团名单"。
---

# 缙绅录 · 智囊团花名册

> **维护说明**：主公可直接编辑此文件。修改后立即生效。
> - 要新增谋士：在对应领域表格下加一行
> - 要让某谋士"出阁"：在其角色列填 `退役` 或直接删除该行
> - 候选标记：`首辅候选` `次辅候选` `群辅候选` `客卿候选` `给事中候选`

---

## 🏛 创始内阁（8 位，优先入选）

| 谋士 | skill 名 | 领域 | 专长标签 | 候选角色 |
|------|---------|------|---------|---------|
| 孙武 | sun-wu-perspective | 战略/军事 | 战略算力、非对称博弈、地理位能、风险控制 | **首辅候选** |
| 诸葛亮 | zhuge-liang-perspective | 战略/综合 | 全局谋略、风控、组织、谨慎用兵 | **次辅候选** |
| 曹操 | caocao-perspective | 战略/现实 | 现实主义、用人、权变、动态博弈 | 群辅候选 |
| 毛泽东 | mao-zedong-perspective | 革命/战略 | 矛盾分析、群众路线、持久战、辩证法 | 群辅候选 |
| 韩非子 | han-fei-perspective | 制度/法家 | 制度设计、权力制衡、激励、规则 | 群辅候选 / **给事中候选** |
| 孔子 | confucius-perspective | 儒家/伦理 | 组织伦理、社会契约、镜像博弈、反脆弱协作 | 群辅候选 |
| 达芬奇 | da-vinci-perspective | 创新/跨界 | 逆向工程、全栈跨界、解剖学审美 | 客卿候选 |
| 马斯克 | (尚未安装) | 创新/第一性原理 | 第一性原理、颠覆式创新 | 客卿候选 |

---

## ⚔️ 给事中候选池（轮值，4 位）

给事中负责封驳——质疑主流意见、挑逻辑漏洞、反浪费、反教条。每次议事从下表中选 1 位轮值。

| 谋士 | skill 名 | 擅长封驳方向 |
|------|---------|-------------|
| 墨子 | mo-zi-perspective | 反浪费、反形式主义、兼爱非攻 |
| 邓析 | deng-xi-perspective | 逻辑黑客、规则边界探测、两可之说 |
| 韩非子 | han-fei-perspective | 制度性质疑、权力制衡、法度考量 |
| 加缪 | camus-perspective | 哲学性质疑、荒诞反抗、死循环破解 |

---

## 📋 缙绅全录（按领域分类，65 位）

> 主公可在此增删谋士。每个谋士的 skill 名必须与 `.claude/skills/` 下的目录名一致。

### ⚔️ 战略/军事（15 位）

| 谋士 | skill 名 | 核心标签 | 候选角色 |
|------|---------|---------|---------|
| 孙武 | sun-wu-perspective | 战略算力、非对称博弈 | 首辅候选 |
| 孙膑 | sun-bin-perspective | 围魏救赵、田忌赛马、位能 | 群辅候选 |
| 诸葛亮 | zhuge-liang-perspective | 全局谋略、风控 | 次辅候选 |
| 曹操 | caocao-perspective | 现实主义、用人、权变 | 群辅候选 |
| 司马懿 | sima-yi-perspective | 隐忍、长期主义、后发制人 | 群辅候选 |
| 郭嘉 | guo-jia-perspective | 奇谋、急袭、洞察人心 | 客卿候选 |
| 韩信 | han-xin-perspective | 大兵团指挥、背水一战 | 群辅候选 |
| 霍去病 | huo-qubing-perspective | 长途奔袭、闪电战 | 客卿候选 |
| 张良 | zhang-liang-perspective | 运筹帷幄、谋略布局 | 次辅候选 |
| 刘伯温 | liu-bowen-perspective | 战略规划、预言推演 | 群辅候选 |
| 戚继光 | qi-jiguang-perspective | 练兵、制度化作战、防御体系 | 群辅候选 |
| 李世民 | li-shimin-perspective | 军政一体、纳谏、帝王战略 | 首辅候选 |
| 朱元璋 | zhu-yuanzhang-perspective | 草根逆袭、集权、肃贪 | 群辅候选 |
| 毛泽东 | mao-zedong-perspective | 矛盾分析、群众路线、持久战 | 群辅候选 |
| 吴起 | wu-qi-perspective | 军事+制度、魏武卒 | 群辅候选 |

### ⚖️ 制度/法家（7 位）

| 谋士 | skill 名 | 核心标签 | 候选角色 |
|------|---------|---------|---------|
| 韩非子 | han-fei-perspective | 制度设计、权力制衡 | 群辅候选 / 给事中候选 |
| 商鞅 | shang-yang-perspective | 变法、法治、农战 | 群辅候选 |
| 申不害 | shen-buhai-perspective | 权术、御下之术 | 客卿候选 |
| 慎到 | shen-dao-perspective | 势治、客观规则 | 客卿候选 |
| 管子 | guan-zhong-perspective | 国家治理、经济调控 | 群辅候选 |
| 张居正 | zhang-juzheng-perspective | 改革、一条鞭法、考成法 | 群辅候选 |
| 王安石 | wang-anshi-perspective | 变法、青苗法、激进改革 | 群辅候选 |

### ☯️ 哲学/道家（6 位）

| 谋士 | skill 名 | 核心标签 | 候选角色 |
|------|---------|---------|---------|
| 老子 | laozi-perspective | 无为而治、柔弱胜刚强 | 群辅候选 |
| 庄子 | zhuang-zi-perspective | 逍遥、齐物、超越世俗 | 客卿候选 |
| 荀子 | xun-zi-perspective | 性恶论、礼法并重 | 群辅候选 |
| 杨朱 | yang-zhu-perspective | 为我、贵己、轻物重生 | 客卿候选 |
| 许行 | xu-xing-perspective | 农耕乌托邦、并耕而食 | 客卿候选 |
| 邹衍 | zou-yan-perspective | 阴阳五行、天人感应、大九州说 | 客卿候选 |

### 📖 儒家/伦理/文学（11 位）

| 谋士 | skill 名 | 核心标签 | 候选角色 |
|------|---------|---------|---------|
| 孔子 | confucius-perspective | 组织伦理、社会契约 | 群辅候选 |
| 孟子 | mencius-perspective | 仁政、民本、浩然之气 | 群辅候选 |
| 晏子 | yan-zi-perspective | 谏诤、节俭、外交智慧 | 客卿候选 |
| 曾国藩 | zeng-guofan-perspective | 修身、耐烦、儒将 | 群辅候选 |
| 王阳明 | wangyangming-perspective | 心学、知行合一、致良知 | 群辅候选 |
| 贾谊 | jia-yi-perspective | 政论、时势分析、忧国 | 客卿候选 |
| 杜甫 | du-fu-perspective | 忧患意识、现实主义诗歌 | 客卿候选 |
| 苏轼 | su-shi-perspective | 豁达、跨界才华、逆境韧性 | 客卿候选 |
| 李白 | li-bai-perspective | 浪漫主义、自由精神 | 客卿候选 |
| 刘邦 | liubang-perspective | 驭人术、草根逆袭、示弱 | 群辅候选 |
| 武则天 | wu-zetian-perspective | 权谋、女性权力、用人 | 群辅候选 |

### 🧠 逻辑/辩术/纵横（5 位）

| 谋士 | skill 名 | 核心标签 | 候选角色 |
|------|---------|---------|---------|
| 邓析 | deng-xi-perspective | 两可之说、逻辑黑客 | **给事中候选** |
| 公孙龙 | gongsun-long-perspective | 白马非马、名实之辩 | 客卿候选 |
| 苏秦 | su-qin-perspective | 合纵、游说、联盟策略 | 客卿候选 |
| 鬼谷子 | guiguzi-perspective | 捭阖、揣摩、权谋游说 | 群辅候选 |
| 吕不韦 | lu-buwei-perspective | 奇货可居、奇谋、商业嗅觉 | 客卿候选 |

### 🔬 创新/科学/工程（7 位）

| 谋士 | skill 名 | 核心标签 | 候选角色 |
|------|---------|---------|---------|
| 达芬奇 | da-vinci-perspective | 逆向工程、跨界、解剖学审美 | 客卿候选 |
| 伽利略 | galileo-perspective | 实验方法、观测、反教条 | 客卿候选 |
| 牛顿 | newton-perspective | 公理化、力学范式、还原论 | 客卿候选 |
| 莱布尼茨 | leibniz-perspective | 二进制、单子论、乐观主义 | 客卿候选 |
| 图灵 | turing-perspective | 计算理论、AI 奠基、密码学 | 客卿候选 |
| 冯·诺依曼 | von-neumann-perspective | 博弈论、计算机架构、游戏理论 | 群辅候选 |
| 毕加索 | picasso-perspective | 立体主义、艺术革命、破坏性创造 | 客卿候选 |

### 💼 商业/组织/经济（3 位）

| 谋士 | skill 名 | 核心标签 | 候选角色 |
|------|---------|---------|---------|
| 德鲁克 | drucker-perspective | 管理学、目标管理、知识工作者 | 群辅候选 |
| 马云 | mayun-perspective | 生态思维、愿景驱动、商业实战 | 客卿候选 |
| 范蠡 | fan-li-perspective | 商业+战略、进退有据、三徙成名的经营智慧 | 客卿候选 |

### 🌍 存在主义/现代哲学/宗教（6 位）

| 谋士 | skill 名 | 核心标签 | 候选角色 |
|------|---------|---------|---------|
| 苏格拉底 | socrates-perspective | 追问本质、反诘法、知识即美德 | 群辅候选 |
| 柏拉图 | plato-perspective | 理念论、哲人王、理想国 | 群辅候选 |
| 尼采 | nietzsche-perspective | 超人、权力意志、价值重估 | 客卿候选 |
| 萨特 | sartre-perspective | 存在先于本质、自由、责任 | 客卿候选 |
| 保罗 | paul-perspective | 传教策略、普世主义、组织构建 | 客卿候选 |
| 中本聪 | satoshi-nakamoto-perspective | 去中心化、博弈激励、密码学 | 客卿候选 |

### 🎯 批判/反对派专长（4 位 — 与给事中候选池重叠）

> 这 4 位谋士因"批判性思维"突出，被单独标记为给事中候选。他们也可作为普通谋士参与议事。

| 谋士 | skill 名 | 批判方向 | 给事中适配度 |
|------|---------|---------|-------------|
| 墨子 | mo-zi-perspective | 反浪费、反形式主义、兼爱非攻 | ⭐⭐⭐ |
| 邓析 | deng-xi-perspective | 逻辑漏洞、规则边界、两可之说 | ⭐⭐⭐ |
| 韩非子 | han-fei-perspective | 制度缺陷、权力失衡、法度不严 | ⭐⭐⭐ |
| 加缪 | camus-perspective | 荒诞性、死循环、无意义系统 | ⭐⭐⭐ |

### 🗡 其他（3 位）

| 谋士 | skill 名 | 核心标签 | 候选角色 |
|------|---------|---------|---------|
| 扁鹊 | bian-que-perspective | 系统诊断、风险预警、治未病 | 客卿候选 |
| 宫本武藏 | miyamoto-perspective | 剑道、五轮书、一击必杀 | 客卿候选 |
| 曹操（小说） | cao-cao-perspective | 枭雄气质、小说角色绑定 | （与 caocao 互斥，二选一） |

> **注**：曹操有两个 skill——`cao-cao-perspective`（小说人物绑定）和 `caocao-perspective`（思维框架）。议事时默认用后者；若需要小说人物视角，用前者。

---

## 📊 候选角色速查

| 角色 | 人数 | 建议人选 |
|------|------|---------|
| **首辅候选** | 2 | 孙武、李世民 |
| **次辅候选** | 3 | 诸葛亮、张良 |
| **群辅候选** | 30+ | 曹操、毛泽东、韩非子、孔子、德鲁克、王阳明 等 |
| **客卿候选** | 25+ | 达芬奇、马斯克、伽利略、范蠡、马云 等 |
| **给事中候选** | 4 | 墨子、邓析、韩非子、加缪 |

---

## 🔧 维护日志

| 日期 | 操作 |
|------|------|
| 2026-07-20 | 初始建档。65 位谋士入缙绅录。创始内阁 8 位。给事中候选 4 位。 |
