import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { NavigationMenu } from "@/components/navigation-menu";
import { Footer } from "@/components/footer";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "app", "blog", "posts", `${slug}.md`);
  
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return (
      <div className="relative min-h-screen bg-background">
        <NavigationMenu />
        <main className="container mx-auto py-32 px-6 max-w-3xl min-h-[60vh]">
          <div className="mb-12">
            <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent" asChild>
              <Link href="/blog" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
          
          <article className="prose prose-invert prose-lg prose-primary max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </article>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto py-32 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-muted-foreground mb-8">The requested post does not exist.</p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }
}
