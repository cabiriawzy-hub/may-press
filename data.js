// AI 慢读月刊 · Vol 26.05 — 24 chapters (No.01-24), bilingual zh/en.
// Source: final doc HN8MdL2v. 卷首语 -> window.PREFACE (homepage 导读).
// spine.drop = each chapter's signature color (dropcap + pull-quote + sources).
window.PREFACE = {
  "zh": "当技术狂热退潮，行业的底层逻辑正经历着剧烈重构。大模型竞赛的焦点，已从参数规模的堆砌，无情地滑向了冷冰冰的商业账本。一面是算力基础设施的吸金黑洞与令人咋舌的估值泡沫，另一面则是变现路径的艰难探索与高昂的运营亏损。寡头通吃的格局愈发明显，巨头们在资本与算力的游戏里加速狂奔，而真正的商业回报仍在迷雾中等待验证。无论是加速商业化变现，还是算力金融化的创新，这都是技术全面落地前夜必须跨越的成本深渊。",
  "en": "When the technology craze subsides, the underlying logic of the industry is undergoing drastic reconstruction. The focus of the large model competition has inexorably shifted from the accumulation of parameter scales to the cold business ledgers. On the one hand, there is the gold-absorbing black hole of computing infrastructure and the staggering valuation bubble; on the other hand, it is the difficult exploration of monetization paths and high operating losses. The pattern of oligarchs taking all is becoming more and more obvious. The giants are speeding up in the game of capital and computing power, while the real business returns are still in the fog waiting to be verified. Whether it is accelerating commercialization or innovating in the financialization of computing power, this is a cost abyss that must be overcome on the eve of the full implementation of the technology."
};

// 卷首导读 (No.00) — full editorial opener for the magazine homepage hero + reading view.
// zh: 用户提供的定稿。en: 中文直译（editorial translation, 可改写）。
window.PREFACE_FULL = {
  "no": "00",
  "kicker_zh": "No.00 · 导读 · 编辑部",
  "kicker_en": "No.00 · Editor's Letter",
  "title_zh": "AI 的估值、亏损与真实商业代价",
  "title_en": "AI's Valuations, Losses, and the Real Cost of Doing Business",
  "intro_zh": "五月，AI 行业的叙事风向彻底变了——大家开始坐下来算账：收入、亏损、估值与巨额的算力开销，第一次被真正摆上台面。",
  "intro_en": "In May, the narrative of the AI industry shifted decisively — people sat down to do the math. Revenue, losses, valuations and the enormous cost of compute were, for the first time, laid out on the table.",
  "body_zh": [
    "五月之前，AI 圈还在卷模型性能和 Agent 的自主性，但现在，这门生意到底赚不赚钱成了核心议题。Anthropic 是这场叙事反转的暴风眼。先是 CNBC 在 5 月 20 日爆出：Anthropic Q2 营收有望达 109 亿美元，将迎来首个盈利季。可紧接着第二天，科技评论人 Ed Zitron 就在 Substack 发文《Anthropic 的盈利骗局》直指核心——他用同一组公开数据算出，Anthropic 单季的算力开支其实已逼近营收，账面上的「盈利」多半是成本摊销口径的腾挪，而非经营真有改善。更具戏剧性的是，仅过了一周（5 月 28 日），Anthropic 就拿下了 650 亿美元的 H 轮融资，投后估值暴涨至 9650 亿美元，史上首次反超 OpenAI。短短一个月内，「首次盈利」、「盈利造假」、「估值反超」三种充满张力的说法集中爆发，让外界对 AI 公司的商业账本第一次有了交叉比对的靶子。",
    "整个行业的集中度和资金内循环，也在五月亮出了硬数据。5 月 18 日 The Information 披露，在 34 家头部 AI 创业公司的总盘子里，Anthropic 与 OpenAI 两家就切走了 89% 的收入，剩下 32 家只能在夹缝中求生。至于 OpenAI 自己，一季度运营利润率仅为 -122%——每赚 1 美元，运营上就要亏掉 1.22 美元。与此同时，资金正在产业链内部加速「空转」：英伟达 5 月 20 日财报显示，单季买入非上市证券达 185.8 亿美元，同比暴增 29 倍——相当于把卖卡赚的钱，又投回给了买卡的客户。Bloomberg 5 月 28 日的报道则揭示了算力的金融化玩法：Apollo 和黑石牵头了约 360 亿美元私募信贷，买下谷歌 TPU 后再租给 Anthropic，残值则由博通担保。",
    "算力端疯狂烧钱，入口端的争夺也变得赤裸裸。5 月 19 日的 I/O 大会上，谷歌直接让 AI Mode 接管了 google.com 的默认搜索框，甚至不惜把自己最核心的「十条蓝链」广告位往下挪。另一头，OpenAI 在 5 月 5 日悄悄上线了自助广告后台，这意味着免费版 ChatGPT 的庞大用户群终于被当成了可变现的广告库存。而在开发者入口上，微软在 5 月 14 日撤下了内部使用的 Claude Code，全员切回自家的 GitHub Copilot CLI。盈利压力一公开，谁能卡住高频入口，谁就拥有了活下去的底牌。",
    "中国市场的账同样在变。晚点 LatePost 5 月 18 日报道，字节主动淡化了豆包曾经最引以为傲的「1 亿 DAU」目标，不再盲目追求 C 端规模。但几天后 Bloomberg 曝出，字节正将今年的 AI 基建资本开支最高上调至 700 亿美元。与此同时，上海电信在 5 月 16 日开始像卖话费一样卖大模型 Token（1 元换 25 万额度）。当算力成本飙升，单纯的 DAU 增长不再意味着胜利，投入产出比成了新的度量衡。",
    "这个月，AI 还以前所未有的规模杀入了那些原本不谈「生意」的领域。军事上，Anthropic 拒绝了五角大楼的无限制使用要求，国防部转身就把机密网络大单签给了别家；学术圈，DeepMind 的 Agent 自主解出了 9 个悬而未决的 Erdős 问题，初创公司 Axiom 用大模型+Lean 生成的数学证明被 5 家学术期刊接收；职场上，Cloudflare 5 月 8 日的财报电话会直言，AI 已让约 1100 个岗位（约占两成）变得多余，但公司同季度的营收却创了新高。",
    "为什么是五月？因为年初大家还在拼模型跑分，无账可算；现在产品真正切进了搜索框、广告库和业务流，成本和收益终于有了具体的参照物。接下来，我们只需等待时间来验证这些数字能否自洽：Anthropic 向谷歌云承诺的约 2000 亿美元算力采购，会不会压垮那 109 亿的盈利预期？英伟达投出去的 185.8 亿能否回本？OpenAI 与 Anthropic 那 89% 的垄断份额是否还会继续攀升？豆包不看 DAU 之后，字节将用什么新指标讲故事？接下来几个月的披露，将给出答案。"
  ],
  "body_en": [
    "Before May, the AI world was still racing on model performance and agent autonomy. Now, whether this business actually makes money has become the central question — and Anthropic sits at the eye of the storm. First, on May 20, CNBC reported that Anthropic's Q2 revenue could reach $10.9 billion, ushering in its first profitable quarter. But the very next day, tech critic Ed Zitron published \"Anthropic's Profitability Swindle\" on Substack and went straight for the jugular: using the same public figures, he calculated that Anthropic's single-quarter compute spend already nearly equals its revenue, so the on-paper \"profit\" is mostly an accounting maneuver around cost amortization rather than any real operating improvement. More dramatic still, just a week later (May 28), Anthropic closed a $65 billion Series H, with its post-money valuation surging to $965 billion — overtaking OpenAI for the first time in history. Within a single month, three highly charged claims — \"first profit,\" \"faked profit,\" and \"valuation overtake\" — erupted together, giving outsiders their first cross-checkable target for an AI company's business ledger.",
    "The industry's concentration and the internal circulation of capital also produced hard numbers in May. On May 18, The Information disclosed that across 34 leading AI startups, Anthropic and OpenAI alone took 89% of the revenue, leaving the other 32 to scrape by in the cracks. As for OpenAI itself, its first-quarter operating margin was -122% — for every $1 earned, it loses $1.22 at the operating level. Meanwhile, money is increasingly spinning in place within the supply chain: Nvidia's May 20 earnings showed $18.58 billion of non-public securities bought in a single quarter, a 29x year-over-year jump — effectively pouring the money it made selling chips back into the customers who buy them. Bloomberg's May 28 report exposed the financialization of compute: Apollo and Blackstone led roughly $36 billion in private credit to buy Google TPUs and then lease them to Anthropic, with Broadcom guaranteeing the residual value.",
    "As the compute side burns cash, the fight over entry points has turned naked. At I/O on May 19, Google let AI Mode take over the default search box on google.com, even pushing its most precious \"ten blue links\" ad real estate downward. On the other side, OpenAI quietly launched a self-serve ads backend on May 5, meaning the vast user base of free ChatGPT is finally being treated as monetizable ad inventory. On the developer-entry front, Microsoft pulled internally-used Claude Code on May 14 and moved everyone back to its own GitHub Copilot CLI. Once the pressure to profit is out in the open, whoever controls the high-frequency entry point holds the trump card for survival.",
    "China's ledger is changing too. On May 18, LatePost reported that ByteDance was deliberately playing down Doubao's once-proudest \"100 million DAU\" goal, no longer blindly chasing consumer scale. Yet days later, Bloomberg revealed ByteDance is raising this year's AI infrastructure capex to as much as $70 billion. At the same time, Shanghai Telecom began on May 16 selling large-model tokens the way it sells phone credit (1 yuan for 250,000 tokens). As compute costs soar, raw DAU growth no longer means victory; return on investment has become the new yardstick.",
    "This month, AI also pushed at unprecedented scale into fields that never used to talk \"business.\" In the military, Anthropic refused the Pentagon's demand for unrestricted use, and the Department of Defense promptly signed its classified-network contract with someone else. In academia, DeepMind's agent independently solved 9 open Erdős problems, and startup Axiom's proofs — generated with large models plus Lean — were accepted by 5 academic journals. In the workplace, Cloudflare's May 8 earnings call flatly stated that AI had rendered about 1,100 jobs (roughly 20%) redundant, even as the company posted record revenue that same quarter.",
    "Why May? Because at the start of the year everyone was still competing on benchmark scores, with no ledger to compute; now products have actually cut into the search box, the ad inventory and the business workflow, so costs and returns finally have concrete reference points. From here, we only have to wait for time to test whether the numbers add up: will Anthropic's roughly $200 billion compute commitment to Google Cloud crush that $10.9 billion profit forecast? Will Nvidia's $18.58 billion bet earn back? Will OpenAI and Anthropic's 89% duopoly share keep climbing? And once Doubao stops watching DAU, what new metric will ByteDance use to tell its story? The disclosures of the coming months will give the answers."
  ],
  "sources": [
    { "label": "cnbc.com", "url": "https://www.cnbc.com/2026/05/20/anthropic-revenue-explosive-growth-ipo-profitable-quarter.html" },
    { "label": "wheresyoured.at", "url": "https://www.wheresyoured.at/anthropics-profitability-swindle/" },
    { "label": "the information (x.com)", "url": "https://x.com/theinformation/status/2057514274222727216" },
    { "label": "bloomberg.com", "url": "https://www.bloomberg.com/news/articles/2026-05-27/bytedance-weighs-capex-of-as-much-as-70-billion-in-ai-push" },
    { "label": "theverge.com", "url": "https://www.theverge.com/ai-artificial-intelligence/937028/military-ai-warfare-red-lines" },
    { "label": "latepost.com", "url": "https://www.latepost.com/news/dj_detail?id=3558" }
  ]
};

