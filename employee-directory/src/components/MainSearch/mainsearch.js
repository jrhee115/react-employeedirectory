import React from "react";
import API from "../../utils/API";
import { MDBDataTableV5 } from 'mdbreact';

const columns= [
    {
        label: "Image",
        field: "image",
        width: 150,
    }
]






export default function mainSearch(){


    return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
}


// function MainSearchPage() {
//     return <div>Hello World</div>
// }

// export default MainSearchPage