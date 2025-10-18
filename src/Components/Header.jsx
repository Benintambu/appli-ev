import '../assets/styles/Header.css'
import Input from './Input'
import profilePic from '../assets/images/profile.jpg';
import ProfilePic from './ProfilePic';

export default function Header() {
    return (
        <header className="header">
            <h2>Hi, Evodie</h2>
            <div className="header-right">
                <div className="header-input-container">
                    <Input
                        placeholder={"Rechercher..."}
                        type="text"
                        className={"input input-header"}
                    />
                    <i class='bxr  bx-search-big'  ></i>
                </div>
                <a href="#"><i class='bxr  bx-bell'  ></i></a>
                <ProfilePic src={profilePic} alt={"profile-pic"} className={"header-profile"} />
            </div>
        </header>
    )
}