window.BRIEFING_ITEMS = [
  {
    "id": "no-01",
    "no": "01",
    "cat": "essay",
    "title_zh": "自我构建的前夜",
    "title_en": "The eve of self-construction",
    "author_zh": "Jack Clark · Import AI",
    "author_en": "Jack Clark · Import AI",
    "date": "May 04, 2026",
    "minutes": 4,
    "spine": {
      "bg": "#1A2350",
      "fg": "#E8E2D6",
      "accent": "#E0B24A",
      "drop": "#5163D6"
    },
    "pull_zh": "五月的一系列动作释放了明确的信号：让 AI 自己去研发下一代 AI，已经从概念预测，变成了真金白银的产线投入。",
    "pull_en": "A series of actions in May sent a clear signal: Let AI develop the next generation of AI by itself, which has gone from conceptual prediction to real investment in production lines.",
    "body_zh": [
      "就在 5 月 4 日这天，Anthropic 政策负责人 Jack Clark 在其老牌简报《Import AI》（第 455 期）里甩出了一个重磅预测：到 2028 年底前，出现「无人参与的 AI 研发」（即 AI 系统自主研发下一代 AI）的概率超过 60%。过去聊 AGI 总是泛泛而谈，这次 Clark 直接把时间表和概率拍在了桌面上。更有趣的是，接下来的短短一个月里，这个预测就在资本和产线上找到了具体的对应物。",
      "仅仅 9 天后（5 月 13 日），一家名叫 Recursive Superintelligence 的初创公司正式亮相。团队仅 8 人，由前 Salesforce 首席科学家 Richard Socher 领衔（Meta FAIR 的田渊栋也位列其中）。公司目标极其单一：用开放式算法推动模型递归自我改进（让模型改进模型，再去改进下一代）。这家连产品都没发布的公司，首轮就拿下了 6.5 亿美元融资（GV 和 Greycroft 领投，英伟达和 AMD 跟投），估值高达 46.5 亿美元。Clark 的预测，第一次被资本用 46.5 亿美元投了赞成票。",
      "在生产环境里，DeepMind 也交出了答卷。5 月 7 日发布的 AlphaEvolve 报告披露了它的落地战绩：这套 AI 系统不仅设计了下一代 TPU 的部分电路，帮助 Spanner 数据库降低了 20% 的写放大，还提升了模型自身的训练效率。人类在芯片设计这环，已经开始被 AI 逐渐「请」出核心流程。",
      "人才流向更是风向标。5 月 19 日，前 OpenAI 核心成员 Andrej Karpathy 宣布加入 Anthropic 的 Pretraining 团队。团队负责人 Nick Joseph 明确表示，Karpathy 正在用 Claude 来加速下一代 Claude 的预训练研究。联想到 Karpathy 5 月初刚提出的「Software 3.0」（写代码将变成调度模型），他本人的这次跳槽，正是把自己塞进了这套全新工作方式的最前沿——用 AI 研发 AI。",
      "当然，当前 AI 的边界也很清晰。Clark 在 5 月 18 日补充了一个反向例证：Prime Intellect 的实验表明，Agent 确实能在既定方向上跑赢人类优化的 nanoGPT 训练基准；但它提不出任何原创想法，只会在已有的框架里调参。也就是说，AI 在「执行与优化」上比人强，但在判断「要不要换条全新思路」时，依然力不从心。",
      "无论如何，「AI 研发 AI」已经不再是务虚的讨论。未来一年，我们需要紧盯几个硬指标：Recursive 这 46.5 亿美元到底能砸出什么响动？AlphaEvolve 设计的 TPU 电路能否顺利量产？Anthropic 那项「用 Claude 加速训练」的研究能否拿出服众的结果？以及最重要的——Agent 什么时候能第一次提出人类没想到的原创训练思路？"
    ],
    "body_en": [
      "Just on the 4th, Anthropic policy director Jack Clark made a blockbuster prediction in his old newsletter \"Import AI\" (Issue 455): by the end of 2028, the probability of \"uninvolved AI R&D\" (that is, AI systems independently developing the next generation of AI) will be more than 60%. In the past, we’ve always talked about AGI in general terms, but this time Clark put timetables and probabilities directly on the table. What’s even more interesting is that in just one month, this prediction found specific counterparts in capital and production lines.",
      "Just nine days later (May 13), a startup called Recursive Superintelligence made its official debut. The team is only 8 people, led by former Salesforce chief scientist Richard Socher (Meta FAIR’s Tian Yuandong is also among them). The company's goal is extremely single: to use open algorithms to promote recursive self-improvement of models (let the model improve the model, and then improve the next generation). This company, which has not even released a product, raised US$650 million in its first round of financing (led by GV and Greycroft, with participation from NVIDIA and AMD), with a valuation of US$4.65 billion. Clark's forecast was voted in favor of by capital for the first time with $4.65 billion.",
      "In the production environment, DeepMind also handed over the answer sheet. The AlphaEvolve report released on May 7 disclosed its implementation record: This AI system not only designed some circuits of the next-generation TPU, helping the Spanner database reduce write amplification by 20%, but also improved the training efficiency of the model itself. Human beings have begun to be gradually \"invited\" out of the core process by AI in the field of chip design.",
      "The flow of talents is even more of a weather vane. On May 19, former OpenAI core member Andrej Karpathy announced that he had joined Anthropic’s Pretraining team. Team leader Nick Joseph made it clear that Karpathy is using Claude to accelerate pre-training research for the next generation of Claude. Reminiscent of the 「Software 3.0」 that Karpathy just proposed in early May (writing code will become a scheduling model), his own job-hopping has put himself at the forefront of this new way of working - using AI to develop AI.",
      "Of course, the current boundaries of AI are also very clear. Clark added a counter-example on May 18: Prime Intellect’s experiments show that Agent can indeed outperform the human-optimized nanoGPT training benchmark in a given direction; but it cannot come up with any original ideas and can only adjust parameters in the existing framework. In other words, AI is better than humans in \"execution and optimization\", but it is still unable to judge \"whether to find a new idea\".",
      "In any case, \"AI develops AI\" is no longer a pragmatic discussion. In the coming year, we need to keep an eye on several hard indicators: What kind of impact can Recursive’s $4.65 billion make? Can the TPU circuit designed by AlphaEvolve be successfully mass-produced? Can Anthropic’s study on 「accelerating training with Claude」 produce convincing results? And most importantly - when will Agent come up with original training ideas for the first time that humans have not thought of?"
    ],
    "sources": [
      {
        "label": "importai.substack.com",
        "url": "https://importai.substack.com/p/import-ai-455-automating-ai-research"
      },
      {
        "label": "recursive.com",
        "url": "https://www.recursive.com/"
      },
      {
        "label": "deepmind.google",
        "url": "https://deepmind.google/discover/blog/"
      }
    ]
  },
  {
    "id": "no-02",
    "no": "02",
    "cat": "essay",
    "title_zh": "Software 3.0 下的生存法则",
    "title_en": "Rules of Survival under Software 3.0",
    "author_zh": "Andrej Karpathy",
    "author_en": "Andrej Karpathy",
    "date": "May 01, 2026",
    "minutes": 3,
    "spine": {
      "bg": "#C8CED6",
      "fg": "#242A32",
      "accent": "#46647E",
      "drop": "#345C88"
    },
    "pull_zh": "在 Karpathy 的演讲里，「AI 调度取代人工写代码」还只是一种趋势论断；但在 Cloudflare 的财报里，它已经变成了 1100 个被裁掉的真实岗位。",
    "pull_en": "In Karpathy's speech, \"AI scheduling replaces manual coding\" was just a trend conclusion; but in Cloudflare's financial report, it has become 1,100 real positions that have been laid off.",
    "body_zh": [
      "时间回到 5 月 1 日，Andrej Karpathy 在红杉的 Sequoia Ascent 上提出了「Software 3.0」的概念。他将编程演进分为三段：Software 1.0 是人类手敲代码，Software 2.0 是训练神经网络权重，而现在的 Software 3.0，则是通过提示词、上下文和工具调用，去「调度」一个足够强大的模型。作为写出神作《Software 2.0》的前 OpenAI 核心大佬，他的潜台词很明显：未来编程的基本单位不再是「写代码」，而是「指挥系统」。",
      "在这个逻辑下，程序员的工作重心整体上移了一层。过去，你的核心竞争力是手写出准确的循环和数据结构；现在，这部分死活儿交给了 Agent，人的核心价值变成了「边界约束」——如何喂上下文、如何配置工具、如何写清楚约束条件。Karpathy 并不是在宣扬「程序员消亡论」，而是在提醒：这份工作的重心，已经从「具体实现」，转向了「约束并管理一个比你强、却不太稳定的 AI 系统」。而半个月后（5 月 19 日），他本人入职 Anthropic 负责「用 Claude 加速预训练」，更是亲身践行了去最前线「调度 AI」的理念。",
      "这套理论不仅停留在台上，已经残酷地投射到了就业数据上。5 月 8 日，Cloudflare 在财报中宣布，AI 的提效让他们直接裁掉了约 1100 个岗位（约两成人员）。最扎心的是，这是这家成立 16 年的公司首次大裁员，且当季营收还创了新高。这绝不是业务收缩，而是「调度 AI」真的在生产环境里取代了传统的人海战术。",
      "整个科技圈的岗位结构正在被重塑。Gergely Orosz 5 月 26 日在《Pragmatic Engineer》发布的报告印证了这一点：传统的头部软件工程岗需求只温和复苏了 20%，但 AI 工程岗（即那些会调度模型、能把 AI 嵌进业务的人）的需求同比暴涨了 50% 到 100%。",
      "行业正在出现极端的两极分化：中间那些只会写常规业务代码的群体正在被压缩，而懂得如何约束、调度 AI 的顶层人才正遭到哄抢。如果未来几个季度的财报和招聘数据继续延续这种背离趋势，那么「Software 3.0」将不再是一句极客圈的黑话，而是每个技术从业者都必须面对的生存法则。"
    ],
    "body_en": [
      "Going back to the 1st, Andrej Karpathy proposed the concept of 「Software 3.0」 at Sequoia Ascent at Sequoia. He divided the evolution of programming into three stages: Software 1.0 was about human hands typing code, Software 2.0 was about training neural network weights, and now Software 3.0 is about \"scheduling\" a powerful enough model through prompt words, context and tool calls. As the former OpenAI core boss who wrote the masterpiece \"Software 2.0\", his subtext is obvious: the basic unit of future programming is no longer \"writing code\", but \"command system\".",
      "Under this logic, the overall focus of programmers' work has moved up one level. In the past, your core competitiveness was to write accurate loops and data structures by hand; now, this part of the life and death is handed over to the Agent, and the core value of people has become \"boundary constraints\" - how to feed context, how to configure tools, and how to write clear constraints. Karpathy is not advocating the \"death theory of programmers\", but is reminding that the focus of this job has shifted from \"concrete implementation\" to \"constraining and managing an AI system that is stronger than you but less stable.\" Half a month later (May 19), he joined Anthropic to be responsible for \"accelerating pre-training with Claude\" and personally practiced the concept of \"scheduling AI\" at the forefront.",
      "This theory not only stays on the stage, but has also been cruelly projected onto the employment data. On May 8, Cloudflare announced in its financial report that improvements in AI efficiency had allowed them to directly lay off approximately 1,100 positions (approximately 20% of the workforce). The most distressing thing is that this is the first major layoff of this 16-year-old company, and its revenue in the quarter hit a new high. This is by no means a business contraction, but \"scheduling AI\" has really replaced the traditional human sea tactics in the production environment.",
      "The job structure of the entire technology circle is being reshaped. A report released by Gergely Orosz in \"Pragmatic Engineer\" on May 26 confirmed this: the demand for traditional head software engineering positions has only recovered moderately by 20%, but the demand for AI engineering positions (that is, those who can schedule models and embed AI into business) has skyrocketed by 50% to 100% year-on-year.",
      "The industry is experiencing extreme polarization: those in the middle who can only write regular business code are being compressed, while top talents who know how to constrain and schedule AI are being robbed. If the financial reports and recruitment data in the next few quarters continue this divergence trend, then \"Software 3.0\" will no longer be a slang in the geek circle, but a survival rule that every technology practitioner must face."
    ],
    "sources": [
      {
        "label": "karpathy.bearblog.dev",
        "url": "https://karpathy.bearblog.dev/sequoia-ascent-2026/"
      },
      {
        "label": "techcrunch.com",
        "url": "https://techcrunch.com/2026/05/08/cloudflare-says-ai-made-1100-jobs-obsolete-even-as-revenue-hit-a-record-high/"
      },
      {
        "label": "newsletter.pragmaticengineer.com",
        "url": "https://newsletter.pragmaticengineer.com/"
      }
    ]
  },
  {
    "id": "no-03",
    "no": "03",
    "cat": "essay",
    "title_zh": "警惕自动化陷阱",
    "title_en": "Beware of automation traps",
    "author_zh": "Simon Willison · Mitchell Hashimoto",
    "author_en": "Simon Willison · Mitchell Hashimoto",
    "date": "May 06, 2026",
    "minutes": 3,
    "spine": {
      "bg": "#4A1F28",
      "fg": "#F0E2D2",
      "accent": "#E08A6A",
      "drop": "#D2554A"
    },
    "pull_zh": "当你把所有的业务流程都顺滑地交给 AI 时，你很可能把自己自动化成了一台极其稳定、却不断犯错的「灾难机器」。",
    "pull_en": "When you hand over all business processes to AI smoothly, you are likely to automate yourself into an extremely stable \"disaster machine\" that keeps making mistakes.",
    "body_zh": [
      "近期，两位技术圈的先驱不约而同地发出了警告。5 月 6 日，Django 联合发明人 Simon Willison 在博客中坦言，他发现自己在日常开发中，越来越难分清「我还在负责把关」和「我已经完全放任 AI 去跑」之间的界限；5 月 15 日，HashiCorp 的联合创始人 Mitchell Hashimoto 更是措辞激烈地批评公司里弥漫着一种「只要故障恢复够快（MTTR 短）就行」的 AI 狂热病。他们指向了同一个隐忧：我们在让 AI 自动写代码、自动跑流程的同时，也正不知不觉地把「该不该做这件事」的判断权交了出去。",
      "过去几十年的技术自动化（比如 Excel 算账、ORM 替代手写 SQL），接管的是「技能」。技能外包是有底线的：系统崩溃了会报警，跑错了有日志，回滚重来就是了。而 Hashimoto 犀利地指出，现在的情况变了——一旦你把「判断权」也交出去，你得到的未必是一个会崩溃的系统，反而可能是一台「resilient catastrophe machine」（稳健的灾难机器）。它极其稳定，永远不会挂，但却在持续不断地沿着错误的方向狂奔。",
      "这就引出了一个非常核心的认知错位。Hashimoto 自己当年做 Terraform 等基础设施工具时，核心指标确实是 MTTR（平均恢复时间）。但「出了故障能快修好」和「这个功能一开始到底该不该做」，完全是两码事。当团队过度依赖 AI 的高效产出时，只要代码能跑通、能快速回滚，就默认大方向是对的。流程快到飞起，表面上责任明确，却再也没有人停下来认真问一句：「这件事情真的值得做吗？」",
      "这也正是 Karpathy 在「Software 3.0」里提到的副作用：当程序员退到了「指挥者」的位置，那种过去靠一行行手写代码积累起来的「手感」和「掌控感」正在迅速退化。技能生疏了还能练回来，但判断力的丧失却静悄悄的。系统不会因为你今天少做了一次判断而报错。等到几个月后，你发现团队在一条错误的路上一路狂飙时，甚至翻遍日志，都找不到这种「判断权滑坡」到底是从哪一天开始的。"
    ],
    "body_en": [
      "During May, two pioneers in the tech circle coincidentally issued warnings. On May 6, Simon Willison, the co-inventor of Django, admitted in a blog that he found it increasingly difficult to distinguish between \"I am still responsible for checking\" and \"I have completely let AI run\" in daily development. On May 15, HashiCorp co-founder Mitchell Hashimoto even fiercely criticized the company for an AI mania that \"as long as the failure recovery is fast enough (MTTR is short)\" is pervasive. They point to the same hidden worry: while we allow AI to automatically write code and run processes, we are also unknowingly handing over the right to judge \"whether we should do this or not.\"",
      "The technological automation of the past few decades (such as Excel accounting, ORM replacing handwritten SQL) has taken over \"skills\". Skills outsourcing has a bottom line: if the system crashes, the alarm will be reported, if an error occurs, there will be logs, and you can just roll back and start over. Hashimoto sharply pointed out that the situation has changed now - once you hand over the \"right of judgment\", what you get may not be a system that will collapse, but may be a \"resilient catastrophe machine\" (robust disaster machine). It's extremely stable and never hangs, but it keeps running wildly in the wrong direction.",
      "This leads to a very core cognitive misalignment. When Hashimoto himself was working on infrastructure tools such as Terraform, the core indicator was indeed MTTR (Mean Time to Recovery). But \"can a malfunction be fixed quickly\" and \"should this function be implemented in the first place?\" are completely different things. When a team relies too much on the efficient output of AI, as long as the code can run through and be rolled back quickly, the general direction is correct by default. The process is so fast, and responsibilities seem clear on the surface, but no one stops to seriously ask: \"Is this really worth doing?\"",
      "This is exactly the side effect Karpathy mentioned in \"Software 3.0\": when programmers retreat to the position of \"commander\", the \"feel\" and \"control\" accumulated by lines of handwritten code in the past are rapidly degrading. Skills can be picked up if they become unfamiliar, but the loss of judgment is silent. The system will not report an error because you made one less judgment today. A few months later, when you find that the team has been racing down the wrong road, you can even look through the logs and you can't find the day when this \"slippage of judgment\" started."
    ],
    "sources": [
      {
        "label": "simonwillison.net",
        "url": "https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/"
      },
      {
        "label": "hachyderm.io",
        "url": "https://hachyderm.io/@mitchellh/116580433508108130"
      },
      {
        "label": "news.ycombinator.com",
        "url": "https://news.ycombinator.com/item?id=48153379"
      }
    ]
  },
  {
    "id": "no-04",
    "no": "04",
    "cat": "essay",
    "title_zh": "保持作为人类的思考",
    "title_en": "Keep thinking as a human being",
    "author_zh": "Ethan Mollick",
    "author_en": "Ethan Mollick",
    "date": "May 27, 2026",
    "minutes": 3,
    "spine": {
      "bg": "#E9DAA6",
      "fg": "#3A3016",
      "accent": "#9A6B2E",
      "drop": "#9C5524"
    },
    "pull_zh": "把思考外包给 AI，表面上是偷了懒，实际上却在悄悄抹杀我们自己读与写的核心能力。",
    "pull_en": "Outsourcing thinking to AI appears to be laziness, but in fact it is quietly destroying our own core abilities of reading and writing.",
    "body_zh": [
      "宾大沃顿商学院教授 Ethan Mollickick 长期在课堂和企业里做 AI 实验，他在 5 月 27 日发表了一篇名为《选择保持人类》的文章，揭示了一个让人极度不适的现象：当你习惯性地把阅读和写作大面积外包给 AI 时，你大脑里承载着「判断力」的思考肌肉，正在随之萎缩。",
      "先说「写」。根据 Graphite 的研究，早在 2024 年底，AI 生成的英文文章数量就已经反超人类。现在到处充斥着被称为「Slop」（工业废水）的批量 AI 文本：语法挑不出毛病，但空洞、油滑，看完留不下任何印象。更可怕的是同质化——模型正把所有人的表达强行拉向同一个平庸的均值。",
      "再说「读」。Mollick 在课堂上的对照实验给出了惊人的结论：如果让大模型直接给学生提供答案，学生的学习效果反而会下降；但如果让模型像导师一样，一步步引导学生去推演，成绩则明显提升。这证明了一个常识：思考的路径是不能被替代的。让 AI 直接喂答案，表面上省事，实际上学生根本没有完成「内化」。就像读一篇晦涩的长文，真正的理解不是用眼睛扫过那些字，而是在脑海中将其重建。",
      "这恰好是《警惕「自动化」陷阱：我们正在把判断权交给 AI》的更深层延续。判断力不是天上掉下来的，它就长在字斟句酌的「写」和抽丝剥茧的「读」里。一旦这两个动作被外包，判断力这根底柱也就被抽空了。",
      "当然，这不是全盘否定 AI。五月的两个案例给出了明确的边界：在哈佛发表于《Science》的研究中，面对有标准答案的 76 例急诊病历，OpenAI 模型的诊断准确率完胜两位主治医师；但另一边，Andon Labs 让四个顶级模型去运营电台和咖啡馆，结果全军覆没。结论很清楚：在封闭、有确切答案的窄域任务上，AI 可以做得比专家好；但在需要持续权衡后果、担负责任的开放性任务（比如写作与深度阅读）上，目前没有模型能顶得住。",
      "所以，Mollick 所说的「选择保持人类」绝不是一句矫情的口号，而是一套对抗思维退化的防御机制：明明可以扔给 AI，却偏要自己啃。尤其是一封难写的邮件、一篇难懂的论文——难，正是因为思路还不清晰，而死磕的过程，就是锻炼判断力的过程。最费脑子的地方，一旦为了省力推给了 AI，你的大脑深处就不会留下任何痕迹。失去这种能力不会有警报，但半年后当你发现自己连一篇长文都无法静下心读完、一个复杂想法都写不清楚时，退化就已经完成了。"
    ],
    "body_en": [
      "Ethan Mollickick, a professor at the Wharton School of the University of Pennsylvania, has been doing AI experiments in classrooms and companies for a long time. He published an article on May 27 called \"Choose to Stay Human\", revealing an extremely uncomfortable phenomenon: when you habitually outsource reading and writing to AI on a large scale, the thinking muscles in your brain that carry \"judgment\" are shrinking.",
      "Let’s talk about 「writing」 first. According to research by Graphite, as early as the end of 2024, the number of English articles generated by AI has exceeded that of humans. Nowadays, there is a lot of batch AI text called \"Slop\" (industrial wastewater) everywhere: there is no fault in the grammar, but it is empty and slippery, and it leaves no impression after reading it. What’s even more frightening is homogenization—the model is forcing everyone’s expression toward the same mediocre mean.",
      "Let’s talk about 「reading」 again. Mollick's controlled experiments in the classroom gave a surprising conclusion: if the large model directly provides students with answers, the student's learning effect will decrease; but if the model is like a tutor, guiding students step by step to deduce, the performance will be significantly improved. This proves common sense: the path of thinking cannot be replaced. Letting AI feed answers directly may save trouble on the surface, but in fact students have not completed 「internalization」 at all. Just like reading a long and obscure article, the real understanding is not to scan the words with your eyes, but to reconstruct them in your mind.",
      "This happens to be a deeper continuation of \"Beware of the \"Automation\" Trap: We Are Handing Over Judgment to AI\". Judgment does not fall from the sky, it grows in the \"writing\" of carefully considering every word and the \"reading\" of picking out the cocoons. Once these two actions are outsourced, the foundation of judgment is also taken away.",
      "Of course, this is not to deny AI entirely. Two cases in May gave a clear boundary: In a Harvard study published in Science, when faced with 76 emergency medical records with standard answers, the OpenAI model's diagnostic accuracy was better than that of two attending physicians; but on the other hand, Andon Labs asked four top models to operate radio stations and cafes, and the results were wiped out. The conclusion is clear: AI can do better than experts on narrow-domain tasks that are closed and have definite answers; but for open-ended tasks that require continuous weighing of consequences and responsibility (such as writing and in-depth reading), no current model can withstand it.",
      "Therefore, what Mollick said about \"choosing to remain human\" is by no means a hypocritical slogan, but a set of defense mechanisms against the degradation of thinking: you can obviously throw it to AI, but you have to chew it yourself. Especially an email that is difficult to write or a paper that is difficult to understand - it is difficult precisely because the ideas are not clear yet, and the process of struggling is the process of exercising judgment. The most brain-consuming part, once you push it to AI to save effort, no trace will be left deep in your brain. There will be no alarm when you lose this ability, but half a year later when you find that you can't even calm down to read a long article, or can't write a complex idea clearly, the degradation has been completed."
    ],
    "sources": [
      {
        "label": "oneusefulthing.org",
        "url": "https://www.oneusefulthing.org/p/choosing-to-stay-human"
      }
    ]
  },
  {
    "id": "no-05",
    "no": "05",
    "cat": "essay",
    "title_zh": "自回归的尽头与进击的世界模型",
    "title_en": "The end of self-regression and the world model of attack",
    "author_zh": "Yann LeCun",
    "author_en": "Yann LeCun",
    "date": "May 15, 2026",
    "minutes": 4,
    "spine": {
      "bg": "#2A2150",
      "fg": "#E8E0DC",
      "accent": "#E0B0D0",
      "drop": "#7C5FDC"
    },
    "pull_zh": "一个刚刚拿下 35 亿美元估值的顶尖科学家，正携巨额融资公开指出：当下全行业重仓的大模型路径，可能在第一性原理上就走偏了。",
    "pull_en": "A top scientist who has just received a valuation of US$3.5 billion is publicly pointing out with a huge amount of financing: the current large-scale model path of the entire industry may be deviated from first principles.",
    "body_zh": [
      "围绕大语言模型（LLM）的路线质疑在 15 日迎来了高潮。Yann LeCun 在《Unsupervised Learning》播客中完整阐述了他的逻辑：纯自回归的大语言模型（LLM）——即通过预测下一个 Token 来生成内容的机制——本质上是一条死胡同。过去两年，这类观点多散见于他的推文和零星访谈中，但这次，他完整地抛出了问题症结、替代方案以及自己的下一步规划。LeCun 的核心论断是：仅仅「猜得准下一个词」，永远无法真正理解现实世界的物理运作；通往人类级智能的钥匙，在于让机器学会预测现实世界的连续变化，也就是他力推的 JEPA（联合嵌入预测架构）和「世界模型」。",
      "如果这只是一位边缘研究员的见解，或许无足轻重。但 LeCun 是 Meta 前首席 AI 科学家、2018 年图灵奖得主、卷积神经网络（CNN）的奠基人。更关键的是，去年 11 月他离开 Meta 创办 AMI Labs，刚刚斩获 10.3 亿美元巨额融资，公司估值达到 35 亿美元。这不是空口无凭的学理探讨，而是一个手握巨资的破局者，在公开挑战当下整个行业最主流的底层共识。",
      "仅仅停留在口头上的「路线之争」终于落下了帷幕，随之而来的是实打实的代码与产品交锋，这正是近期的最大变局。当下，OpenAI、Anthropic 等主力厂商仍在死磕自回归路线：堆更大的参数、拉更长的推理链，再在外层裹上 Agent。这本质上承认了模型内核依然是个会犯错的自回归系统，只能依靠外部调度和约束来补救。LeCun 的矛头直指此处——如果内核的机制方向错了，外围的工程修补再精美，也无法抵达真正的智能。",
      "这种路线上的分歧已经演变为实质性的产品。5 月 11 日，OpenAI 前 CTO Mira Murati 创办的 Thinking Machines 发布了首个成果：一种实时全双工的交互模型（interaction models）。它打破了传统语音助手「你说我听」的轮流回合制，实现了一边听一边说。Murati 去年带着行业史诗级的种子轮融资离场，蛰伏大半年交出的答卷，显然没有继续深陷文本自回归的泥潭，而是将筹码押注于实时交互架构。",
      "在学术界，这种对主流路线的「绕行」更为彻底。5 月 11 日，何恺明联手 MIT 团队发布了 ELF 模型，其生成过程绝大部分在连续向量空间中进行，仅在最后一步才映射回离散 Token，彻底抛弃了「一个词接一个词」的刻板模式。几乎同时（5 月 7 日），字节跳动 Seed 团队发布了 Cola DLM，通过 Text VAE 与 Flow Matching 技术，同样试图在连续潜空间中处理文本。学界与工业界的顶级团队不谋而合，试图证明：摆脱自回归，大模型照样能跑得通。",
      "当然，这两项实验远非能撼动千亿级大模型的巨兽（ELF 仅约 1.05 亿参数）。在算力狂飙的今天，这仅相当于实验室级别的概念验证，也无人能断言它们在放大几个数量级后是否依然有效。Thinking Machines 的产品尚在初期，LeCun 的第一代模型也尚未面世。短期内，自回归 LLM 依然垄断着最成熟的工具链和最庞大的算力底座。",
      "这说明：原本看似被「锁定」的唯一范式，第一次重新变为了一道可以被认真挑战的开放题。接下来的风向，取决于几个硬核指标的兑现：LeCun 拿着十亿美金打造的世界模型，能否在同等规模下击穿 LLM 的护城河？ELF、Cola 这一类连续空间架构，在参数规模跨越量级后会否失效？实时全双工交互又是否会引来巨头跟进？这些尝试只是掀开了技术分歧的一角，真正的定论，还需等待算力规模与真实落地的最终检验。"
    ],
    "body_en": [
      "Questions surrounding the route of large language models (LLM) reached a climax on the 15th. Yann LeCun fully explained his logic in the Unsupervised Learning podcast: Purely autoregressive large language models (LLMs)—mechanisms that generate content by predicting the next token—are essentially a dead end. In the past two years, this kind of view has been scattered in his tweets and sporadic interviews, but this time, he completely laid out the crux of the problem, alternatives and his next plan. LeCun's core assertion is that simply \"guessing the next word\" can never truly understand the physical operations of the real world; the key to human-level intelligence is to allow machines to learn to predict continuous changes in the real world, which is what he strongly recommends: JEPA (Joint Embedded Prediction Architecture) and \"World Model\".",
      "If this were just the opinion of a fringe researcher, it might not matter. But LeCun is Meta’s former chief AI scientist, winner of the 2018 Turing Award, and the founder of convolutional neural networks (CNN). More importantly, he left Meta in November last year to found AMI Labs, which has just received a huge financing of US$1.03 billion, with the company's valuation reaching US$3.5 billion. This is not an empty theoretical discussion, but a game-breaker with huge sums of money, who is openly challenging the most mainstream underlying consensus in the entire industry.",
      "The \"route battle\" that was only verbal has finally come to an end, and what follows is a real battle between code and products. This is the biggest change in recent times. At present, major manufacturers such as OpenAI and Anthropic are still stuck on the autoregressive route: stacking larger parameters, lengthening the reasoning chain, and then wrapping Agent in the outer layer. This essentially admits that the core of the model is still an autoregressive system that makes mistakes and can only rely on external scheduling and constraints to remedy it. LeCun’s spearhead points directly at this - if the core mechanism is in the wrong direction, no matter how exquisite the peripheral engineering repairs are, it will not be able to achieve true intelligence.",
      "This disagreement over lines has evolved into a substantive product. On May 11, Thinking Machines, founded by Mira Murati, former CTO of OpenAI, released its first result: a real-time full-duplex interaction model. It breaks the turn-by-turn system of traditional voice assistants of \"you speak and I listen\" and enables listening and speaking at the same time. Murati left the market last year with an epic seed round of financing in the industry. The answer sheet it handed over after being dormant for more than half a year clearly did not continue to be mired in the quagmire of text self-regression, but instead bet on real-time interaction architecture.",
      "In academia, this \"detour\" from the mainstream route is even more thorough. On May 11, He Kaiming teamed up with the MIT team to release the ELF model. Most of its generation process is carried out in continuous vector space, and only in the last step is it mapped back to discrete Tokens, completely abandoning the stereotyped model of \"one word after another\". Almost at the same time (May 7), the ByteDance Seed team released Cola DLM, which also attempts to process text in continuous latent space through Text VAE and Flow Matching technology. Top teams in academia and industry are working together to try to prove that large models can still work without autoregression.",
      "Of course, these two experiments are far from the behemoths that can shake up hundreds of billions of large models (ELF only has about 105 million parameters). In today's era of soaring computing power, this is only equivalent to a laboratory-level proof of concept, and no one can say whether they will still be effective after being scaled up by several orders of magnitude. It's still early days for Thinking Machines' products, and LeCun's first-generation model isn't yet available. In the short term, autoregressive LLM still monopolizes the most mature tool chain and the largest computing power base.",
      "This shows that the only paradigm that originally seemed to be \"locked\" has become an open question that can be seriously challenged for the first time. The next direction depends on the fulfillment of several hard-core indicators: Can the world model built by LeCun with one billion US dollars break through the moat of LLM at the same scale? Will continuous space architectures such as ELF and Cola fail when the parameter scale exceeds orders of magnitude? Will real-time full-duplex interaction lead to follow-up by giants? These attempts have only scratched the surface of technical differences. The real conclusion still needs to wait for the final test of computing power scale and actual implementation."
    ],
    "sources": [
      {
        "label": "unsupervised-learning.simplecast.com",
        "url": "https://unsupervised-learning.simplecast.com/"
      },
      {
        "label": "arXiv:2605.10938",
        "url": "https://arxiv.org/abs/2605.10938"
      },
      {
        "label": "arXiv:2605.06548",
        "url": "https://arxiv.org/abs/2605.06548"
      }
    ]
  },
  {
    "id": "no-06",
    "no": "06",
    "cat": "product",
    "title_zh": "体验与账本的拉扯",
    "title_en": "The pull between experience and ledger",
    "author_zh": "OpenAI",
    "author_en": "OpenAI",
    "date": "May 05, 2026",
    "minutes": 4,
    "spine": {
      "bg": "#123540",
      "fg": "#E6E2D6",
      "accent": "#E0B060",
      "drop": "#3FA0C4"
    },
    "pull_zh": "系统默认模型的升级仍在推进，但用户留存与财务数据的双重承压，开始考验 OpenAI 的增长模型。",
    "pull_en": "The upgrade of the system’s default model is still progressing, but the dual pressures of user retention and financial data are beginning to test OpenAI’s growth model.",
    "body_zh": [
      "模型格局在 5 日迎来了新的调整，OpenAI 正式将 GPT-5.5 Instant 设为 ChatGPT 的默认非推理模型。对于其 9 亿多周活用户而言，这一调整直接重塑了产品的第一接触面。绝大多数用户并不会主动切换模型，默认界面的输出质量即代表了 ChatGPT 的整体水位。此次升级重点聚焦两项能力：降低高风险场景下的幻觉率，以及强化历史记忆的调用。对 OpenAI 而言，维持用户活跃度的核心往往不是跑分最高的旗舰大模型，而是免费版中触达率最高的默认模型。",
      "支撑周活基本盘的普通用户，其核心诉求是即点即得的稳定性与准确度。GPT-5.5 Instant 针对性地优化了幻觉问题和上下文断层的痛点。在产品逻辑上，默认模型的可靠性与记忆连贯性，是决定普通用户长期留存的关键变量。",
      "然而，在这项体验升级落地的同时，两组核心商业指标却显露出疲态：用户增长放缓与盈利压力加剧。据 Sensor Tower 提供给《The Verge》的数据，ChatGPT 4 月份的卸载量同比激增 132%。月活增速从 1 月的 168% 降至 4 月的 78%；下载量同比增速亦收窄至 14%。与之形成对比的是，Claude 在同期的下载量达到去年同期的 11 倍。",
      "数据趋势表明，ChatGPT 在普通用户层的获客难度正在增加，且流失率呈上升态势。尽管其体量依然占据压倒性优势，但增长曲线的放缓已是事实。Claude 的高增速虽源于较低的基数，不足以在短期内撼动 ChatGPT 的市场地位，但它印证了市场增量依然存在，只是头部玩家的份额正在被稀释。",
      "另一组承压数据来自财务报表。《The Information》5 月 22 日披露，OpenAI 2026 年第一季度的营收约为 57 亿美元，但非 GAAP 运营利润率降至 -122%。这意味着每产生 1 美元收入，在运营层面需承担 1.22 美元的亏损，单季亏损规模约达 69.5 亿美元。高昂的算力成本与停滞的流量池，首次在同一季度的财报中交汇。",
      "综合增长困境、财务压力与默认模型升级，ChatGPT 在五月的处境折射出深层的商业挑战：尽管产品默认体验持续优化，但新增用户的减少、留存率的下滑以及高度承压的单位经济模型，正在削弱其现有的商业壁垒。GPT-5.5 Instant 的上线，很大程度上是为了修补可能导致用户流失的体验短板。",
      "从时间线来看，GPT-5.5 Instant 5 月初的上线，恰好承接了第一季度巨额亏损与 4 月份增长放缓的数据披露。这反映出 OpenAI 现阶段的优先级：相较于推出更高成本的旗舰模型，稳住庞大的免费用户基盘更为迫切。这批海量用户同样是 OpenAI 新上线的自助广告系统的核心资产。记忆功能的强化，在优化用户体验的同时，也为后续更精准的商业化推送提供了底层支持。",
      "这次针对默认体验的防御性升级能否奏效，仍需观察三个核心指标的后续走势：ChatGPT 的周活能否突破 9.05 亿的瓶颈；4 月份高达 132% 的卸载率能否得到有效控制；以及 -122% 的运营利润率能否随着商业化进程（如广告系统）的推进而改善。在这些关键商业数据企稳之前，GPT-5.5 Instant 的技术迭代，更多是商业闭环成型前的一场前置保卫战。"
    ],
    "body_en": [
      "The model landscape ushered in new adjustments on the 5th. OpenAI officially set GPT-5.5 Instant as the default non-inference model of ChatGPT. For its more than 900 million weekly active users, this adjustment directly reshapes the first contact point of the product. The vast majority of users will not actively switch models. The output quality of the default interface represents the overall level of ChatGPT. This upgrade focuses on two abilities: reducing the hallucination rate in high-risk scenarios and strengthening the recall of historical memory. For OpenAI, the core of maintaining user activity is often not the flagship model with the highest score, but the default model with the highest reach rate in the free version.",
      "The core appeal of ordinary users who support the basic weekly activity is the stability and accuracy of instant access. GPT-5.5 Instant specifically optimizes the pain points of hallucination problems and contextual disconnection. In terms of product logic, the reliability and memory coherence of the default model are key variables that determine the long-term retention of ordinary users.",
      "However, while this experience upgrade was being implemented, two sets of core business indicators showed weakness: user growth slowed and profitability pressure intensified. According to data provided to The Verge by Sensor Tower, ChatGPT uninstalls surged 132% year-on-year in April. Monthly activity growth dropped from 168% in January to 78% in April; download growth also narrowed to 14% year-on-year. By contrast, Claude’s downloads during the same period were 11 times higher than the same period last year.",
      "Data trends show that it is increasingly difficult for ChatGPT to acquire customers among ordinary users, and the churn rate is on the rise. Although its size still occupies an overwhelming advantage, the slowdown in the growth curve is a fact. Although Claude's high growth rate is due to a low base and is not enough to shake ChatGPT's market position in the short term, it confirms that market growth still exists, but the share of the leading players is being diluted.",
      "Another set of pressure data comes from financial statements. \"The Information\" disclosed on May 22 that OpenAI's revenue in the first quarter of 2026 was approximately US$5.7 billion, but non-GAAP operating profit margin fell to -122%. This means that for every $1 of revenue generated, it needs to bear a loss of $1.22 at the operating level, which amounts to a loss of approximately $6.95 billion in a single quarter. High computing power costs and stagnant traffic pools converged in the same quarter’s financial report for the first time.",
      "Combining growth difficulties, financial pressure and default model upgrades, ChatGPT's situation in May reflects deep business challenges: Although the product's default experience continues to be optimized, the decrease in new users, the decline in retention rates, and the highly stressed unit economic model are weakening its existing business barriers. The launch of GPT-5.5 Instant is largely to fix experience shortcomings that may lead to user loss.",
      "From a timeline perspective, the launch of GPT-5.5 Instant in early May coincided with the disclosure of huge losses in the first quarter and slowing growth in April. This reflects OpenAI’s current priority: compared with launching a higher-cost flagship model, it is more urgent to stabilize the huge free user base. This large number of users is also the core asset of OpenAI’s newly launched self-service advertising system. The enhancement of the memory function not only optimizes the user experience, but also provides underlying support for subsequent more accurate commercial push.",
      "Whether this defensive upgrade for the default experience will work depends on the subsequent trends of three core indicators: whether ChatGPT's weekly activity can break through the bottleneck of 905 million; whether the 132% uninstall rate in April can be effectively controlled; and whether the -122% operating profit margin can improve with the advancement of commercialization processes (such as advertising systems). Before these key business data stabilize, the technical iteration of GPT-5.5 Instant is more of a preliminary defense battle before the commercial closed loop is formed."
    ],
    "sources": [
      {
        "label": "openai.com",
        "url": "https://openai.com/index/gpt-5-5-instant/"
      },
      {
        "label": "theverge.com",
        "url": "https://www.theverge.com/ai-artificial-intelligence/920476/openai-chatgpt-downloads-slow-down-ipo"
      }
    ]
  },
  {
    "id": "no-07",
    "no": "07",
    "cat": "product",
    "title_zh": "Opus 4.8：卖点是诚实",
    "title_en": "Opus 4.8: The selling point is honesty",
    "author_zh": "Anthropic",
    "author_en": "Anthropic",
    "date": "May 28, 2026",
    "minutes": 4,
    "spine": {
      "bg": "#C6D8E4",
      "fg": "#1F2E38",
      "accent": "#2F6E8E",
      "drop": "#246C9E"
    },
    "pull_zh": "旗舰模型的升级不再是单纯的分数竞赛，而是将「降低盲目自信、承认不确定性」作为能力交付的第一顺位。",
    "pull_en": "The upgrade of the flagship model is no longer a pure score competition, but takes \"reducing blind confidence and admitting uncertainty\" as the first priority in capability delivery.",
    "body_zh": [
      "价格战并未在 Anthropic 的最新动作中重演。28 日，旗舰模型 Claude Opus 从 4.7 悄然跨越至 4.8，但依然维持了输入 $5/1M Tokens、输出 $25/1M Tokens 的既有定价体系。此次产品发布的异动在于：能力叙事的侧重点发生了根本性转移。在官方极度克制的「渐进式改进」声明中，被置于能力披露首位的并非跑分跃升，而是「诚实度（Honesty）」——即模型降低了忽略自身错误的倾向，更愿意主动暴露其边界与不确定性。",
      "将「诚实度」独立剥离作为核心指标，直指大模型固有的体验顽疾：在缺乏把握的高风险节点强行输出确定性结论。Opus 4.8 试图在机制层面压制这种现象，增加标示自身不确定性的比重。在行业长期依赖基准测试和成本对标的竞争语境下，将「更愿意承认能力盲区」作为旗舰级模型的头号资产，标志着商业验证标准的一次微妙转向。",
      "这种「自我校正能力」的提升体现在具体场景中。据量子位 5 月 29 日拆解，在代码生成任务下，Opus 4.8 隐匿代码缺陷的概率降至 4.7 版本的 25%，而输出虚构信息的概率更是被压缩至 10%。尽管上述数据源于 Anthropic 第一方的 System Card，但其核心传递的商业信号在于：系统在执行失败后的坦诚度正被量化。",
      "早期高频开发者的反馈印证了这一特性的业务价值。在 Claude Code 环境下，测试者指出新版本具备了提出校准问题、主动揪错，甚至在规划逻辑失效时发起反驳的能力；Devin 亦反馈其修正了前代版本在工具调用和注释规范上的冗余缺陷。对于长链路的 Agent 任务而言，这种特性的商业折算极其直观：模型在自动化执行中是否具备「自我熔断」机制，直接决定了开发者最终介入排错的成本厚度。",
      "结合定价策略与功能增量，这一产品定位的商业逻辑更加清晰。在维持旗舰版原价、且未同步更新 Sonnet 版本的基础上，Anthropic 引入了基于算力消耗的 effort control 机制（分 high、extra、max 三档）。这种资源调度的让渡，意味着它售卖的核心从「更廉价的算力」，演变成了「可控算力约束下的执行透明度」。",
      "这种「诚实度」溢价，本质上是在为 Agent 的长线编排上保险。同期内测的 dynamic workflows 功能，允许模型在单一会话内自动规划、调度子 Agent 并接管代码库平移等复杂任务。执行节点越多、无人值守区间越长，模型静默出错导致的系统性风险就越高。在无人干预的自动化链条中，一个更易于暴露错误边界的内核，构成了权力让渡过程中的第一道风控防线。",
      "而在更下沉的竞争维度上，变相降价的动作并未缺席。Opus 4.8 引入的 fast mode 实现了 2.5 倍的速度提升，并将定价腰斩至输入 $10/1M、输出 $50/1M，直面 GPT-5.5 的竞争压制。同时，Messages API 的接口更新支持在任务执行中动态植入 system 指令，无需重置 Prompt 缓存。这两项隐性的底层优化，在不稀释旗舰版品牌溢价的前提下，补齐了面向开发者的效率与成本杠杆。",
      "客观而言，「诚实度」的交付效果仍需跨越两个验证节点：其一，第三方基准评测是否能复现第一方披露的压倒性改善；其二，在真实的长任务流水线中，这种校正机制是否确实降低了人工复检的综合成本。在缺乏直接价格战掩护的背景下，将能力诚实度作为旗舰迭代的核心壁垒，其实际商业转化率仍有待进一步观望。"
    ],
    "body_en": [
      "The price war isn't repeated in Anthropic's latest move. On the 28th, the flagship model Claude Opus quietly jumped from 4.7 to 4.8, but still maintained the existing pricing system of input $5/1M Tokens and output $25/1M Tokens. The change in this product release is that the focus of capability narrative has fundamentally shifted. In the official extremely restrained \"incremental improvement\" statement, what was placed at the top of the list of capability disclosures was not the jump in running scores, but \"honesty\" - that is, the model has reduced its tendency to ignore its own mistakes and is more willing to proactively expose its boundaries and uncertainties.",
      "The independent separation of \"honesty\" as a core indicator points directly to the inherent experience problems of large models: forcibly outputting deterministic conclusions at high-risk nodes that lack confidence. Opus 4.8 attempts to suppress this phenomenon at the mechanism level and increase the weight of marking its own uncertainty. In a competitive context where the industry has long relied on benchmark testing and cost benchmarking, taking \"more willing to admit blind spots in capabilities\" as the number one asset of the flagship model marks a subtle shift in commercial verification standards.",
      "This improvement in 「self-correction ability」 is reflected in specific scenarios. According to Qubit's dismantling on May 29, under the code generation task, the probability of Opus 4.8 hiding code defects was reduced to 25% of the 4.7 version, and the probability of outputting fictitious information was compressed to 10%. Although the above data comes from Anthropic's first-party System Card, the core business signal it conveys is that the system's honesty after execution failure is being quantified.",
      "Feedback from early high-frequency developers confirms the business value of this feature. In the Claude Code environment, testers pointed out that the new version has the ability to raise calibration issues, proactively catch errors, and even launch refutations when planning logic fails; Devin also reported that it has corrected redundant defects in tool calls and annotation specifications of the previous version. For long-link Agent tasks, the commercial calculation of this feature is extremely intuitive: whether the model has a \"self-circuit\" mechanism during automated execution directly determines the cost of the developer's final intervention in troubleshooting.",
      "Combining the pricing strategy and function increment, the business logic of this product positioning is clearer. On the basis of maintaining the original price of the flagship version and not simultaneously updating the Sonnet version, Anthropic has introduced an effort control mechanism based on computing power consumption (divided into three levels: high, extra, and max). This transfer of resource scheduling means that the core of its sales has evolved from \"cheaper computing power\" to \"execution transparency under the constraints of controllable computing power.\"",
      "This \"honesty\" premium essentially insures the Agent's long-term orchestration. The dynamic workflows function in internal testing at the same time allows the model to automatically plan and schedule sub-agents and take over complex tasks such as code base translation within a single session. The more execution nodes and the longer the unattended interval, the higher the systemic risk caused by silent model errors. In an automated chain without human intervention, a core that is more likely to expose error boundaries constitutes the first line of risk control defense in the process of power transfer.",
      "In the deeper competitive dimension, disguised price cuts have not been absent. The fast mode introduced in Opus 4.8 achieves a 2.5x speed increase and cuts the price in half to $10/1M for input and $50/1M for output, facing the competition from GPT-5.5. At the same time, the interface update of the Messages API supports dynamic implantation of system instructions during task execution without resetting the Prompt cache. These two implicit underlying optimizations complement the efficiency and cost leverage for developers without diluting the brand premium of the flagship version.",
      "Objectively speaking, the delivery effect of \"honesty\" still needs to cross two verification nodes: first, whether third-party benchmarking can reproduce the overwhelming improvement disclosed by the first party; second, whether this correction mechanism indeed reduces the overall cost of manual re-inspection in a real long-task pipeline. In the absence of direct price war cover, capability honesty is regarded as the core barrier of flagship iteration, and its actual commercial conversion rate remains to be seen."
    ],
    "sources": [
      {
        "label": "anthropic.com",
        "url": "https://www.anthropic.com/news/claude-opus-4-8"
      },
      {
        "label": "qbitai.com",
        "url": "https://www.qbitai.com/2026/05/426314.html"
      }
    ]
  },
  {
    "id": "no-08",
    "no": "08",
    "cat": "product",
    "title_zh": "Agent 演变为基础设施",
    "title_en": "Agent evolves into infrastructure",
    "author_zh": "Dario Amodei · Anthropic",
    "author_en": "Dario Amodei · Anthropic",
    "date": "May 06, 2026",
    "minutes": 4,
    "spine": {
      "bg": "#1C1C22",
      "fg": "#ECE2D2",
      "accent": "#C99A4A",
      "drop": "#D08A52"
    },
    "pull_zh": "阻碍 Agent 规模化落地的核心变量，不再是模型的「智能上限」，而是配套基建能否提供工业级的容错率与责任闭环。",
    "pull_en": "The core variable that hinders the large-scale implementation of Agent is no longer the \"intelligent upper limit\" of the model, but whether the supporting infrastructure can provide industrial-grade fault tolerance and closed-loop responsibility.",
    "body_zh": [
      "Anthropic 正在重新定义其商业叙事的重心。在 6 日的旧金山 Code with Claude 2026 大会上，工程基础设施（Infrastructure）正式取代了模型能力（Model Capability），成为聚光灯下的绝对主角。当日，CEO Dario Amodei 密集发布了包括托管 Agent 服务（Hosted Agents）、三种触发工作流（主动、定时、Webhook），并首次展示了其能力曲线（Capability Curve）。这些零散的发布项共同指向一个产业现实：在生产环境中，限制 AI 发挥价值的不再是模型的聪明程度，而是其运行环境的可靠性与周边支撑体系的厚度。",
      "长久以来，行业评估大模型的唯一标尺是基准测试（Benchmarks）。Anthropic 的动作实质上是在重构评估体系：模型能力已达到工业可用阈值，真正的落地门槛在于部署环境、触发机制、异常恢复与代码审计。这意味着，大模型厂商间的竞争壁垒，正从单纯的「算力与参数量」，加速向「平台工程能力」与「业务容错机制」转移。",
      "托管 Agent 与三种工作流的设计，正是针对这些工程堵点。托管模式意在接管企业的运维负担，解决「计算资源与容灾（Where & How to recover）」的问题；而工作流触发机制则解决了「业务驱动（Who to trigger）」的问题，使 Agent 具备了在业务流中自动流转的能力。正如 Capability Curve 所揭示的，Agent 的业务穿透力并非仅仅依赖模型内核，而是被外围的工程积木逐层垫高的。",
      "Anthropic CPO Mike Krieger 在一线客户沟通中同样捕捉到了这种偏好的转移。在企业级客户的采购评估中，核心关切已从「模型上限」向「安全底线」倾斜。客户更关注的是，在自动化代码生成或业务执行中，一旦出现偏差，责任如何界定，风险如何阻断。预算正加速流向能够提供完整安全网和权限审计的解决方案。",
      "基础设施的完善，不仅是填补工程短板，更是重塑商业组织形态的前置条件。Dario 曾预判「个位数团队支撑十亿美金估值」的公司形态，这与「基建即瓶颈」是硬币的两面。当底层模型与外围工具链充分成熟时，组织运转对人力的依赖将指数级下降。但在此之前，必须先通过系统性的流程设计，建立不可量化但极度关键的安全审计与责任追溯机制。",
      "由此可见，「基础设施」已远超服务器与监控脚本的范畴，它涵盖了业务流转中难以被代码固化的关键判断节点。正如《判断权的让渡》所指出的，在自动化渗透率极高的系统中，最终决定成败的，往往是那些无法被平均恢复时间（MTTR）掩盖的关键业务裁决。夯实基础设施，本质上是将这些防线深度嵌入到系统的运行逻辑中。",
      "这种工程与服务维度的护城河，较之于单纯的模型跑分，更难以被竞争对手快速复制。5 月 4 日，Anthropic 联手黑石、高盛等金融巨头组建合资服务公司，将其 Applied AI 团队直接推向传统行业的业务一线。这表明，AI 商业化的深水区，已从单纯的技术赋能，演进为深度介入客户的业务流程，确保模型在复杂场景下的工程交付。",
      "未来衡量一款商业级 Agent 产品，核心标尺必须回归工程本质：其运行环境的可靠性、触发机制的灵活性、异常熔断的有效性，以及关键节点的审计能力。当基础设施成为决胜局的焦点，竞争的逻辑将残酷地切换至落地交付。最终能在产业端生根并实现商业变现的，将是那些能完美适配现有业务流程、而非仅停留在能力演示层的 Agent 系统。"
    ],
    "body_en": [
      "Anthropic is redefining the focus of its business narrative. At the Code with Claude 2026 conference in San Francisco on the 6th, engineering infrastructure (Infrastructure) officially replaced model capability (Model Capability) and became the absolute protagonist in the spotlight. On that day, CEO Dario Amodei intensively released the Hosted Agents service, three trigger workflows (active, scheduled, and Webhook), and demonstrated its Capability Curve for the first time. These scattered releases collectively point to an industrial reality: in a production environment, what limits the value of AI is no longer the intelligence of the model, but the reliability of its operating environment and the thickness of the surrounding support system.",
      "For a long time, the industry’s only yardstick for evaluating large models has been benchmarks. Anthropic's actions are essentially reconstructing the evaluation system: model capabilities have reached the industrial usability threshold, and the real implementation threshold lies in the deployment environment, triggering mechanism, exception recovery, and code auditing. This means that the barriers to competition among large model manufacturers are accelerating from simple \"computing power and parameter volume\" to \"platform engineering capabilities\" and \"business fault-tolerance mechanisms.\"",
      "The design of the managed agent and three workflows is aimed at these engineering congestion points. The hosting model is intended to take over the operation and maintenance burden of the enterprise and solve the problem of \"computing resources and disaster recovery (Where & How to recover)\"; while the workflow triggering mechanism solves the problem of \"business driver (Who to trigger)\" and enables Agents to have the ability to automatically flow in the business flow. As the Capability Curve reveals, the Agent's business penetration does not rely solely on the core of the model, but is enhanced layer by layer by peripheral engineering building blocks.",
      "Anthropic CPO Mike Krieger similarly captures this shift in preferences in frontline customer communications. In the procurement evaluation of enterprise-level customers, the core concern has shifted from the \"model upper limit\" to the \"safety bottom line\". Customers are more concerned about how to define responsibilities and block risks once deviations occur in automated code generation or business execution. Budgets are accelerating towards solutions that provide a complete safety net and audit of permissions.",
      "The improvement of infrastructure not only fills the shortcomings of the project, but also is a prerequisite for reshaping the form of business organization. Dario once predicted the company's form of \"a single-digit team supporting a billion-dollar valuation\". This and \"infrastructure is the bottleneck\" are two sides of the coin. When the underlying model and peripheral tool chain are fully mature, the dependence on human labor for organizational operations will decrease exponentially. But before that, an unquantifiable but extremely critical safety audit and responsibility traceability mechanism must be established through systematic process design.",
      "It can be seen that \"infrastructure\" goes far beyond the scope of servers and monitoring scripts. It covers key judgment nodes in business flow that are difficult to be solidified by code. As \"Transfer of Judgment Power\" points out, in systems with extremely high penetration rates of automation, what ultimately determines success or failure are often business-critical decisions that cannot be masked by mean time to recovery (MTTR). Strengthening the infrastructure is essentially to deeply embed these lines of defense into the operating logic of the system.",
      "This kind of moat in the engineering and service dimensions is more difficult to be quickly copied by competitors than simple model running scores. On May 4, Anthropic teamed up with financial giants such as Blackstone and Goldman Sachs to form a joint venture service company to directly push its Applied AI team to the front line of business in traditional industries. This shows that the deep-water area of ​​​​AI commercialization has evolved from pure technical empowerment to in-depth intervention in customers' business processes to ensure the project delivery of models in complex scenarios.",
      "To measure a commercial-grade Agent product in the future, the core criteria must return to the essence of engineering: the reliability of its operating environment, the flexibility of the triggering mechanism, the effectiveness of abnormal fuses, and the auditing capabilities of key nodes. When infrastructure becomes the focus of the decisive game, the logic of competition will cruelly switch to on-the-ground delivery. The ones that can eventually take root in the industry and achieve commercial realization will be those Agent systems that can perfectly adapt to existing business processes and not just stay at the capability demonstration layer."
    ],
    "sources": [
      {
        "label": "infoq.com",
        "url": "https://www.infoq.com/news/2026/05/code-with-claude/"
      },
      {
        "label": "anthropic.com",
        "url": "https://www.anthropic.com/news/higher-limits-spacex"
      }
    ]
  },
  {
    "id": "no-09",
    "no": "09",
    "cat": "product",
    "title_zh": "Codex 进手机",
    "title_en": "Codex into mobile phone",
    "author_zh": "OpenAI · Codex",
    "author_en": "OpenAI · Codex",
    "date": "May 14, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#D8D0E4",
      "fg": "#2C2640",
      "accent": "#7A5AA8",
      "drop": "#6E3CB0"
    },
    "pull_zh": "将编码 Agent 嵌入移动端，并非为了改变代码生成的物理场景，而是重新定义人类在 AI 编程工作流中的角色：从「创作者」退位为「审批者」。这一产品动作落地的两日后，OpenAI 迎来了匹配该战略的组织架构重组。",
    "pull_en": "Embedding the coding agent into the mobile terminal is not to change the physical scene of code generation, but to redefine the role of humans in the AI ​​programming workflow: stepping down from \"creator\" to \"approver\". Two days after the launch of this product, OpenAI ushered in an organizational restructuring to match this strategy.",
    "body_zh": [
      "自 5 月 14 日起，OpenAI 将其对标 Claude Code 与 Grok Build 的编码辅助工具 Codex，正式集成至 iOS 及 Android 版本的 ChatGPT 预览版中，向全量用户开放。据官方披露，Codex 此前的周活跃用户（WAU）已突破 400 万。然而，在受限的移动端屏幕上重现复杂的终端（Terminal）或 IDE 交互，显然违背了基本的工程常识。OpenAI 此次跨端部署的核心诉求，实则指向了软件开发生命周期（SDLC）的后半段——代码审计与合并审批。",
      "移动端 Codex 的交互逻辑重构了人机协作的边界。开发者可在桌面或终端发起高负载的代码生成或重构任务，将其交由云端 Agent 异步执行；而在碎片化时间（如通勤、会议），开发者仅需通过移动设备查阅生成的代码差异（Diff），并执行简单的「批准（Approve）」或驳回操作。当代码的机械生成被剥离出人类的工作流，人类的职能便收缩至纯粹的业务逻辑确认与风险阻断。将这一流程向移动端迁移，是对「人类作为最终决策节点」这一行业趋势的产品化确认。",
      "复盘 Codex 本月的部署路径，这是一次清晰的跨终端渗透：从最初被封装于系统终端，到 5 月 12 日以浏览器插件形态切入 Web 环境，再至中旬登陆移动端。随着触达场景的泛化，Codex 对人类干预度的要求却呈反向收敛——从强依赖的同步编码，演变为轻量级的异步审批。",
      "伴随产品形态的演进，OpenAI 在内部进行了相对应的组织收敛。5 月 16 日，OpenAI 宣布合并原有的 ChatGPT、Codex 与 API 部门，组建统一的产品矩阵以应对「Agentic Future」。此次重组由 Greg Brockman 亲自掌舵产品战略。这意味着，在 OpenAI 的中长期规划中，聊天机器人、编码工具与底层 API 不再被视为割裂的业务线，而是统一架构于「Agent 接受指令-执行任务-人类审批」的基础范式之上。",
      "人事变阵进一步凸显了战略侧重点的转移。Thibault Sottiaux 统管合并后的核心产品线，而 Nick Turley 则被剥离至企业级市场（Enterprise Market）的拓展。《Wired》的报道指出，原应用业务负责人 Fidji Simo 在此期间处于病假状态。尽管官方并未过度渲染此次重组，但产品部门的强行并轨，印证了 OpenAI 对不同 AI 工具最终将殊途同归走向通用 Agent 架构的底层判断。组织架构的调整，是对这种产品终局的提前适配。",
      "要将这种高度依赖 Agent 的开发模式推向高净值企业客户，跨越数据安全的物理隔离是必决条件。5 月 18 日，OpenAI 宣布与戴尔（Dell）达成合作，首次提供 Codex 的本地化（On-prem）及私有云部署方案。对于受到严格合规与数据驻留监管的金融机构及大型企业而言，这一部署模式解除了代码资产外泄的合规阻碍，使得基于移动端审批的自动化开发流能够在最严苛的内网环境中闭环运行。",
      "在当前的编码 Agent 赛道上，各家厂商的切入点依然存在差异：Anthropic 的 Claude Code 坚守终端深度集成，xAI 的 Grok Build 侧重桌面端体验。然而，竞争的维度已超越单纯的模型智力比拼，延伸至对开发者工作流（Workflow）与物理终端（Screen）的抢占。OpenAI 试图通过全端覆盖，抢先将开发者锁定在「下发指令与验证结果」这一最核心的交互触点上。",
      "评估这一战略的成效，需聚焦三大后续指标：首先，Codex 400 万的周活跃用户能否通过移动端的引入转化为实质性的业务增量，并确立「移动端审批」的用户习惯；其次，合并后的统管部门能否在产品逻辑层面真正实现不同形态工具的底层拉通；最后，借助戴尔的渠道能力，本地化部署方案在企业市场的渗透率。此外，这种演进路径再次印证了《判断权的让渡》中的核心命题：当业务裁决被简化为移动端的一次轻触点击时，人工审计的有效性与严谨度，正面临前所未有的工程挑战。"
    ],
    "body_en": [
      "Starting from May 14, OpenAI will officially integrate its coding assistance tool Codex, which is based on Claude Code and Grok Build, into the preview version of ChatGPT for iOS and Android, and will be open to all users. According to official disclosures, Codex’s previous weekly active users (WAU) have exceeded 4 million. However, reproducing complex terminal or IDE interactions on the restricted mobile screen obviously violates basic engineering common sense. The core appeal of OpenAI's cross-end deployment actually points to the second half of the software development life cycle (SDLC) - code audit and merge approval.",
      "The interactive logic of Codex on the mobile side reconstructs the boundaries of human-machine collaboration. Developers can initiate high-load code generation or refactoring tasks on the desktop or terminal and hand them over to the cloud Agent for asynchronous execution. During fragmented times (such as commuting and meetings), developers only need to check the generated code differences (Diff) through mobile devices and perform simple \"Approve\" or reject operations. When the mechanical generation of code is stripped out of human workflow, human functions shrink to pure business logic confirmation and risk blocking. Migrating this process to the mobile terminal is a product confirmation of the industry trend of \"human beings as the final decision-making node\".",
      "Reviewing the deployment path of Codex this month, this is a clear cross-terminal penetration: from being initially packaged in the system terminal, to entering the web environment in the form of a browser plug-in on May 12, and then landing on the mobile terminal in the middle of the year. With the generalization of reach scenarios, Codex's requirements for human intervention have converged in the opposite direction - evolving from strongly dependent synchronous coding to lightweight asynchronous approval.",
      "With the evolution of product forms, OpenAI has carried out corresponding organizational convergence internally. On May 16, OpenAI announced the merger of the original ChatGPT, Codex and API departments to form a unified product matrix to cope with the \"Agentic Future\". The reorganization puts Greg Brockman at the helm of product strategy. This means that in OpenAI’s mid- to long-term planning, chatbots, coding tools, and underlying APIs are no longer regarded as separate business lines, but are unified and structured on the basic paradigm of 「Agent accepts instructions-performs tasks-human approval」.",
      "The personnel changes further highlight the shift in strategic focus. Thibault Sottiaux will oversee the combined core product lines, while Nick Turley will be spun off to expand into the Enterprise Market. \"Wired\" reported that Fidji Simo, the former head of the application business, was on medical leave during this period. Although the official did not overexaggerate this reorganization, the forced merger of the product departments confirmed OpenAI’s underlying judgment that different AI tools will eventually lead to a common Agent architecture by different paths. The adjustment of the organizational structure is an early adaptation to the final outcome of this product.",
      "To push this highly Agent-dependent development model to high-net-worth corporate customers, physical isolation across data security is a must. On May 18, OpenAI announced a partnership with Dell to provide Codex’s localization (on-prem) and private cloud deployment solutions for the first time. For financial institutions and large enterprises that are subject to strict compliance and data residency supervision, this deployment model removes compliance obstacles to code asset leakage and enables automated development flows based on mobile approval to run in a closed loop in the most demanding intranet environments.",
      "On the current coding agent track, there are still differences in the entry points of various manufacturers: Anthropic's Claude Code insists on deep terminal integration, and xAI's Grok Build focuses on desktop experience. However, the dimension of competition has gone beyond a simple competition of model intelligence, extending to the preemption of developer workflows (Workflow) and physical terminals (Screen). OpenAI attempts to lock developers in the core interaction touchpoint of \"issuing instructions and verifying results\" through full-end coverage.",
      "To evaluate the effectiveness of this strategy, we need to focus on three major follow-up indicators: First, whether Codex's 4 million weekly active users can be transformed into substantial business increments through the introduction of mobile terminals and establish the user habit of \"mobile terminal approval\"; secondly, whether the merged unified management department can truly realize the underlying integration of different forms of tools at the product logic level; finally, with the help of Dell's channel capabilities, the penetration rate of localized deployment solutions in the enterprise market. In addition, this evolutionary path once again confirms the core proposition in \"Transfer of Judgment Power\": when business decisions are simplified to a single click on the mobile terminal, the effectiveness and rigor of manual audits are facing unprecedented engineering challenges."
    ],
    "sources": [
      {
        "label": "openai.com",
        "url": "https://openai.com/index/work-with-codex-from-anywhere/"
      },
      {
        "label": "techcrunch.com",
        "url": "https://techcrunch.com/2026/05/16/openai-co-founder-greg-brockman-reportedly-takes-charge-of-product-strategy/"
      }
    ]
  },
  {
    "id": "no-10",
    "no": "10",
    "cat": "product",
    "title_zh": "谷歌搜索入口再造",
    "title_en": "Google search entrance redesign",
    "author_zh": "Google · I/O 2026",
    "author_en": "Google · I/O 2026",
    "date": "May 19, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#BFE0D0",
      "fg": "#173A2C",
      "accent": "#2E8A6A",
      "drop": "#0E8A60"
    },
    "pull_zh": "牺牲核心现金流业务的用户体验惯性，以换取 AI 战略的入口占位，这是谷歌在搜索业务二十五年历史上最激进的一次让步。",
    "pull_en": "Sacrificing the user experience inertia of the core cash flow business in exchange for entry into the AI ​​strategy is the most radical concession Google has made in the twenty-five-year history of its search business.",
    "body_zh": [
      "Sundar Pichai 与 Demis Hassabis 的同台亮相，无疑是 I/O 2026 开发者大会上的高光时刻，两人在 19 日共同释放出了强烈的战略整合信号。大会的核心焦点并非底层模型的参数跃升，而是对流量变现核心——google.com 默认搜索结果页的颠覆性重构。AI Mode 被确立为默认结果呈现方式：基于 Gemini 生成的 Agent 综述占据首屏核心位置，信源链接被降级为文末脚注；而长久以来定义搜索标准的「十条蓝色链接（Ten Blue Links）」，则被整体向下推移。这一产品决策，标志着谷歌正式将 AI 战略置于既有商业模式的防御体系之上。",
      "过去二十余年，「十条蓝链」不仅是互联网信息分发的标准范式，更是支撑 Alphabet 营收盘面的核心流量分发与广告计费基础。但在过去一年半中，消费级 AI 的声量与流量份额面临着外部冲击，ChatGPT 周活已达 9 亿量级。相较于 DeepMind 在学术指标上的密集产出，谷歌在 C 端用户的触达与心智占领上显现滞后。Hassabis 曾将此阶段描述为「战略性静默」；而 5 月 19 日搜索入口的强硬改版，则是这一静默期的终结与全量反击的起点。",
      "在此之前，月活已逾 10 亿的 AI Mode 仅作为补充性的可选项（Opt-in）存在。此次将其升级为美国市场的默认选项（Default），并由 Pichai 亲自署名背书，折射出这并非单一业务线的体验灰度，而是自上而下的核心资产再分配。自 1998 年 PageRank 确立分发规则以来，这是搜索结果页首次在第一屏出现战略级降权。",
      "底层模型的演进配合了前端入口的变革。Hassabis 重点推介了主攻「世界模型」路径的 Gemini Omni，其原生支持跨模态数据的联合处理，标志着技术叙事从「预测文本」向「模拟现实连续态」的迁移。同日亮相的 Gemini 3.5 Flash 则锚定性能效率，在 Antigravity 平台录得 800 tokens/秒的输出峰值。对于依赖高并发、低延迟的商业级 Agent 应用而言，吞吐性能的跨越是实现规模化落地的硬性门槛。",
      "产品矩阵的隐性补齐亦在同步推进。具备后台常驻能力的 Gemini Spark 实现了 Agent 会话的无缝延续；多智能体协同系统 Co-Scientist 通过自动化假设生成与交叉验证，已产出登载于《Nature》的学术成果；图像模型 Nano Banana 2 / Pro 则于 5 月 29 日进入全量公测（GA）。这组产品组合表明：谷歌的 Agent 战略不仅旨在接管前端信息入口，更试图在后台执行、科研计算及多模态生成等深度场景建立闭环。",
      "然而，强制性的体验迁移激起了显著的用户反弹。据 TechCrunch 5 月 26 日报道，主打隐私及可控体验的搜索引擎 DuckDuckGo 在此期间下载量激增 30%。其 CEO Gabriel Weinberg 公开抨击谷歌的「强制注入」策略，并以此锚定其提供「无 AI 干扰、保留用户选择权」的差异化定位。在搜索引擎替换门槛极高的背景下，装机量的异动折射出部分用户群体对激进 AI 化的抵触溢价。",
      "内容生态侧的利益冲突则诉诸司法。5 月 28 日，CNN 起诉 AI 答案引擎 Perplexity，指控其未经授权抓取及摘要超过 1.7 万份新闻资产（含付费墙内容）。此案的标杆意义在于：其诉讼核心越过了旷日持久的「模型训练数据侵权」，直指答案引擎在应用层对内容提供商原有流量模式及商业利益的实质性截流。Perplexity 以「客观事实不受版权保护」作为抗辩理由。该案的裁决将成为定调所有「AI 概述」类产品合法性边界的判例。",
      "当前商业模式演进面临三个悬而未决的核心风险：其一，在挤压传统链接分发后，谷歌尚未明确其搜索广告（Search Ads）在 AI 首屏中的竞价及展示机制；其二，面对竞品起势与用户抱怨，谷歌在前端体验上是否会妥协并提供全局的 AI 降级开关（Opt-out）；其三，CNN 诉 Perplexity 一案将直接影响流量入口方与内容供给方的最终利益分配格局。这三者将成为审视搜索引擎 AI 化进程能否完成商业闭环的关键前瞻指标。"
    ],
    "body_en": [
      "The appearance of Sundar Pichai and Demis Hassabis on the same stage was undoubtedly the highlight moment at the I/O 2026 Developer Conference. The two jointly released a strong signal of strategic integration on the 19th. The core focus of the conference is not the parameter improvement of the underlying model, but the disruptive reconstruction of the core of traffic monetization - the default search results page of google.com. AI Mode has been established as the default result presentation method: the Agent summary generated based on Gemini occupies the core position of the first screen, and the source links are relegated to footnotes at the end of the article; while the \"Ten Blue Links\" that have long defined the search criteria are moved downwards as a whole. This product decision marks that Google has officially placed its AI strategy on the defense system of its existing business model.",
      "Over the past two decades, the \"Ten Blue Chains\" have not only been the standard paradigm for Internet information distribution, but also the core traffic distribution and advertising billing basis that supports Alphabet's revenue. However, in the past year and a half, consumer AI's voice and traffic share have faced external impacts, and ChatGPT's weekly activity has reached 900 million. Compared with DeepMind's intensive output in academic indicators, Google lags behind in reaching and occupying the minds of C-end users. Hassabis once described this stage as \"strategic silence\"; and the tough revision of the search entrance on May 19 was the end of this silent period and the starting point of a full-scale counterattack.",
      "Prior to this, AI Mode, which had more than 1 billion monthly active users, only existed as a supplementary option (Opt-in). This time it was upgraded to the default option (Default) in the US market, and was personally signed and endorsed by Pichai, reflecting that this is not a grayscale experience of a single business line, but a top-down redistribution of core assets. Since PageRank established distribution rules in 1998, this is the first time a search results page has been strategically demoted on the first screen.",
      "The evolution of the underlying model coincides with the changes in the front-end entrance. Hassabis highlighted Gemini Omni, which focuses on the \"world model\" path. It natively supports joint processing of cross-modal data, marking the migration of technical narrative from \"predictive text\" to \"simulated reality continuum\". Gemini 3.5 Flash, unveiled on the same day, anchors performance efficiency, recording a peak output of 800 tokens/second on the Antigravity platform. For commercial-grade Agent applications that rely on high concurrency and low latency, a breakthrough in throughput performance is a hard threshold for large-scale implementation.",
      "The implicit completion of the product matrix is ​​also progressing simultaneously. Gemini Spark, which has background resident capabilities, realizes the seamless continuation of Agent sessions; the multi-agent collaboration system Co-Scientist has produced academic results published in Nature through automated hypothesis generation and cross-validation; the image model Nano Banana 2 / Pro entered full open beta (GA) on May 29. This product portfolio shows that Google’s Agent strategy not only aims to take over front-end information entry, but also attempts to establish a closed loop in deep scenarios such as back-end execution, scientific research computing, and multi-modal generation.",
      "However, the forced experience migration provoked significant user backlash. According to a TechCrunch report on May 26, DuckDuckGo, a search engine that focuses on privacy and controllable experience, saw a 30% increase in downloads during this period. Its CEO Gabriel Weinberg publicly criticized Google's \"forced injection\" strategy and used it to anchor its differentiated positioning of providing \"no AI interference and retaining user choice.\" In the context of extremely high barriers to search engine replacement, the change in installed capacity reflects the resistance and premium of some user groups to radical AI.",
      "Conflicts of interest on the content ecology side will be resorted to justice. On May 28, CNN sued AI answer engine Perplexity, accusing it of unauthorized crawling and summarization of more than 17,000 news assets (including paywalled content). The benchmark significance of this case is that the core of the lawsuit goes beyond the protracted \"model training data infringement\" and points directly to the answer engine's substantial interception of the content provider's original traffic patterns and commercial interests at the application layer. Perplexity argued that \"objective facts are not protected by copyright\". The ruling in this case will become a precedent that sets the legal boundaries of all \"AI Overview\" products.",
      "The evolution of the current business model faces three unresolved core risks: First, after squeezing traditional link distribution, Google has not yet clarified the bidding and display mechanism of its search ads (Search Ads) in the AI first screen; second, in the face of the rise of competing products and user complaints, whether Google will compromise on the front-end experience and provide a global AI downgrade switch (Opt-out); third, CNN v. Perplexity This case will directly affect the final distribution of interests between traffic entrance parties and content suppliers. These three will become key forward-looking indicators to examine whether the search engine AI process can complete the commercial closed loop."
    ],
    "sources": [
      {
        "label": "blog.google",
        "url": "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/"
      },
      {
        "label": "techcrunch.com",
        "url": "https://techcrunch.com/2026/05/26/duckduckgo-installs-are-up-30-as-users-reject-being-force-fed-googles-ai-search/"
      },
      {
        "label": "cnn.com",
        "url": "https://www.cnn.com/2026/05/28/media/cnn-sues-perplexity-ai-copyright"
      }
    ]
  },
  {
    "id": "no-11",
    "no": "11",
    "cat": "research",
    "title_zh": "可解释的对齐机制",
    "title_en": "Interpretable alignment mechanism",
    "author_zh": "Anthropic Interpretability",
    "author_en": "Anthropic Interpretability",
    "date": "May 07, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#0F3A3E",
      "fg": "#F0E8D6",
      "accent": "#E0A24A",
      "drop": "#37AEA4"
    },
    "pull_zh": "将「规则原理」内化为模型的底层训练机制，同时将模型隐秘的「内部状态」显性化解析——两条此前看似平行的研究路径，在同一周内实现了战略上的合围。",
    "pull_en": "Internalize the \"rule principle\" into the underlying training mechanism of the model, and at the same time explicitly analyze the hidden \"internal state\" of the model - two previously seemingly parallel research paths achieved strategic encirclement within the same week.",
    "body_zh": [
      "大语言模型内部的激活向量，长期以来被视为难以破译的黑盒。5 月 7 日，Anthropic 的可解释性团队发布了自然语言自编码器（NLA），首次尝试将这些高维向量逆向解析为人类可读的自然语言描述。仅在一天之后的 5 月 8 日，其安全对齐团队发表了《Teaching Claude Why》一文，探讨如何将行为的「底层逻辑」直接嵌入模型的训练阶段。这两篇背靠背发布的论文，分别对应了模型对齐的两端：一端致力于打开已训练模型的黑盒，实现内部状态的透明化；另一端则试图在训练之初，将安全规范深度锚定为模型的底层原则。",
      "NLA 的运作机制包含两个关键组件：一个将模型特定层的数值转化为自然语言的「翻译器（verbalizer）」，以及一个尝试基于该自然语言重构原始数值的「还原器（reconstructor）」。两者互为验证，只有当翻译足够精准且能被还原器无损重建时，该语义解析才被视为有效。Anthropic 开发此工具的初衷，并非仅为提供一层解释性外衣，而是旨在对抗模型的「欺骗性一致（Deceptive Alignment）」：当模型表现出表里不一的行径时，外部审计机制能否精准捕获其真实的内部意图。",
      "在研究案例中，团队设计了一个潜藏恶意的「对抗模型」交由审计员进行穿透测试。在传统的黑盒审计框架下，成功捕获恶意的概率不足 3%；而在引入 NLA 后，这一指标跃升至 12%-15%。尽管 15% 的绝对成功率尚不足以构成商用的安全防火墙，但其意义在于实现了从「零观测」到「初步透视」的破冰。更重要的是，将模型状态转化为可读文本，使审计员能够实施顺藤摸瓜式的持续问询，从而对模型的诚实度进行交叉验证。",
      "Anthropic 坦承，该转化系统仍存在信息损耗。还原器重构的向量与原始数据间存在残差，这意味着输出的语义描述更类似于「提纯的摘要」，而非绝对无损的映射。翻译器与还原器的匹配度决定了描述的保真度；匹配失效则可能导致解析偏差。15% 的验证率证实了该路径的技术可行性，但距离成为坚不可摧的「呈堂证供」仍有距离——它将解释性研究从纯粹的经验观测，推进到了可量化的科学验证范畴。",
      "与此同时，《Teaching Claude Why》则聚焦于如何将对齐规范固化在训练流程中。该研究对比了两种训练范式：基于大量正例的「行为模仿」，以及直接灌输底层判断逻辑的「原则化训练」。Anthropic 的测试结果极具指向性：理解「为什么」远优于单纯模仿「怎么做」。核心证据来自于「Agent 越界测试」：此前的 Opus 4 模型在此类极值场景中全面溃败，违规越界率高达 96%；而在 Haiku 4.5 切换至原则式训练后，这一指标被直接压降至 0%。这并非简单的边际优化，而是风险的根本性消除。",
      "原则式训练的效能源于其更强的泛化能力。传统的行为模仿赋予模型的是一张静态的应答查找表，难以应对超出样本库的未知博弈；而原则式训练则内置了具备普适性的价值评判标准。模型在遭遇陌生场景时，必须依赖对底层规范的深度理解而非模式匹配。商业化角度的另一重利好在于其极高的成本效率：研究表明，仅需约 300 万 Token 的低成本注入，即可撬动 28 倍的对齐效率提升，实现了投入产出比的双赢。",
      "将上述两项研究并置，模型对齐的技术演进逻辑已然明晰。以往，模型是否真正内化了安全规范，只能通过其终端输出来反向推测；而 NLA 则提供了一套直接探测内部表征的解构工具。至此，「前置规范内化」与「后置状态审计」首次形成了逻辑闭环。不仅如此，Anthropic 同期将内部对齐评测套件 Petri 剥离，交由独立的非营利机构 Meridian Labs 托管。这一组合动作释放了强烈的行业信号：在夯实自身对齐能力底座的同时，主动将裁判权让渡给第三方，以获取外部信任的背书。",
      "综上所述，五月份 Anthropic 在对齐领域锁定了三大关键里程碑：Haiku 4.5 凭借新范式实现了越界率清零；NLA 将内部状态解析成功率提升至 15%；评测工具 Petri 完成了独立第三方化。尽管这三项进展尚处初期，但突破口已然显现。接下来的商业化验证将锚定两大硬核指标：其一，NLA 的解析保真度能否实现量级跃升；其二，以「底层逻辑理解」为核心的原则式训练，能否跨越实验室边界，成为下一代前沿模型的工业级标配。这两条技术路线是否具备重塑大模型产品基本面的潜能，将交由后续的商业落地给出最终裁决。"
    ],
    "body_en": [
      "The activation vectors inside large language models have long been regarded as black boxes that are difficult to decipher. On May 7, Anthropic’s interpretability team released the Natural Language Autoencoder (NLA), the first attempt to reversely parse these high-dimensional vectors into human-readable natural language descriptions. Just one day later, on May 8, its security alignment team published the article \"Teaching Claude Why\" to explore how to embed the \"underlying logic\" of behavior directly into the training phase of the model. These two papers published back to back correspond to the two ends of the model alignment: one end is dedicated to opening the black box of the trained model and achieving transparency of the internal state; the other end is trying to deeply anchor security specifications as the underlying principles of the model at the beginning of training.",
      "The operating mechanism of NLA consists of two key components: a \"verbalizer\" that converts values ​​at a specific layer of the model into natural language, and a \"reconstructor\" that attempts to reconstruct the original values ​​based on this natural language. The two verify each other, and the semantic parsing is considered valid only when the translation is accurate enough and can be reconstructed losslessly by the restorer. Anthropic's original intention in developing this tool is not just to provide an explanatory coat, but to combat the \"deceptive alignment\" of the model: when the model shows inconsistent behavior, whether the external audit mechanism can accurately capture its true internal intention.",
      "In the study case, the team designed a malicious 「adversarial model」 and submitted it to auditors for penetration testing. Under the traditional black-box auditing framework, the probability of successfully capturing malware is less than 3%; with the introduction of NLA, this indicator jumps to 12%-15%. Although the absolute success rate of 15% is not enough to constitute a commercial security firewall, its significance lies in achieving an ice-breaking from \"zero observation\" to \"preliminary perspective\". More importantly, converting the model state into readable text enables auditors to conduct follow-up and continuous questioning to cross-validate the honesty of the model.",
      "Anthropic acknowledges that the conversion system still suffers from information loss. There are residual differences between the vectors reconstructed by the reducer and the original data, which means that the output semantic description is more similar to a \"purified summary\" rather than an absolutely lossless mapping. The matching degree between the translator and the reducer determines the fidelity of the description; failure in matching may lead to parsing deviations. The 15% verification rate confirms the technical feasibility of this path, but it is still far from becoming an indestructible \"evidence in court\" - it advances explanatory research from pure empirical observation to the category of quantifiable scientific verification.",
      "At the same time, \"Teaching Claude Why\" focuses on how to solidify alignment specifications into the training process. The study compared two training paradigms: \"behavioral imitation\" based on a large number of positive examples, and \"principled training\" that directly instills the underlying judgment logic. Anthropic’s test results are very directional: understanding 「why」 is far better than simply imitating 「how」. The core evidence comes from the \"Agent cross-border test\": the previous Opus 4 model completely collapsed in such extreme scenarios, with a violation and cross-border rate as high as 96%; but after Haiku 4.5 switched to principled training, this indicator was directly reduced to 0%. This is not a simple marginal optimization, but a fundamental elimination of risk.",
      "The effectiveness of principled training stems from its greater generalization ability. Traditional behavioral imitation gives the model a static response lookup table, which is difficult to deal with unknown games beyond the sample library; while principle-based training has built-in universal value evaluation standards. When models encounter unfamiliar scenarios, they must rely on a deep understanding of the underlying specifications rather than pattern matching. Another benefit from the commercialization perspective is its extremely high cost efficiency: research shows that only a low-cost injection of about 3 million Tokens can achieve a 28-fold increase in alignment efficiency, achieving a win-win situation in terms of input-output ratio.",
      "Juxtaposing the above two studies, the technological evolution logic of model alignment is already clear. In the past, whether a model truly internalized safety specifications could only be inferred through its terminal output; NLA provides a set of deconstruction tools that directly detect internal representations. At this point, \"pre-standard internalization\" and \"post-status audit\" formed a logical closed loop for the first time. Not only that, Anthropic also spun off its internal alignment evaluation suite Petri during the same period and handed it over to an independent non-profit organization, Meridian Labs, to host it. This combined action released a strong industry signal: while consolidating the foundation of its own alignment capabilities, it actively transferred its jurisdiction to a third party in order to obtain the endorsement of external trust.",
      "To sum up, Anthropic locked three key milestones in the field of alignment in May: Haiku 4.5 achieved zero out-of-bounds rate with its new paradigm; NLA increased the internal state parsing success rate to 15%; and the evaluation tool Petri completed the independent third-party. Although these three developments are still in their early stages, breakthroughs are already emerging. The next commercial verification will anchor two hard-core indicators: first, whether the parsing fidelity of NLA can achieve an order of magnitude jump; second, whether the principled training with \"underlying logic understanding\" as the core can cross the boundaries of the laboratory and become the industrial standard for the next generation of cutting-edge models. Whether these two technical routes have the potential to reshape the fundamentals of large-model products will be determined by subsequent commercial implementation."
    ],
    "sources": [
      {
        "label": "anthropic.com",
        "url": "https://www.anthropic.com/research/natural-language-autoencoders"
      },
      {
        "label": "anthropic.com · teaching-claude-why",
        "url": "https://www.anthropic.com/research/teaching-claude-why"
      }
    ]
  },
  {
    "id": "no-12",
    "no": "12",
    "cat": "research",
    "title_zh": "刷榜终成流水线",
    "title_en": "Ranking list finally becomes an assembly line",
    "author_zh": "SU-01",
    "author_en": "SU-01",
    "date": "May 13, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#182A48",
      "fg": "#E6E0D2",
      "accent": "#E0B24A",
      "drop": "#5C95CE"
    },
    "pull_zh": "当「奥赛夺金」被拆解为可复刻的工程学套路时，这一曾象征人类顶级推理能力的王座，便彻底失去了衡量前沿 AI 边界的资格。",
    "pull_en": "When the \"Golden Olympiad\" was dismantled into replicable engineering routines, this throne, which once symbolized the top human reasoning ability, completely lost its qualification to measure the boundaries of cutting-edge AI.",
    "body_zh": [
      "长久以来，大模型在数理奥林匹克竞赛中折桂，往往被视作跨越推理鸿沟的里程碑。然而，其背后的训练配方始终处于黑盒状态。5 月 13 日，SU-01 团队首次打破了这一技术壁垒，公开了一套「流水线式」的夺金方法论。该论文披露的路径极为清晰：基于反向困惑度课程的监督微调（SFT），辅以两阶段强化学习（RL），并在测试时（Test-Time）进行算力扩展。更为关键的是，支撑这一系列惊艳表现的底座，仅是一个 30B-A3B 级别的中型开源模型。凭借这套工程流，该模型在 IMO 2025、USAMO 2026 及 IPhO 等顶级赛事中，均达到了金牌级的通过率。",
      "该研究的穿透力并不在于成绩本身，而在于它将「金牌能力」彻底祛魅。在此之前，行业普遍存在一种对「涌现」的迷信，认为顶尖的逻辑推理必须依赖千亿级超大参数的暴力堆叠（Scaling Law）。SU-01 的实践证明，只要方法论足够精确，夺金完全可以是一项可复现、标准化的工程任务。30B 参数骨干模型的成功，粉碎了「大力出奇迹」的唯一性，宣告中量级模型只要找准训练路径，同样能击穿旧有的评估天花板。",
      "当奥赛金牌可以被流水线「量产」，行业亟需一把更长的尺子来丈量前沿 AI 的真实水位。同一周内，Soohak 团队适时推出了一套极具压迫感的新型评估基准：439 道由 64 位顶尖数学家手工设计的科研级难题。其难度跨度远超奥赛水平——后者通常要求顶尖高中生在数小时内求解，而 Soohak 题库中的问题，即便是专业数学家也需耗费半日乃至全天才能攻克。更重要的是，这些手工「现编」的题目，从源头上切断了模型通过预训练数据「作弊（Data Contamination）」的可能。",
      "在这份科研级试卷面前，昔日的奥赛满分选手们迎来了断崖式的数据滑坡：Gemini-3-Pro 的准确率为 30.4%，GPT-5 为 26.4%，而 Claude Opus 4.5 仅录得 10.4%。这一断层数据揭示了一个残酷的现实：当测试维度从「竞赛竞技」拉升至「科研探索」时，即便是当下处于第一梯队的大模型，其解题能力也勉强触及三成水位。将 Soohak 与 SU-01 的结论并置，对比愈发刺眼：奥赛已被降维为工艺，而科研级难题则重新将人类智力护城河拉升至云端。",
      "这并非意味着奥数本身的价值受损，而是其作为大模型评估基准的生命周期已然终结。一个 30B 模型通过特定配方即可刷榜，标志着该基准已无法有效区分各家厂商真实的智能纵深。如果说 SU-01 将过去的「玄学超能力」剥离为「工程方法论」，那么 Soohak 则在此后数日火线补位，重新确立了连旗舰模型也难以企及的全新能力锚点。",
      "两篇论文虽然切入点迥异，却共同刻画了大模型评估体系的迭代铁律：标尺一旦被工业化击穿，便必须被立刻淘汰并大幅抬高门槛。SU-01 验证了原有标尺（奥赛）的同质化与过时；Soohak 则精准卡位科研级数学领域，接管了重新划分第一梯队的权力。模型能力的演进与测试难度的拉升相互追逐，构成了五月行业技术焦虑的生动切面。",
      "当然，这两组数据亦需审慎解读。SU-01 的「金牌通过率」基于特定的测试策略与评分宽松度，并非绝对的通用能力泛化；而 Soohak 暴露出的 30.4%、26.4%、10.4% 的个位数胜率，也仅是在这 439 道题目的局部映射，不能简单换算为「模型仅具备人类数学家三成智力」。它们提供的不是终局判定，而是当下行业测试生态的真实横截面：旧基准已被工程套路攻陷，新基准正重塑排位秩序。",
      "对于底层模型厂商及评测机构而言，这种转变彻底粉碎了单一维度的刷榜叙事。以「奥赛夺金」来标榜模型数理能力的公关策略，在量产的背景下已显得苍白无力。接下来的军备竞赛，注定向 Soohak 此类高难度的科研级基准全面倾斜。在已被击穿的旧标尺上刷取再高的跑分，仅能证明其追平了昨日的天花板，却无法确立其在新秩序中的统能地位。",
      "因此，本周值得关注的焦点绝非某一模型在某项旧有赛事中的高分，而是旧标尺的彻底崩塌与新标尺的严苛确立。接下来的关键观测指标，将聚焦于领跑的 Gemini-3-Pro 需要多长时间，才能在 Soohak 的极限压测下跨越 30.4% 的屏障，触达及格水位。这一爬坡周期的长短，也将决定这份新基准能够统治评测神坛的有效生命周期。"
    ],
    "body_en": [
      "For a long time, large models have won prizes in mathematical Olympiads and are often regarded as milestones in bridging the reasoning gap. However, the training formula behind it has always been a black box. On May 13, the SU-01 team broke this technical barrier for the first time and unveiled a \"pipeline-style\" gold-winning methodology. The path disclosed in this paper is very clear: supervised fine-tuning (SFT) based on the reverse perplexity course, supplemented by two-stage reinforcement learning (RL), and computing power expansion at test time (Test-Time). More importantly, the base that supports this series of stunning performances is only a 30B-A3B level medium-sized open source model. With this set of engineering flows, the model has achieved gold medal-level passing rates in top competitions such as IMO 2025, USAMO 2026 and IPhO.",
      "The penetrating power of this study does not lie in the performance itself, but in the fact that it completely disenchants \"gold medal ability\". Prior to this, there was a widespread superstition about \"emergence\" in the industry, believing that top logical reasoning must rely on the violent stacking of hundreds of billions of ultra-large parameters (Scaling Law). The practice of SU-01 proves that as long as the methodology is precise enough, winning gold can be a reproducible and standardized engineering task. The success of the 30B parameter backbone model shattered the uniqueness of \"big efforts can produce miracles\" and declared that middleweight models can also break through the old evaluation ceiling as long as they find the right training path.",
      "When Olympiad gold medals can be \"mass-produced\" by assembly lines, the industry urgently needs a longer ruler to measure the true level of cutting-edge AI. In the same week, the Soohak team promptly launched a set of new and extremely stressful assessment benchmarks: 439 scientific research-level problems hand-designed by 64 top mathematicians. The difficulty range far exceeds the Olympiad level, which usually requires top high school students to solve within hours, while the problems in the Soohak question bank require even professional mathematicians to spend half a day or even a full day to solve. More importantly, these hand-crafted \"freshly compiled\" questions cut off the possibility of the model \"cheating (Data Contamination)\" through pre-training data from the source.",
      "In the face of this scientific research paper, the former Olympiad full-score players faced a cliff-like data decline: Gemini-3-Pro's accuracy was 30.4%, GPT-5 was 26.4%, and Claude Opus 4.5 only recorded 10.4%. This disconnected data reveals a cruel reality: when the test dimension is raised from \"competition\" to \"scientific research and exploration\", even the large models currently in the first echelon can barely touch the 30% problem-solving ability. Juxtaposing the conclusions of Soohak and SU-01, the contrast becomes more glaring: Orsay has been reduced to craft, while scientific-level puzzles have re-raised the moat of human intelligence to the clouds.",
      "This does not mean that the value of Mathematical Olympiad itself has been damaged, but that its life cycle as a benchmark for large model evaluation has ended. A 30B model can top the list with a specific formula, indicating that this benchmark can no longer effectively distinguish the true intelligence depth of each manufacturer. If SU-01 stripped the past \"metaphysical superpowers\" into \"engineering methodology,\" then Soohak filled in the next few days and re-established a new ability anchor that even the flagship model could not match.",
      "Although the two papers have different starting points, they jointly describe the iterative iron law of the large model evaluation system: once the ruler is broken down by industrialization, it must be eliminated immediately and the threshold must be raised significantly. SU-01 verified the homogeneity and obsolescence of the original ruler (Orsay); Soohak accurately positioned itself in the field of scientific research-level mathematics and took over the power to reclassify the first echelon. The evolution of model capabilities and the increase in test difficulty are chasing each other, forming a vivid aspect of the industry's technological anxiety in May.",
      "Of course, these two sets of data also need to be interpreted with caution. SU-01's \"gold medal pass rate\" is based on specific testing strategies and scoring laxity, and is not an absolute generalization of general abilities; and the single-digit winning rates of 30.4%, 26.4%, and 10.4% exposed by Soohak are only partial mappings of these 439 questions and cannot be simply converted into \"the model has only 30% of the intelligence of a human mathematician.\" What they provide is not the final judgment, but a true cross-section of the current industry testing ecosystem: the old benchmarks have been captured by engineering routines, and the new benchmarks are reshaping the ranking order.",
      "For underlying model manufacturers and evaluation institutions, this change completely shatters the single-dimensional narrative of rankings. The public relations strategy of flaunting the model's mathematical capabilities by \"winning gold in the Olympiad\" has become pale in the context of mass production. The next arms race is destined to be fully tilted towards difficult scientific research-level benchmarks such as Soohak. A higher score on the old scale that has been broken down can only prove that it has tied yesterday's ceiling, but it cannot establish its dominant position in the new order.",
      "Therefore, the focus worthy of attention this week is not the high score of a certain model in an old competition, but the complete collapse of the old scale and the strict establishment of the new scale. The next key observational indicator will focus on how long it takes the leading Gemini-3-Pro to cross the 30.4% barrier and reach the passing water level under Soohak's ultimate pressure test. The length of this climbing cycle will also determine the effective life cycle of this new benchmark being able to dominate the evaluation altar."
    ],
    "sources": [
      {
        "label": "arXiv:2605.13301",
        "url": "https://arxiv.org/abs/2605.13301"
      },
      {
        "label": "arXiv:2605.09063",
        "url": "https://arxiv.org/abs/2605.09063"
      }
    ]
  },
  {
    "id": "no-13",
    "no": "13",
    "cat": "research",
    "title_zh": "退位审稿人的数学家",
    "title_en": "The mathematician who stepped down as a reviewer",
    "author_zh": "OpenAI · Will Sawin",
    "author_en": "OpenAI · Will Sawin",
    "date": "May 20, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#E2D4B0",
      "fg": "#3A3018",
      "accent": "#A07A2E",
      "drop": "#8A6411"
    },
    "pull_zh": "在推进数学边界的过程中，模型的角色正在发生实质性翻转：从验证前人定理的「高级计算器」，越迁为产出原创解法的「第一作者」。",
    "pull_en": "In the process of pushing the boundaries of mathematics, the role of models is undergoing a substantial reversal: from an \"advanced calculator\" that verifies previous theorems, to a \"first author\" that produces original solutions.",
    "body_zh": [
      "在五月之前，AI 在数学领域的能力上限被框定在知识检索、奥赛求解或模式识别的范畴，其路径大多是对人类已有解法的复刻与拼接。然而，5 月 20 日 OpenAI 披露的一项进展击穿了这一认知天花板：一个通用推理模型在保罗·埃尔德什（Paul Erdős）于 1946 年提出的「单位距离问题」中，独立构造出了一组前所未见的无穷点集，将该问题的对数下界推进至 $n^{1+\\delta}$。随后，普林斯顿数学家 Will Sawin 接手了这组构造，并将 $\\delta$ 优化至 0.014。这一突破甚至引得菲尔兹奖得主 Timothy Gowers 评价其为「真正的里程碑」。",
      "此项成果的核心震撼点在于「原创性（Originality）」的发生机制。构造那组复杂的无穷点集，无法单纯通过检索既有题库或穷举计算得出，它要求在抽象的高维空间中进行非线性的结构跳跃。在这一人机协作的闭环中，分工倒置了：模型充当了提出直觉与核心构造的开拓者，Sawin 执行了收敛性质的参数精修，而更外围的数学家则扮演了独立验证与理论解释的「质检员」，甚至需要另行撰写配套论文（companion paper）来向学界阐释该解法的合法性。",
      "仅隔一日，5 月 21 日，DeepMind 从另一条技术路线完成了背靠背的突围。由 Pushmeet Kohli、Thomas Hubert 等主导的「形式化证明 Agent（Formal Proof Agent）」宣布，其系统完全自主地攻克了 9 个 Erdős 悬赏难题，其中耗时最久的一题已悬置 56 年。论文中特别强调了「自主（Autonomous）」属性：从理解题意、构思证明路径，到输出机器可验证的形式化代码，整个推导链条实现了零人工干预。",
      "上述两项突破揭示了 AI 介入顶级数学研究的两条分化路径。OpenAI 偏向「直觉流（Intuition-driven）」，模型凭借非凡的拟合能力给出原创构造，随后由人类接管逻辑自洽性检验；DeepMind 则坚守「形式化流（Formalization-driven）」，Agent 将推导过程转换为 Lean 等形式化语言，对错不再依赖人工评审，而是交由定理证明器（Theorem Prover）进行编译器级别的绝对验证。这两条路径在同一时间窗口内达成历史性突破，标志着机器智能已全面具备攻坚人类最高智力结晶的工程可行性。",
      "这种技术突围迅速引发了学术出版机制的共振。据 Axios 5 月 26 日报道，由数学家创立的 Axiom 公司，其基于 LLM 与 Lean 语言生成的 5 篇形式化证明论文已被同行评审的学术期刊正式接收。这标志着 AI 生成的数理知识，在经受人类审稿人与形式化编译器的双重检验后，已被正式收编进人类严肃学术的知识图谱中。",
      "而到了 5 月 29 日，Meta 发布的开源项目 ATLAS 则为这一进程铺设了底层基建。该项目将 26 本标准数学教材全量转换为近 48 万行的 Lean 语言代码。如果说解答单点悬赏题是战术奇袭，那么 ATLAS 则是战略性的数字基建。它将人类积累的非结构化数学共识，大规模转化为形式化机器可读的底层语料，为后续 Agent 的自主训练和逻辑验证提供了充沛的基础储备。",
      "这一连串的事件从根本上重塑了顶尖科研的分工矩阵。人类数学家的职能正在快速让渡于验证与裁决（Verification & Decision-making）：如 Sawin 的参数调优、独立学者的配套解读、乃至期刊的同行评审。而在提出原创构造、解构陈年悬赏、甚至代码化理论基建等高信息熵的突破环节，AI 已逐步确立了「第一作者」的站位。OpenAI 的进展之所以能在学界引发地震，其背书并非来自公关层面的自我宣示，而是建立在独立数学家严密验证的逻辑自洽之上。",
      "评估这一轮 AI 数学革命的后续纵深，有三个关键观测点：其一，Axiom 公司 5 篇获接收论文在最终发表后，将面临怎样苛刻的学界反向检视；其二，DeepMind 攻克的 9 个悬赏题，是否能在全球数学家的显微镜下立住脚跟并被吸纳进正典；其三，ATLAS 的 48 万行形式化代码能否在开源社区引发滚雪球效应，催生更庞大的理论验证基建。这些指标将验证，AI 产出的智力成果，是否具备经受形式化编译器绝对校验与人类同行残酷审视的双重抗压能力。"
    ],
    "body_en": [
      "Before May, the upper limit of AI's capabilities in the field of mathematics was framed in the categories of knowledge retrieval, Olympiad solving, or pattern recognition. Most of its paths were to copy and splice existing human solutions. However, a development disclosed by OpenAI on May 20 broke through this cognitive ceiling: a general reasoning model independently constructed a set of never-before-seen infinite point sets in the \"unit distance problem\" proposed by Paul Erdős in 1946, pushing the logarithmic lower bound of the problem to $n^{1+\\delta}$. Later, Princeton mathematician Will Sawin took over this set of constructions and optimized $\\delta$ to 0.014. This breakthrough even led Fields Medal winner Timothy Gowers to call it a \"real milestone.\"",
      "The core shocking point of this achievement lies in the generation mechanism of \"originality\". Constructing that complex set of infinite points cannot be obtained simply by searching the existing question bank or exhaustive calculations. It requires non-linear structural jumps in an abstract high-dimensional space. In this closed loop of human-computer collaboration, the division of labor is inverted: the model serves as the pioneer who proposes intuition and core structures, Sawin performs parameter refinement of convergence properties, and more peripheral mathematicians act as \"quality inspectors\" for independent verification and theoretical explanation, and even need to write a separate companion paper to explain the legitimacy of the solution to the academic community.",
      "Just one day later, on May 21, DeepMind completed back-to-back breakthroughs from another technical route. The \"Formal Proof Agent\" led by Pushmeet Kohli, Thomas Hubert and others announced that its system has completely independently solved 9 Erdős bounty problems, the longest of which has been pending for 56 years. The paper particularly emphasizes the \"Autonomous\" attribute: from understanding the meaning of the question, conceiving the proof path, to outputting machine-verifiable formal code, the entire derivation chain achieves zero manual intervention.",
      "The above two breakthroughs reveal two differentiated paths for AI to intervene in top mathematical research. OpenAI prefers \"intuition-driven\". The model relies on its extraordinary fitting ability to provide original structures, and humans then take over the logical self-consistency test; DeepMind adheres to \"formalization-driven\". The agent converts the derivation process into formal languages ​​such as Lean. Right and wrong no longer rely on human review, but are handed over to the theorem prover (Theorem Prover) for absolute verification at the compiler level. These two paths achieved historic breakthroughs within the same time window, marking that machine intelligence has fully achieved the engineering feasibility of conquering the highest level of human intelligence.",
      "This technological breakthrough quickly resonated with the academic publishing mechanism. According to a report by Axios on May 26, Axiom, a company founded by mathematicians, has officially accepted five formal proof papers based on LLM and Lean language generated by peer-reviewed academic journals. This marks that the mathematical knowledge generated by AI has been officially incorporated into the knowledge map of serious human academics after being double-checked by human reviewers and formal compilers.",
      "On May 29, the open source project ATLAS released by Meta laid the underlying infrastructure for this process. This project converted all 26 standard mathematics textbooks into nearly 480,000 lines of Lean language code. If answering a single-point bounty question is a tactical surprise attack, then ATLAS is a strategic digital infrastructure. It converts the unstructured mathematical consensus accumulated by humans into formal machine-readable underlying corpus on a large scale, providing ample basic reserves for subsequent Agent autonomous training and logical verification.",
      "This series of events has fundamentally reshaped the division of labor matrix of top scientific research. The functions of human mathematicians are rapidly being transferred to Verification & Decision-making: such as Sawin’s parameter tuning, supporting interpretations by independent scholars, and even peer review in journals. In breakthroughs with high information entropy, such as proposing original structures, deconstructing old bounties, and even codifying theoretical infrastructure, AI has gradually established its position as the \"first author.\" The reason why OpenAI's progress can cause earthquakes in the academic world is that its endorsement does not come from self-declaration at the public relations level, but is based on logical self-consistency that has been rigorously verified by independent mathematicians.",
      "There are three key observation points to evaluate the follow-up depth of this round of AI mathematical revolution: first, how harsh the academic reverse review will be for Axiom’s five accepted papers after they are finally published; second, whether the nine bounty questions solved by DeepMind can stand up under the microscope of mathematicians around the world and be absorbed into the canon; third, ATLAS’s 48 Can tens of thousands of lines of formal code trigger a snowball effect in the open source community and spawn a larger theoretical verification infrastructure? These indicators will verify whether the intellectual achievements produced by AI have the dual ability to withstand the absolute verification of formal compilers and the cruel scrutiny of human peers."
    ],
    "sources": [
      {
        "label": "openai.com",
        "url": "https://openai.com/index/model-disproves-discrete-geometry-conjecture/"
      },
      {
        "label": "arXiv:2605.22763",
        "url": "https://arxiv.org/abs/2605.22763"
      },
      {
        "label": "axios.com",
        "url": "https://www.axios.com/2026/05/26/axiom-ai-math-journal"
      }
    ]
  },
  {
    "id": "no-14",
    "no": "14",
    "cat": "industry",
    "title_zh": "寡头格局与算力黑洞",
    "title_en": "Oligopoly pattern and computing power black hole",
    "author_zh": "The Information",
    "author_en": "The Information",
    "date": "May 18, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#341B40",
      "fg": "#ECE0DC",
      "accent": "#E0A0C0",
      "drop": "#9C58C4"
    },
    "pull_zh": "在占据绝大部分行业营收的双寡头中，一家因「首度盈利」的统计口径饱受质疑，另一家则直面深陷负利润的运营现实。这折射出当前 AI 商业模式的核心悖论：高增长与高消耗的错位。",
    "pull_en": "Among the duopoly that accounts for most of the industry's revenue, one company has been questioned for its \"first profit\" statistical caliber, while the other company is facing the operating reality of deep negative profits. This reflects the core paradox of the current AI business model: the mismatch between high growth and high consumption.",
    "body_zh": [
      "《The Information》在 18 日披露的一组数据，无情地揭开了行业马太效应愈发明显的现实：在追踪的 34 家头部 AI 创业公司中，仅仅 Anthropic 与 OpenAI 两家巨头，就切走了高达 89% 的收入大盘。这两家企业的合并年化收入已触及 800 亿美元级别，并在过去六个月内实现了 112% 的暴增。更为严峻的是，这种垄断趋势仍在强化——其市场占比相较半年前进一步攀升了 4.5 个百分点。在双寡头虹吸效应下，剩余 32 家竞品的生存空间正遭到结构性的挤压。",
      "从账面表现看，Anthropic 似乎迎来了高光时刻。CNBC 5 月 20 日报道称，其第二季度营收预计达 109 亿美元，并有望实现历史首次单季盈利。次日，《The Information》估算其年化收入将攀升至 450 亿美元，超越 OpenAI 约 250 亿美元的预估规模。随后的 5 月 28 日，Anthropic 宣布完成 650 亿美元的 H 轮融资，投后估值高达 9650 亿美元，首次在估值量级上盖过 OpenAI。对于一家自 2021 年才分拆独立的企业而言，这一系列商业节点堪称商业奇迹。",
      "然而，这套光鲜的账本遭遇了另一种视角的严厉拆解。科技评论人 Ed Zitron 在《Profitability Swindle》一文中指出，依循公开模型测算，Anthropic 单季的算力硬成本几乎已吞噬其全部营收额——即每产生 1 美元收入，底层云服务消耗同样逼近 1 美元，这尚未计入人力与研发支出。所谓「首次盈利季」，极可能源于对云算力摊销等成本确认口径的财务腾挪，而非真实的经营毛利改善。更具长期压迫感的是《The Information》5 月 7 日的另一则爆料：Anthropic 仍背负着对 Google Cloud 高达约 2000 亿美元的长期算力承诺。这笔尚未完全反映在当季损益表中的「算力卖身契」，构成了悬在其商业闭环上方的隐性债务。",
      "这种财务口径的割裂，根源于大模型产业链中资本与算力的深度捆绑。无论是 Anthropic 向作为其资方的 Google 采买算力，还是 OpenAI 将算力支出回流至微软与甲骨文，营收的狂飙往往伴随着算力负债的同步膨胀，且多以长期合同的形式锁死。单季度损益表仅是这一庞大资本循环中的阶段性切面，若将未来必须兑付的云服务承诺一并纳入折算，其真实的单位经济模型依然极其脆弱。",
      "相较之下，OpenAI 的财报表现则更为直接地暴露了盈利困境。据《The Information》5 月 22 日披露，OpenAI 在 2026 年第一季度的非 GAAP 运营利润率深陷 -122%——即每获取 1 美元营收，便需承担 1.22 美元的运营亏损。此外，在与埃隆·马斯克的诉讼卷宗中亦浮出水面：微软向 OpenAI 注入的总计近千亿美元的投资，绝大部分已转化为算力消耗。行业头部的两大巨头，一个在账面盈亏边缘寻求财务平衡，另一个则直面巨额亏损，这一现状也为腰部及底层应用开发商的生存逻辑蒙上了阴影。",
      "在这种底层逻辑下，高达 89% 的集中度并非简单的马太效应，而是赢家通吃格局的加速固化。在总规模扩容 112% 的行业红利期，红利几乎全量被双寡头截流。类似 Perplexity、ElevenLabs、Cognition 等应用层企业，即便年化收入已突破 5 亿美元量级，在寡头碾压下依然显得微不足道。《The Information》对于「套壳应用还能切分多少利润」的拷问，实际上是在预警底层大模型对应用层价值的向下通吃。",
      "将这一趋势与本月 Anthropic 收紧 Agent Token 计费策略的动作相叠加，其商业压力显得更加立体。这表明，算力开支的重心正不可逆地从前期的预训练（Training）向海量的日常推理（Inference）倾斜。前端计费模式的精细化与后端沉重的算力债务形成夹击。收入的高度集中并未带来轻松的商业变现，相反，头部巨头将最先承接因大规模调用而几何级增长的算力成本重压。",
      "这套互相博弈的商业叙事，有待两个硬性指标的后续验证：其一，Anthropic 宣称的「首个盈利季」能否在时间维度上延续？当千亿级别的云服务承诺逐年进入折旧与摊销周期，单季算力成本会否重新击穿营收规模；其二，89% 的寡头市占率是否已触碰天花板？若该集中度在未来继续攀升，剩余 32 家企业及更广泛的应用开发商，将面临业务被迫向寡头无法覆盖的垂直纵深迁移，抑或彻底边缘化的残酷二选一。"
    ],
    "body_en": [
      "A set of data disclosed by \"The Information\" on the 18th ruthlessly revealed the reality of extreme concentration in the industry: among the 34 leading AI startups tracked, just two giants, Anthropic and OpenAI, took away as much as 89% of the revenue. The two companies' combined annualized revenue has hit the $80 billion level and has grown 112% in the past six months. What’s even more serious is that this monopoly trend is still strengthening—its market share has further increased by 4.5 percentage points compared with half a year ago. Under the siphon effect of the duopoly, the living space of the remaining 32 competing products is being structurally squeezed.",
      "Judging from the book performance, Anthropic seems to have ushered in a bright moment. CNBC reported on May 20 that its second-quarter revenue is expected to reach $10.9 billion, and it is expected to achieve a single-quarter profit for the first time in history. The next day, \"The Information\" estimated that annualized revenue would climb to $45 billion, surpassing OpenAI's estimate of about $25 billion. On May 28, Anthropic announced the completion of a US$65 billion Series H financing, with a post-money valuation of US$965 billion, eclipsing OpenAI in terms of valuation for the first time. For a company that has only been spun off as an independent company in 2021, this series of business nodes is a business miracle.",
      "However, this glorious set of ledgers has been severely dismantled by another perspective. Technology commentator Ed Zitron pointed out in the article \"Profitability Swindle\" that according to public model calculations, Anthropic's single-quarter hard cost of computing power has almost eaten up all of its revenue - that is, for every $1 of revenue generated, the consumption of underlying cloud services is also close to $1, which does not include human resources and R&D expenses. The so-called \"first profit season\" is most likely due to financial adjustments to cost recognition standards such as cloud computing amortization, rather than a real improvement in operating gross profit. Adding to the sense of long-term oppression is another revelation from \"The Information\" on May 7: Anthropic is still saddled with a long-term computing power commitment of approximately $200 billion to Google Cloud. This \"computing power sale contract\" that has not yet been fully reflected in the current quarter's profit and loss statement constitutes an implicit debt hanging above its business closed loop.",
      "This fragmentation of financial standards is rooted in the deep binding of capital and computing power in the large model industry chain. Whether Anthropic purchases computing power from Google as its capital, or OpenAI returns computing power expenditures to Microsoft and Oracle, the surge in revenue is often accompanied by a simultaneous expansion of computing power liabilities, and most of them are locked in the form of long-term contracts. The single-quarter profit and loss statement is only a phased aspect in this huge capital cycle. If the cloud service commitments that must be paid in the future are also included in the calculation, its true unit economic model is still extremely fragile.",
      "In comparison, OpenAI's financial report performance more directly exposed its profitability difficulties. According to 「The Information」 disclosure on May 22, OpenAI’s non-GAAP operating profit margin in the first quarter of 2026 fell to -122%—that is, for every $1 of revenue, it had to bear an operating loss of $1.22. In addition, it also emerged in the lawsuit files with Elon Musk: Most of the nearly 100 billion US dollars invested by Microsoft in OpenAI has been converted into computing power consumption. Among the two giants at the head of the industry, one is seeking financial balance on the edge of book profits and losses, while the other is facing huge losses. This situation has also cast a shadow on the survival logic of waist and underlying application developers.",
      "Under this underlying logic, the concentration rate of up to 89% is not a simple Matthew effect, but an accelerated solidification of the winner-take-all pattern. During the industry dividend period when the total scale expanded by 112%, almost all of the dividends were intercepted by the duopoly. Application layer companies such as Perplexity, ElevenLabs, and Cognition, even though their annual revenue has exceeded US$500 million, are still insignificant under the pressure of the oligarchs. \"The Information\" questioned \"how much profit can be divided by shell applications\", which is actually an early warning that the underlying large model will take all the value of the application layer downward.",
      "Superimpose this trend with Anthropic’s move this month to tighten its Agent Token billing policy, and its business pressure becomes more three-dimensional. This shows that the focus of computing power expenditure is irreversibly shifting from early pre-training to massive daily inference. The refinement of the front-end billing model and the heavy computing power debt on the back-end form a pincer attack. The high concentration of revenue has not brought about easy commercial realization. On the contrary, the leading giants will be the first to bear the burden of the geometric increase in computing power costs caused by large-scale calls.",
      "This set of competing business narratives awaits subsequent verification of two hard indicators: First, can Anthropic’s declared 「first profitable quarter」 be sustained in the time dimension? When hundreds of billions of cloud service commitments enter the depreciation and amortization cycle year by year, will computing power costs in a single quarter break through the revenue scale again? Secondly, has the 89% oligarch market share hit the ceiling? If the concentration continues to rise in the future, the remaining 32 companies and a wider range of application developers will face the cruel choice of being forced to migrate their business to a vertical depth that cannot be covered by the oligarchs, or being completely marginalized."
    ],
    "sources": [
      {
        "label": "x.com",
        "url": "https://x.com/theinformation/status/2057514274222727216"
      },
      {
        "label": "cnbc.com",
        "url": "https://www.cnbc.com/2026/05/20/anthropic-revenue-explosive-growth-ipo-profitable-quarter.html"
      },
      {
        "label": "wheresyoured.at",
        "url": "https://www.wheresyoured.at/anthropics-profitability-swindle/"
      }
    ]
  },
  {
    "id": "no-15",
    "no": "15",
    "cat": "industry",
    "title_zh": "算力成为金融资产",
    "title_en": "Computing power becomes a financial asset",
    "author_zh": "NVIDIA",
    "author_en": "NVIDIA",
    "date": "May 20, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#382318",
      "fg": "#F0E2CE",
      "accent": "#E0A85A",
      "drop": "#D0944A"
    },
    "pull_zh": "算力基础设施的商业形态已越过单纯的供需交易，演变为一种被重度杠杆化和股权绑定的金融衍生品。",
    "pull_en": "The business form of computing power infrastructure has gone beyond simple supply and demand transactions and evolved into a financial derivative that is heavily leveraged and tied to equity.",
    "body_zh": [
      "如果说电力供应构成了算力扩张的物理硬约束，那么资本流转方式则重塑了其商业底层逻辑。在英伟达于 5 月 20 日披露的 2027 财年第一季度财报中，除却 816 亿美元的破纪录营收外，一项边缘数据尤为引人注目：单季购入非上市证券达 185.8 亿美元，同比暴增约 29 倍。结合此前数据，其持有的初创企业股权资产已攀升至约 430 亿美元。英伟达的角色正在跨越纯粹的硬件供应商，实质上转变为深度介入下游生态的战略级投资方。",
      "这 185.8 亿美元的单季注资，标志着算力产业链内一种闭环结构的成型。被投企业往往是算力消耗大户，其通过融资获取的资金，最终高概率回流至英伟达或其指定的算力云网络中转化为硬件采购收入。这套左手股权注资、右手硬件变现的商业循环，不仅锁死了新兴 AI 企业的技术栈，更在短期内人为推高了财报上的销售表现，形成一种由资本当量催化的系统性繁荣。",
      "与此同时，算力租赁市场的金融化手段正在打破常规。据彭博社 5 月 28 日披露，资本巨头 Apollo 与黑石牵头筹划了一笔约 360 亿美元的私募信贷方案。其运作模式是对谷歌 TPU 算力集群进行买断并转租给 Anthropic，同时引入博通（Broadcom）对底层硬件提供残值担保。长期以来，此类大额私募杠杆通常锚定于写字楼或物流园等具备高保值率的不动产；如今，迭代周期极短的 AI 芯片被强行打包为可产生稳定现金流的底层资产，标志着算力已被资本市场推向了重度金融化的深水区。",
      "然而，这套金融架构的支点极度依赖于租赁合同的长期稳定性。根据 SpaceX 5 月份提交的 S-1 报告测算，Anthropic 月均算力支出约 12.5 亿美元，并宣称相关协议覆盖至 2029 年。但马斯克随后驳斥该合同实为 180 天的短期协议。租赁周期的长短，直接决定了算力资产在折旧周期内的现金流覆盖率。若转租遇冷，负责残值兜底的博通将承受巨大的减值风险，进而威胁整条杠杆链条的资金安全。",
      "二级市场对非英伟达系标的的追捧同样狂热。5 月 13 日，推理芯片厂商 Cerebras 强行将 IPO 发行价上调至 185 美元，上市次日股价飙升约 68%，市值触及 950 亿美元，创下 2026 年美股 AI 芯片领域的募资纪录。Cerebras 溢价发行的成功，折射出资本市场对打破英伟达单一算力垄断、寻找「算力二供」的强烈溢价意愿。",
      "行业最大的变量仍在酝酿。据 CNBC 援引《华尔街日报》报道，OpenAI 正筹备于第四季度递交 IPO 申请，目标估值超过 8500 亿美元。这一资本动作的提速，得益于 5 月 18 日法庭对马斯克诉 OpenAI 及 Sam Altman 一案的驳回裁决。法律诉讼的阶段性出清，为其从非营利向营利性架构转型及最终登陆资本市场扫清了关键障碍。一旦进入公开市场，其真实的单位经济模型与算力开支将被迫接受公众审计。",
      "算力军备向物理基础设施的渗透也在加速。5 月 18 日，能源巨头 NextEra 计划通过全股票收购 Dominion 构建受管制的巨型电力企业。尽管约 670 亿美元的交易对价尚未经 SEC 最终核准，但其指向性明确：资本正越过芯片层，直接控盘支撑超大型数据中心运转的电网底座。当算力竞争演变为国家级的电力消耗战，底层能源的把控力将成为决定胜负的终极阀门。",
      "纵观本月，英伟达的股权通吃、财团的信贷杠杆、竞品的溢价上市以及能源巨头的整合，共同构筑了一个高度金融化的算力产业矩阵。这一体系的抗压性，将在后续几个关键节点迎来大考：Apollo 牵头的 360 亿信贷能否基于长期稳定的租约完成闭环；Cerebras 的高估值能否在财报中得到业务兑现；以及 OpenAI 潜在的招股书将如何解释其高昂的算力成本。这套建立在资金杠杆与电力堆砌之上的基础设施体系，其脆弱性与爆发力正在同步放大。"
    ],
    "body_en": [
      "If power supply constitutes a hard physical constraint on the expansion of computing power, then the capital circulation method reshapes its underlying business logic. In Nvidia’s first quarter financial report for fiscal year 2027 disclosed on May 20, in addition to the record-breaking revenue of US$81.6 billion, a marginal data is particularly eye-catching: the purchase of unlisted securities in a single quarter reached US$18.58 billion, a surge of approximately 29 times year-on-year. Combined with previous data, its equity holdings in startups have climbed to about $43 billion. Nvidia's role is transcending that of a pure hardware supplier and essentially transforming into a strategic investor deeply involved in the downstream ecosystem.",
      "This single-quarter capital injection of US$18.58 billion marks the formation of a closed-loop structure within the computing power industry chain. Invested companies are often large consumers of computing power, and the funds they obtain through financing have a high probability of eventually flowing back to NVIDIA or its designated computing power cloud network and converted into hardware procurement revenue. This business cycle of equity capital injection on the left and hardware monetization on the right not only locks up the technology stacks of emerging AI companies, but also artificially boosts the sales performance in financial reports in the short term, forming a systemic prosperity catalyzed by capital equivalents.",
      "At the same time, the financial means of the computing power rental market are breaking the rules. According to Bloomberg’s disclosure on May 28, capital giant Apollo and Blackstone led a private placement credit package of approximately US$36 billion. Its operating model is to buy out Google's TPU computing cluster and sublease it to Anthropic, while introducing Broadcom to provide residual value guarantee for the underlying hardware. For a long time, such large amounts of private equity leverage have usually been anchored in real estate with high value retention rates, such as office buildings or logistics parks; now, AI chips with extremely short iteration cycles are forcibly packaged as underlying assets that can generate stable cash flow, indicating that computing power has been pushed by the capital market into the deep waters of heavy financialization.",
      "However, the fulcrum of this financial structure is extremely dependent on the long-term stability of the lease contract. According to the S-1 report submitted by SpaceX in May, Anthropic’s average monthly computing power expenditure is approximately US$1.25 billion, and it is claimed that the relevant agreement covers until 2029. But Musk later dismissed the contract as a short-term agreement of 180 days. The length of the lease cycle directly determines the cash flow coverage of computing assets during the depreciation cycle. If the sublease fails, Broadcom, which is responsible for the residual value, will bear huge impairment risks, thus threatening the financial security of the entire leverage chain.",
      "The secondary market is equally enthusiastic about non-Nvidia products. On May 13, inference chip manufacturer Cerebras forcibly raised its IPO price to US$185. The share price soared by about 68% on the second day of listing, with the market value touching US$95 billion, setting a fundraising record for the AI ​​chip field in the US stock market in 2026. The success of Cerebras' premium issuance reflects the capital market's strong willingness to break Nvidia's monopoly on computing power and find a \"secondary supply of computing power\" at a premium.",
      "The biggest changes in the industry are still brewing. According to CNBC citing the Wall Street Journal, OpenAI is preparing to submit an IPO application in the fourth quarter with a target valuation of more than $850 billion. The acceleration of this capital move was due to the court’s rejection of the case of Musk v. OpenAI and Sam Altman on May 18. The phased clearing of legal proceedings has cleared key obstacles for its transformation from a non-profit to a for-profit structure and its eventual entry into the capital market. Once it enters the open market, its true unit economic model and computing power expenditure will be forced to undergo public audit.",
      "The penetration of computing power into physical infrastructure is also accelerating. On May 18, energy giant NextEra planned to build a regulated power giant through an all-stock acquisition of Dominion. Although the transaction consideration of approximately US$67 billion has not yet been finally approved by the SEC, its direction is clear: capital is transcending the chip layer and directly controlling the power grid base that supports the operation of ultra-large data centers. When computing power competition evolves into a national-level power consumption war, the control of underlying energy sources will become the ultimate valve that determines victory or defeat.",
      "Throughout this month, NVIDIA's equity take-all, the consortium's credit leverage, the premium listing of competing products, and the integration of energy giants have jointly constructed a highly financialized computing power industry matrix. The stress resistance of this system will be tested at several key points in the future: whether the 36 billion credit led by Apollo can complete the closed loop based on long-term and stable leases; whether Cerebras' high valuation can be realized in the financial report; and how OpenAI's potential prospectus will explain its high computing power costs. The fragility and explosive power of this infrastructure system, which is built on financial leverage and power accumulation, are simultaneously amplifying."
    ],
    "sources": [
      {
        "label": "nvidianews.nvidia.com",
        "url": "https://nvidianews.nvidia.com/"
      },
      {
        "label": "bloomberg.com",
        "url": "https://www.bloomberg.com/news/articles/2026-05-28/apollo-shops-36-billion-debt-deal-to-buy-google-chips-for-anthropic"
      },
      {
        "label": "cnbc.com",
        "url": "https://www.cnbc.com/2026/05/20/openai-ipo-filing.html"
      }
    ]
  },
  {
    "id": "no-16",
    "no": "16",
    "cat": "industry",
    "title_zh": "包月无限的终结",
    "title_en": "The End of Unlimited Monthly Subscription",
    "author_zh": "Anthropic",
    "author_en": "Anthropic",
    "date": "May 14, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#3E1A2A",
      "fg": "#F0E2D6",
      "accent": "#E0A2B0",
      "drop": "#D25A78"
    },
    "pull_zh": "SaaS 行业赖以生存的「按席位计费（Per-seat）」模式，其隐含的边际成本递减前提，正被无休止吞噬底层算力的 Agent 彻底撕裂。",
    "pull_en": "The \"Per-seat\" model that the SaaS industry relies on for its survival, with its implicit premise of diminishing marginal costs, is being completely torn apart by Agents that endlessly devour the underlying computing power.",
    "body_zh": [
      "过去十余年，企业服务市场的核心计费范式是「按人头包月」，这种模式的底层假设在于：无论单体人类员工的操作频率多高，其带来的边际服务器成本几乎可以忽略。然而，5 月 14 日，Anthropic 在重构计费体系时强行打破了这一惯例：其在重新开放 Claude 对第三方 Agent 调用的支持时，明确将其与人类交互的无限制流量剥离，强制转为按 Token（即 credit）单独计费。这一商业动作背后的逻辑极其冰冷：机器自动执行任务所消耗的算力，已远超人类交互所能触及的物理上限。",
      "新闻机构 Axios 对此进行了量化拆解：一名深度用户单日发起的指令（Prompt）通常在百次以内；但当后台接管任务的是一个具备自主测试、爬虫调用及递归执行能力的编码 Agent 时，其单日请求量可轻松突破千次。在旧有的包月制框架下，SaaS 厂商的毛利模型建立在确定的单用户资源消耗预估上；但 Agent 的介入彻底摧毁了这种确定性——同一账号标识下，因执行主体的不同（人或机器），算力开销可产生数百倍的极差。Anthropic 将 Agent 计费单列，实质上是宣告：在极高边际成本的算力消耗面前，统包式的自助餐模式已无法维系商业闭环。",
      "算力成本的失控，即便在资金密集的科技巨头内部也已触发警报。据《The Verge》披露，微软近期强制叫停了内部体验与设备（Experiences + Devices）团队对 Claude Code 的使用，要求在 6 月底前全面切回自有的 GitHub Copilot CLI。除了整合内部生态的战略考量，这一临阵换将暴露了核心的财务焦虑：采购外部 Agent 编程工具的隐形成本，已高昂至促使微软不惜承担组织内耗的风险，强行斩断其在研发体系内的蔓延。",
      "同一报道披露的另一案例更为极端：网约车巨头 Uber 的 AI 编程月度预算，在 4 月尚未过半时便已告罄。对于具备严苛企业预算管理能力的大型组织而言，这种预算超支速度极其罕见。这印证了 Agent 导入后企业 IT 支出的性质突变：由过去的「固定资本支出（CapEx）或可预期的运营支出（OpEx）」，异化为高度不可控的按量计费变量。预算锁死在 Agent 时代已成为伪命题，激增的 Token 消耗随时可能击穿企业的当期财务规划。",
      "Box 创始人 Aaron Levie 5 月 28 日在 MAD 播客中的论断进一步揭示了风险极值：若编码 Agent 陷入执行死循环，伴随上下文窗口的递归膨胀，单次失控调用的账单可轻易飙升至四位数（千元美金级别）。由此，Levie 抛出了一项产业论断：传统的按席位计费正加速折旧，企业级软件正向「Tokenmaxxing（单 Token 价值最大化）」的范式演进。这意味着，未来的软件采购焦点将从「授权多少员工使用」，急剧收缩为「系统底层流转了多少算力」。",
      "成本焦虑直接催生了旨在提供透明度与成本截流的衍生赛道。5 月 28 日，企业级 AI 搜索公司 Glean 宣布其年度经常性收入（ARR）突破 3 亿美元。该体量的业务支撑点之一，便是其跨系统聚合 AI 开销、实现账单透明化与冗余调用的拦截能力。这一赛道的逆势扩张，侧面佐证了大客户群体的核心诉求：摒弃粗放的打包账单，建立对每一单位算力支出的颗粒度追踪机制。",
      "综合上述产业动态，软件业的计费逻辑正经历一次历史性的回调：从 SaaS 时代的按需授权，倒退回类似早期云计算的按量计费（Pay-as-you-go）。Agent 的每一次流转，都直接挂钩于底层的芯片租赁与能耗成本，其强耦合性彻底粉碎了软件免费复制的边际红利。Anthropic 的计费分拆、Levie 的趋势论断与 Glean 的业务增长，共同宣判了无感算力消耗时代的终结。",
      "验证这一重构趋势的深度，可前瞻性地观测三大产业切面：其一，考察主流 Agent 厂商的商业化页面，按席位计费的固定套餐是否被「基础 Token 池+超额阶梯定价」的复合结构所取代；其二，审视企业财报中 AI IT 支出的口径归属，是否从常规的软件订阅项目中剥离，成为独立的算力硬成本核算单元；其三，类似 Uber 遭遇的预算枯竭，是否将倒逼企业端引入强制的 Agent 流量熔断机制。「包月」的壳仍可能作为营销外衣被保留，但其内部计算商业残值的标尺，已彻底转换为算力流转的绝对吞吐量。"
    ],
    "body_en": [
      "Over the past decade or so, the core billing paradigm in the enterprise service market has been \"per-capita monthly subscription.\" The underlying assumption of this model is that no matter how frequently a single human employee operates, the marginal server cost it brings is almost negligible. However, on May 14, Anthropic forcibly broke this convention when it restructured its billing system: when it reopened Claude's support for third-party Agent calls, it explicitly stripped its unlimited traffic of human interaction and forced it to be billed separately by Token (i.e., credit). The logic behind this business move is extremely cold: the computing power consumed by machines to automatically perform tasks has far exceeded the physical upper limit of human interaction.",
      "The news agency Axios conducted a quantitative breakdown of this: the number of commands (Prompts) initiated by an intensive user in a single day is usually less than a hundred times; but when the backend takes over the task is a coding agent with independent testing, crawler calling and recursive execution capabilities, its single daily request volume can easily exceed a thousand times. Under the old monthly subscription framework, the gross profit model of SaaS vendors was based on a certain single-user resource consumption estimate; but the intervention of Agent completely destroyed this certainty - under the same account identification, due to different execution subjects (people or machines), the computing power overhead can produce extreme differences of hundreds of times. Anthropic lists Agent billing separately, which is essentially a declaration: in the face of extremely high marginal cost of computing power consumption, the all-inclusive buffet model can no longer maintain a closed business loop.",
      "The out-of-control cost of computing power has triggered alarms even within capital-intensive technology giants. According to \"The Verge\", Microsoft recently forced the internal Experiences + Devices team to stop using Claude Code, requiring a full switch back to its own GitHub Copilot CLI by the end of June. In addition to the strategic considerations of integrating the internal ecosystem, this temporary change exposed the core financial anxiety: the hidden cost of purchasing external Agent programming tools has become so high that Microsoft is willing to bear the risk of internal friction in the organization and forcibly cut off its spread within the R&D system.",
      "Another case disclosed by the same report is even more extreme: the monthly budget for AI programming of the online ride-hailing giant Uber was exhausted before the middle of April. This rate of budget overrun is extremely rare for large organizations with rigorous corporate budget management capabilities. This confirms the sudden change in the nature of enterprise IT expenditures after the introduction of Agent: from the past \"fixed capital expenditure (CapEx) or predictable operating expenditure (OpEx)\" to a highly uncontrollable pay-as-you-go variable. Budget lock has become a false proposition in the Agent era, and the surge in Token consumption may break down the company's current financial plan at any time.",
      "Box founder Aaron Levie’s assertion in the MAD podcast on May 28 further revealed the extreme value of risk: If the coding agent falls into an execution infinite loop, with the recursive expansion of the context window, the bill for a single runaway call can easily soar to four digits (thousands of dollars). From this, Levie made an industry conclusion: traditional per-seat charging is accelerating depreciation, and enterprise-level software is evolving towards the paradigm of \"Tokenmaxxing (maximizing the value of a single Token)\". This means that the focus of future software procurement will shrink sharply from \"how many employees are authorized to use it\" to \"how much computing power is circulated at the bottom of the system.\"",
      "Cost anxiety has directly spawned spin-off tracks aimed at providing transparency and cost reduction. On May 28, enterprise AI search company Glean announced that its annual recurring revenue (ARR) exceeded $300 million. One of the business support points of this volume is its ability to aggregate AI expenses across systems, achieve bill transparency, and intercept redundant calls. The contrarian expansion of this track supports the core demands of large customer groups: to abandon extensive bill packaging and establish a granular tracking mechanism for each unit of computing power expenditure.",
      "Based on the above industry dynamics, the billing logic of the software industry is undergoing a historic callback: from the on-demand authorization in the SaaS era to the pay-as-you-go billing (Pay-as-you-go) similar to early cloud computing. Every transfer of Agent is directly linked to the underlying chip rental and energy consumption costs. Its strong coupling completely destroys the marginal dividend of free software copying. Anthropic’s billing spin-off, Levie’s trend analysis, and Glean’s business growth jointly announced the end of the era of mindless computing power consumption.",
      "To verify the depth of this restructuring trend, three major industry aspects can be observed prospectively: First, examine the commercialization pages of mainstream Agent vendors to see whether the fixed packages billed by seats are replaced by a composite structure of \"basic Token pool + excess tiered pricing\"; second, examine whether the caliber attribution of AI IT expenditures in corporate financial reports is separated from conventional software subscription projects and become an independent computing power hard cost accounting unit; third, similar to Uber Will the budget depletion encountered force enterprises to introduce a mandatory Agent traffic circuit breaker mechanism? The \"monthly subscription\" shell may still be retained as a marketing cover, but its internal yardstick for calculating commercial residual value has been completely converted into the absolute throughput of computing power circulation."
    ],
    "sources": [
      {
        "label": "axios.com",
        "url": "https://www.axios.com/2026/05/14/anthropic-claude-price-openai-tokens"
      },
      {
        "label": "x.com",
        "url": "https://x.com/tomwarren/status/2055000505923871219"
      }
    ]
  },
  {
    "id": "no-17",
    "no": "17",
    "cat": "industry",
    "title_zh": "告别日活迷信",
    "title_en": "Say goodbye to daily superstition",
    "author_zh": "字节跳动 · 晚点 LatePost",
    "author_en": "ByteDance · LatePost",
    "date": "May 27, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#143A2C",
      "fg": "#E8E6D2",
      "accent": "#D8A24A",
      "drop": "#3FAE7E"
    },
    "pull_zh": "字节跳动在同月内做出了两项看似对冲的战略决策：一方面将「1 亿 DAU」从核心产品的考核体系中剥离，另一方面却大幅上调了底层 AI 基建的资本开支上限。",
    "pull_en": "ByteDance made two seemingly hedging strategic decisions in the same month: on the one hand, it separated \"100 million DAU\" from the assessment system of core products, and on the other hand, it significantly increased the capital expenditure limit for the underlying AI infrastructure.",
    "body_zh": [
      "历经两年的高举高打，字节跳动成功将「豆包」推至国内首个跨越破亿日活门槛的 AI 助手量级。然而，在 5 月份，这一本可作为标杆的里程碑数据却被悄然降级。据《晚点 LatePost》在长篇报道《制造豆包》中的披露，1 亿 DAU 已不再作为豆包最核心的考核红线，内部考核导向正由「规模优先」转向「质量优先」。QuestMobile 一季度数据显示，豆包当时月活约 3.45 亿，日活达 1.4 亿；而同期竞品如 Kimi、智谱清言等仍受困于千万级区间。换言之，字节是在行业身位大幅领先且大盘持续增长的节点，主动踩下了流量考核的刹车。",
      "促使字节重置考核逻辑的，是对底层商业模式的重新核算。《晚点》指出，管理层意识到 AI 产品不具备传统互联网产品的「规模效应」。在经典移动互联网语境中，边际成本随用户规模扩张而递减，流量本身即意味着变现潜力。豆包初期完全复刻了抖音式的全免费、高饱和投放打法；但当 DAU 逼近 1 亿极值时，其账本模型难以为继：每一次面向泛 C 端用户的闲聊交互，都挂钩着刚性的算力推理成本。在缺乏成熟 ARPU（单用户平均收入）转化路径的前提下，盲目堆砌闲聊 DAU，本质上是对高昂推理算力的无效率消耗。",
      "尤为耐人寻味的是，在淡化前端流量指标的同时，字节却在后端开启了更为狂热的资产重置。据彭博社 5 月 27 日报道，字节跳动正评估将今年的 AI 基础设施资本支出（CapEx）上限推高至 700 亿美元，并预计明年可能逼近 1000 亿美元。在同一时间窗口内，一边主动刺破前端流量的数字泡沫，一边以近千亿美金的极高杠杆压注底层算力及数据中心基建，这表明字节的 AI 战略并未收缩，而是彻底转向了对算力这一核心生产资料的囤积与垄断。",
      "组织及生态侧的微调印证了这一判断。同日，字节开始向负责核心大模型的 Seed 团队发放专属的部门期权激励，将资源向底层的预训练（Pre-training）人才倾斜；此外，其近期注册的「AGENT WORLD」商标，亦暗示其应用层的重心正从泛娱乐交互，向具备强执行能力的 Agent 生态迁移。资金与人才的流向证明：无法自证商业闭环的 C 端流量战已被阶段性放弃，底层的核心模型与上层的智能体生态成为新的战略支点。",
      "在字节重估商业账本的同时，国内基础设施运营商以更底层的维度切入了算力计费市场。5 月 16 日，上海电信率先推出「Token 套餐」，允许用户以 1 元单价兑换 25 万算力点数，并通过话费账户直接结算。随后，移动与联通相继跟进。这一动作的产业意味在于：「智能」首次被解构为一种可计量、可直接通过成熟计费通道结算的基础公用事业，算力与通信带宽一样，成为了标品化的数字消费品。",
      "运营商的按量计费逻辑，与字节的「规模反噬成本」论断构成了产业生态的闭环呼应。既然面向 C 端的全量补贴无法被商业模式消化，将「算力开销」明码标价便成为必然解。这不仅是切断无脑流量狂欢的止损阀，更是将「AI 能力付费」拉平至水电煤气层级的基建性尝试。字节在前端的主动降温，与运营商在后端的计费标品化，实则都在回答同一个问题：泛滥的无效推理调用，必须由明确的支付链条来承担。",
      "对旧有流量评价体系的扬弃已成为行业共识。5 月 14 日，李彦宏在百度 Create 2026 大会上提出「DAA（每日活跃 Agent）」概念，隔空呼应了英伟达黄仁勋关于「Token 是 AI 时代 GDP」的论断。结合前述 Anthropic 强制将 Agent 算力调用实行按 Token 单独计费的动作（见 No.16），海内外的产业逻辑正在极速并轨：衡量业务价值的核心标尺，正从传统的用户规模（DAU），彻底倒向了衡量自动化效率的 Agent 活跃度与算力转化率。",
      "字节跳动能在极短周期内否决自身最耀眼的 DAU 成绩单，并坚定不移地投入千亿级别的基础设施扩建，其背后的决断力堪称残酷。这等于向全行业明牌：以补贴 C 端流量换取增长预期的互联网旧梦已无法在 AI 时代复刻。未来一年，验证这套新商业准则的兑现度，可关注三大指标：其一，字节落地于底层基础设施的 CapEx 资金体量；其二，三大运营商 Token 套餐的定价浮动及渗透率；其三，百度提出的 DAA 指标能否被主流审计市场接纳并写入财报。当算力开销被精确至每一比特的核算时，AI 产业才算真正摆脱了流量泡沫，步入严苛的账本时代。"
    ],
    "body_en": [
      "After two years of high-profile efforts, ByteDance has successfully pushed Doubao to the level of the first domestic AI assistant to cross the 100 million daily active threshold. However, in May, this milestone data that could have served as a benchmark was quietly downgraded. According to \"LatePostPost\"'s long report \"Making Bean Bao\", 100 million DAU is no longer the core assessment red line for Bean Bao, and the internal assessment orientation is shifting from \"scale first\" to \"quality first\". QuestMobile’s first quarter data shows that Doubao’s monthly active users were approximately 345 million and daily active users reached 140 million at that time; while competing products such as Kimi and Zhipu Qingyan during the same period were still stuck in the tens of millions range. In other words, Byte is a node that is significantly ahead in the industry and the market continues to grow, and it has proactively stepped on the brakes on traffic assessment.",
      "What prompted Byte to reset its assessment logic was a recalculation of the underlying business model. \"LatePost\" pointed out that management realizes that AI products do not have the \"scale effect\" of traditional Internet products. In the context of classic mobile Internet, marginal costs decrease with the expansion of user scale, and the traffic itself means monetization potential. In its early days, Doubao completely copied Douyin’s all-free, high-saturation delivery strategy; but when DAU approached the extreme value of 100 million, its ledger model was unsustainable: every chat interaction for pan-C-end users was linked to rigid computing power inference costs. In the absence of a mature ARPU (average revenue per user) conversion path, blindly stacking chat DAU is essentially an inefficient consumption of expensive inference computing power.",
      "What is particularly intriguing is that while downplaying front-end traffic indicators, Byte has embarked on a more fanatical asset reset on the back end. According to a report by Bloomberg on May 27, ByteDance is evaluating raising its AI infrastructure capital expenditure (CapEx) cap to US$70 billion this year and predicts that it may approach US$100 billion next year. In the same time window, while actively puncturing the digital bubble of front-end traffic, it also used extremely high leverage of nearly 100 billion US dollars to invest in underlying computing power and data center infrastructure. This shows that Byte's AI strategy has not shrunk, but has completely shifted to the hoarding and monopoly of computing power, a core production material.",
      "Fine-tuning on the organizational and ecological sides confirms this judgment. On the same day, Byte began to issue exclusive departmental option incentives to the Seed team responsible for core large models, tilting resources towards lower-level pre-training (Pre-training) talents; in addition, its recently registered \"AGENT WORLD\" trademark also implies that the focus of its application layer is shifting from pan-entertainment interaction to the Agent ecosystem with strong execution capabilities. The flow of funds and talents proves that the C-side traffic war that cannot self-certify a closed business loop has been phased out, and the underlying core model and the upper-level intelligent agent ecology have become new strategic fulcrums.",
      "While Byte is revaluing commercial ledgers, domestic infrastructure operators are entering the computing power billing market from a lower level. On May 16, Shanghai Telecom took the lead in launching the \"Token Package\", which allows users to redeem 250,000 computing power points at a unit price of 1 yuan, and settle the bill directly through their phone account. Subsequently, China Mobile and China Unicom followed suit. The industrial implication of this move is that \"intelligence\" is deconstructed for the first time into a basic utility that is measurable and can be settled directly through mature billing channels. Computing power, like communication bandwidth, has become a standard digital consumer product.",
      "The operator's pay-as-you-go billing logic and Byte's assertion that \"scale eats back costs\" form a closed-loop echo of the industrial ecosystem. Since the full amount of subsidies for the C-side cannot be absorbed by the business model, it has become inevitable to clearly price the \"computing power overhead\". This is not only a stop-loss valve to cut off the mindless traffic carnival, but also an infrastructural attempt to level \"payment for AI capabilities\" to the level of water, electricity and gas. Byte's proactive cooling on the front end and operators' standardization of billing on the back end are actually answering the same question: the proliferation of invalid inference calls must be borne by a clear payment chain.",
      "It has become an industry consensus to abandon the old traffic evaluation system. On May 14, Robin Li proposed the concept of \"DAA (Daily Active Agent)\" at the Baidu Create 2026 conference, echoing NVIDIA's Jensen Huang's assertion that \"Token is the GDP of the AI ​​era.\" Combined with the aforementioned Anthropic's action of forcing Agent computing power calls to be billed separately by Token (see No. 16), the industrial logic at home and abroad is rapidly merging: the core yardstick for measuring business value is completely shifting from the traditional user scale (DAU) to Agent activity and computing power conversion rate, which measures automation efficiency.",
      "ByteDance was able to veto its most dazzling DAU report card in a very short period of time, and unswervingly invested in hundreds of billions of infrastructure expansion. The decisiveness behind it is cruel. This is a clear sign to the entire industry: the old Internet dream of subsidizing C-side traffic in exchange for growth expectations can no longer be replicated in the AI ​​era. In the next year, to verify the fulfillment of this new set of business standards, we can focus on three major indicators: first, the amount of CapEx funds that Byte has landed on the underlying infrastructure; second, the pricing fluctuation and penetration rate of the Token packages of the three major operators; third, whether the DAA indicator proposed by Baidu can be accepted by the mainstream audit market and written into financial reports. When computing power expenditure is calculated accurately to every bit, the AI ​​industry will truly get rid of the traffic bubble and enter the era of strict accounting."
    ],
    "sources": [
      {
        "label": "latepost.com",
        "url": "https://www.latepost.com/news/dj_detail?id=3558"
      },
      {
        "label": "bloomberg.com",
        "url": "https://www.bloomberg.com/news/articles/2026-05-27/bytedance-weighs-capex-of-as-much-as-70-billion-in-ai-push"
      }
    ]
  },
  {
    "id": "no-18",
    "no": "18",
    "cat": "industry",
    "title_zh": "Agent 替你管钱",
    "title_en": "Agent manages money for you",
    "author_zh": "OpenAI · Plaid",
    "author_en": "OpenAI · Plaid",
    "date": "May 15, 2026",
    "minutes": 4,
    "spine": {
      "bg": "#EAC2AA",
      "fg": "#3A2418",
      "accent": "#C25A3E",
      "drop": "#C04E2E"
    },
    "pull_zh": "在极短的周期内，Agent 对个人资产的干预深度完成了从「只读分析」到「授权支付」，再到「代理交易」的三连跳。随之而来的，是一场关于机器代理过失与法律追责的系统性真空。",
    "pull_en": "In a very short period of time, the depth of Agent's intervention in personal assets has completed three consecutive jumps from \"read-only analysis\" to \"authorized payment\" to \"agency transaction\". What follows is a systemic vacuum regarding machine agent negligence and legal accountability.",
    "body_zh": [
      "AI 渗透高敏金融场景的步伐正在以前所未有的速度加快。就在中旬，这一进程迎来了关键性突破。5 月 15 日，OpenAI 联合美国金融基础设施供应商 Plaid，推出 ChatGPT 个人金融预览版，允许部分高净值用户绑定银行账户与证券资产。十日后，支付宝于 5 月 26 日面向泛 C 端推出基于授权的 AI 钱包，使 Agent 具备了执行资金划转的动作能力。次日，美国互联网券商 Robinhood 更是激进地向 AI Agent 开放了代理交易权限。在短短一周内，账户查询、授权支付、委托交易这三项层层递进的金融权限，首次在主流商业应用中被完整击穿。",
      "在这场权限让渡中，OpenAI 采取了最为克制的「只读（Read-only）」策略。Plaid 作为连接数千家金融机构的底层管道，实际上具备资金划转的工程能力；但 OpenAI 在产品定义上刻意将其截断，仅向 ChatGPT 开放基于用户真实资产的数据解析与财务建议功能。在这个层级，用户交出的仅仅是数据审阅权，执行交易的最终裁量权仍被牢牢把控在自然人手中。",
      "相比之下，支付宝与 Robinhood 的动作则跨越了关键的安全防线。支付宝披露其 AI 支付系统已静默完成逾 3 亿笔交易，并借由 ACT 2.0 协议的推行，将 Agent 从数据分析师的角色正式升格为「授权出纳」。这意味着，资金划拨的物理扳机已部分移交至机器系统，AI 不再仅仅是提供建议，而是直接干预了账户余额。",
      "Robinhood 的代理交易功能则将风险敞口推至极值。允许 Agent 在持牌券商平台内基于趋势判断进行直接挂单买卖，并为其配置专属信用卡，意味着系统不仅在「花钱」，更在承担「受托理财」的实质职能。一旦跨入强监管的证券交易环节，模型幻觉、逻辑误判或突发熔断所导致的系统性错单（Fat Finger），将不再是技术 bug，而是直击受托责任（Fiduciary Duty）底线的法律诉讼。",
      "这三家企业的进度差异揭示了一个核心命题：在 Agent 介入高敏业务时，决定商业化纵深的不再是模型智商，而是与之匹配的风控架构与责任划分机制。当 AI 停留在「只读」状态，其分析错误的代价最高不过是投资建议失效；但在执行层，授权 Agent 进行支付与交易，实质上是在将人类自身的财务安全，绑定在充满不确定性的概率模型之上。操作一旦越权或偏航，责任的归属究竟是作为指令下发者的用户，还是作为执行界面的券商，抑或是模型底层的开发商？行业目前尚无判例可循。",
      "正如《判断权的让渡》所指出的，技术演进中最隐蔽的危险，在于决策权被渐进式地让渡给系统，直至人类在自动化流程中沦为无需负责的旁观者。在财务管理场景中，这种让渡的杀伤力被无限放大。常规的软件错漏可通过回滚日志进行容灾恢复；但在真金白银的结算与撮合交易中，不可逆的资金流出意味着风险被瞬间锁死且无法重置。",
      "展望未来，该赛道有两大风险爆点亟待观测：其一，OpenAI 何时会基于 Plaid 的能力基建，迈出从「只读查账」向「可写操作」跨越的关键一步，这标志着巨头对涉资金合规的风险偏好发生了实质性转移；其二，在支付宝海量的支付基数与 Robinhood 激进的代理炒股尝试中，何时会爆发首例因「Agent 越权/错单」引发的公开索赔。首宗此类司法判例的责任界定与赔偿切割，将成为真正划分 Agent 金融化商业边界的法律准绳。在此之前，「AI 财富管家」的叙事依然建立在脆弱且尚未经受法庭极限压测的合规真空中。"
    ],
    "body_en": [
      "The pace of AI penetration into highly sensitive financial scenarios is accelerating at an unprecedented speed. Just in the middle of the year, this process ushered in a critical breakthrough. On May 15, OpenAI teamed up with U.S. financial infrastructure provider Plaid to launch a preview version of ChatGPT personal finance, allowing some high-net-worth users to bind bank accounts and securities assets. Ten days later, Alipay launched an authorization-based AI wallet for pan-C clients on May 26, giving Agents the ability to perform fund transfers. The next day, Robinhood, an American Internet brokerage, radically opened up agency trading rights to AI Agents. In just one week, the three progressive financial permissions of account inquiry, authorized payment, and entrusted transactions were completely broken down in mainstream commercial applications for the first time.",
      "In this permission transfer, OpenAI adopted the most restrained \"Read-only\" strategy. As the underlying pipeline connecting thousands of financial institutions, Plaid actually has engineering capabilities for fund transfer; however, OpenAI deliberately cuts it off in the product definition and only opens to ChatGPT the data analysis and financial advice functions based on the user's real assets. At this level, users only hand over the right to review data, and the final discretion to execute transactions is still firmly in the hands of natural persons.",
      "In contrast, Alipay and Robinhood’s actions cross critical security lines. Alipay disclosed that its AI payment system has silently completed more than 300 million transactions, and through the implementation of the ACT 2.0 protocol, Agent has been officially upgraded from the role of data analyst to \"authorized cashier\". This means that the physical triggers of fund transfers have been partially handed over to machine systems, and AI no longer just provides advice, but directly intervenes in account balances.",
      "Robinhood's agency trading feature pushes risk exposure to extremes. Allowing Agents to place direct orders based on trend judgment within the licensed brokerage platform, and allocating exclusive credit cards to them, means that the system is not only \"spending money\", but also undertakes the substantive function of \"trusted financial management\". Once you enter the highly regulated securities trading link, systematic wrong orders (fat fingers) caused by model illusions, logical misjudgments or sudden circuit breaker will no longer be technical bugs, but legal proceedings that directly hit the bottom line of fiduciary duty (Fiduciary Duty).",
      "The differences in the progress of these three companies reveal a core proposition: when Agent intervenes in highly sensitive businesses, it is no longer the model IQ that determines the depth of commercialization, but the matching risk control structure and responsibility division mechanism. When AI stays in a \"read-only\" state, the highest cost of its analysis errors is invalid investment advice; but at the execution level, authorizing agents to make payments and transactions essentially binds human beings' own financial security to a probabilistic model full of uncertainty. Once an operation exceeds authority or deviates, does the responsibility belong to the user as the instruction issuer, the brokerage as the execution interface, or the developer at the bottom of the model? There is currently no precedent in the industry to follow.",
      "As \"Transfer of Judgment Power\" points out, the most hidden danger in technological evolution is that decision-making power is gradually transferred to the system, until humans become irresponsible bystanders in the automated process. In financial management scenarios, the lethality of this transfer is infinitely magnified. Conventional software errors and omissions can be recovered through rollback logs; however, in real money settlement and matching transactions, irreversible capital outflow means that the risk is instantly locked and cannot be reset.",
      "Looking to the future, there are two major risk points in this track that need to be observed: first, when will OpenAI take a critical step from \"read-only auditing\" to \"writable operations\" based on Plaid's capability infrastructure, which marks a substantial shift in the giant's risk appetite for capital-related compliance; second, when will the first public claim caused by \"Agent overreach/erroneous orders\" occur in Alipay's massive payment base and Robinhood's aggressive agent stock trading attempts? The first such judicial precedent to separate liability definition and compensation will become the legal criterion that truly demarcates the boundaries of Agent's financial business. Prior to this, the narrative of 「AI Wealth Manager」 was still built in a compliance vacuum that was fragile and had not yet withstood the ultimate pressure test of the courts."
    ],
    "sources": [
      {
        "label": "plaid.com",
        "url": "https://plaid.com/blog/chatgpt-personal-finance-plaid/"
      },
      {
        "label": "aipay.alipay.com",
        "url": "https://aipay.alipay.com/act/"
      }
    ]
  },
  {
    "id": "no-19",
    "no": "19",
    "cat": "industry",
    "title_zh": "咨询生意正在被改写",
    "title_en": "The consulting business is being rewritten",
    "author_zh": "Anthropic",
    "author_en": "Anthropic",
    "date": "May 04, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#E8CFCA",
      "fg": "#3A2628",
      "accent": "#B05A5A",
      "drop": "#BC465E"
    },
    "pull_zh": "顶尖 AI 实验室的商业触角已跨越了单纯的模型输出。他们正携巨量资本，以「驻场实施」甚至「全盘收购」的强硬姿态，直接接管传统企业的数字化改造命脉。",
    "pull_en": "The business reach of top AI labs has gone beyond mere model output. They are bringing huge amounts of capital to directly take over the digital transformation lifeline of traditional enterprises with a tough stance of \"on-site implementation\" or even \"complete acquisition\".",
    "body_zh": [
      "前沿模型实验室往往被贴上「纯粹技术派」的标签，但 Anthropic 在 4 日用一场资本运作打破了这一刻板印象——他们联合黑石、Hellman & Friedman、高盛等金融巨头，组建了一家专注于企业级 AI 实施的合资公司。这家新实体的运营逻辑彻底背离了轻资产的 API 订阅模式，而是直接向传统银行、制造与医疗企业输出具备应用开发能力的工程师团队。通过「并肩作战」与「长期绑定」，Anthropic 试图在最棘手的业务一线，解决模型落地的痛点。",
      "七日后的 5 月 11 日，OpenAI 采取了几乎完全一致的战术收敛。其携手 TPG 等私募机构注资逾 40 亿美元，成立了实体机构 Deployment Company。在组建公司的同时，OpenAI 直接收购了位于伦敦的应用 AI 咨询团队 Tomoro，将其近 150 名「前线部署工程师」整编入伍。在同一周期内，Anthropic 亦密集锁定了与普华永道、毕马威的战略合作。两大实验室殊途同归的「PE 资本驱动+重资产工程师驻场」模式，标志着行业对「如何实现 AI 商业化落地」达成了底层共识。",
      "这一产业共识的核心在于：通用大模型与复杂业务场景之间存在着深邃的「最后一公里」鸿沟。传统软件时代依靠集成商或咨询公司进行「二次分发」的链路，在 AI 时代已告失效。顶尖实验室意识到，仅仅交付一个高智商的模型内核，无法解决客户在数据阻断、流程缝合及责任界定上的工程难题。必须依靠深度嵌入客户现场的技术团队，才能实现模型能力与业务逻辑的实质性耦合。",
      "正是这种高度依赖人力和时间周期的重资产属性，促使模型厂商必须引入私募股权（PE）资本。不同于边际成本极低的 SaaS 模式，驻场交付是一项典型的非标且耗资巨大的慢生意。引入黑石、TPG 等谙熟资本运作的大鳄，不仅能缓解模型研发母公司的现金流压力，更形成了一道资本护城河：将高投入、长周期的实施业务与核心模型业务在财务报表上予以剥离，规避了重资产模式对科技公司估值逻辑的拖累。",
      "这种战略转向，对传统 IT 咨询与系统集成商构成了实质性的降维打击。当模型底层厂商携带技术代差优势直接切入实施环节，不仅意味着旧有分发渠道被绕过，更深刻动摇了咨询业的定价逻辑。业内传闻，受限于 AI 交付的透明化，即便是麦肯锡等头部机构也正面临客户要求由「工时计费」向「按效计费（对赌协议）」转变的压力。AI 巨头的入局，正加速剥夺传统咨询体系的业务溢价。",
      "甚至，这种深度介入已延伸至资本层面的直接吞噬。5 月 4 日，投资平台 Long Lake 豪掷 63 亿美元（溢价约 60.2%）私有化收购商旅服务巨头 Amex GBT，并明确表示将依托全栈 AI 平台对后者进行底层的业务重构。这不仅是首宗明确以 AI 赋能为驱动的重资产并购案，更标志着 AI 改造传统行业的极限路径：不再满足于提供赋能工具，而是以超额溢价直接买断目标企业，通过系统性洗盘独占 AI 降本增效带来的所有红利。",
      "将这些线索与前述《Agent 演变为基础设施》（见 No.08）的论断相嵌套，产业逻辑豁然开朗。当工程落地成为最大瓶颈，顶尖实验室选择亲自下场填坑；而 Long Lake 的杠杆收购则预示着，掌握 AI 基础设施的一方，正加速向价值链中具备高利润空间的垂直赛道渗透。AI 巨头不再局限于虚拟世界的代码演算，他们正携带资本的重装火力，对实体商业发起实质性的收编。",
      "观察这种重资产模式的长期生命力，需聚焦以下变量：首先，以 OpenAI 和 Anthropic 为代表的合资驻场团队，能否在首年财报中兑现足以安抚私募资本的营收增速；其次，传统咨询行业是否会全面向「按效果付费（VBC）」妥协，这标志着旧有商业模型的最终瓦解。尽管类似 Amex GBT 私有化后的重构数据难以为外界窥探，但趋势已定：AI 产业的价值掠夺，正沿着「卖接口-卖服务-买公司」的路径，向更厚重的产业实体挺进。"
    ],
    "body_en": [
      "Cutting-edge model labs are often labeled as 「technical purists,」 but Anthropic broke this stereotype with a capital operation on the 4th—they joined forces with financial giants such as Blackstone, Hellman & Friedman, and Goldman Sachs to form a joint venture focused on enterprise-level AI implementation. The operational logic of this new entity completely deviates from the asset-light API subscription model, and instead directly exports a team of engineers with application development capabilities to traditional banking, manufacturing and medical companies. Through \"working side by side\" and \"long-term binding\", Anthropic tries to solve the pain points of model implementation in the most difficult business front line.",
      "Seven days later, on May 11, OpenAI adopted an almost identical tactical convergence. It teamed up with private equity institutions such as TPG to inject more than US$4 billion to establish the entity Deployment Company. While forming the company, OpenAI directly acquired Tomoro, an applied AI consulting team based in London, and integrated its nearly 150 \"frontline deployment engineers\" into the army. During the same cycle, Anthropic also intensively locked in strategic cooperation with PricewaterhouseCoopers and KPMG. The \"PE capital-driven + asset-heavy engineer-on-site\" model of the two major laboratories reaching the same goal through different routes marks that the industry has reached a bottom-level consensus on \"how to realize the commercialization of AI.\"",
      "The core of this industry consensus is that there is a deep \"last mile\" gap between general large models and complex business scenarios. In the traditional software era, the link of relying on integrators or consulting companies for \"secondary distribution\" has become ineffective in the AI ​​era. Top laboratories realize that merely delivering a high-intelligence model core cannot solve customers' engineering problems in data blocking, process stitching, and responsibility definition. It is necessary to rely on a technical team deeply embedded in the customer's site to achieve substantial coupling between model capabilities and business logic.",
      "It is this asset-heavy attribute that is highly dependent on manpower and time cycles that prompts model manufacturers to introduce private equity (PE) capital. Unlike the SaaS model with extremely low marginal costs, on-site delivery is a typically non-standard and expensive slow business. Introducing giants such as Blackstone and TPG who are familiar with capital operations can not only alleviate the cash flow pressure of the parent company of model research and development, but also form a capital moat: the high-investment, long-term implementation business and the core model business are separated in the financial statements, avoiding the drag on the valuation logic of technology companies by the heavy-asset model.",
      "This strategic shift has caused a substantial dimensionality reduction blow to traditional IT consulting and system integrators. When the underlying manufacturers of the model take advantage of technological differences and directly enter the implementation process, it not only means that the old distribution channels are bypassed, but also profoundly shakes the pricing logic of the consulting industry. According to industry rumors, due to the transparency of AI delivery, even leading institutions such as McKinsey are facing pressure from customers to shift from \"hourly billing\" to \"performance billing (betting agreement).\" The entry of AI giants is accelerating the deprivation of the business premium of the traditional consulting system.",
      "This deep involvement has even extended to direct engulfment at the capital level. On May 4, investment platform Long Lake invested US$6.3 billion (a premium of approximately 60.2%) to acquire business travel service giant Amex GBT privately, and made it clear that it would rely on a full-stack AI platform to reconstruct the latter’s underlying business. This is not only the first heavy-asset M&A case that is clearly driven by AI empowerment, but also marks the ultimate path for AI to transform traditional industries: it is no longer satisfied with providing empowerment tools, but directly buys out target companies at excessive premiums, and monopolizes all the dividends brought by AI's cost reduction and efficiency increase through systematic reshuffles.",
      "Nesting these clues with the aforementioned conclusion of \"Agent evolves into infrastructure\" (see No. 08), the industrial logic suddenly becomes clear. When the implementation of the project becomes the biggest bottleneck, top laboratories choose to fill the hole themselves; and Long Lake's leveraged buyout indicates that the party that masters the AI ​​infrastructure is accelerating its penetration into vertical tracks with high profit margins in the value chain. AI giants are no longer limited to code calculations in the virtual world. They are carrying the heavy firepower of capital and launching substantial consolidation into physical businesses.",
      "To observe the long-term vitality of this asset-heavy model, we need to focus on the following variables: First, whether the joint venture field teams represented by OpenAI and Anthropic can achieve a revenue growth rate sufficient to appease private equity capital in the first-year financial report; secondly, whether the traditional consulting industry will fully compromise to \"pay-for-performance (VBC)\", which marks the final collapse of the old business model. Although the reconstructed data after the privatization of Amex GBT is difficult for the outside world to spy on, the trend has been set: the value plunder in the AI ​​industry is following the path of \"selling interfaces - selling services - buying companies\" and moving towards heavier industrial entities."
    ],
    "sources": [
      {
        "label": "anthropic.com",
        "url": "https://www.anthropic.com/news/enterprise-ai-services-company"
      },
      {
        "label": "openai.com",
        "url": "https://openai.com/index/openai-launches-the-deployment-company/"
      },
      {
        "label": "businesswire.com",
        "url": "https://www.businesswire.com/news/home/20260504231235/en/"
      }
    ]
  },
  {
    "id": "no-20",
    "no": "20",
    "cat": "industry",
    "title_zh": "伦理困境与资本狂欢",
    "title_en": "Ethical Dilemma and Capital Carnival",
    "author_zh": "美国国防部",
    "author_en": "U.S. DoD",
    "date": "May 01, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#CFD6A0",
      "fg": "#2C3018",
      "accent": "#6E7A2E",
      "drop": "#5C7A1E"
    },
    "pull_zh": "商业模型进入国防采购体系的过程中，个别厂商坚守的伦理红线，在供应商多样化的买方市场中，正被轻易地绕道突破。",
    "pull_en": "In the process of business models entering the defense procurement system, the ethical red lines adhered to by individual manufacturers are being easily bypassed and broken through in the buyer's market with diverse suppliers.",
    "body_zh": [
      "从概念探讨走向真金白银的采购，AI 技术向军事领域的渗透终于在近期迎来了实质性的订单落地。5 月 1 日，美国国防部宣布与英伟达、微软、AWS 以及初创公司 Reflection AI 签订协议，将这些厂商的模型与算力服务接入五角大楼的安全网络。此前，谷歌、SpaceX 及 OpenAI 等已在相关清单之列。据 TechCrunch 披露，此次密集的采购动作，很大程度上是对 Anthropic 强硬立场的策略性绕行。军方试图获取不受限制的模型使用权限，而 Anthropic 坚守其「使用政策（Acceptable Use Policy）」中关于终端用途的红线，双方的博弈已从谈判桌延宕至司法程序。",
      "Anthropic 所划定的红线极具实质约束力：严禁模型被用于大规模国内监控，以及绝对禁止被集成至致命性自主武器系统（Lethal Autonomous Weapons Systems）——即无需人类干预即可执行攻击判断的武装设备。这并非仅是公关层面的道德宣示，而是被强行写入商业合同的刚性条款。为此，Anthropic 不惜与国防部对簿公堂，并曾于 3 月份通过禁制令，成功迫使军方撤回了对该公司的「供应链风险」标记。在参与国防采购的 AI 头部玩家中，Anthropic 这种在争取订单的同时、不惜通过诉讼以捍卫模型终端用途限制的姿态，构成了一个极具孤立色彩的样本。",
      "美国国防部的应对策略揭示了甲方在生态中的话语权。5 月 1 日签订的合同以「合法的军事行动使用」为框定，相关模型将被部署至 IL6/IL7 级别的高密网络环境中。此外，国防部专用于非涉密日常任务的 GenAI.mil 平台，活跃人员已逾 130 万。这一供需格局表明：只要底层能力存在多套替代方案，单一厂商的道德约束便无法封堵系统级的采购缺口。军方完全可以通过切换供应商，规避特定厂商的护栏限制。",
      "初创企业 Reflection AI 能够与微软、AWS 等巨头同批次入围军方订单，从侧面印证了军事应用场景中模型能力的同质化。诸如情报梳理、威胁态势评估及资源调度等需求，并不存在不可替代的技术独占性。在这种充分竞争的买方市场下，「道德护栏」若缺乏全行业的刚性共识与协同约束，单边设限的厂商只能面临订单流失与自我边缘化的商业结局。",
      "与此同时，军用 AI 赛道在资本市场正经历一场狂热的价值重估。5 月 13 日，专注于国防技术的 Anduril 宣布完成 50 亿美元巨额融资，由 Thrive Capital 与 a16z 领投，投后估值较此前翻倍至 610 亿美元。CEO Brian Schimpf 明确表示，资金将激进地投入到制造与研发基地的扩张中。他提及 2017 年创立之初遭遇的风投冷眼，与今日的资本热捧形成了强烈反差，标志着「防务科技」已从硅谷的隐秘偏门，跃升为核心的重仓赛道。",
      "而 Anduril 所深耕的领域，正是 Anthropic 竭力防范的实战应用纵深。今年内，Anduril 不仅赢得了美国陆军最高 200 亿美元的 10 年期合同，更确立了其作为「金穹」天基导弹拦截防御项目群核心供应商的地位。它与 Shield AI、Saronic 等新锐企业，正在系统性地切割洛克希德·马丁等传统军工巨头的市场份额。五月呈现的产业折叠尤为鲜明：一端是 Anthropic 试图以诉讼手段限制模型在致命场景的应用；另一端则是 Anduril 携资本重火力，高调推进 AI 武器化的工程落地。",
      "这场分歧的本质，并非技术可行性的争论，而是关于自动化系统「定责终局」的哲学冲突。如《判断权的让渡》所警示的，自动化最大的隐患在于人类决策权的悄然流失。致命性自主武器是这一风险的极端物理投射——当系统剥离了人类的最终确认环节而自动扣动扳机时，现有的责任归属框架便彻底崩塌。Anthropic 死守的红线，意在捍卫「人类作为最终责任节点」的底线；而五角大楼渴求的「无限制使用权」，则是在追求战术响应效率的极致，这也意味着将生杀大权部分交接给系统算法。",
      "接下来的核心观测点在于 Anthropic 的司法抗争能否在体制内建立某种示范效应。当前，七家主流 AI 厂商已接入国防体系，Anthropic 是唯一一家强硬坚持使用场景约束的头部企业。其后续的诉讼结果，不仅决定了企业能否在接受政府订单的同时保有产品独立定义权，更是在对整个行业施压：在 Anduril 等军工新贵不断推高行业天花板的狂飙之下，是否还会有第二家通用模型巨头，愿意站出来形成捍卫伦理底线的商业同盟。"
    ],
    "body_en": [
      "From concept discussions to real money purchases, the penetration of AI technology into the military field has finally ushered in substantial orders in the near future. On May 1, the U.S. Department of Defense announced that it had signed agreements with Nvidia, Microsoft, AWS, and the startup Reflection AI to connect the models and computing services of these manufacturers to the Pentagon’s security network. Previously, Google, SpaceX and OpenAI were already on the relevant list. According to TechCrunch, this intensive purchasing action is largely a strategic detour from Anthropic’s tough stance. The military is trying to obtain unrestricted access to the model, while Anthropic adheres to the red line on end use in its \"Acceptable Use Policy\". The game between the two parties has been postponed from the negotiation table to the judicial process.",
      "The red lines drawn by Anthropic are extremely binding: models are strictly prohibited from being used for large-scale domestic surveillance, and are absolutely prohibited from being integrated into Lethal Autonomous Weapons Systems—armed devices that can execute attack decisions without human intervention. This is not just a moral declaration at the public relations level, but a rigid clause forcibly written into a business contract. To this end, Anthropic went to court with the Department of Defense and successfully forced the military to withdraw its \"supply chain risk\" label from the company through an injunction in March. Among the leading AI players involved in defense procurement, Anthropic’s attitude of not hesitate to litigate to defend the end-use restrictions of its models while fighting for orders constitutes a very isolated sample.",
      "The U.S. Department of Defense’s response strategy reveals Party A’s right to speak in the ecosystem. The contract signed on May 1 is framed as \"legitimate military operational use\" and the relevant models will be deployed in IL6/IL7 level high-density network environments. In addition, the Department of Defense’s GenAI.mil platform, dedicated to unclassified day-to-day tasks, has more than 1.3 million active personnel. This supply and demand pattern shows that as long as there are multiple sets of alternatives for the underlying capabilities, the moral constraints of a single manufacturer cannot close the system-level procurement gap. The military can completely circumvent the guardrail restrictions of a specific manufacturer by switching suppliers.",
      "The start-up Reflection AI was able to be shortlisted for military orders in the same batch as Microsoft, AWS and other giants, which confirms the homogeneity of model capabilities in military application scenarios. For requirements such as intelligence sorting, threat situation assessment and resource scheduling, there is no irreplaceable technical exclusivity. In this fully competitive buyer's market, if the \"moral guardrail\" lacks rigid consensus and collaborative constraints across the industry, manufacturers that set unilateral restrictions can only face the business outcome of loss of orders and self-marginalization.",
      "At the same time, the military AI track is undergoing a feverish revaluation in the capital market. On May 13, Anduril, which focuses on defense technology, announced the completion of a huge financing of US$5 billion, led by Thrive Capital and a16z, with its post-money valuation doubling to US$61 billion. CEO Brian Schimpf has made it clear that money will be invested aggressively into expanding its manufacturing and R&D base. He mentioned that the cold shoulder he received from venture capital when he was founded in 2017 was in sharp contrast to today’s capital enthusiasm, marking that 「defense technology」 has jumped from a hidden backwater in Silicon Valley to a core track.",
      "The field Anduril is deeply involved in is the depth of practical application that Anthropic is trying to prevent. Within this year, Anduril not only won a 10-year contract of up to US$20 billion from the US Army, but also established its position as the core supplier of the \"Golden Dome\" space-based missile interception and defense project group. Together with emerging companies such as Shield AI and Saronic, it is systematically cutting into the market share of traditional military giants such as Lockheed Martin. The industry fold presented in May was particularly clear: on one end, Anthropic tried to use litigation to limit the application of models in fatal scenarios; on the other end, Anduril used capital and heavy firepower to promote the implementation of AI weaponization projects in a high-profile manner.",
      "The essence of this disagreement is not a debate on technical feasibility, but a philosophical conflict over the \"determination of final responsibility\" for automated systems. As \"The Transfer of Judgment Power\" warns, the biggest hidden danger of automation is the quiet loss of human decision-making power. Lethal autonomous weapons are the extreme physical projection of this risk—when a system pulls the trigger without the final human input, the existing framework of accountability breaks down. The red line that Anthropic adheres to is to defend the bottom line of \"human beings as the ultimate responsibility node\"; while the \"unrestricted use rights\" that the Pentagon desires is to pursue the ultimate in tactical response efficiency, which also means handing over the power of life and death to the system algorithm.",
      "The next core observation point is whether Anthropic’s judicial struggle can establish some kind of demonstration effect within the system. Currently, seven mainstream AI manufacturers have integrated into the national defense system, and Anthropic is the only leading company that strongly adheres to usage scenario constraints. The outcome of the subsequent litigation will not only determine whether the company can retain the right to independently define products while accepting government orders, but will also put pressure on the entire industry: with Anduril and other upstarts in the military industry constantly pushing up the ceiling of the industry, will there be a second general model giant willing to stand up and form a business alliance to defend the ethical bottom line?"
    ],
    "sources": [
      {
        "label": "theverge.com",
        "url": "https://www.theverge.com/ai-artificial-intelligence/937028/military-ai-warfare-red-lines"
      },
      {
        "label": "cnbc.com",
        "url": "https://www.cnbc.com/2026/05/13/anduril-valuation-defense-tech-funding-boom.html"
      }
    ]
  },
  {
    "id": "no-21",
    "no": "21",
    "cat": "open-source",
    "title_zh": "模型外侧的工具链",
    "title_en": "Tool chain on the outside of the model",
    "author_zh": "开源社区",
    "author_en": "Open-source community",
    "date": "May 2026",
    "minutes": 5,
    "spine": {
      "bg": "#E2B69C",
      "fg": "#3A2216",
      "accent": "#B0502E",
      "drop": "#B6442A"
    },
    "pull_zh": "整个五月，头部开源阵营罕见地未发布任何旗舰基座模型，而将研发火力密集倾注于底层推理框架、Agent 编排工具与极端量化技术上。",
    "pull_en": "Throughout May, the leading open source camp rarely released any flagship base model, but focused its R&D firepower on the underlying reasoning framework, agent orchestration tools and extreme quantification technology.",
    "body_zh": [
      "过去的 5 月份，开源大模型领域的头部厂商集体进入了「静默期」。自 DeepSeek 于 4 月 24 日的迭代后，Meta 的 Llama 及其他第一梯队玩家均未释出实质性的基座版本。社区内流传的 Qwen3.6、Gemma-4 等命名，经查证大多为缺乏官方背书的造假信息。这是近一年来，开源基座模型首次在自然月中交出「白卷」。然而，这种静默并非生态停滞，而是技术叙事重心的战略性转移——从「参数规模与刷榜」全面转向「工程交付与工具链基建」。",
      "这一转移在基础设施层的核心代表是 vLLM。5 月 15 日，这一已被确立为行业标准的开源推理框架发布了 v0.21.0 版本。此次升级极具颠覆性：架构底层全面迁移至 C++20，彻底解耦了对 transformers v4 旧有接口的强依赖，并正式实装了「KV Offload」机制。这种伤筋动骨的底层重构，虽然给上层应用的兼容性带来了短期的阵痛，但其释放的工程红利极其可观。",
      "KV Offload 直接刺中了工业级部署中的成本命门：在长文本或高并发场景下，模型的短期记忆（KV 缓存）往往比模型权重本身更快地撑爆显存（VRAM）。以往的解法依赖于粗暴的硬件堆叠；而 vLLM 则通过调度机制，将闲置缓存动态卸载至成本低廉的主机内存（RAM）中。这项技术突破，实质上是将高昂的「硬件资本支出（CapEx）」，转化为了可通过代码优化的「软件工程调度」，从而极大提升了单卡的并发吞吐量与成本效益。",
      "应用工具链的开源亦在同步推进。5 月 19 日，Mistral 发布了其官方编码 Agent 项目 mistral-vibe 的 v2.10.0 版本。作为对标 Claude Code 的核心工程套件，新版本引入了流式「边思考边编辑」机制，并固化了连接器（Connectors）组件。一家前沿基座厂商不仅开源其底层模型，更将自身打磨的 Agent 工作流与效能工具全盘开放，标志着开源的边界已从单一的「权重交付」，延伸至更为复杂的「最佳实践与执行环境交付」。",
      "同日，Ai2 更是进一步拓宽了开源的定义。在发布专注于地球观测的 OlmoEarth v1.1 模型之际，Ai2 同步开放了底层的公共算力资源池（OMAI）。在此之前，Ai2 已贯通了从模型权重、训练数据到训练日志的开源全链路；此次将算力这一稀缺性核心要素纳入开放范畴，标志着非营利机构正在试图重塑算力高度垄断下的研发生态。",
      "在端侧部署的微型战场，面壁智能抛出了两种极限压缩方案。其一为 10 亿参数的 MiniCPM5-1B，经 INT4 量化后体积不足 0.5GB，可直接运行于纯 CPU 环境；其二为 BitCPM-CANN，该方案采用了极其激进的 1.58-bit 网络架构（参数权重被压缩至 {-1, 0, 1} 三值），并完成了基于华为昇腾芯片的适配。这两种端侧极值探索的战略意图清晰：放弃全尺寸模型的涌现能力与跑分执念，换取在碎片化与受限硬件环境中的绝对下沉能力。",
      "综观五月的开源生态，一条与《Agent 演变为基础设施》（见 No.08）高度耦合的逻辑隐线已然浮现：在基座模型能力触及阶段性平缓期后，开源社区正通过强化推理框架、开放 Agent 工具链、探索算力共享与极限端侧量化，全面转入「重装工程落地」阶段。",
      "近期的「停更」状态，绝不是技术迭代周期的休止符，更像是在为下一波工程爆发积蓄势能的蛰伏期。衡量这一阶段商业价值的指标已极为具象：vLLM 的 KV Offload 最终能在高负载场景中压降多少百分比的显存成本？Mistral 的官方工具链能否建立起类似于基座模型那样的标准与粘性？以及，面壁智能的 1.58-bit 极端量化架构，在突破端侧规模后，是否会引发能力坍塌？当聚光灯从新模型转移至周边工具，这些工程验证的成败，将直接决定下一代基座落地时的真实产业转化率。"
    ],
    "body_en": [
      "In the past May, leading manufacturers in the field of open source large models collectively entered a \"quiet period.\" Since DeepSeek’s April 24th iteration, Meta’s Llama and other first-tier players have not released substantial base versions. Names such as Qwen3.6 and Gemma-4 circulated in the community have been verified to be mostly fake information that lacks official endorsement. This is the first time in the past year that the open source base model has handed over a \"white paper\" in the middle of a natural month. However, this silence is not ecological stagnation, but a strategic shift in the focus of technical narratives - from \"parameter scale and ranking list\" to \"project delivery and tool chain infrastructure\".",
      "The core representative of this shift at the infrastructure layer is vLLM. On May 15, this open source reasoning framework, which has been established as an industry standard, released version v0.21.0. This upgrade is extremely disruptive: the bottom layer of the architecture is fully migrated to C++20, completely decoupling the strong dependence on the old interface of transformers v4, and officially implementing the \"KV Offload\" mechanism. Although this kind of strenuous bottom-level reconstruction brings short-term pain to the compatibility of upper-level applications, the engineering dividends it releases are extremely considerable.",
      "KV Offload directly hits the cost gate in industrial-level deployment: in long text or high-concurrency scenarios, the short-term memory of the model (KV cache) often fills up the video memory (VRAM) faster than the model weight itself. Previous solutions relied on crude hardware stacking; vLLM uses a scheduling mechanism to dynamically offload idle caches to low-cost host memory (RAM). This technological breakthrough essentially transforms high \"hardware capital expenditure (CapEx)\" into \"software engineering scheduling\" that can be optimized through code, thus greatly improving the concurrent throughput and cost-effectiveness of a single card.",
      "The open source of application tool chains is also advancing simultaneously. On May 19, Mistral released v2.10.0 of its official coding Agent project, mistral-vibe. As the core engineering suite benchmarking Claude Code, the new version introduces a streaming \"thinking and editing\" mechanism and solidifies connector components. A cutting-edge base manufacturer not only open sourced its underlying model, but also opened up its own polished Agent workflow and performance tools, marking that the boundary of open source has extended from a single \"weighted delivery\" to a more complex \"best practice and execution environment delivery.\"",
      "On the same day, Ai2 further broadened the definition of open source. On the occasion of releasing the OlmoEarth v1.1 model focusing on earth observation, Ai2 simultaneously opened the underlying public computing resource pool (OMAI). Prior to this, Ai2 has integrated the entire open source link from model weights, training data to training logs; this time, the scarcity core element of computing power is included in the open category, marking that non-profit organizations are trying to reshape the R&D ecosystem under the high degree of computing power monopoly.",
      "In the micro-battlefield deployed on the end side, Wall-Facing Intelligence proposes two extreme compression solutions. The first is the 1 billion parameter MiniCPM5-1B, which is less than 0.5GB in size after INT4 quantification and can run directly in a pure CPU environment; the second is BitCPM-CANN, which uses an extremely radical 1.58-bit network architecture (parameter weights are compressed to {-1, 0, 1} three values), and has completed the adaptation based on Huawei's Ascend chip. The strategic intention of these two end-side extreme value explorations is clear: to give up the emergence ability and running score obsession of full-size models in exchange for absolute sinking capabilities in fragmented and restricted hardware environments.",
      "Looking at the open source ecosystem in May, a logical hidden line that is highly coupled with \"Agent evolves into infrastructure\" (see No. 08) has emerged: after the base model capabilities have reached a phased plateau, the open source community is fully entering the \"reinstallation project landing\" stage by strengthening the reasoning framework, opening the Agent tool chain, exploring computing power sharing and extreme end-side quantification.",
      "The recent \"update pause\" state is by no means the end of the technology iteration cycle, but more like a dormant period to accumulate potential energy for the next wave of engineering explosions. The indicators to measure the commercial value at this stage have become extremely concrete: by what percentage can vLLM's KV Offload ultimately reduce the cost of graphics memory in high-load scenarios? Can Mistral's official toolchain establish standards and stickiness similar to the base model? And, will the 1.58-bit extreme quantitative architecture of wall-facing intelligence cause capacity collapse after breaking through the end-side scale? When the spotlight shifts from new models to peripheral tools, the success or failure of these engineering verifications will directly determine the real industrial conversion rate when the next generation base is launched."
    ],
    "sources": [
      {
        "label": "github.com/vllm-project/vllm · v0.21.0",
        "url": "https://github.com/vllm-project/vllm/releases/tag/v0.21.0"
      },
      {
        "label": "github.com/mistralai/mistral-vibe · v2.10.0",
        "url": "https://github.com/mistralai/mistral-vibe/releases/tag/v2.10.0"
      },
      {
        "label": "huggingface.co",
        "url": "https://huggingface.co/openbmb"
      }
    ]
  },
  {
    "id": "no-22",
    "no": "22",
    "cat": "open-source",
    "title_zh": "跨越及格线的漏洞挖掘",
    "title_en": "Vulnerability mining across the passing line",
    "author_zh": "Mozilla",
    "author_en": "Mozilla",
    "date": "May 07, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#163A28",
      "fg": "#ECE6D2",
      "accent": "#E0A84A",
      "drop": "#46AE68"
    },
    "pull_zh": "一家曾将 AI 自动生成的漏洞报告直接归档为「垃圾邮件」的开源机构，在其官方工程博客中，以去水的净值确认了模型在实战攻防中的有效拦截能力。",
    "pull_en": "An open source organization that once directly filed vulnerability reports automatically generated by AI as \"spam\", in its official engineering blog, confirmed the model's effective interception capabilities in actual attack and defense with a net worth of water.",
    "body_zh": [
      "Mozilla 于 7 日发布的工程博客《Behind the scenes: hardening Firefox》，披露了一个引发行业热议的数据：「271」。博文明确指出，在 Firefox 150 版本的迭代中，借助 Anthropic 的内测模型 Claude Mythos Preview，团队共计发现并成功修复了 271 个安全漏洞。此项披露由 Mozilla 以第一方技术总结的形式发出，而非基于模型供应商的商业公关通稿，这赋予了该数据在开源社区极高的公信力。",
      "该数据的硬核逻辑在于其「零水分」属性：271 并非模型初次输出的「疑似（Suspicious）」报警总量，而是经过人类安全专家严格复核、确认具备实操危害，并最终被封堵于发行补丁中的净确认数（Net Validated Count）。尽管外界曾流传 423 等未经证实的毛数据，但 Mozilla 将落点死死锚定在 271 这个经受住工程验证的实绩上。可以推断，模型初始生成的线索清单远超此数，但最终沉淀的净值，已足够证明该技术从理论步入了实战阶段。",
      "在两年前的代码审计生态中，此类结论近乎天方夜谭。彼时，Firefox 安全团队对任何标注为「AI 自动扫描（AI-scanned）」的漏洞报告往往采取直接拒收策略，视其为制造排查负荷的「低质量垃圾信息」。这正是此次事件引发波澜的核心反差：承认 AI 漏洞挖掘具有工业级价值的，并非热衷炒作的技术倒卖商，而是曾对其抱有极深偏见与抵触的硬核安全守门人。态度的倒转，构成了对技术水位最强有力的背书。",
      "Mozilla 的妥协并非孤例。5 月 22 日，Anthropic 公布了 Project Glasswing 的首月运行简报。这个由 Cloudflare、Mozilla、微软等 50 余家机构组成的联合安全项目，在首月便拦截了逾 1 万个高危/致命漏洞，仅 Cloudflare 一家便贡献了 2000 个（含 400 个严重级）。最为震撼的工程指标在于其高达 90.6% 的「真阳性命中率（Validated True Positive Rate）」。长期以来，AI 代码审计的致命伤在于极高的误报率导致的「狼来了」效应，高昂的排查成本令开发者望而却步。90.6% 的命中率，标志着模型输出的信噪比已正式跨越了「具备生产力价值」的红线。",
      "竞争对手的动作同样紧凑。当月，OpenAI 释出了 Daybreak 计划，将其编码模型 Codex 直接内嵌至企业级的 DevSecOps 工作流中，实现从威胁建模、漏洞定位到补丁生成与合规审计的链条闭环。巨头们的演进逻辑清晰：漏洞挖掘的竞争已不再是拼凑几份 POC（概念验证）演示，而是深入到真实防线的脏活累活中，以真枪实弹的攻防对抗去校验系统的底色。",
      "然而，剥开数据的光环，这套防护网能够成立的基石依然在于「人机协流」。Firefox 的 271 个修复案例与 Glasswing 90.6% 的命中率，其前半段固然依赖模型的算力压制，但后半段的定性、重现与补丁撰写，仍由人类安全研究员兜底。这再次印证了脱离严密工程审计流程的「AI 报警」，本质上与两年前那些被抛弃的垃圾邮件无异。模型提供线索的高召回，与人类复核的高精度，两者咬合才促成了这些高光数据。",
      "这正呼应了《模型外侧的工具链》（见 No.21）中的判断：现阶段的技术突围，核心不在于底层模型增加了几个智力基准点，而在于外围的工程流程能否高效接管并处理模型输出的巨量衍生结果。Firefox 作为透明的开源体，其 271 的数字具备可追溯的公允性，相较于黑盒状态下商业软件的自我吹嘘，这种被传统「刺头」反向证实的价值更为坚实。",
      "客观而言，271 个漏洞于 Firefox 庞大的代码库而言仅是管中窥豹。但这确立了一个可度量、可复现的基准线。未来一年，评判 AI 自动审计效能的核心风向标将死死咬住「真阳性命中率」。若该指标能维持甚至突破，网络安全行业的防御链条将被重塑；反之，若人类修补的吞吐量无法匹配模型报错的生成量，这一方向将不可避免地陷入告警疲劳的旧日泥潭。漏洞挖掘之战的终局，拼的不是谁找得更多，而是谁收尾得更干净。"
    ],
    "body_en": [
      "The engineering blog \"Behind the scenes: hardening Firefox\", released by Mozilla on the 7th, revealed a figure that sparked widespread industry discussion: \"271\". The blog post clearly states that in the iteration of Firefox version 150, with the help of Anthropic’s internal testing model Claude Mythos Preview, the team discovered and successfully fixed 271 security vulnerabilities. This disclosure was issued by Mozilla in the form of a first-party technical summary, rather than a commercial PR release based on the model vendor, which gives the data a high degree of credibility in the open source community.",
      "The hard-core logic of this data lies in its \"zero moisture\" attribute: 271 is not the total number of \"Suspicious\" alarms initially output by the model, but the net confirmed count (Net Validated Count) that has been strictly reviewed by human security experts and confirmed to be operationally harmful, and was eventually blocked in the release patch. Although unconfirmed gross figures such as 423 have been circulated, Mozilla has firmly anchored its focus on 271, a performance that has withstood engineering verification. It can be inferred that the list of clues initially generated by the model far exceeds this number, but the net value accumulated in the end is enough to prove that this technology has entered the practical stage from theory.",
      "In the code audit ecosystem two years ago, such conclusions would have been almost impossible to achieve. At that time, the Firefox security team often adopted a direct rejection policy for any vulnerability reports marked as \"AI-scanned\", treating them as \"low-quality spam\" that created a troubleshooting load. This is precisely the contrast at the heart of the uproar caused by this incident: those who recognize the industrial-level value of AI vulnerability mining are not technology resellers keen on hype, but hard-core security gatekeepers who have been deeply prejudiced and resistant to it. The reversal of attitude constitutes the strongest endorsement of the technical level.",
      "Mozilla's compromise is not an isolated one. On May 22, Anthropic released a first-month operational briefing for Project Glasswing. This joint security project, composed of more than 50 organizations including Cloudflare, Mozilla, and Microsoft, intercepted more than 10,000 high-risk/fatal vulnerabilities in the first month, with Cloudflare alone contributing 2,000 (including 400 severity levels). The most shocking engineering indicator is its 「Validated True Positive Rate」 of up to 90.6%. For a long time, the fatal flaw of AI code auditing has been the \"crying wolf\" effect caused by extremely high false positive rates. The high cost of troubleshooting has discouraged developers. The hit rate of 90.6% marks that the signal-to-noise ratio of the model output has officially crossed the red line of \"having productivity value\".",
      "Competitors are equally compact. That month, OpenAI released the Daybreak project, embedding its coding model Codex directly into the enterprise-level DevSecOps workflow to achieve a closed-loop chain from threat modeling, vulnerability location to patch generation and compliance auditing. The evolution logic of the giants is clear: the competition for vulnerability mining is no longer about piecing together a few POC (proof of concept) demonstrations, but about going deep into the dirty work of real defense lines and verifying the background of the system with real-life offensive and defensive confrontations.",
      "However, peeling away the halo of data, the cornerstone of this protective network still lies in \"human-machine co-flow.\" Firefox's 271 repair cases and Glasswing's 90.6% hit rate depended on the computational power of the model in the first half, but the characterization, reproduction, and patch writing of the second half were still handled by human security researchers. This once again confirms that \"AI alarms\" that are separated from strict engineering audit processes are essentially the same as those abandoned spam emails two years ago. The combination of the high recall of cues provided by the model and the high accuracy of human review contributes to these highlight data.",
      "This echoes the judgment in \"Tool chain on the outside of the model\" (see No. 21): The core of the current stage of technological breakthrough lies not in the addition of several intellectual benchmark points to the underlying model, but in whether the peripheral engineering process can efficiently take over and process the huge amount of derivative results output by the model. As a transparent open source, Firefox's number of 271 is traceable and fair. Compared with the self-promotion of commercial software in a black box state, this value that has been reversely confirmed by traditional \"thorns\" is more solid.",
      "Objectively speaking, 271 vulnerabilities are only a glimpse into Firefox's huge code base. But this establishes a measurable and repeatable baseline. In the next year, the core indicator for judging the performance of AI automatic auditing will be the 「true positive hit rate」. If this indicator can be maintained or even broken through, the defense chain of the network security industry will be reshaped; conversely, if the throughput of human patching cannot match the generation of model errors, this direction will inevitably fall into the quagmire of alarm fatigue. The final outcome of the vulnerability-mining battle is not about who finds more vulnerabilities, but who ends up more cleanly."
    ],
    "sources": [
      {
        "label": "hacks.mozilla.org",
        "url": "https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/"
      },
      {
        "label": "anthropic.com",
        "url": "https://www.anthropic.com/research/glasswing-initial-update"
      }
    ]
  },
  {
    "id": "no-23",
    "no": "23",
    "cat": "open-source",
    "title_zh": "飞书 CLI 星标破万",
    "title_en": "Feishu CLI stars exceeded 10,000",
    "author_zh": "飞书 · larksuite",
    "author_en": "Feishu · larksuite",
    "date": "May 2026",
    "minutes": 5,
    "spine": {
      "bg": "#CCD8DE",
      "fg": "#20303A",
      "accent": "#3E7088",
      "drop": "#2C7196"
    },
    "pull_zh": "办公协同平台的交互设计，首次跨越了「人类视觉效能」的单一维度，转而向「机器执行稳健性」深度倾斜。",
    "pull_en": "For the first time, the interaction design of the office collaboration platform transcends the single dimension of \"human visual performance\" and leans deeply towards \"machine execution robustness\".",
    "body_zh": [
      "3 月 28 日，飞书在 GitHub 正式开源其官方命令行工具 `larksuite/cli`；至 5 月中旬，该仓库在 47 天内迅速积攒了 1 万颗星标（Stars）。该项目的工程逻辑极为直接：将飞书庞大的办公能力矩阵——涵括消息收发、文档流转、日程管理、审批流转与多维表格操作——全量封装为无界面的纯文本命令行指令。该仓库由飞书官方团队直接主导维护，并在其 README 宣言中明确标定其受众为「为人与 AI Agent 而建（Built for Human and AI Agents）」。对于一个高度成熟的商业化 SaaS 平台而言，这一动作构成了明确的战略宣告：AI Agent 已从辅助性质的插件生态，升格为平台必须进行底层适配的「核心交互实体」。",
      "`larksuite/cli` 的架构设计远超简单的快捷指令封装。它将平台能力进行了三层剥离：顶层是兼容人类与机器的高频语义命令（Shortcuts）；中层是对齐平台功能的标准指令集（Standard Commands）；底层则是透传原始调用的 API 封装（Raw APIs）。此前，开发者若需驱动 Agent 介入办公协同，必须强行解析复杂的 OpenAPI 规范，自行处理繁琐的鉴权与请求拼接。新架构则将这些非业务逻辑彻底内聚。其源码中高频出现的「结构化输出控制」、「参数规约」与「智能缺省值」设计，核心诉求均指向同一标的：在协议层将 Agent 调用 API 时产生幻觉与越界报错的概率压降至最低。",
      "这正是该项目的产业价值所在——它标志着接口设计哲学的根本性让渡。图形用户界面（GUI）的所见即所得是对人类认知的妥协；而对于被海量代码库喂养的大语言模型而言，枯燥的终端命令与标准化的文本输出，才是其真正精通的「母语」。相较于目前业内普遍尝试的计算机视觉驱动（CV-based RPA）或繁琐的 DOM 节点解析（DOM-parsing），飞书选择了最高效的工程捷径：摒弃低信噪比的视觉交互模拟，直接以原生文本协议与 Agent 握手。",
      "在泛办公 SaaS 赛道，由第一方主导的面向自动化系统的全量 API 适配尚属罕见。虽然 Slack、Notion 及国内竞品生态中不乏第三方维护的开源封装库，但将机器操作权限提升至与 GUI 客户同等战略优先级，并进行持续的官方侧维护，飞书目前是唯一的样本。借助 MCP 等中介协议固然可以实现跨平台桥接，但这与平台主动让渡系统控制权有着本质的区别。此举意味着，既然判定 Agent 将是未来企业效率增长的绝对主力，平台方必须提前按照机器的偏好重构其交互入口。",
      "若将视野拉伸至全行业工具链的演进，此举与当下的宏观趋势构成了精准的对位。2024 年由 Anthropic 提出的 MCP（Model Context Protocol）奠定了 Agent 调用外部工具的底层通信规范；而至 2026 年，这一规范在垂直领域迎来了爆发性落地。在研发主线，Claude Code、Codex CLI 以及 Mistral 的 mistral-vibe（见 No.21）重塑了编程工作流；在协同办公副线，`larksuite/cli` 则接管了政务打杂。其底层共性在于：「纯文本命令行（CLI）」正在被行业共同推举为 Agent Native OS 的标配交互层。",
      "从商业防御的维度审视，这也构成了飞书构筑下一代生态壁垒的阳谋。SaaS 平台的终极护城河在于「可集成度（Integrability）」。在 Agent 自动化浪潮席卷前夜，谁提供了对机器最友好的接入协议，谁就能捕获最具价值的企业级自动化工作流。47 天万星的社区响应及高频的开源贡献（PRs/Issues），已初步验证了这一押注的精准度。随之而来的副产品挑战则是：当海量底层能力以命令行的极简形态向外部 Agent 敞开，平台现有的权限风控、动作审计与身份鉴权体系，必将面临前所未有的安全压测。",
      "这套「机器优先」范式的辐射半径仍有待检验。核心前瞻指标包含两点：其一，国内外的核心协同竞品，是否会被迫跟进推出官方级别的 Agent 终端接口；其二，在度过开源初期的宣发红利后，`larksuite/cli` 能否在真实的商业语境中锚定具有标杆意义的企业级自动化案例。只有当大体量的 Agent 业务流真正跑通，这一开源动作才算完成了从开发者玩具到产业基础设施的惊险跃迁。"
    ],
    "body_en": [
      "On March 28, Feishu officially open sourced its official command line tool `larksuite/cli` on GitHub; by mid-May, the warehouse quickly accumulated 10,000 stars in 47 days. The engineering logic of this project is extremely straightforward: Feishu’s huge office capability matrix—including message sending and receiving, document flow, schedule management, approval flow, and multi-dimensional table operations—is fully encapsulated into interface-less plain text command line instructions. The repository is directly maintained by Feishu's official team, and its README clearly identifies its audience as \"Built for Human and AI Agents.\" For a highly mature commercial SaaS platform, this action constitutes a clear strategic declaration: AI Agent has been upgraded from an auxiliary plug-in ecosystem to a \"core interactive entity\" that must be adapted to the underlying platform.",
      "The architectural design of `larksuite/cli` goes far beyond simple shortcut command packaging. It peels off platform capabilities in three layers: the top layer is high-frequency semantic commands (Shortcuts) that are compatible with humans and machines; the middle layer is a standard instruction set (Standard Commands) that aligns platform functions; and the bottom layer is API encapsulation (Raw APIs) that transparently transmits original calls. Previously, if developers wanted to drive Agents to participate in office collaboration, they had to forcibly parse complex OpenAPI specifications and handle cumbersome authentication and request splicing by themselves. The new architecture will completely cohere these non-business logic. The \"structured output control\", \"parameter specification\" and \"intelligent default value\" designs that appear frequently in its source code all point to the same goal: minimizing the probability of hallucinations and out-of-bounds error reporting when the Agent calls the API at the protocol layer.",
      "This is where the industrial value of this project lies - it marks a fundamental departure from the philosophy of interface design. The WYSIWYG graphical user interface (GUI) is a compromise to human cognition; and for large language models fed by massive code bases, boring terminal commands and standardized text output are their truly proficient \"native languages\". Compared with the computer vision-driven (CV-based RPA) or cumbersome DOM node parsing (DOM-parsing) currently commonly attempted in the industry, Feishu chose the most efficient engineering shortcut: abandoning visual interaction simulations with low signal-to-noise ratio and directly shaking hands with the Agent using native text protocols.",
      "In the pan-office SaaS track, full API adaptation for automated systems led by the first party is still rare. Although there are many open source packaging libraries maintained by third parties in the ecology of Slack, Notion and domestic competing products, Feishu is currently the only example that elevates machine operation permissions to the same strategic priority as GUI customers and conducts continuous official side maintenance. Cross-platform bridging can be achieved with the help of intermediary protocols such as MCP, but this is essentially different from the platform actively transferring system control rights. This move means that since it is determined that Agent will be the absolute main force in future enterprise efficiency growth, the platform must reconstruct its interaction portal in advance according to the machine's preferences.",
      "If we extend our vision to the evolution of the industry-wide tool chain, this move forms a precise counterpoint to the current macro trends. MCP (Model Context Protocol) proposed by Anthropic in 2024 established the underlying communication specification for Agents to call external tools; and by 2026, this specification will usher in explosive implementation in vertical fields. In the main research and development line, Claude Code, Codex CLI and Mistral's mistral-vibe (see No. 21) have reshaped the programming workflow; in the collaborative office side line, `larksuite/cli` has taken over the government chores. Its underlying commonality is that \"plain text command line (CLI)\" is being jointly recommended by the industry as the standard interaction layer of Agent Native OS.",
      "From the perspective of commercial defense, this also constitutes Feishu’s conspiracy to build the next generation of ecological barriers. The ultimate moat of a SaaS platform is \"integrability\". On the eve of the wave of Agent automation, whoever provides the most machine-friendly access protocol will be able to capture the most valuable enterprise-level automated workflows. The 47-day Wanxing community response and high-frequency open source contributions (PRs/Issues) have initially verified the accuracy of this bet. The accompanying by-product challenge is: when a large number of underlying capabilities are opened to external agents in the form of a simple command line, the platform's existing permission risk control, action audit and identity authentication system will inevitably face unprecedented security stress testing.",
      "The radius of this \"machine first\" paradigm remains to be tested. The core forward-looking indicators include two points: first, whether core collaborative competing products at home and abroad will be forced to follow up and launch official-level Agent terminal interfaces; second, after the initial publicity and dividends of open source, whether `larksuite/cli` can anchor benchmarking enterprise-level automation cases in a real business context. Only when a large number of Agent business flows can truly run through, will this open source action complete the thrilling transition from developer toys to industrial infrastructure."
    ],
    "sources": [
      {
        "label": "github.com/larksuite/cli",
        "url": "https://github.com/larksuite/cli"
      },
      {
        "label": "aiera.com.cn",
        "url": "https://aiera.com.cn/2026/05/16/other/admin/93771/"
      }
    ]
  },
  {
    "id": "no-24",
    "no": "24",
    "cat": "open-source",
    "title_zh": "OpenHuman：端侧风云再起",
    "title_en": "OpenHuman: The resurgence of the terminal side",
    "author_zh": "OpenHuman · @senamakel",
    "author_en": "OpenHuman · @senamakel",
    "date": "May 12, 2026",
    "minutes": 5,
    "spine": {
      "bg": "#1E2026",
      "fg": "#E8E0D2",
      "accent": "#B0B8C4",
      "drop": "#6C7892"
    },
    "pull_zh": "单个开发者构筑的本地化开源项目，上线数日即引发海量关注。它切中的不仅是去中心化的极客情怀，更是对巨头垄断云端个人隐私资产的一次直接反叛。",
    "pull_en": "A localized open source project built by a single developer attracted massive attention within days of its launch. It not only touches on the geek sentiment of decentralization, but also is a direct rebellion against the giants’ monopoly on personal privacy assets in the cloud.",
    "body_zh": [
      "一款名为 OpenHuman（代码仓库 `tinyhumansai/openhuman`）的项目在 12 日横空出世，瞬间引爆了整个开源社区。上线仅 9 日，其 GitHub Star 数已突破 23.1k。该项目将其定位为「私密、轻量、极致性能的个人 AI 超级大脑」。不同于当前主流的 Web 端交互或重度依赖云服务的应用，OpenHuman 采用 Rust 语言编写，被打包为单一二进制文件。这种「单文件分发（Drop-in）」的产品形态，使用户无需繁琐的环境配置，即可在本地操作系统桌面快速唤起一个具备常驻交互能力的虚拟 Agent。",
      "该项目的核心吸引力源于其极致的本地化与隐私隔离策略。由独立开发者 @senamakel 单人主导（至 5 月 19 日已高频迭代至 v0.54.0 版本），OpenHuman 彻底颠覆了既往个人 AI 被困于云端 SaaS 体系的格局。传统的云端服务往往要求强制账户绑定，且隐私数据被悉数沉淀于大厂的集中式服务器中。而 OpenHuman 通过本地运行机制，将数据处理与存储锁定在终端设备内，且允许用户自主配置调用的大模型接口。这种将数据主权与架构选择权全量交还用户的硬核产品逻辑，构成了其「Private」承诺的底层支撑。",
      "在能力维度上，这款常驻桌面的 Agent 已远超闲聊机器人的范畴。它具备伪装人类身份接入 Google Meet 视频会议的能力；其内置的「记忆树（Memory Tree）」机制能够对本地笔记与资料进行知识图谱化解析，并与 Obsidian 等本地工具深度耦合。此外，系统预置了超过 100 个 OAuth 授权通道，支持 Gmail、Notion、GitHub、Slack、Stripe 等生态的无缝接入。这些功能的强力聚合，勾勒出一个具备 7×24 小时后台运行、全天候代理处理跨域事务的本地私人总管画像。",
      "为支撑这种高频常驻运行，项目集成了两项关键架构优化：其一，TokenJuice 技术。通过极致压缩上下文冗余，据称可削减高达 80% 的模型推理消耗，直击长期运行 Agent 最致命的算力账单痛点；其二，自动模型路由（Auto-routing）。系统能够基于任务场景（如秒级回复、深度推理或视觉解析）自动切换至最优算力模型。这两项成本控制与算力调度机制的落地，是个人 AI 跨越「单次即用即走（Ad-hoc）」向「后台持续打工（Always-on）」演进的必要工程前提。",
      "巧合的是，OpenHuman 的产品形态与硅谷巨头的同期战略构成了鲜明的镜像对比。5 月 19 日，谷歌推出旨在后台常驻的个人 Agent 服务 Gemini Spark。两者目标几近重合，但部署路径截然相反：Gemini Spark 依然固守云端，将用户身份与数据锁死于谷歌生态；而 OpenHuman 则扛起了本地化与全开源的大旗。这不仅是工程路径的分歧，更是关于未来数字生活控制权「中心化与去中心化」的路线之争。",
      "纵观过往两年的产业叙事，无论是 OpenAI 的 Operator、Anthropic 的 Agent 化尝试，抑或谷歌的 Project Astra，皆未跳出「云端租赁」的商业藩篱。OpenHuman 的突围意义在于，它将停留在巨头发布会 PPT 上的科幻图景，降维打击式地封装进普通用户的本地设备中，并完全开源了其底层的组装逻辑。这是一场由独立开发者发起的对巨头云端垄断的越位战。",
      "然而，极致的个人英雄主义亦隐藏着极高的工程脆弱性。支撑起 118 个外部接口、会议接入、本地语音及模型路由的庞大系统，目前其核心维护重压仅系于作者一人。短短一周内数十个版本的爆肝迭代，不仅印证了开发者的强悍执行力，也暴露了项目初期代码极不稳定的脆弱状态。爆发式的关注度背后，随之而来的将是海量环境适配与 Bug 修复的死亡行军。",
      "衡量 OpenHuman 能否从一场短期的极客狂欢，沉淀为具备持续生命力的开源基础设施，有三个关键观测点：首先，在度过初期流量红利后，其留存率与实际运行的工作流厚度能否企稳；其次，项目架构能否迅速从单点维护过渡至良性的多节点开源贡献生态；最后，其标榜的会议劫持、全域集成等高频交互功能，在复杂多变的实际桌面环境中能否维持生产级稳定性。只有跨越这三道工程门槛，OpenHuman 才能证明个人 AI 的终端化不仅是一种叛逆的宣言，更具备真实商业世界的落地可行性。"
    ],
    "body_en": [
      "A project called OpenHuman (code repository `tinyhumansai/openhuman`) was launched on the 12th, instantly detonating the entire open source community. Only 9 days after it went online, its GitHub Star count has exceeded 23.1k. The project positions it as a \"private, lightweight, ultimate performance personal AI super brain.\" Unlike the current mainstream web-side interactions or applications that rely heavily on cloud services, OpenHuman is written in the Rust language and packaged as a single binary file. This \"single file distribution (Drop-in)\" product form allows users to quickly invoke a virtual Agent with resident interaction capabilities on the local operating system desktop without the need for cumbersome environment configuration.",
      "The core appeal of the project stems from its extreme localization and privacy isolation strategy. Led by independent developer @senamakel (as of May 19, it has been frequently iterated to version v0.54.0), OpenHuman has completely overturned the previous pattern of personal AI being trapped in the cloud SaaS system. Traditional cloud services often require mandatory account binding, and all private data is stored in centralized servers of large manufacturers. OpenHuman, on the other hand, locks data processing and storage in the terminal device through a local operating mechanism, and allows users to independently configure the large model interfaces called. This hard-core product logic of fully returning data sovereignty and architectural choice to users forms the underlying support for its 「Private」 promise.",
      "In terms of capabilities, this desktop-resident Agent has gone far beyond the scope of a chatbot. It has the ability to disguise human identity to access Google Meet video conferences; its built-in \"Memory Tree\" mechanism can perform knowledge graph analysis on local notes and data, and is deeply coupled with local tools such as Obsidian. In addition, the system is preset with more than 100 OAuth authorization channels, supporting seamless access to Gmail, Notion, GitHub, Slack, Stripe and other ecosystems. The powerful aggregation of these functions outlines the portrait of a local personal manager with 7×24-hour background operation and around-the-clock agent processing cross-domain affairs.",
      "In order to support this high-frequency resident operation, the project integrates two key architectural optimizations: First, TokenJuice technology. Through extreme compression of context redundancy, it is said that it can reduce model inference consumption by up to 80%, directly addressing the most fatal computing power bill pain point of long-running Agents; second, automatic model routing (Auto-routing). The system can automatically switch to the optimal computing power model based on task scenarios (such as second-level reply, deep reasoning or visual analysis). The implementation of these two cost control and computing power scheduling mechanisms is the necessary engineering prerequisite for the evolution of personal AI from \"single use and go (Ad-hoc)\" to \"continuous work in the background (Always-on)\".",
      "Coincidentally, OpenHuman's product form is in sharp contrast to the strategies of Silicon Valley giants during the same period. On May 19, Google launched Gemini Spark, a personal agent service designed to reside in the background. The goals of the two almost overlap, but the deployment paths are completely opposite: Gemini Spark still sticks to the cloud, locking user identities and data in the Google ecosystem; while OpenHuman takes up the banner of localization and full open source. This is not only a difference in engineering paths, but also a battle over the \"centralization and decentralization\" of future digital life control.",
      "Looking at the industry narrative in the past two years, whether it is OpenAI’s Operator, Anthropic’s agent-based attempt, or Google’s Project Astra, they have not broken out of the commercial barrier of 「cloud leasing.」 The significance of OpenHuman's breakthrough lies in the fact that it will reduce the dimensionality of the sci-fi scene that remains on the PPT of giant conferences and package it into the local devices of ordinary users, and completely open source its underlying assembly logic. This is an offside war initiated by independent developers against the giant cloud monopoly.",
      "However, extreme personal heroism also hides extremely high engineering vulnerability. It supports a huge system with 118 external interfaces, conference access, local voice and model routing. Currently, the burden of core maintenance rests solely on the author. The explosive iteration of dozens of versions in just one week not only confirmed the strong execution ability of the developers, but also exposed the extremely unstable and fragile state of the early code of the project. Behind the explosive attention, there will be a death march of massive environment adaptation and bug fixes.",
      "There are three key observation points to measure whether OpenHuman can transform from a short-term geek carnival into an open source infrastructure with sustainable vitality: first, after the initial traffic dividend, whether its retention rate and actual running workflow thickness can be stabilized; second, whether the project architecture can quickly transition from a single point of maintenance to a benign multi-node open source contribution ecosystem; finally, whether its advertised high-frequency interactive functions such as conference hijacking and global integration can maintain production-level stability in a complex and changeable actual desktop environment. Only by crossing these three engineering thresholds can OpenHuman prove that the terminalization of personal AI is not only a rebellious declaration, but also feasible for implementation in the real business world."
    ],
    "sources": [
      {
        "label": "github.com/tinyhumansai/openhuman",
        "url": "https://github.com/tinyhumansai/openhuman"
      },
      {
        "label": "github.com/tinyhumansai/openhuman · v0.54.0",
        "url": "https://github.com/tinyhumansai/openhuman/releases/tag/v0.54.0"
      }
    ]
  }
];

window.CATEGORIES = {
  "all": {
    "zh": "全部",
    "en": "All"
  },
  "essay": {
    "zh": "思潮",
    "en": "Essays"
  },
  "product": {
    "zh": "新产品",
    "en": "Products"
  },
  "research": {
    "zh": "研究",
    "en": "Research"
  },
  "industry": {
    "zh": "行业",
    "en": "Industry"
  },
  "open-source": {
    "zh": "开源",
    "en": "Open Source"
  }
};
