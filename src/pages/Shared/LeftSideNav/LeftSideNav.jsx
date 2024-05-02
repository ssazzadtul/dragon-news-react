import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <Link
          className="block px-4 py-3 text-xl font-semibold"
          key={category.id}
          to={`/category/&{category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};
export default LeftSideNav;
