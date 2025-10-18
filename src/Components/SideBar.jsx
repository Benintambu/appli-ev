import '../assets/styles/Sidebar.css';

export default function SideBar({ activePage }) {
    const navItems = [
        { id: 1, label: "tableau de bord", icon: 'bxr  bx-home-alt-2', link: '/dashboard' },
        { id: 2, label: "enseignants", icon: 'bxr  bx-education', link: '/users' },
        { id: 3, label: "élèves", icon: 'bxr bx-group', link: '/settings' },
        { id: 4, label: "classes", icon: 'bxr  bx-school', link: '/notifications' },
        { id: 5, label: "notes et évaluation", icon: 'bxr  bx-star', link: '/history' },
        { id: 6, label: "communications", icon: 'bxr  bx-message', link: '/help' },
        { id: 7, label: "paramètres", icon: 'bxr  bx-cog', link: '/reports' },
        { id: 8, label: "rapports et statistiques", icon: 'bxr  bx-file-detail', link: '/analytics' },
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
                    <a href="dashboard">
                        <i class='bxr  bxs-arrow-out-left-square-half'  ></i>
                        <span>Décconexion</span>
                    </a>
                </div>
            </aside >
        </>
    )
}