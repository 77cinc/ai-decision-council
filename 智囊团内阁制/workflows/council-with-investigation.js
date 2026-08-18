export const meta = {
  name: 'council-with-investigation',
  description: '先调研后廷议：谋士先学习最新市场信息，再基于客观报告给出主观建议',
  phases: [
    { title: '调研', detail: '搜索并整理最新市场信息' },
    { title: '报告', detail: '汇编客观调研报告' },
    { title: '廷议', detail: '谋士基于报告讨论并票拟' }
  ]
}

// 输入参数
// args = {
//   topic: '讨论议题',
//   investigationFocus: ['关键词1', '关键词2'],  // 调研重点
//   councilMode: 'auto' | ['谋士1', '谋士2']     // 廷议模式
// }

const { topic, investigationFocus = [], councilMode = 'auto' } = args

// Phase 1: 调研
phase('调研')
log(`🔍 开始调研：${topic}`)

// 使用 web-access skill 进行多源搜索
const investigation = await agent(
  `你是调研专员。请针对以下议题进行多源信息搜索：

议题：${topic}
调研重点：${investigationFocus.join('、')}

请使用 web-access skill 搜索以下维度：
1. 市场现状（规模、增速、趋势）
2. 竞品动态（主要玩家、近期动作）
3. 用户反馈（痛点、需求变化）
4. 技术/政策环境（新法规、技术突破）
5. 融资/投资事件（资本动向）

输出格式：
## 调研报告：${topic}

### 一、市场现状
- 数据点 1（来源）
- 数据点 2（来源）

### 二、竞品动态
- ...

### 三、用户反馈
- ...

### 四、技术/政策环境
- ...

### 五、融资/投资事件
- ...

### 六、关键发现（3-5 条）
1. ...
2. ...

要求：
- 每条信息标注来源
- 数据尽量具体（数字、日期）
- 区分事实与推测`,
  { label: '调研专员', phase: '调研' }
)

if (!investigation) {
  log('❌ 调研失败')
  return { error: '调研阶段失败' }
}

log('✅ 调研完成')

// Phase 2: 报告汇编
phase('报告')
log('📝 汇编调研报告...')

// 将调研结果整理成结构化报告
const report = await agent(
  `你是报告编辑。请将以下调研结果整理成结构化的客观报告：

${investigation}

要求：
1. 保留所有关键数据和来源
2. 按"事实 → 趋势 → 启示"三层组织
3. 在末尾添加"谋士参考要点"——提炼 5-7 条谋士讨论时应关注的核心问题
4. 语言客观，避免主观判断

输出格式：
# 客观调研报告：${topic}

## 一、核心事实
...

## 二、趋势判断
...

## 三、谋士参考要点
1. ...
2. ...
（5-7 条）`,
  { label: '报告编辑', phase: '报告' }
)

if (!report) {
  log('❌ 报告汇编失败')
  return { error: '报告阶段失败' }
}

log('✅ 报告完成')

// Phase 3: 廷议
phase('廷议')
log('🏛 召集内阁廷议...')

// 调用 council skill，将报告作为上下文传入
const councilInput = `${topic}

---
## 📊 市场调研报告（客观事实）

${report}

---
请基于以上市场情况，结合各位谋士的思维框架，给出建议。`

// 使用 Skill 工具调用 council
const councilResult = await agent(
  `请使用 council skill 进行廷议：

${councilInput}

廷议模式：${councilMode === 'auto' ? '自动廷推' : `钦点谋士：${councilMode.join('、')}`}

要求：
1. 谋士发言时必须引用报告中的具体数据
2. 给事中封驳时，要质疑报告中可能的盲点或偏差
3. 备选方案必须基于报告中的市场现实`,
  { label: '内阁召集官', phase: '廷议' }
)

log('✅ 廷议完成')

// 返回完整结果
return {
  topic,
  investigation,
  report,
  councilResult,
  timestamp: new Date().toISOString()
}
