
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import SectionHeading from '@/components/SectionHeading';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Life Insurance: A Comprehensive Guide",
      excerpt: "Learn everything you need to know about life insurance policies, coverage options, and how to choose the right plan for your family.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      date: "May 15, 2025",
      author: "John Smith",
      category: "Life Insurance"
    },
    {
      id: 2,
      title: "5 Common Mistakes to Avoid When Buying Health Insurance",
      excerpt: "Discover the pitfalls many people encounter when purchasing health insurance and how you can avoid them to get the best coverage.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "May 10, 2025",
      author: "Sarah Johnson",
      category: "Health Insurance"
    },
    {
      id: 3,
      title: "How to Protect Your Home: Essential Property Insurance Tips",
      excerpt: "Explore crucial property insurance strategies to ensure your home and belongings are fully protected against unexpected events.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      date: "May 5, 2025",
      author: "Michael Chen",
      category: "Property Insurance"
    },
    {
      id: 4,
      title: "Auto Insurance 101: Coverage Options Explained",
      excerpt: "Navigate the complex world of auto insurance with this straightforward guide to different coverage types and what they mean for you.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      date: "April 28, 2025",
      author: "Emily Rodriguez",
      category: "Auto Insurance"
    },
    {
      id: 5,
      title: "Business Insurance: Protecting Your Company's Future",
      excerpt: "Learn how the right business insurance policies can safeguard your company against various risks and ensure long-term success.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      date: "April 22, 2025",
      author: "David Wilson",
      category: "Business Insurance"
    },
    {
      id: 6,
      title: "Insurance Terms Explained: Breaking Down the Jargon",
      excerpt: "Demystify complex insurance terminology with our simple explanations of common terms you'll encounter when shopping for policies.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      date: "April 15, 2025",
      author: "Lisa Thompson",
      category: "Insurance Guide"
    }
  ];

  const categories = [
    "All Categories",
    "Life Insurance",
    "Health Insurance",
    "Property Insurance",
    "Auto Insurance",
    "Business Insurance"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insurance Blog</h1>
            <p className="text-xl text-muted-foreground">
              Stay informed with the latest insurance insights, tips, and industry updates.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section">
        <div className="container-custom">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"} 
                className={index === 0 ? "" : "border-primary text-primary hover:bg-primary hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="h-full">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-full object-cover min-h-[300px]" 
                />
              </div>
              <div className="p-8">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center mb-6">
                  <div className="text-sm text-gray-500">
                    By <span className="text-primary">{blogPosts[0].author}</span> | {blogPosts[0].date}
                  </div>
                </div>
                <Button>Read Full Article</Button>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <SectionHeading 
            title="Latest Articles"
            subtitle="Explore our collection of informative articles about insurance and financial planning."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {post.date}
                    </div>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="outline" className="bg-primary text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-white/80 mb-8">
              Stay updated with the latest insurance tips, industry news, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg text-foreground flex-grow" 
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
