"use client";

import Link from "next/link";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* 导航栏 */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                区块链技术课程教学成果
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
                首页
              </Link>
              <Link href="/achievement" className="text-gray-700 hover:text-indigo-600 font-medium">
                成果展示
              </Link>
              <Link href="/innovation" className="text-gray-700 hover:text-indigo-600 font-medium">
                创新特色
              </Link>
              <Link href="/evidence" className="text-gray-700 hover:text-indigo-600 font-medium">
                支撑材料
              </Link>
              <Link href="/team" className="text-indigo-600 font-medium">
                团队介绍
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            👥 团队介绍
          </h1>
          <p className="text-xl text-gray-600">
            北京交通大学区块链技术课程教学团队
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        {/* 学校介绍 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">北京交通大学</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🏫 学校概况</h3>
              <p className="text-gray-600 mb-4">
                北京交通大学是教育部直属，教育部、交通运输部、北京市人民政府和中国国家铁路集团有限公司共建的全国重点大学，
                "211工程""985工程优势学科创新平台"项目建设高校和具有研究生院的全国首批博士、硕士学位授予高校。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎓 学科优势</h3>
              <p className="text-gray-600 mb-4">
                学校在交通运输、信息与通信工程、计算机科学与技术等领域具有显著优势，
                为区块链技术课程的建设提供了坚实的学科基础和丰富的教学资源。
              </p>
            </div>
          </div>
        </div>

        {/* 主要完成人 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">主要完成人</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 李超 */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                  李
                </div>
                <h3 className="text-lg font-semibold text-gray-900">李超</h3>
                <p className="text-blue-600 text-sm">副教授 | 项目主持人</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>专长：</strong>网络空间安全、区块链</p>
                <p><strong>教龄：</strong>7年</p>
                <p><strong>主要贡献：</strong>全面统筹课程改革，创新提出"一体两翼三导向四驱动"教学模式</p>
                <p><strong>获奖：</strong>2023 ACM CCS杰出论文奖</p>
              </div>
            </div>

            {/* 段莉 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                  段
                </div>
                <h3 className="text-lg font-semibold text-gray-900">段莉</h3>
                <p className="text-green-600 text-sm">副教授 | 课程内容设计</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>专长：</strong>网络空间安全、区块链</p>
                <p><strong>教龄：</strong>7年</p>
                <p><strong>主要贡献：</strong>负责课程内容设计、教学资源整合及课程思政建设</p>
                <p><strong>获奖：</strong>2023年自动化学会科技进步一等奖</p>
              </div>
            </div>

            {/* 刘吉强 */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                  刘
                </div>
                <h3 className="text-lg font-semibold text-gray-900">刘吉强</h3>
                <p className="text-purple-600 text-sm">教授 | 院长</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>专长：</strong>网络空间安全</p>
                <p><strong>教龄：</strong>27年</p>
                <p><strong>主要贡献：</strong>全面协调课程改革资源，指导产学研协同育人机制建设</p>
                <p><strong>获奖：</strong>国家教学成果奖2022</p>
              </div>
            </div>

            {/* 黎琳 */}
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                  黎
                </div>
                <h3 className="text-lg font-semibold text-gray-900">黎琳</h3>
                <p className="text-orange-600 text-sm">教授 | 课程思政建设</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>专长：</strong>网络空间安全</p>
                <p><strong>教龄：</strong>19年</p>
                <p><strong>主要贡献：</strong>负责课程思政建设，组织实施跨学科项目教学</p>
                <p><strong>获奖：</strong>2018全国密码技术竞赛优秀指导教师</p>
              </div>
            </div>

            {/* 王健 */}
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                  王
                </div>
                <h3 className="text-lg font-semibold text-gray-900">王健</h3>
                <p className="text-red-600 text-sm">副教授 | 教学资源整合</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>专长：</strong>网络空间安全、区块链</p>
                <p><strong>教龄：</strong>28年</p>
                <p><strong>主要贡献：</strong>负责教学资源整合与优化，推动案例教学与项目教学</p>
                <p><strong>获奖：</strong>2022年北京市级教学成果奖二等奖</p>
              </div>
            </div>

            {/* 罗贵珣 */}
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                  罗
                </div>
                <h3 className="text-lg font-semibold text-gray-900">罗贵珣</h3>
                <p className="text-indigo-600 text-sm">讲师 | 实验项目设计</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>专长：</strong>网络空间安全、区块链</p>
                <p><strong>教龄：</strong>5年</p>
                <p><strong>主要贡献：</strong>主要负责实验项目设计与实施，促进理论知识与实践技能融合</p>
                <p><strong>获奖：</strong>无</p>
              </div>
            </div>

            {/* 朱玉清 */}
            <div className="bg-pink-50 p-6 rounded-lg">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                  朱
                </div>
                <h3 className="text-lg font-semibold text-gray-900">朱玉清</h3>
                <p className="text-pink-600 text-sm">副教授 | 教学案例开发</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>专长：</strong>网络空间安全、区块链</p>
                <p><strong>教龄：</strong>7年</p>
                <p><strong>主要贡献：</strong>主要承担教学案例的开发与实施工作</p>
                <p><strong>获奖：</strong>无</p>
              </div>
            </div>
          </div>
        </div>

        {/* 团队特色 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">团队特色</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">科研实力强</h3>
              <p className="text-gray-600 text-sm">
                团队成员在区块链技术领域具有深厚的科研基础和丰富的实践经验
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">教学经验丰富</h3>
              <p className="text-gray-600 text-sm">
                长期从事研究生教育教学工作，具有丰富的课程建设和教学改革经验
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">产学合作密切</h3>
              <p className="text-gray-600 text-sm">
                与IBM、微众银行等知名企业建立了良好的合作关系
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">国际视野开阔</h3>
              <p className="text-gray-600 text-sm">
                具有国际化的教学理念和全球化的技术视野
              </p>
            </div>
          </div>
        </div>

        {/* 团队成果 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">团队成果</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📚 教学成果</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 构建了"一体两翼三导向四驱动"的教学改革框架</li>
                <li>• 形成了"七小通"研究型教学模式</li>
                <li>• 建设了课程思政示范课程</li>
                <li>• 开发了24个案例、54个研究专题、46个开发项目、18个实验项目</li>
                <li>• 培养了615名学生，其中114名获得IBM认证</li>
                <li>• 覆盖7个学院，成为校内热门课程</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔬 科研成果</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 2023 ACM CCS杰出论文奖（全国首次）</li>
                <li>• 2024 IEEE ICDCS最佳演示奖</li>
                <li>• 2023年度中国区块链技术领域（唯一）英文优秀论文奖</li>
                <li>• 2023年自动化学会科技进步一等奖</li>
                <li>• 国家教学成果奖2022</li>
                <li>• 2022年北京市级教学成果奖二等奖</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 合作企业 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">合作企业</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">IBM</h3>
                <p className="text-blue-700 mb-4">
                  全球领先的科技公司，在区块链技术领域具有深厚的技术积累
                </p>
                <div className="space-y-2 text-sm text-blue-600">
                  <p>• 教育部-IBM产学合作协同育人项目</p>
                  <p>• 产业技能学院资源支持</p>
                  <p>• 企业级开发工具和平台</p>
                  <p>• 技术认证体系</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">微众银行</h3>
                <p className="text-green-700 mb-4">
                  国内领先的金融科技公司，在区块链技术应用方面具有丰富经验
                </p>
                <div className="space-y-2 text-sm text-green-600">
                  <p>• 基于FISCO BCOS的课程建设</p>
                  <p>• 金融科技高校技术大赛</p>
                  <p>• 实际应用案例分享</p>
                  <p>• 行业前沿技术交流</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 团队理念 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">团队理念</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">以学生为中心</h3>
              <p className="text-gray-600 text-sm">
                始终将学生的成长和发展放在首位，关注学生的全面发展和能力提升
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">理论与实践并重</h3>
              <p className="text-gray-600 text-sm">
                注重理论知识的传授，更重视实践能力的培养和实际应用能力的提升
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">开放合作共赢</h3>
              <p className="text-gray-600 text-sm">
                积极与国内外高校、企业开展合作，实现资源共享和优势互补
              </p>
            </div>
          </div>
        </div>

        {/* 未来展望 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">未来展望</h2>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              团队将继续深化区块链技术课程教学改革，不断完善"一体两翼三导向四驱动"的教学框架，
              进一步推进"七小通"研究型教学模式的实施，为培养更多优秀的区块链技术人才贡献力量。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">短期目标</h3>
                <ul className="text-indigo-700 space-y-1 text-sm">
                  <li>• 进一步完善课程体系和教学内容</li>
                  <li>• 扩大课程覆盖面和影响力</li>
                  <li>• 深化与企业的合作</li>
                  <li>• 提升课程思政建设水平</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">长期愿景</h3>
                <ul className="text-purple-700 space-y-1 text-sm">
                  <li>• 建设国内领先的区块链技术课程</li>
                  <li>• 形成可复制推广的教学模式</li>
                  <li>• 培养更多行业领军人才</li>
                  <li>• 服务国家区块链技术发展战略</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 导航按钮 */}
        <div className="flex justify-between">
          <Link 
            href="/evidence"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            ← 返回支撑材料
          </Link>
          <Link 
            href="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            返回首页 →
          </Link>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 北京交通大学 - 区块链技术课程教学成果展示</p>
        </div>
      </footer>
    </div>
  );
}
