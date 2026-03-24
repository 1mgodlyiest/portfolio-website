import fs from "fs/promises";
import path from "path";
import { NavigationMenu } from "@/components/navigation-menu";
import { Footer } from "@/components/footer";
import { AnimatedCursor } from "@/components/animated-cursor";
import { ScrollProgress } from "@/components/scroll-progress";

// If you want to render markdown, you'd normally use react-markdown
// For now, let's keep it simple and just show raw text or parse it lightly
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "app", "blog", "posts", `${slug}.md`);
  
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return (
      <div className="relative min-h-screen">
        <AnimatedCursor />
        <ScrollProgress />
        <NavigationMenu />
        <main className="container mx-auto py-24 px-6 max-w-3xl min-h-[60vh]">
          <article className="prose prose-invert prose-lg max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-muted-foreground">{content}</pre>
          </article>
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto py-24 px-6 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="mt-4 text-muted-foreground">The post {slug} does not exist.</p>
      </div>
    );
  }
}
