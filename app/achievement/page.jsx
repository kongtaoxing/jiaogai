"use client";

import Link from "next/link";

export default function AchievementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
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
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
                首页
              </Link>
              <Link href="/achievement" className="text-green-600 font-medium">
                成果展示
              </Link>
              <Link href="/innovation" className="text-gray-700 hover:text-green-600 font-medium">
                创新特色
              </Link>
              <Link href="/evidence" className="text-gray-700 hover:text-green-600 font-medium">
                支撑材料
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-green-600 font-medium">
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
            📊 成果展示
          </h1>
          <p className="text-xl text-gray-600">
            区块链技术课程"一体两翼三导向四驱动"改革与实践
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>

        {/* 成果框架图 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">"一体两翼三导向四驱动"改革框架</h2>
          
          {/* 框架图展示 */}
          <div className="text-center mb-8">
            <img 
              src="/images/image9.png" 
              alt="一体两翼三导向四驱动改革框架图" 
              className="max-w-full h-auto mx-auto rounded-lg shadow-md"
            />
            <p className="text-gray-600 text-sm mt-2">图1 一体两翼三导向四驱动改革框架</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🎯 一体：区块链技术</h3>
                <p className="text-blue-700">改革对象，课程的核心内容</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">🕊️ 两翼：课程思政和科技前沿</h3>
                <p className="text-green-700">改革重点，价值引领与技术前沿并重</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">🎯 三导向：价值塑造、能力培养、知识传授</h3>
                <p className="text-purple-700">改革目标，实现全面发展</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">🚀 四驱动：产教相通、学科融通、本硕贯通、国际互通</h3>
                <p className="text-orange-700">改革框架，多维度协同育人</p>
              </div>
            </div>
          </div>
        </div>

        {/* 主要成果内容 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">主要成果内容</h2>
          
          <div className="space-y-8">
            {/* 教学体系改革 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. 基于OBE理念的教学体系改革</h3>
              
              {/* 技术需求图 */}
              <div className="mb-6">
                <img 
                  src="/images/image10.png" 
                  alt="区块链技术主要技术需求" 
                  className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                />
                <p className="text-gray-600 text-sm mt-2 text-center">图2 区块链技术主要技术需求</p>
              </div>
              
              {/* 知识能力图谱 */}
              <div className="mb-6">
                <img 
                  src="/images/image11.png" 
                  alt="区块链技术知识能力图谱" 
                  className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                />
                <p className="text-gray-600 text-sm mt-2 text-center">图3 区块链技术知识能力图谱</p>
              </div>
              
              {/* 课程目标与教学内容 */}
              <div className="mb-6">
                <img 
                  src="/images/image12.png" 
                  alt="产出导向的课程目标与教学内容" 
                  className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                />
                <p className="text-gray-600 text-sm mt-2 text-center">图4 产出导向的课程目标与教学内容</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">能力图谱构建</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    根据区块链技术高端需求，构建了包含数据层、网络层、共识层、合约层、激励层、应用层六个层次的知识能力图谱。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">反向设计原理</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    按照OBE反向设计，由高端需求决定知能图谱，再由知能图谱决定课程目标，最后由课程目标决定教学内容。
                  </p>
                </div>
              </div>
            </div>

            {/* 研究型教学模式 */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. "七小通"研究型教学模式</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">产教贯通</h4>
                  <p className="text-gray-600 text-sm">将企业最前沿技术转化为教学资源</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">学科贯通</h4>
                  <p className="text-gray-600 text-sm">拓展区块链技术跨学科应用场景</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">本硕贯通</h4>
                  <p className="text-gray-600 text-sm">实现本科与研究生课程有机衔接</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">双语贯通</h4>
                  <p className="text-gray-600 text-sm">将国际最先进技术引入教学</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">案例贯通</h4>
                  <p className="text-gray-600 text-sm">将理论与实战完美结合</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">项目贯通</h4>
                  <p className="text-gray-600 text-sm">培养学生独立解决问题与创新能力</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">思政贯通</h4>
                  <p className="text-gray-600 text-sm">培养学生的社会责任感和伦理道德观</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 应用效果 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">应用效果</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <p className="text-gray-600">覆盖学院数</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24</div>
              <p className="text-gray-600">教学案例</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">54</div>
              <p className="text-gray-600">研究专题</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">114</div>
              <p className="text-gray-600">IBM认证学生</p>
            </div>
          </div>
        </div>

        {/* 教学现场展示 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">教学现场展示</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <img 
                src="/images/image22.png" 
                alt="教师讲授设计思维知识" 
                className="max-w-full h-auto mx-auto rounded-lg shadow-md"
              />
              <p className="text-gray-600 text-sm mt-2">图8 教师讲授设计思维知识</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/image23.png" 
                alt="学生组队协作完成案例分析" 
                className="max-w-full h-auto mx-auto rounded-lg shadow-md"
              />
              <p className="text-gray-600 text-sm mt-2">图9 学生组队，利用线上工具，协作完成案例分析</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <img 
              src="/images/image25.png" 
              alt="设计思维报告部分截图" 
              className="max-w-full h-auto mx-auto rounded-lg shadow-md"
            />
            <p className="text-gray-600 text-sm mt-2">图10 设计思维报告部分截图</p>
          </div>
        </div>

        {/* 课程覆盖范围 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">课程覆盖范围</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">覆盖学院</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 p-3 rounded text-center">计算机学院</div>
                <div className="bg-green-50 p-3 rounded text-center">电子工程学院</div>
                <div className="bg-purple-50 p-3 rounded text-center">土木工程学院</div>
                <div className="bg-orange-50 p-3 rounded text-center">交通运输学院</div>
                <div className="bg-red-50 p-3 rounded text-center">机械工程学院</div>
                <div className="bg-indigo-50 p-3 rounded text-center">理学院</div>
                <div className="bg-pink-50 p-3 rounded text-center">经济管理学院</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">教学资源</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 46个开发项目</li>
                <li>• 18个实验项目</li>
                <li>• IBM产业技能学院资源</li>
                <li>• 企业级开发工具和平台</li>
                <li>• 真实项目案例</li>
                <li>• 国际前沿技术资料</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 导航按钮 */}
        <div className="flex justify-between">
          <Link 
            href="/"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            ← 返回首页
          </Link>
          <Link 
            href="/innovation"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            查看创新特色 →
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
