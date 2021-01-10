import React, { useEffect } from "react";
import API from "../../utils/API";
import { MDBDataTableV5 } from 'mdbreact';

export default function mainSearch() {
    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: "Image",
                field: "image",
                width: 150,
            },
            {
                label: "Name",
                field: "name",
                width: 200,
            },
            {
                label: "Phone",
                field: "phone",
                width: 100,
            },
            {
                label: "Email",
                field: "email",
                width: 200,
            },
            {
                label: "DOB",
                field: "dob",
                width: 100,
            },
        ]
    })

    useEffect(() => {
        API.getUsers()
            .then(res => {
                console.log(res);
                const rows = res.data.results.map((user ) => {
                    return {
                        image: <img src={user.picture.medium} alt="employee image" />,
                        name: user.name.first + " " + user.name.last,
                        phone: user.cell,
                        email: user.email,
                        dob: user.dob.date.split("T")[0]
                    }
                })

                setDatatable((originalState) => {
                    return {...originalState, rows: rows}
                });
            })
    },[])
    return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
}