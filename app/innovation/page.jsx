"use client";

import Link from "next/link";

export default function InnovationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
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
              <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium">
                首页
              </Link>
              <Link href="/achievement" className="text-gray-700 hover:text-purple-600 font-medium">
                成果展示
              </Link>
              <Link href="/innovation" className="text-purple-600 font-medium">
                创新特色
              </Link>
              <Link href="/evidence" className="text-gray-700 hover:text-purple-600 font-medium">
                支撑材料
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-purple-600 font-medium">
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
            💡 创新特色
          </h1>
          <p className="text-xl text-gray-600">
            区块链技术课程教学改革的四大创新点
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>

        {/* 四大创新点 */}
        <div className="space-y-8 mb-12">
          {/* 创新点1 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔬</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  创新点一：基于OBE理念的一体化教学体系
                </h2>
                <p className="text-gray-600 mb-4">
                  本课程以OBE理念为核心，针对国家区块链技术高端人才的培养需求，根据反向设计原理，
                  构建了"高端需求-能力图谱-课程目标-教学内容-教学方法-评价方式-持续改进"的一体化教学体系。
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">核心特色：</h3>
                  <ul className="text-blue-700 space-y-1">
                    <li>• 确保课程目标满足高端需求</li>
                    <li>• 形成适应区块链技术发展需求的教学体系</li>
                    <li>• 实现教材导向向产出导向的转变</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 创新点2 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  创新点二：企业协同育人机制
                </h2>
                <p className="text-gray-600 mb-4">
                  课程团队积极与企业合作，特别是在"教育部-IBM产学合作协同育人项目"的支持下，
                  通过引入IBM的"产业技能学院"资源，将企业的最新技术、开发工具、开发平台、成果案例等资源转化为教学资源。
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">合作成果：</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• 114名学生通过IBM技术认证</li>
                    <li>• 被IBM推荐为产学合作协同育人项目优秀案例</li>
                    <li>• 学生能够学习到最新的企业应用案例</li>
                    <li>• 亲身体验企业级项目开发流程</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 创新点3 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  创新点三："七小通"研究型教学模式
                </h2>
                <p className="text-gray-600 mb-4">
                  课程团队将北京交通大学"四通"研究生培养模式细化并形成了"七小通"研究型教学模式。
                  这一模式通过多维度的教学改革，将理论教学与实际应用相结合，提升课程教学的"两性一度"。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">七小通模式：</h3>
                    <ul className="text-purple-700 space-y-1 text-sm">
                      <li>• 产教贯通</li>
                      <li>• 学科贯通</li>
                      <li>• 本硕贯通</li>
                      <li>• 双语贯通</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <ul className="text-purple-700 space-y-1 text-sm mt-6">
                      <li>• 案例贯通</li>
                      <li>• 项目贯通</li>
                      <li>• 思政贯通</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 创新点4 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  创新点四：课程思政示范课建设
                </h2>
                <p className="text-gray-600 mb-4">
                  在课程建设过程中，团队高度重视思想政治教育与专业知识的结合，将"课程思政"贯穿于各个环节。
                  通过分析区块链技术在社会经济中的影响，培养学生的社会责任感和法律意识。
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">思政建设成果：</h3>
                  <ul className="text-red-700 space-y-1">
                    <li>• 入选北京交通大学课程思政示范课程建设项目</li>
                    <li>• 培养学生的社会责任感和伦理道德观</li>
                    <li>• 让学生理解区块链技术的法律法规框架</li>
                    <li>• 为其他技术课程的思政建设提供示范作用</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 创新效果对比 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">创新效果对比</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">传统教学模式</h3>
              <div className="space-y-3">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-700">❌ 教材导向，重知识传授</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-700">❌ 以教为主，学生被动学习</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-700">❌ 理论与实践脱节</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-700">❌ 缺乏价值引领</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">创新教学模式</h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700">✅ 产出导向，价值塑造、能力培养、知识传授并重</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700">✅ 以学为主，研究型教学模式</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700">✅ 产教融合，理论与实践结合</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700">✅ 课程思政，价值引领</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 创新价值 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">创新价值</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">理论价值</h3>
              <p className="text-gray-600 text-sm">
                构建了完整的区块链技术课程教学理论体系，为相关课程建设提供理论指导
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">实践价值</h3>
              <p className="text-gray-600 text-sm">
                形成了可复制、可推广的教学模式，为其他高校提供实践参考
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">社会价值</h3>
              <p className="text-gray-600 text-sm">
                培养了大批区块链技术人才，服务国家战略需求，推动产业发展
              </p>
            </div>
          </div>
        </div>

        {/* 导航按钮 */}
        <div className="flex justify-between">
          <Link 
            href="/achievement"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            ← 返回成果展示
          </Link>
          <Link 
            href="/evidence"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            查看支撑材料 →
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
