import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import { MDBDataTableV5 } from 'mdbreact';

const columns= [
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

export default function mainSearch(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [datatable, setDatatable] = useState({})

    useEffect(() =>{
        API.populate()
        .then(res => {
            console.log("res: ", res.data.results);
            setUsers(res.data.results);
            console.log("Users: ", users);
            const rows = users.map((user, i ) => {
                return {
                    image: <img src={user.picture.medium} alt="employee image"/>,
                    name: user.name.first + " " + user.name.last,
                    phone: user.cell,
                    email: user.email,
                    dob: user.dob.date.split("T")[0]
                }
            })

            
        })
    })



    return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
}


// function MainSearchPage() {
//     return <div>Hello World</div>
// }

// export default MainSearchPage