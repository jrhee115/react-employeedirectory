import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { MDBDataTableV5 } from 'mdbreact';

const columns = [
    {
        label: "Image",
        field: "picture",
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

export default function MainSearch() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [datatable, setDatatable] = useState({})
    useEffect(() => {
        API.populate()
            .then(res => {
                console.log("res: ", res.data.results);
                setUsers(res.data.results)
                console.log("Users: ", users);
                const rows = users.map((user, i) => {
                    return {
                        Image: <img src={user.picture.medium} alt="employee" />,
                        name: user.name.first + " " + user.name.last,
                        phone: user.cell,
                        email: user.email,
                        dob: user.dob.date.split("T")[0]
                    }
                })
                console.log("newRows: ", rows);
                setDatatable({ columns: columns, rows: rows });
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [loading])

    if (loading) {
        return <div>Please wait</div>
    }
    else if (!users.length) {
        return <div>Please add user again</div>
    } else {
        return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
    }
}