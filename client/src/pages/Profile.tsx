import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/Mode-toggle";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Beach Cleanup Drive",
      location: "California, USA",
      description: "Join us for a beach cleanup drive this weekend!",
      date: "April 15, 2025",
      likes: 0,
      liked: false,
      image: "https://i.pinimg.com/1200x/2e/68/cc/2e68ccd8e29229d2007b0750f1100dd9.jpg",
    },
    {
      id: 2,
      title: "Tree Planting Event",
      location: "New Delhi, India",
      description: "Help us plant trees and restore greenery in the city.",
      date: "April 20, 2025",
      likes: 0,
      liked: false,
      image: "https://i.pinimg.com/1200x/ce/a5/43/cea543c59726623ab86ee839df2822e6.jpg",
    },
    {
      id: 3,
      title: "Recycling Workshop",
      location: "Berlin, Germany",
      description: "Learn how to recycle effectively and reduce waste.",
      date: "April 25, 2025",
      likes: 0,
      liked: false,
      image: "https://i.pinimg.com/1200x/47/ae/d4/47aed4ee31728922504bdf76be62c01d.jpg",
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    location: "",
    description: "",
    image: "",
  });

  const [news, setNews] = useState([
    {
      id: 1,
      title: "Global Warming Hits Record Highs",
      description: "The global temperature has reached unprecedented levels this year.",
      source: "Climate News",
      date: "April 10, 2025",
    },
    {
      id: 2,
      title: "New Renewable Energy Projects Announced",
      description: "Governments worldwide are investing in renewable energy sources.",
      source: "Green Times",
      date: "April 12, 2025",
    },
    {
      id: 3,
      title: "Ocean Cleanup Initiative Expands",
      description: "A new initiative aims to remove plastic waste from oceans globally.",
      source: "Eco Watch",
      date: "April 14, 2025",
    },
  ]);

  const handlePostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.title && newPost.location && newPost.description && newPost.image) {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          title: newPost.title,
          location: newPost.location,
          description: newPost.description,
          date: new Date().toLocaleDateString(),
          likes: 0,
          liked: false,
          image: newPost.image,
        },
      ]);
      setNewPost({ title: "", location: "", description: "", image: "" });
    }
  };

  const handleLike = (id: number) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked }
        : post
    ));
  };

  const handleShare = (id: number) => {
    alert(`Post ${id} shared!`);
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 mt-18">
        {/* Left Sidebar */}
        <div className="lg:w-1/4 bg-white dark:bg-gray-800 shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9131/9131529.png"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">California, USA</p>
            </div>
          </div>
          <ModeToggle />
          <hr className="my-6 border-gray-300 dark:border-gray-700" />
          <h4 className="text-lg font-bold mb-4">Create a Post</h4>
          <form onSubmit={handlePostSubmit} className="space-y-4">
            <Input
              type="text"
              name="title"
              placeholder="Post Title"
              value={newPost.title}
              onChange={handlePostChange}
              className="w-full"
            />
            <Input
              type="text"
              name="location"
              placeholder="Location"
              value={newPost.location}
              onChange={handlePostChange}
              className="w-full"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newPost.description}
              onChange={handlePostChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
              rows={4}
            ></textarea>
            <Input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newPost.image}
              onChange={handlePostChange}
              className="w-full"
            />
            <Button type="submit" variant="default" className="w-full">
              Post
            </Button>
          </form>
        </div>

        {/* Main Content */}
        <div className="lg:w-2/4 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Community Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold text-green-500">{post.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {post.location} - {post.date}
                </p>
                <p className="text-sm mt-2">{post.description}</p>
                <div className="flex items-center gap-4 mt-4">
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
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/4 bg-white dark:bg-gray-800 shadow-lg p-6">
          <h4 className="text-lg font-bold mb-4">Top Contributors</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2920/2920045.png"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-bold">Alice Johnson</h5>
                <p className="text-xs text-gray-600 dark:text-gray-400">Rank: 1</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/15761/15761554.png"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-bold">Bob Smith</h5>
                <p className="text-xs text-gray-600 dark:text-gray-400">Rank: 2</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9187/9187532.png"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-bold">Charlie Brown</h5>
                <p className="text-xs text-gray-600 dark:text-gray-400">Rank: 3</p>
              </div>
            </li>
          </ul>

          {/* News Section */}
          <hr className="my-6 border-gray-300 dark:border-gray-700" />
          <h4 className="text-lg font-bold mb-4">Latest News</h4>
          <div className="space-y-4 overflow-y-auto max-h-64">
            {news.map((article) => (
              <div key={article.id} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <h5 className="text-sm font-bold text-green-500">{article.title}</h5>
                <p className="text-xs text-gray-600 dark:text-gray-400">{article.description}</p>
                <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                  {article.source} - {article.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;