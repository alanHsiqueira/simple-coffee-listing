import bgCafe from '../assets/bg-cafe-lg.jpg';
const Header = () => {
  return (
    <header className="w-full h-full">
      <img
        src={bgCafe}
        alt="Coffee shop background"
        className="w-full h-full object-cover"
        role="img"
      />
    </header>
  );
};

export default Header;
