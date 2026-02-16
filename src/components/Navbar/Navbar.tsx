import  { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "#hero" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        
        {/* Logo */}
        <a href="#hero" className="logo">
          Alex.dev
        </a>

        {/* Desktop Menu */}
        <div className="links">
          {links.map((link) => (
            <a key={link.path} href={link.path}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="menu-btn">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
