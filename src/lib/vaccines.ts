import { VaccineConfigs, VaccineType } from "./types";

export const vaccineConfigs: VaccineConfigs = {
  hepatitisB: {
    name: "乙肝疫苗",
    description:
      "用于预防乙型肝炎病毒感染。乙肝病毒会导致肝脏疾病，严重时可引起肝硬化和肝癌。新生儿及时接种可有效阻断母婴传播。接种时间保持稳定，未有重大变更。",
    type: VaccineType.FREE,
    schedule: [
      { days: 0, description: "第一针 (出生24小时内)" },
      { days: 30, description: "第二针 (1月龄)" },
      { days: 180, description: "第三针 (6月龄)" },
    ],
  },
  bcg: {
    name: "卡介苗",
    description:
      "预防结核病，特别是对预防结核性脑膜炎和粟粒性结核有较好的保护作用。结核病是由结核杆菌引起的慢性传染病，主要侵犯肺部。接种时间保持稳定，未有重大变更。",
    type: VaccineType.FREE,
    schedule: [{ days: 0, description: "出生时接种" }],
  },
  polio: {
    name: "脊髓灰质炎疫苗",
    description:
      '预防脊髓灰质炎（小儿麻痹症）。脊灰疫苗免疫程序历经多次重要调整：2016年5月1日起，将三价脊灰减毒活疫苗(tOPV)改为二价脊灰减毒活疫苗(bOPV)，同时引入脊灰灭活疫苗(IPV)；2019年9月起实行"2剂IPV+2剂bOPV"免疫策略，以加强对II型脊灰病毒的保护。2024年1月，国家疾控局发布通知，要求2016年3月1日至2019年9月30日期间出生、仅接种过1剂IPV的儿童补种第二剂IPV。',
    type: VaccineType.FREE,
    schedule: [
      { days: 60, description: "第一针 (2月龄) IPV灭活疫苗肌肉注射" },
      { days: 90, description: "第二针 (3月龄) IPV灭活疫苗肌肉注射" },
      { days: 120, description: "第三针 (4月龄) bOPV口服活疫苗" },
      { days: 1460, description: "第四针 (4岁) bOPV口服活疫苗" },
    ],
  },
  dpt: {
    name: "百白破疫苗",
    description:
      "三联疫苗，同时预防百日咳、白喉和破伤风。这三种疾病均可导致严重并发症，其中百日咳对婴幼儿的威胁尤为严重，白喉和破伤风则可能危及生命。重要变更：自2025年1月1日起，接种程序由原来的3、4、5月龄和18月龄各接种1剂调整为2、4、6月龄和18月龄接种。同时，6周岁原接种白破疫苗改为接种百白破疫苗。",
    type: VaccineType.FREE,
    schedule: [
      { days: 60, description: "第一针 (2月龄) [2025年1月起变更]" },
      { days: 120, description: "第二针 (4月龄)" },
      { days: 180, description: "第三针 (6月龄) [2025年1月起变更]" },
      { days: 540, description: "第四针 (18月龄)" },
      {
        days: 2190,
        description: "第五针 (6周岁) [2025年1月起变更，原为白破疫苗]",
      },
    ],
  },
  dt: {
    name: "白破疫苗",
    description:
      "吸附白喉破伤风联合疫苗(DT)，不含百日咳成分，用于预防白喉和破伤风。重要变更：自2025年1月1日起，6周岁接种百白破疫苗代替原来的白破疫苗。目前白破疫苗主要用于7-11周岁儿童补种，12周岁以上不再接种。",
    type: VaccineType.FREE,
    schedule: [
      {
        days: 2555,
        description: "7-11周岁补种使用 (针对未能按时完成百白破疫苗接种的儿童)",
      },
    ],
  },
  measlesRubella: {
    name: "麻风疫苗",
    description:
      "麻风二联疫苗，预防麻疹和风疹。麻疹是一种急性传染病，可导致肺炎、脑炎等并发症；风疹若感染孕妇，可导致胎儿畸形。2011年5月起逐步以麻风疫苗替代单价麻疹疫苗。",
    type: VaccineType.FREE,
    schedule: [{ days: 240, description: "(8月龄)" }],
  },
  mmr: {
    name: "麻腮风疫苗",
    description:
      "三联疫苗，预防麻疹、腮腺炎和风疹。腮腺炎是腮腺炎病毒感染引起的急性传染病，可导致睾丸炎、卵巢炎、胰腺炎和脑膜炎等并发症。接种时间保持稳定，未有重大变更。",
    type: VaccineType.FREE,
    schedule: [{ days: 540, description: "(18-24月龄)" }],
  },
  encephalitisB: {
    name: "乙脑疫苗",
    description:
      "预防流行性乙型脑炎，这是由乙型脑炎病毒通过蚊虫叮咬传播的疾病。乙脑可导致高热、昏迷、抽搐等神经系统症状，病死率高，幸存者也常有神经系统后遗症。有减毒活疫苗和灭活疫苗两种选择。",
    type: VaccineType.FREE,
    schedule: [
      { days: 240, description: "第一针 (8月龄) 减毒活疫苗" },
      { days: 730, description: "第二针 (2周岁) 减毒活疫苗" },
    ],
  },
  encephalitisB_i: {
    name: "乙脑灭活疫苗",
    description:
      "乙脑灭活疫苗接种程序，相比减毒活疫苗需要更多剂次。选择灭活疫苗或减毒活疫苗后应全程使用同一种类型疫苗。接种时间保持稳定，未有重大变更。",
    type: VaccineType.FREE,
    schedule: [
      { days: 240, description: "第一针 (8月龄)" },
      { days: 250, description: "第二针 (第一针后7-10天)" },
      { days: 730, description: "第三针 (2周岁)" },
      { days: 2190, description: "第四针 (6周岁)" },
    ],
  },
  meningococcalA: {
    name: "A群流脑疫苗",
    description:
      "预防A群脑膜炎奈瑟菌引起的流行性脑脊髓膜炎（简称流脑）。流脑是一种急性化脓性脑膜炎，冬春季多发，可引起严重的神经系统损伤甚至死亡。接种时间保持稳定，未有重大变更。",
    type: VaccineType.FREE,
    schedule: [
      { days: 180, description: "第一针 (6-18月龄)" },
      { days: 270, description: "第二针 (第一针后3个月)" },
    ],
  },
  meningococcalAC: {
    name: "A+C群流脑疫苗",
    description:
      "预防A群和C群脑膜炎奈瑟菌引起的流行性脑脊髓膜炎。随着疫苗接种的普及，近年来C群流脑在部分地区呈上升趋势，接种A+C群疫苗提供更广泛保护。接种时间保持稳定，未有重大变更。",
    type: VaccineType.FREE,
    schedule: [
      { days: 1095, description: "第一针 (3周岁)" },
      { days: 2190, description: "第二针 (6周岁)" },
    ],
  },
  hepatitisA: {
    name: "甲肝疫苗",
    description:
      "预防甲型肝炎，这是一种由甲型肝炎病毒引起的急性传染病，主要通过消化道传播。甲肝虽然很少导致慢性肝病，但可引起急性肝功能衰竭，尤其是成人。有减毒活疫苗和灭活疫苗两种，2012年5月起多地区开始使用灭活疫苗代替减毒活疫苗。",
    type: VaccineType.FREE,
    schedule: [{ days: 540, description: "减毒活疫苗 (18月龄) 单次接种" }],
  },
  hepatitisA_i: {
    name: "甲肝灭活疫苗",
    description:
      "甲肝灭活疫苗需要接种两剂，与减毒活疫苗的单剂次接种不同。2012年5月起多地区开始转为使用灭活疫苗。选择灭活疫苗或减毒活疫苗后应全程使用同一种类型疫苗。",
    type: VaccineType.FREE,
    schedule: [
      { days: 540, description: "第一针 (18月龄)" },
      { days: 720, description: "第二针 (24-30月龄)" },
    ],
  },
  varicella: {
    name: "水痘疫苗",
    description:
      "预防水痘，这是一种由水痘-带状疱疹病毒引起的高度传染性疾病，特征是全身出现瘙痒性斑疹和水疱。虽然大多数情况下是自限性疾病，但可能引起严重并发症。目前为第二类疫苗（自费）。",
    type: VaccineType.SELF_PAID,
    schedule: [{ days: 365, description: "(12-15月龄)" }],
  },
  hib: {
    name: "b型流感嗜血杆菌疫苗",
    description:
      "预防由b型流感嗜血杆菌引起的侵袭性疾病，如脑膜炎、肺炎、败血症等。婴幼儿是高发人群，可显著降低相关疾病的发病率和死亡率。目前为第二类疫苗（自费）。",
    type: VaccineType.SELF_PAID,
    schedule: [
      { days: 60, description: "第一针 (2月龄)" },
      { days: 120, description: "第二针 (4月龄)" },
      { days: 180, description: "第三针 (6月龄)" },
      { days: 450, description: "加强针 (12-15月龄)" },
    ],
  },
  pneumococcal: {
    name: "肺炎球菌疫苗",
    description:
      "预防肺炎球菌引起的侵袭性疾病，包括肺炎、脑膜炎、中耳炎和败血症等。肺炎球菌是全球儿童死亡的主要病原体之一，接种疫苗可大幅降低发病风险。目前为第二类疫苗（自费）。",
    type: VaccineType.SELF_PAID,
    schedule: [
      { days: 90, description: "第一针 (3月龄)" },
      { days: 150, description: "第二针 (5月龄)" },
      { days: 210, description: "第三针 (7月龄)" },
      { days: 365, description: "加强针 (12-15月龄)" },
    ],
  },
  rotavirus: {
    name: "轮状病毒疫苗",
    description:
      "预防由轮状病毒引起的急性胃肠炎，这是婴幼儿腹泻的主要原因之一。严重时可导致脱水、电解质紊乱甚至死亡，疫苗接种可明显减轻症状并降低住院率。目前为第二类疫苗（自费）。",
    type: VaccineType.SELF_PAID,
    schedule: [
      { days: 60, description: "第一针 (2月龄)" },
      { days: 120, description: "第二针 (4月龄)" },
    ],
  },
  influenza: {
    name: "流感疫苗",
    description:
      "预防流行性感冒，是一种由流感病毒引起的急性呼吸道传染病。每年流感病毒株会发生变异，因此建议每年接种。儿童是流感的高危人群，重症率和死亡率较高。目前为第二类疫苗（自费）。",
    type: VaccineType.SELF_PAID,
    schedule: [
      { days: 180, description: "首次 (6月龄及以上)" },
      { days: 210, description: "首次第二针 (首次后1个月)" },
      { days: 365, description: "每年接种一次" },
    ],
  },
  eV71: {
    name: "EV71疫苗",
    description:
      "手足口病疫苗，预防由肠道病毒71型（EV71）引起的手足口病，可有效预防重症手足口病。手足口病常见于5岁以下儿童，EV71型是导致神经系统并发症和死亡的主要病原体。目前为第二类疫苗（自费）。",
    type: VaccineType.SELF_PAID,
    schedule: [
      { days: 180, description: "第一针 (6月龄以上)" },
      { days: 210, description: "第二针 (第一针后1个月)" },
      { days: 365, description: "第三针 (第二针后6个月)" },
    ],
  },
  hpv: {
    name: "HPV疫苗",
    description:
      "人乳头瘤病毒疫苗，主要预防由HPV引起的宫颈癌及其癌前病变。我国目前有二价、四价和九价HPV疫苗。女孩建议在9-14岁之间开始接种，接种前无需进行HPV检测。目前为第二类疫苗（自费）。",
    type: VaccineType.SELF_PAID,
    schedule: [
      { days: 3285, description: "第一针 (9岁起可接种)" },
      { days: 3345, description: "第二针 (第一针后2个月)" },
      {
        days: 3525,
        description: "第三针 (第一针后6个月) [仅九价和部分四价需要]",
      },
    ],
  },
};
