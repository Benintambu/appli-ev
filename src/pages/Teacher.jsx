import SideBar from "../Components/SideBar"
import Header from "../Components/Header"
import UsersFilter from "../Components/UsersFilter"

export default function Teacher() {
    return (
        <>
            <SideBar activePage={2} />
            <div className="main-content">
                <Header headerTitle={"Gestion des enseignants"} />
                <UsersFilter />
            </div>
        </>
    )
}