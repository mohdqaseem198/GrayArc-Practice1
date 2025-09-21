import Link from "next/link";

const NavItems = ({item}) => {
    return(<div id="navItems">
        <Link href={`/${item}`}><h3>{item}</h3></Link>
    </div>)
};

export default NavItems;