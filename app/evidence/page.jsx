"use client";

import Link from "next/link";

export default function EvidencePage() {
  const evidenceCategories = [
    {
      id: "papers",
      title: "教改论文",
      count: 3,
      color: "blue",
      icon: "📄",
      items: [
        "《推动研究生课程教学由低阶向高阶转变》",
        "《\"四通\"教育教学模式背景下\"区块链技术\"教学改革与实践探索》",
        "《美国高等工程教育发展中的重要变革及其启示》"
      ]
    },
    {
      id: "awards",
      title: "竞赛获奖",
      count: 5,
      color: "green",
      icon: "🏆",
      items: [
        "CCF第三届大学生区块链技术与创新应用竞赛二等奖",
        "中国服务计算创新大赛一等奖",
        "微众银行第三届金融科技高校技术大赛区块链赛道全国第三名",
        "第十七届全国大学生信息安全竞赛作品赛三等奖",
        "CCF第三届大学生区块链技术与创新应用竞赛优秀指导教师"
      ]
    },
    {
      id: "publications",
      title: "论文获奖",
      count: 3,
      color: "purple",
      icon: "📚",
      items: [
        "CCF-A类顶级会议2023 ACM CCS 杰出论文奖",
        "CCF-B类知名会议2024 IEEE ICDCS最佳演示奖",
        "2023年度中国区块链技术领域（英文）优秀论文"
      ]
    },
    {
      id: "projects",
      title: "教改项目",
      count: 6,
      color: "orange",
      icon: "🔬",
      items: [
        "教育部-IBM产学合作协同育人项目",
        "微众银行产学合作项目",
        "北京交通大学研究生优质核心课程建设项目",
        "北京交通大学教育基金会基金项目",
        "北京交通大学研究生课程思政示范课程建设项目",
        "北京交通大学本研跨学科高级课程群课程建设项目"
      ]
    },
    {
      id: "cooperation",
      title: "产学合作案例",
      count: 2,
      color: "indigo",
      icon: "🤝",
      items: [
        "IBM产学合作案例",
        "IBM优秀案例推荐"
      ]
    },
    {
      id: "promotion",
      title: "成果推广",
      count: 1,
      color: "red",
      icon: "📢",
      items: [
        "成果推广材料"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-600 hover:bg-blue-700 text-blue-600",
      green: "bg-green-600 hover:bg-green-700 text-green-600",
      purple: "bg-purple-600 hover:bg-purple-700 text-purple-600",
      orange: "bg-orange-600 hover:bg-orange-700 text-orange-600",
      indigo: "bg-indigo-600 hover:bg-indigo-700 text-indigo-600",
      red: "bg-red-600 hover:bg-red-700 text-red-600"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
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
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
                首页
              </Link>
              <Link href="/achievement" className="text-gray-700 hover:text-orange-600 font-medium">
                成果展示
              </Link>
              <Link href="/innovation" className="text-gray-700 hover:text-orange-600 font-medium">
                创新特色
              </Link>
              <Link href="/evidence" className="text-orange-600 font-medium">
                支撑材料
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-orange-600 font-medium">
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
            📁 支撑材料
          </h1>
          <p className="text-xl text-gray-600">
            区块链技术课程教学成果的详实支撑材料
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-4"></div>
        </div>

        {/* 材料统计 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">支撑材料统计</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <p className="text-gray-600">教改论文</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <p className="text-gray-600">竞赛获奖</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <p className="text-gray-600">论文获奖</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
              <p className="text-gray-600">教改项目</p>
            </div>
          </div>
        </div>

        {/* 支撑材料分类展示 */}
        <div className="space-y-8 mb-12">
          {evidenceCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`text-3xl ${getColorClasses(category.color).split(' ')[2]}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-600">共 {category.count} 项</p>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-full ${getColorClasses(category.color).split(' ')[0]} text-white font-semibold`}>
                  {category.count} 项
                </div>
              </div>
              
              <div className="space-y-3">
                {category.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className={`w-6 h-6 rounded-full ${getColorClasses(category.color).split(' ')[0]} text-white text-sm flex items-center justify-center font-semibold`}>
                      {index + 1}
                    </div>
                    <p className="text-gray-700 flex-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 重要成果亮点 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">重要成果亮点</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🏆 国际认可</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-semibold">CCF-A类顶级会议2023 ACM CCS 杰出论文奖</p>
                  <p className="text-blue-600 text-sm mt-1">中国研究团队首获CCS区块链领域杰出论文奖</p>
                  <div className="mt-3">
                    <img 
                      src="/images/supporting_image9.png" 
                      alt="ACM CCS杰出论文奖证书" 
                      className="max-w-full h-auto rounded shadow-sm"
                    />
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">CCF-B类知名会议2024 IEEE ICDCS最佳演示奖</p>
                  <p className="text-green-600 text-sm mt-1">国际会议最佳演示奖</p>
                  <div className="mt-3">
                    <img 
                      src="/images/supporting_image11.jpeg" 
                      alt="IEEE ICDCS最佳演示奖证书" 
                      className="max-w-full h-auto rounded shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🤝 产学合作</h3>
              <div className="space-y-3">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-semibold">IBM产学合作协同育人项目</p>
                  <p className="text-purple-600 text-sm mt-1">114名学生获得IBM技术认证</p>
                  <div className="mt-3">
                    <img 
                      src="/images/supporting_image42.jpeg" 
                      alt="IBM数字证书样式" 
                      className="max-w-full h-auto rounded shadow-sm"
                    />
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-orange-800 font-semibold">微众银行产学合作项目</p>
                  <p className="text-orange-600 text-sm mt-1">基于FISCO BCOS的区块链技术课程建设</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 媒体报道 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">媒体报道</h2>
          <div className="text-center">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">《中国科学报》专题报道</h3>
              <p className="text-gray-600 mb-4">
                "中国研究团队首获CCS区块链领域杰出论文奖"
              </p>
              <div className="mt-4">
                <img 
                  src="/images/supporting_image10.png" 
                  alt="中国科学报报道截图" 
                  className="max-w-full h-auto mx-auto rounded shadow-sm"
                />
              </div>
              <p className="text-gray-500 text-sm mt-4">
                该成果受到了主流媒体的广泛关注，进一步提升了研究成果在公众和产业界的知名度，
                展示了中国在区块链领域的创新实力。
              </p>
            </div>
          </div>
        </div>

        {/* 竞赛获奖展示 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">竞赛获奖展示</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <img 
                src="/images/supporting_image4.jpeg" 
                alt="CCF第三届大学生区块链技术与创新应用竞赛二等奖" 
                className="max-w-full h-auto mx-auto rounded-lg shadow-md"
              />
              <p className="text-gray-600 text-sm mt-2">CCF第三届大学生区块链技术与创新应用竞赛二等奖</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/supporting_image5.png" 
                alt="中国服务计算创新大赛一等奖" 
                className="max-w-full h-auto mx-auto rounded-lg shadow-md"
              />
              <p className="text-gray-600 text-sm mt-2">中国服务计算创新大赛一等奖</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/supporting_image6.png" 
                alt="微众银行第三届金融科技高校技术大赛" 
                className="max-w-full h-auto mx-auto rounded-lg shadow-md"
              />
              <p className="text-gray-600 text-sm mt-2">微众银行第三届金融科技高校技术大赛全国第三名</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/supporting_image7.png" 
                alt="第十七届全国大学生信息安全竞赛" 
                className="max-w-full h-auto mx-auto rounded-lg shadow-md"
              />
              <p className="text-gray-600 text-sm mt-2">第十七届全国大学生信息安全竞赛三等奖</p>
            </div>
          </div>
        </div>

        {/* IBM产学合作案例展示 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">IBM产学合作案例展示</h2>
          <div className="space-y-8">
            <div className="text-center">
              <img 
                src="/images/supporting_image22.png" 
                alt="IBM师资培训课表" 
                className="max-w-full h-auto mx-auto rounded-lg shadow-md"
              />
              <p className="text-gray-600 text-sm mt-2">IBM师资培训课表</p>
            </div>
            <div className="text-center">
              <img 
                src="/images/supporting_image23.png" 
                alt="课程宣传网页" 
                className="max-w-full h-auto mx-auto rounded-lg shadow-md"
              />
              <p className="text-gray-600 text-sm mt-2">课程宣传网页</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center">
                <img 
                  src="/images/supporting_image25.jpeg" 
                  alt="教师介绍实验内容" 
                  className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                />
                <p className="text-gray-600 text-sm mt-2">教师介绍实验内容</p>
              </div>
              <div className="text-center">
                <img 
                  src="/images/supporting_image26.jpeg" 
                  alt="教师指导学生" 
                  className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                />
                <p className="text-gray-600 text-sm mt-2">教师指导学生</p>
              </div>
            </div>
          </div>
        </div>

        {/* 材料下载 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">材料下载</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">支撑材料目录</h3>
              <p className="text-gray-600 mb-4">详细的支撑材料清单</p>
              <a
                href="/material/（3）支撑材料目录（WORD电子版）.docx"
                download
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                下载目录
              </a>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📁</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">完整支撑材料</h3>
              <p className="text-gray-600 mb-4">包含所有支撑材料的完整文档</p>
              <a
                href="/material/（4）支撑材料（合成一个PDF电子版）.pdf"
                download
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                下载PDF
              </a>
            </div>
          </div>
        </div>

        {/* 导航按钮 */}
        <div className="flex justify-between">
          <Link 
            href="/innovation"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            ← 返回创新特色
          </Link>
          <Link 
            href="/team"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            查看团队介绍 →
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
