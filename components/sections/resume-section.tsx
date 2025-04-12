import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function ResumeSection() {
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2">Resume</h2>
          <p className="text-muted-foreground">My professional experience and qualifications.</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="space-y-8">
        {/* Experience Section */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
                  <p className="text-muted-foreground">TechCorp Inc.</p>
                </div>
                <p className="text-sm text-muted-foreground">Jan 2022 - Present</p>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Led the development of a React-based dashboard used by 10,000+ users</li>
                <li>Implemented performance optimizations resulting in 40% faster load times</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Collaborated with design team to create and maintain a component library</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Frontend Developer</h3>
                  <p className="text-muted-foreground">WebSolutions Ltd.</p>
                </div>
                <p className="text-sm text-muted-foreground">Mar 2019 - Dec 2021</p>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed responsive web applications using React and Vue.js</li>
                <li>Integrated RESTful APIs and implemented state management solutions</li>
                <li>Collaborated with UX designers to implement pixel-perfect interfaces</li>
                <li>Participated in agile development processes and sprint planning</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Junior Web Developer</h3>
                  <p className="text-muted-foreground">Digital Agency Co.</p>
                </div>
                <p className="text-sm text-muted-foreground">Jun 2017 - Feb 2019</p>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Built and maintained websites for various clients using HTML, CSS, and JavaScript</li>
                <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                <li>Assisted senior developers with larger projects and bug fixes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Master of Science in Computer Science</h3>
                  <p className="text-muted-foreground">University of Technology</p>
                </div>
                <p className="text-sm text-muted-foreground">2015 - 2017</p>
              </div>
              <p>Specialized in Human-Computer Interaction and Web Technologies</p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">Bachelor of Science in Software Engineering</h3>
                  <p className="text-muted-foreground">State University</p>
                </div>
                <p className="text-sm text-muted-foreground">2011 - 2015</p>
              </div>
              <p>Graduated with honors, GPA 3.8/4.0</p>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-md font-medium mb-2">Technical Skills</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>JavaScript, TypeScript, HTML5, CSS3</li>
                  <li>React, Next.js, Vue.js, Angular</li>
                  <li>Node.js, Express, GraphQL</li>
                  <li>MongoDB, PostgreSQL, Firebase</li>
                  <li>Git, Docker, CI/CD, AWS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-md font-medium mb-2">Soft Skills</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Project Management</li>
                  <li>Team Leadership</li>
                  <li>Problem Solving</li>
                  <li>Communication</li>
                  <li>Time Management</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications Section */}
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>AWS Certified Developer - Associate</span>
                <span className="text-sm text-muted-foreground">2023</span>
              </li>
              <li className="flex justify-between">
                <span>Google Professional Cloud Developer</span>
                <span className="text-sm text-muted-foreground">2022</span>
              </li>
              <li className="flex justify-between">
                <span>Microsoft Certified: Azure Developer Associate</span>
                <span className="text-sm text-muted-foreground">2021</span>
              </li>
              <li className="flex justify-between">
                <span>Certified Scrum Master (CSM)</span>
                <span className="text-sm text-muted-foreground">2020</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
