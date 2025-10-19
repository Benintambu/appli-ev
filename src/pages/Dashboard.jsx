import SideBar from "../Components/SideBar"
import Header from "../Components/Header"
import '../assets/styles/Dashboard.css'

export default function Dashboard() {
    return (
        <>
            <SideBar activePage={1} />
            <main className="main-content">
                <Header headerTitle={"Hi, Béni"} />

            </main>
        </>
    )
}
