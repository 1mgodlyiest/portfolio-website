import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { NavigationMenu } from "@/components/navigation-menu";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "app", "blog", "posts", `${slug}.md`);
  
  try {
    const content = await fs.readFile(filePath, "utf-8");
    
    // Simple reading time estimator (approx 200 wpm)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return (
      <div className="relative min-h-screen bg-[#0A0A0A] text-white">
        <NavigationMenu />
        
        <main className="container mx-auto py-32 px-6 max-w-3xl">
          <div className="mb-12">
            <Button variant="ghost" className="pl-0 hover:bg-transparent text-neutral-400 hover:text-white" asChild>
              <Link href="/blog" className="flex items-center transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Agency Journal
              </Link>
            </Button>
          </div>
          
          <header className="mb-12">
            <Badge variant="secondary" className="mb-4 bg-neutral-800 text-neutral-400 hover:bg-neutral-700">
              {readingTime} min read
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
              {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
            </h1>
          </header>
          
          <article className="prose prose-invert prose-lg prose-primary max-w-none 
            prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tighter 
            prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl 
            prose-p:text-white prose-p:leading-loose prose-p:text-lg
            prose-strong:text-white prose-strong:font-bold prose-em:text-neutral-300
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-neutral-900/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:italic
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-code:text-primary">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>
          
          <div className="mt-20 pt-12 border-t border-neutral-800">
             <Button variant="outline" className="border-neutral-700 hover:border-primary" asChild>
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto py-32 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-neutral-400 mb-8">The requested post does not exist.</p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }
}
