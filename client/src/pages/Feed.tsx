import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Post {
  id: number;
  content: string;
  likes: number;
  shares: number;
  comments: string[];
  liked: boolean;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, content: "This is the first post!", likes: 0, shares: 0, comments: [], liked: false },
    { id: 2, content: "Here's another post!", likes: 0, shares: 0, comments: [], liked: false },
    { id: 3, content: "What do you think about this?", likes: 0, shares: 0, comments: [], liked: false },
  ]);

  const handleLike = (id: number): void => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked }
        : post
    ));
  };

  const handleShare = (id: number): void => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, shares: post.shares + 1 } : post
    ));
  };

  const handleComment = (id: number, comment: string): void => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, comments: [...post.comments, comment] } : post
    ));
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-18 py-8 flex-grow w-[40vw]">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          Feed
        </h1>
        <div className="space-y-6">
          {posts.map(post => (
            <Card key={post.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg">
              <CardHeader>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  {post.content}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-1 text-gray-800 dark:text-gray-100"
                  >
                    {post.liked ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FaRegHeart />
                    )}
                    <span>{post.likes}</span>
                  </button>
                  <button
                    onClick={() => handleShare(post.id)}
                    className="flex items-center gap-1 text-gray-800 dark:text-gray-100"
                  >
                    <FaShareAlt />
                    <span>{post.shares}</span>
                  </button>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <Input
                    type="text"
                    placeholder="Add a comment..."
                    className="dark:bg-gray-700 dark:text-gray-100"
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === 'Enter') {
                        const input = e.target as HTMLInputElement;
                        if (input.value.trim()) {
                          handleComment(post.id, input.value.trim());
                          input.value = '';
                        }
                      }
                    }}
                  />
                  <div className="mt-4 space-y-2 max-h-32 overflow-y-auto">
                    {post.comments.map((comment, index) => (
                      <p
                        key={index}
                        className="text-sm text-gray-800 dark:text-gray-100"
                      >
                        <span className="font-medium">User {index + 1}:</span> {comment}
                      </p>
                    ))}
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Feed;