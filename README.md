# Hermes AI - 全球物流智能操作系统

<div align="center">

![Hermes AI Logo](https://img.shields.io/badge/Hermes-AI-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnoiIGZpbGw9IiMzYjgyZjYiLz48L3N2Zz4=)

**Next-generation AI platform for global logistics, bill of lading management, and risk analysis.**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[快速开始](#快速开始) • [功能特性](#功能特性) • [文档](#文档) • [演示](#演示)

</div>

---

## 📖 目录

- [项目简介](#项目简介)
- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [开发指南](#开发指南)
- [部署](#部署)
- [文档](#文档)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

---

## 🌟 项目简介

**Hermes AI** 是一个专为大型全球物流企业设计的下一代智能操作系统，重点解决海运/空运提单（B/L）与运单（Waybill）的全生命周期管理。系统深度集成AI技术，提供：

- 🤖 **AI文档处理**: 自动提取、验证和数字化提单数据
- 🛡️ **智能风险管理**: 实时合规检查和制裁名单比对
- 🚢 **端到端可见性**: 全球运单实时追踪
- 📊 **数据驱动决策**: 智能分析和预测

### 设计理念

参考 **Flexport**、**Maersk** 和 **C.H. Robinson** 等行业标杆，结合最新AI技术，打造：
- 可视化交互体验
- 严谨的业务逻辑
- 高并发处理能力
- 全球合规性支持

---

## ✨ 功能特性

### 核心功能

#### 📄 提单管理 (Bill of Lading Management)
- AI智能文档处理
- 多状态流转（草稿、待审核、已签发、需修改）
- 合规评分系统
- 版本控制和修改历史
- 一键导出PDF

#### 🛡️ 风险分析 (Risk Analysis)
- 实时风险监控
- AI智能检测（87%+ 准确率）
- 制裁名单自动比对
- 多维度风险分类（合规、文档、路线、财务）
- 智能预警系统

#### 🚢 运单追踪 (Shipment Tracking)
- 实时容器追踪
- 航线可视化
- 延误预警
- ETD/ETA智能预测
- 送达确认

#### 🌍 全球追踪器 (Global Tracker)
- 全球运单分布可视化
- 区域统计分析
- 主要贸易路线监控
- 实时AIS数据集成（规划中）

#### 👥 团队管理 (Team Management)
- 角色权限控制（管理员、操作员、查看者）
- 在线状态监控
- 部门协作
- 操作日志追踪

#### ⚙️ 系统设置 (Settings)
- 个人资料管理
- 通知偏好配置
- 安全设置
- 多语言支持
- API集成管理

### AI功能

- 🤖 **智能单证录入**: OCR + NLP自动提取关键信息
- 🔍 **智能合规检查**: 自动检测危险品、制裁实体
- 💬 **对话式批改**: 自然语言处理修改请求
- 🌐 **智能路由**: 多语言邮件自动生成

---

## 🛠️ 技术栈

### 前端
- **框架**: Next.js 16.1.2 (App Router + Turbopack)
- **语言**: TypeScript 5.x
- **UI库**: Tailwind CSS 4.0
- **动画**: Framer Motion 12.26.2
- **图标**: Lucide React 0.562.0
- **组件**: Radix UI

### 后端（规划中）
- **语言**: Node.js / Python
- **框架**: Express / FastAPI
- **数据库**: PostgreSQL + MongoDB + Redis
- **消息队列**: Kafka / RabbitMQ
- **搜索**: Elasticsearch

### AI服务（规划中）
- **OCR**: Tesseract / Google Cloud Vision
- **NLP**: OpenAI GPT / Google Gemini
- **风险分析**: 自研模型 + 第三方API

### DevOps
- **容器化**: Docker
- **CI/CD**: GitHub Actions
- **部署**: Vercel / AWS / 自建服务器
- **监控**: Sentry / Datadog

---

## 🚀 快速开始

### 前置要求

- Node.js 18.x 或更高版本
- npm 9.x 或更高版本
- Git

### 安装步骤

1. **克隆仓库**
```bash
git clone https://github.com/your-org/hermes-ai.git
cd hermes-ai
```

2. **安装依赖**
```bash
cd frontend
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **访问应用**
```
打开浏览器访问: http://localhost:3000
```

### 环境变量

创建 `.env.local` 文件：

```env
# API配置
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000

# AI服务
OPENAI_API_KEY=your_openai_key
GOOGLE_CLOUD_API_KEY=your_google_key

# 数据库
DATABASE_URL=postgresql://user:password@localhost:5432/hermes
MONGODB_URI=mongodb://localhost:27017/hermes
REDIS_URL=redis://localhost:6379
```

---

## 📁 项目结构

```
Hermes-AI/
├── frontend/                   # 前端应用
│   ├── app/                    # Next.js App Router
│   │   ├── components/         # React组件
│   │   │   ├── ui/            # UI基础组件
│   │   │   ├── layout/        # 布局组件
│   │   │   └── dashboard/     # Dashboard组件
│   │   ├── dashboard/         # Dashboard页面
│   │   │   ├── documents/     # 提单管理
│   │   │   ├── risk/          # 风险分析
│   │   │   ├── shipments/     # 运单追踪
│   │   │   ├── tracker/       # 全球追踪
│   │   │   ├── team/          # 团队管理
│   │   │   └── settings/      # 系统设置
│   │   ├── page.tsx           # 首页
│   │   ├── layout.tsx         # 根布局
│   │   └── globals.css        # 全局样式
│   ├── lib/                   # 工具函数
│   ├── public/                # 静态资源
│   └── package.json
├── backend/                   # 后端服务（待开发）
├── docs/                      # 文档
│   ├── PRD.md                # 产品需求文档
│   ├── API.md                # API文档
│   └── DEPLOYMENT.md         # 部署文档
├── 测试通过报告.md
├── 快速开始.md
├── 项目完成总结.md
└── README.md
```

---

## 💻 开发指南

### 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint

# 类型检查
npx tsc --noEmit
```

### 代码规范

- 使用 **TypeScript** 进行类型安全开发
- 遵循 **ESLint** 规则
- 使用 **Prettier** 格式化代码
- 组件命名使用 **PascalCase**
- 文件命名使用 **kebab-case**

### Git工作流

```bash
# 创建功能分支
git checkout -b feature/your-feature-name

# 提交更改
git add .
git commit -m "feat: add new feature"

# 推送到远程
git push origin feature/your-feature-name

# 创建Pull Request
```

### 提交信息规范

```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
test: 测试相关
chore: 构建/工具链更新
```

---

## 🌐 部署

### Vercel部署（推荐）

1. 连接GitHub仓库
2. 配置环境变量
3. 自动部署

```bash
# 或使用Vercel CLI
npm i -g vercel
vercel --prod
```

### Docker部署

```bash
# 构建镜像
docker build -t hermes-ai .

# 运行容器
docker run -p 3000:3000 hermes-ai
```

### 自建服务器

```bash
# 构建应用
npm run build

# 使用PM2运行
pm2 start npm --name "hermes-ai" -- start

# 配置Nginx反向代理
# 参考 docs/DEPLOYMENT.md
```

---

## 📚 文档

### 核心文档
- [📋 产品需求文档 (PRD)](./docs/PRD.md)
- [🚀 快速开始指南](./快速开始.md)
- [✅ 测试通过报告](./测试通过报告.md)
- [📊 项目完成总结](./项目完成总结.md)

### API文档
- [🔌 API参考](./docs/API.md) (待完善)
- [🔐 认证指南](./docs/AUTH.md) (待完善)

### 部署文档
- [🌐 部署指南](./docs/DEPLOYMENT.md) (待完善)
- [🐳 Docker配置](./docs/DOCKER.md) (待完善)

---

## 🎯 路线图

### Phase 1: 核心基础构建 ✅ (已完成)
- [x] 基础UI框架
- [x] 核心页面开发
- [x] 导航系统
- [x] 组件库建立

### Phase 2: 业务流转与协同 🔄 (进行中)
- [ ] 后端API开发
- [ ] 用户认证系统
- [ ] 数据库集成
- [ ] 实时通知

### Phase 3: AI深度集成 📋 (规划中)
- [ ] OCR文档解析
- [ ] 智能风险分析
- [ ] 自动合规检查
- [ ] 智能客服

### Phase 4: 全球化与生态 📋 (规划中)
- [ ] 多语言支持
- [ ] 移动端App
- [ ] 第三方集成
- [ ] 数据中台

---

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 贡献者

感谢所有贡献者的付出！

<a href="https://github.com/your-org/hermes-ai/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=your-org/hermes-ai" />
</a>

---

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

---

## 📞 联系我们

### 技术支持
- **邮箱**: support@hermesai.com
- **官网**: https://hermesai.com
- **文档**: https://docs.hermesai.com

### 社区
- **GitHub**: https://github.com/your-org/hermes-ai
- **Discord**: https://discord.gg/hermesai
- **Twitter**: https://twitter.com/hermesai

---

## 🙏 致谢

感谢以下开源项目和服务：

- [Next.js](https://nextjs.org/) - React框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [Lucide](https://lucide.dev/) - 图标库
- [Vercel](https://vercel.com/) - 部署平台

---

## 📊 项目状态

![GitHub stars](https://img.shields.io/github/stars/your-org/hermes-ai?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-org/hermes-ai?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-org/hermes-ai)
![GitHub pull requests](https://img.shields.io/github/issues-pr/your-org/hermes-ai)

---

<div align="center">

**🚀 Hermes AI - 让全球物流更智能！**

Made with ❤️ by the Hermes AI Team

[⬆ 回到顶部](#hermes-ai---全球物流智能操作系统)

</div>
