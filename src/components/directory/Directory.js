import DirectoryItem from "../directory-item/Directory-item";
import "./Directory.scss";

const categories = [
  {
    id: 1,
    title: "Hat",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: 'shop/hats'
  },
  {
    id: 2,
    title: "Jacket",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: "Women",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: 'shop/womens'
  },
  {
    id: 5,
    title: "Men",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: 'shop/mens'
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
