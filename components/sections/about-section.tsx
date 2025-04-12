import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AboutSection() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <p className="text-muted-foreground">Learn more about my background, interests, and approach to work.</p>
      </div>

      <Tabs defaultValue="bio">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-6">
          <TabsTrigger value="bio">Biography</TabsTrigger>
          <TabsTrigger value="philosophy">Work Philosophy</TabsTrigger>
          <TabsTrigger value="interests">Interests</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
        </TabsList>

        <TabsContent value="bio">
          <Card>
            <CardHeader>
              <CardTitle>My Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I'm a passionate full-stack developer with over 7 years of experience building web applications and
                digital experiences. My journey in technology began when I built my first website at 14, and I've been
                hooked ever since.
              </p>
              <p>
                After completing my Master's degree in Computer Science, I joined a digital agency where I worked on
                projects for clients across various industries. This experience gave me a solid foundation in web
                development and taught me how to adapt to different project requirements and client needs.
              </p>
              <p>
                In 2019, I moved to a product-focused company where I helped build and scale a SaaS platform from the
                ground up. This role allowed me to deepen my technical skills while also gaining valuable experience in
                product development and user experience design.
              </p>
              <p>
                Currently, I'm working as a Senior Frontend Developer at TechCorp, where I lead development efforts for
                our flagship product. I'm passionate about creating intuitive, accessible, and performant web
                applications that solve real problems for users.
              </p>
              <p>
                When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes in the
                kitchen, or contributing to open-source projects.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="philosophy">
          <Card>
            <CardHeader>
              <CardTitle>My Approach to Work</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I believe that the best digital products are those that seamlessly blend technical excellence with
                thoughtful user experience. My approach to development is guided by several core principles:
              </p>

              <div>
                <h3 className="text-lg font-medium mb-2">User-Centered Design</h3>
                <p>
                  I always start by understanding the needs, goals, and pain points of the end users. Technical
                  decisions should serve the user experience, not the other way around.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Pragmatic Problem Solving</h3>
                <p>
                  While I love exploring new technologies, I believe in choosing the right tool for the job rather than
                  following trends. Sometimes a simple solution is more effective than a complex one.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Continuous Learning</h3>
                <p>
                  The tech landscape is constantly evolving, and I'm committed to growing my skills and knowledge. I
                  dedicate time each week to learning new technologies and techniques.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Collaboration</h3>
                <p>
                  The best products are built by diverse teams working together. I value open communication,
                  constructive feedback, and the exchange of ideas.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Quality and Craftsmanship</h3>
                <p>
                  I take pride in writing clean, maintainable code and building robust systems. I believe in thorough
                  testing, documentation, and attention to detail.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interests">
          <Card>
            <CardHeader>
              <CardTitle>Beyond Coding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Outdoor Activities</h3>
                  <p className="mb-4">
                    I'm an avid hiker and rock climber. Being in nature helps me clear my mind and find inspiration. I
                    try to go on at least one major hiking trip each year, with my most recent adventure being a trek
                    through the Dolomites in Italy.
                  </p>

                  <h3 className="text-lg font-medium mb-2">Cooking</h3>
                  <p>
                    I love experimenting with recipes from around the world. There's something satisfying about the
                    process of creating a dish from scratch, and it's not so different from coding—you follow a
                    procedure, make adjustments, and create something new.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Open Source</h3>
                  <p className="mb-4">
                    I'm passionate about contributing to open-source projects. It's a great way to give back to the
                    community, learn from other developers, and help build tools that benefit everyone.
                  </p>

                  <h3 className="text-lg font-medium mb-2">Reading</h3>
                  <p>
                    I'm an avid reader of both fiction and non-fiction. Some of my favorite books include "Thinking,
                    Fast and Slow" by Daniel Kahneman, "The Design of Everyday Things" by Don Norman, and "The
                    Three-Body Problem" by Liu Cixin.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials">
          <Card>
            <CardHeader>
              <CardTitle>What Others Say</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <p className="italic mb-2">
                    "Jane is one of the most talented developers I've had the pleasure of working with. Her technical
                    skills are exceptional, but what truly sets her apart is her ability to understand business needs
                    and translate them into elegant technical solutions."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="font-semibold">MJ</span>
                    </div>
                    <div>
                      <p className="font-medium">Michael Johnson</p>
                      <p className="text-sm text-muted-foreground">CTO, TechCorp Inc.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <p className="italic mb-2">
                    "Working with Jane on our product redesign was a game-changer. She not only delivered exceptional
                    code but also provided valuable insights that improved the overall user experience. Her attention to
                    detail and commitment to quality are remarkable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="font-semibold">SL</span>
                    </div>
                    <div>
                      <p className="font-medium">Sarah Lee</p>
                      <p className="text-sm text-muted-foreground">Product Manager, WebSolutions Ltd.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <p className="italic mb-2">
                    "Jane mentored me when I first joined the company, and her guidance was invaluable. She has a gift
                    for explaining complex concepts in an accessible way and always makes time to help others grow.
                    She's not just a great developer but also a great teacher."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="font-semibold">DP</span>
                    </div>
                    <div>
                      <p className="font-medium">David Park</p>
                      <p className="text-sm text-muted-foreground">Frontend Developer, TechCorp Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
