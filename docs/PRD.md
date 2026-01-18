# 全球物流提单运单管理系统方案 (Project Hermes-AI)

## 1. 系统概述与标杆参考

### 1.1 设计目标
打造一套服务于大型全球物流企业的核心业务系统，重点解决海运/空运提单（B/L）与运单（Waybill）的**全生命周期管理**。系统需具备高并发处理能力、全球合规性，并深度集成AI技术以提升人效。

### 1.2 标杆参考
- **Flexport**: 参考其**可视化交互体验**和**结构化数据流**。用户端（Client Portal）应做到所见即所得，通过Timeline清晰展示单证状态。
- **Maersk / MSC (Internal Systems)**: 参考其业务逻辑的**严谨性**和**操作规范**，特别是针对截单（SI Cut-off）、海关申报（AMS/ISF/ACR）的节点控制。
- **C.H. Robinson**: 参考其**运价与单证的联动**能力。

---

## 2. AI 功能应用规划 (AI-Native Features)

在传统物流系统基础上，植入 "AI Co-pilot" 概念：

### 2.1 智能单证录入 (Intelligent Document Processing - IDP)
- **场景**: 客户通常以邮件、Excel或PDF格式发送托书（Booking）和补料（SI）。
- **AI应用**: 使用多模态大模型（OCR + NLP）自动提取 Shipper, Consignee, Notify Party, Marks & Nos, Description of Goods 等关键信息，自动填入系统生成 Draft B/L。
- **价值**: 减少90%的人工录入时间，降低手误率。

### 2.2 智能合规与风险风控 (AI Compliance Agent)
- **场景**: 货物描述模糊、Hscode归类错误、涉及受制裁实体。
- **AI应用**:
    - **语义分析**: 自动检测品名是否包含危险品（DG）关键词但未申报。
    - **实体识别**: 实时比对全球黑名单/制裁名单（Sanction Search）。
    - **Hscode 推荐**: 基于品名自动推荐正确的HS编码。

### 2.3 自然语言交互式批改 (Conversational Amendment)
- **场景**: 客户邮件要求“把重量改成500KGS，通知人电话更新为...”。
- **AI应用**: 
    - 侧边栏助手识别对话意图，自动在表单中高亮建议修改的字段，操作员一键确认即可（Human-in-the-loop）。
    - 自动生成相应的改单费（Amendment Fee）账单建议。

### 2.4 智能路由与各方协同 (Smart Routing & Communication)
- **场景**: 提单状态更新、异常通知。
- **AI应用**: 自动生成多语言的邮件/通知草稿，根据收件人时区和习惯自动发送；预测提单寄送到达时间。

---

## 3. 核心功能 PRD (精简版)

### 3.1 用户角色
| 角色 | 权限描述 |
| :--- | :--- |
| **Shipper/Forwarder (客户)** | 提交SI，在线校对Draft，申请改单，下载Original B/L (Copy) |
| **Document Operator (操作)** | 审核SI，处理异常，确认出单，操作电放/做柜 |
| **Key Account Manager (客服)** | 协助沟通，处理复杂争议 |
| **Financial (财务)** | 审核账单，确认到账后释放单证权限 |
| **System Admin** | 配置基础数据（港口、航线、费率、权限） |

### 3.2 核心模块规划

#### A. 订单与订舱管理 (Booking Mgmt)
- 对接航司/船司EDI，获取SO号。
- 客户自助订舱或API对接。

#### B. 提单/运单中心 (Documentation Center)
1.  **SI Submission (补料提交)**:
    - 支持文件拖拽上传（触发AI解析）。
    - 结构化表单补录。
2.  **Draft Review (核对流程)**:
    - **Visual Compare**: 左右分屏对比（SI源文件 vs 系统生成单），差异点高亮。
    - 在线批注：客户直接在H5页面上圈点修改意见，而非往复发邮件。
3.  **Issuance (签发)**:
    - 规则引擎检查：运费是否预付（Prepaid）、目的港代理是否确认。
    - 支持多种出单方式：Original (正本), Telex Release (电放), Sea Waybill (海运单).
    - **One-Click Split/Merge**: AI辅助的智能拆单/合单功能（自动计算分摊重量体积）。
4.  **Amendment (改单)**:
    - 版本控制（v1, v2, ...），保留所有修改痕迹。
    - 改单费自动触发逻辑。

#### C. 结算与费用 (Billing & Settlement)
- 提单数据直接关联应收/应付费用。
- 信用额度控制：超额自动锁单。

#### D. 报表与BI (Analytics)
- 货量统计、航线利润分析、Teu分析。

---

## 4. 后端管理系统开发规划

### 4.1 技术架构 (Microservices)
采用云原生微服务架构，确保高可用与弹性伸缩。

- **前端**: React / Next.js (强调交互体验，使用Tailwind CSS保证设计感)。
- **后端**: Java Spring Boot (核心业务) + Python (AI服务/数据处理).
- **数据库**:
    - PostgreSQL: 核心关系型数据（订单、提单）。
    - MongoDB: 存储非结构化单证历史、JSON快照。
    - Redis: 缓存与会话管理。
- **中间件**:
    - Kafka/RabbitMQ: 异步解耦（如：AI解析完成后通知前端、EDI报文收发）。
    - Elasticsearch: 全文检索（搜柜号、提单号、品名）。

### 4.2 开发阶段规划 (Development Roadmap)

#### Phase 1: 核心基础构建 (M1-M3)
- **目标**: 实现最基本的“录入-生成-打印”闭环。
- **内容**:
    - 基础数据建设（港口、国家、汇率）。
    - 用户中心与权限体系（RBAC）。
    - 提单编辑器（WYSIWYG）开发。
    - PDF生成引擎（JasperReports或PDFKit）。

#### Phase 2: 业务流转与协同 (M4-M6)
- **目标**: 能够在线完成和客户的交互，替代邮件。
- **内容**:
    - 客户门户（Client Portal）上线。
    - 在线Draft核对与批注功能。
    - 费用模块集成，实现“无费不出单”控制。
    - 基础EDI对接（INTTRA/CargoSmart）。

#### Phase 3: AI深度集成 (M7-M9)
- **目标**: 提效，引入智能助手。
- **内容**:
    - 部署OCR/LLM服务，训练物流单证垂直模型。
    - 实现智能解析SI功能。
    - 上线合规风险自动扫描。
    - 智能客服机器人接入。

#### Phase 4: 全球化与生态 (M10+)
- **目标**: 支持多语言、多时区、多币种。
- **内容**:
    - 移动端App/小程序适配。
    - 更多的三方API集成（海关、拖车、仓储）。
    - 数据中台建设，BI决策支持。

---

## 5. 即刻行动建议

1.  **原型设计 (Week 1-2)**: 使用Figma绘制“提单编辑器”和“AI智能解析”交互原型。
2.  **技术验证 (Week 2)**: 选取一份典型的PDF格式SI，测试OpenAI/Gemini API的解析准确率。
3.  **数据库建模 (Week 2-3)**: 设计核心表结构（Booking, BL_Header, BL_Container, BL_Charge）。

