import DataTable from "react-data-table-component";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { customStyles } from "@/Constants/StaticData";

export default function Admin(props) {
    const { user, usersData } = props;

    console.log(usersData);

    const columns = [
        {
            name: "Име",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Телефонен номер",
            selector: (row) => row.phone,
            sortable: true,
        },
        {
            name: "Instagram",
            selector: (row) => row.instagram,
            sortable: true,
            //   cell: row => <a href={`https://instagram.com/${row.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">{row.instagram}</a>,
        },
        {
            name: "Фитнес цели",
            selector: (row) => row.additional_info,
            sortable: false,
        },
        {
            name: "Action",
            cell: (row) => (
            <a href={`/admin/user/${row.id}`}>
                <button className="outline-button">Виж</button>
            </a>
        ),
        },
    ];

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Admin
                </h2>
            }
        >
            <div className="py-12 px-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 rounded-lg">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="grid-1">
                            <div className="flex-col-3">
                                <h1 className="text-2xl font-bold lg:text-4xl">
                                    Всички клиенти
                                </h1>
                                <div>
                                    <DataTable
                                        customStyles={customStyles}
                                        columns={columns}
                                        data={usersData}
                                        pagination
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
