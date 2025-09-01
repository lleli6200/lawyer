import { useState, useEffect } from 'react';
import { BlogPost, mockPosts, mockCategories } from '@/react-app/data/mockData';

let globalPosts = [...mockPosts];

export function updateGlobalPosts(newPosts: BlogPost[]) {
  globalPosts = [...newPosts];
}

export function useBlogPosts(category?: string) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      
      let filteredPosts = globalPosts;
      if (category && category !== 'all') {
        filteredPosts = globalPosts.filter(post => post.category === category);
      }
      
      setPosts(filteredPosts);
      setLoading(false);
    };

    fetchPosts();
  }, [category]);

  return { posts, loading };
}

export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const foundPost = globalPosts.find(p => p.slug === slug);
      setPost(foundPost || null);
      setLoading(false);
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading };
}

export function useBlogCategories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      await new Promise(resolve => setTimeout(resolve, 200));
      setCategories(mockCategories.map(cat => cat.name));
      setLoading(false);
    };

    fetchCategories();
  }, []);

  return { categories, loading };
}