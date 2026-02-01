import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MDXContent } from "@/components/MDXContent";
import { ShareButton } from "@/components/ShareButton";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { Calendar, Clock, Tag, ArrowLeft, User, Eye, Heart } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// 生成静态路径
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// 生成页面元数据
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "文章未找到",
    };
  }

  return {
    title: `${post.meta.title} | DevBlog`,
    description: post.meta.description,
    keywords: post.meta.tags.join(", "),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // 默认背景图（如果文章没有设置）
  const defaultCoverImage = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop";
  const coverImage = post.meta.coverImage || defaultCoverImage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Header />
      
      {/* 文章封面区域 - 参考林间拾语的设计 */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* 背景图 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${coverImage})` }}
        />
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        {/* 装饰性元素 */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
        
        {/* 返回按钮 */}
        <div className="absolute top-24 left-4 sm:left-8 z-10">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-white/90 hover:text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full transition-all hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>返回文章列表</span>
          </Link>
        </div>

        {/* 文章标题信息 */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
          <div className="max-w-4xl mx-auto">
            {/* 分类标签 */}
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="text-sm text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1.5 rounded-full font-medium shadow-lg">
                {post.meta.category}
              </span>
            </div>

            {/* 标题 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              {post.meta.title}
            </h1>

            {/* 描述 */}
            <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-3xl drop-shadow">
              {post.meta.description}
            </p>

            {/* 元信息 */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              {post.meta.author && (
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <User className="h-4 w-4" />
                  <span>{post.meta.author}</span>
                </div>
              )}
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Calendar className="h-4 w-4" />
                <span>{post.meta.date}</span>
              </div>
              {post.meta.readTime && (
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span>{post.meta.readTime}</span>
                </div>
              )}
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Eye className="h-4 w-4" />
                <span>{Math.floor(Math.random() * 1000) + 100} 阅读</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="relative">
        {/* 文章内容卡片 */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden">
            {/* 标签区域 */}
            <div className="px-6 sm:px-10 pt-8 pb-4 border-b border-gray-100 flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-gray-500" />
              {post.meta.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 px-3 py-1 rounded-full hover:from-purple-100 hover:to-blue-100 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* 文章内容 */}
            <div className="px-6 sm:px-10 py-8">
              <div className="prose-container">
                <MDXContent source={post.content} />
              </div>
            </div>

            {/* 文章底部 */}
            <footer className="px-6 sm:px-10 py-6 bg-gradient-to-r from-purple-50/50 to-blue-50/50 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors font-medium"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>返回文章列表</span>
                </Link>

                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="h-5 w-5" />
                    <span>{Math.floor(Math.random() * 100) + 10}</span>
                  </button>
                  <ShareButton />
                </div>
              </div>
            </footer>
          </div>
        </article>

        {/* 底部装饰 */}
        <div className="h-20" />
      </main>
      <Footer />
    </div>
  );
}
