const categories = [
  {
    title: "Web Development",
    total: 1,
  },
];

const Categories = () => {
  return (
    <div className="sidebar-card">
      <h4>Categories</h4>
      {categories.map((item) => (
        <div
          className="category-item"
          key={item.title}
        >
          <span>{item.title}</span>
          <span>{item.total}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;