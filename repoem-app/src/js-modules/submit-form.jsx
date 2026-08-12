"use strict";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useFormPersist from "react-hook-form-persist";

// #region setting up yup schema for form verification
yup.setLocale({
    mixed: {
        default: "Invalid input",
        required: "This field is required.",
    },
    string: {
        max: `This field has exceed its maximum characters.`,
        matches: `This field requires either "embed" or "None".`,
    },
});

const schema = yup
    .object({
        email: yup.string().required(),
        name: yup.string().max(30).required(),
        author: yup.string().max(20).required(),
        text: yup.string().required(),
        embed: yup.string().max(30).matches(/(embed|None)/).required(),
        link: yup.string().max(30).required()
    });
// #endregion

const SubmissionForm = () => {
    // setting up variables for all the functions below, along with default values to be passed to repoemAPI
        const [poemsData, setPoemsData] = useState([]);
        const [dataIsLoaded, setDataIsLoaded] = useState(false);
        const [embedToggle, setEmbedToggle] = useState(true);
        const { register,
                handleSubmit,
                watch,
                setValue,
                formState: { isSubmitSuccessful, errors },} = useForm(
        {resolver: yupResolver(schema),
        defaultValues: {
          id: 0,
          views: 0,
          likes: 0,
        },
        });

    // using useFormPersist for Form Hook to set up localStorage-- should help data persist
        useFormPersist("formData", {
            watch,
            setValue,
            storage: window.localStorage,
            exclude: ["email"]
        });

    // #region calling on repoemAPI so we can pull for id number
        useEffect(() => {
                fetch('http://localhost:8080/data/poems')
                .then((res) => res.json())
                .then((json) => {
                    setPoemsData(json);
                    setDataIsLoaded(true);
                    console.log(json);
                });
        }, []);
    
        if (!dataIsLoaded) {
            return (
                <div>
                    <h1>Please wait...</h1>
                </div>
            );
        }
    // #endregion

    // #region setting up how the form data is handled, based on whether there is a success or an error
    const onSubmit = (data, e) => {
        console.log(data, e);
    }
    const onError = (errors, e) => {
        console.log(errors, e);
    }
    // #endregion

    return (
        <div id = "form-container">
        <form 
        onSubmit={handleSubmit(onSubmit)}
        onError={() => {
            alert("error")
        }}
        >
            <div className="form-part">
                <label htmlFor="email">Your Email: </label>
                <input type="email" placeholder="Email here." {...register("email")} />
                {errors.email && <p className="Error">{errors.email.message}</p>}
            </div>
            <div className="form-part">
                <label htmlFor="name">Name of Poem: </label>
                    {/* for later- {pattern: /^[A-Za-z]+$/i}  */}
                <input placeholder="Poem name here." {...register("name")} />
                {errors.name && <p className="Error">{errors.name.message}</p>}
            </div>
            <div className="form-part">
                <label htmlFor="author">Name of Author: </label>
                <input placeholder="Author name here." {...register("author")} />
                {errors.author && <p className="Error">{errors.author.message}</p>}
            </div>
            <div className="form-part">
                <label htmlFor="link">Poem Source: </label>
                <input placeholder="Link to poem here." {...register("link")} />
                {errors.link && <p className="Error">{errors.link.message}</p>}
            </div>
            <div className="form-part">
                <label htmlFor="embed">Youtube Embed Here (Use "None" if not applicable/available): </label>
                <input placeholder="Link to Youtube embed here." {...register("embed")}/>
                {errors.embed && <p className="Error">{errors.embed.message}</p>}
            </div>
            <div className="form-part">
                <textarea placeholder="Enter poem here." {...register("text")} />
                {errors.text && <p className="Error">{errors.text.message}</p>}
            </div>
            <div className="form-handling">
               <input type="submit" className="form-button" id="submit" value="Submit Poem!"/>
               <input type="reset" className="form-button" id="reset" value="Reset Form."/>
            </div>
        </form>
        </div>
    )
};

export default SubmissionForm;