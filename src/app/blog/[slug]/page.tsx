import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrochureModal from "@/components/BrochureModal";
import ScrollReveal from "@/components/ScrollReveal";
import { BLOG_POSTS, COMPANY_INFO } from "@/lib/data";
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Share2,
  Building2,
  Phone,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: `Article Not Found | ${COMPANY_INFO.name}`,
    };
  }

  return {
    title: `${post.title} | ${COMPANY_INFO.name} Market Intelligence`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      url: `${COMPANY_INFO.websiteUrl}/blog/${post.slug}`,
      siteName: COMPANY_INFO.name,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.websiteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY_INFO.websiteUrl}/images/property-files-network-logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY_INFO.websiteUrl}/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* Article Header & Breadcrumbs */}
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 lg:py-16 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-slate-900">Case Studies &amp; Blog</Link>
              <span>/</span>
              <span className="text-amber-800 font-medium truncate max-w-xs">{post.category}</span>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded bg-amber-50 text-amber-900 font-semibold border border-amber-200/80 text-[11px]">
                  {post.category}
                </span>
                <span className="text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">{post.publishDate}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
                {post.subtitle}
              </p>

              {/* Author Strip */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3 text-xs">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-sm">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{post.author.name}</div>
                  <div className="text-slate-500">{post.author.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Metrics Banner */}
        {post.metrics && post.metrics.length > 0 && (
          <section className="bg-slate-900 text-white py-8 border-b border-slate-800">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>Empirical Case Study Metrics &amp; Key Findings</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {post.metrics.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1 text-xs">
                    <div className="text-slate-400 text-[11px]">{m.label}</div>
                    <div className="text-xl font-serif font-bold text-white">{m.value}</div>
                    {m.note && <div className="text-[10px] text-amber-300 font-normal">{m.note}</div>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Article Body Content */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Main Content Column */}
              <article className="lg:col-span-8 space-y-10 text-slate-800">
                {post.content.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    {sec.sectionTitle && (
                      <h2 className="text-2xl font-serif font-bold text-slate-900 pt-2 border-b border-slate-100 pb-2">
                        {sec.sectionTitle}
                      </h2>
                    )}

                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                        {p}
                      </p>
                    ))}

                    {sec.callout && (
                      <div className="my-6 p-5 sm:p-6 rounded-2xl bg-amber-50/80 border-l-4 border-amber-600 text-slate-800 space-y-1.5 shadow-sm">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
                          {sec.callout.title}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                          &ldquo;{sec.callout.text}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Tags */}
                <div className="pt-6 border-t border-slate-200">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Related Topics &amp; Regulatory Codes
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs border border-slate-200 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Bio Card */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-base shrink-0">
                    {post.author.name.charAt(0)}
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="text-sm font-bold text-slate-900">{post.author.name}</div>
                    <div className="text-amber-800 font-semibold">{post.author.role}</div>
                    <p className="text-slate-600 leading-relaxed pt-1">
                      Advising corporate, family office, and overseas Pakistani investors on transparent property allocations, DHA transfers, and legal title acquisitions across Lahore.
                    </p>
                  </div>
                </div>
              </article>

              {/* Sidebar: Advisory CTA */}
              <aside className="lg:col-span-4 space-y-6">
                <div className="sticky top-28 space-y-6">
                  {/* Advisory Consultation Box */}
                  <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-lg border border-slate-800">
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                        {COMPANY_INFO.name} Advisory Desk
                      </div>
                      <h3 className="text-lg font-serif font-bold">
                        Need Guidance on This Property Strategy?
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Speak directly with our senior partners regarding commercial lease yields, title verification, or Barki Road land banking.
                      </p>
                    </div>

                    <div className="space-y-2 pt-1 text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Confidential portfolio analysis</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Official LDA &amp; DHA title review</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>RDA repatriation assistance</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all block text-center"
                    >
                      <span>Book Advisory Session</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href={`tel:${COMPANY_INFO.pakistanPhoneRaw}`}
                      className="w-full py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all block text-center border border-slate-700"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>{COMPANY_INFO.pakistanPhone}</span>
                    </a>
                  </div>

                  {/* Back to Blog Index Link */}
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to all Market Intelligence Articles</span>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Related Research &amp; Case Studies
              </h3>
              <Link href="/blog" className="text-xs font-semibold text-amber-800 hover:underline">
                View all &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.slug}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-colors space-y-3"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 font-semibold text-[11px]">
                      {rPost.category}
                    </span>
                    <span className="text-slate-500 text-[11px]">{rPost.readTime}</span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-slate-900 hover:text-amber-800">
                    <Link href={`/blog/${rPost.slug}`}>
                      {rPost.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {rPost.excerpt}
                  </p>
                  <Link
                    href={`/blog/${rPost.slug}`}
                    className="text-xs font-semibold text-slate-900 inline-flex items-center gap-1 hover:text-amber-800 pt-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BrochureModal />
    </div>
  );
}
