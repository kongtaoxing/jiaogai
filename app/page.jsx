import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 导航栏 */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                区块链技术课程教学成果
              </h1>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-blue-600 font-medium">
                首页
              </Link>
              <Link href="/achievement" className="text-gray-700 hover:text-blue-600 font-medium">
                成果展示
              </Link>
              <Link href="/innovation" className="text-gray-700 hover:text-blue-600 font-medium">
                创新特色
              </Link>
              <Link href="/evidence" className="text-gray-700 hover:text-blue-600 font-medium">
                支撑材料
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-blue-600 font-medium">
                团队介绍
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            区块链技术课程"一体两翼三导向四驱动"改革与实践
          </h1>
          <p className="text-xl text-gray-600 mb-4">北京交通大学</p>
          <p className="text-lg text-gray-500 mb-8">2025年北京市高等教育教学成果奖申报</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* 成果概览 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">成果概述</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 核心成果</h3>
              <p className="text-gray-600 mb-4">
                基于OBE理念，构建了"一体两翼三导向四驱动"的区块链技术课程教学改革框架。
                一体：区块链技术；两翼：课程思政和科技前沿；三导向：价值塑造、能力培养和知识传授；
                四驱动：产教相通、学科融通、本硕贯通和国际互通。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📊 应用效果</h3>
              <p className="text-gray-600 mb-4">
                覆盖7个学院学生，形成24个案例、54个研究专题、46个开发项目、18个实验项目。
                114名学生通过IBM技术认证，被IBM推荐为产学合作协同育人项目优秀案例。
              </p>
            </div>
          </div>
        </div>

        {/* 创新特色卡片 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-3xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">理论创新</h3>
            <p className="text-gray-600 text-sm">基于OBE理念构建一体化教学体系，实现教材导向向产出导向转变</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-green-600 text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">产教融合</h3>
            <p className="text-gray-600 text-sm">与IBM等企业建立协同育人机制，将最新技术转化为教学资源</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-purple-600 text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">教学模式</h3>
            <p className="text-gray-600 text-sm">形成"七小通"研究型教学模式，提升课程教学的"两性一度"</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-red-600 text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">思政引领</h3>
            <p className="text-gray-600 text-sm">突出价值引领，建成课程思政示范课，培养社会责任感和伦理道德观</p>
          </div>
        </div>

        {/* 主要解决的问题 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">解决的主要教学问题</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">问题一：教材导向的教学设计</h3>
              <p className="text-gray-600">
                传统教学重视知识传授，一定程度上忽视了价值塑造和能力培养。
                通过OBE理念和"三导向"目标，实现了价值塑造、能力培养和知识传授的有机统一。
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">问题二：以教为主的教学模式</h3>
              <p className="text-gray-600">
                传统教学模式抑制了学生学习与创新能力。
                通过"七小通"研究型教学模式，实现了以教为主向以学为主的转变。
              </p>
            </div>
          </div>
        </div>

        {/* 快速导航 */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">深入了解成果</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/achievement" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              查看详细成果
            </Link>
            <Link 
              href="/innovation" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              创新特色
            </Link>
            <Link 
              href="/evidence" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              支撑材料
            </Link>
            <Link 
              href="/team" 
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              团队介绍
            </Link>
          </div>
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
