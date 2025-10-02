import { Menu } from "./Menu";

export default function Header() {
    return (
        <header>
            <div>
                <span className="logo">House Staff</span>
                <Menu />
            </div>
            <div className="presentation"></div>
        </header>
    )
}