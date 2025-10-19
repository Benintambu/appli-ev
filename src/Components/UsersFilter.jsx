import '../assets/styles/UsersFilter.css'
import Input from './Input'
import Button from './Button'

export default function UsersFilter() {
    const filterItem = [
        { id: 0, label: "Tout" }
    ]
    return (
        <div className="users-filter">
            <ul>
                <li>
                    <Button placeholder={"Tout"} className={"button button-users-filter active-filter"} />
                    <Button placeholder={"Date"} className={"button button-users-filter"} />
                    <Button placeholder={"Matière"} className={"button button-users-filter"} />
                </li>
            </ul>

            <Input
                placeholder={"Rechecher"}
                className={"input input-teacher-filter"}
                id={"search-teacher"}
            />
        </div>
    )
}