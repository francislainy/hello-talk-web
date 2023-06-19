import React from "react";
import {createMomentApi} from "../api/api";

function AddMoment({onSuccess}) {

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());

        createMomentApi('', '', formJson)
            .then(() => {
                onSuccess();
            })
            .catch((error => {
                console.log(error)
            }))
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <label>
                <div>
                    Edit your post:
                </div>
                <textarea
                    name="text"
                    defaultValue=""
                    rows={4}
                    cols={40}
                />
            </label>
            <hr/>
            <button type="reset">Reset edits</button>
            <button type="submit">Save post</button>
        </form>
    );
}

export default AddMoment;