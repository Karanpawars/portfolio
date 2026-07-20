const posts = [
  "How a Website Can Grow Your Local Business: A Complete Guide (2026)",
];

const PopularPosts = () => {
  return (
    <div className="sidebar-card mt-4">
      <h4>Popular Posts</h4>
      {posts.map((post) => (
        <div
          className="popular-post"
          key={post}
        >
          <div className="icon">
            <i className="bi bi-file-earmark-text"></i>
          </div>
          <span>{post}</span>
        </div>
      ))}
    </div>
  );
};

export default PopularPosts;