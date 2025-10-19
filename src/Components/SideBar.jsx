import '../assets/styles/Sidebar.css';

export default function SideBar({ activePage }) {
    const navItems = [
        { id: 1, label: "tableau de bord", icon: 'bxr  bxs-home-alt-2', link: '/dashboard' },
        { id: 2, label: "enseignants", icon: 'bxr  bxs-education', link: '/teacher' },
        { id: 3, label: "élèves", icon: 'bxr bxs-group', link: '/settings' },
        { id: 4, label: "classes", icon: 'bxr  bxs-school', link: '/notifications' },
        { id: 5, label: "notes et évaluation", icon: 'bxr  bxs-star', link: '/history' },
        { id: 6, label: "communications", icon: 'bxr  bxs-message-dots', link: '/help' },
        { id: 7, label: "rapports et statistiques", icon: 'bxr  bxs-file-detail', link: '/analytics' },
        { id: 8, label: "paramètres", icon: 'bxr  bxs-cog', link: '/reports' },
    ];

    const menuItems = navItems.map((items) => (
        <li key={items.id}>
            <a href={items.link} className={activePage === items.id ? "active" : ""}>
                <div className="side-menu-left" >
                    <i class={items.icon} key={items.id} ></i>
                    <span key={items.id}>{items.label}</span>
                </div>
                {items.id !== activePage && <i class='bxr  bx-chevron-right'  ></i>}
            </a>
        </li>
    ))

    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-top">
                    <h1 >logo</h1>
                    <ul>
                        {menuItems}
                    </ul>
                </div>

                <div className="side-bot">
                    <a href="/">
                        <i class='bxr  bxs-arrow-out-left-square-half'  ></i>
                        <span>Déconnexion</span>
                    </a>
                </div>
            </aside >
        </>
    )
}