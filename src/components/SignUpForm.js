import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

const SignUpForm = () => {

    const [email, setEmail] = React.useState('');
    const [postcode, setPostcode] = React.useState('');
    const [successfulSignup, setSuccessfulSignup] = React.useState(null);
    const [unsuccessfulSignup, setUnsuccessfulSignup] = React.useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("SUBMIT FORM")
        // setUnsuccessfulSignup(null);
        // setSuccessfulSignup(null);
        addToMailchimp(email, {
            POSTCODE: postcode
        }) // listFields are optional if you are only capturing the email address.
            .then(data => {
                console.log("Response from submit FORM")

                // I recommend setting data to React state
                // but you can do whatever you want (including ignoring this `then()` altogether)
                setPostcode('');
                setEmail('');
                if (data.result === 'success') {
                    setSuccessfulSignup(data.msg);
                } else {
                    setUnsuccessfulSignup(data.msg)
                }
            })
            .catch((e) => {
                console.log("ERROR", e)
                // unnecessary because Mailchimp only ever
                // returns a 200 status code
                // see below for how to handle errors
            })
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">
                    We will use your email address to keep you up-to-date with our news and activities. Our privacy policy can be viewed at the bottom of our website.
                </small>
            </div>
            <div className="form-group">
                <label>Postcode</label>
                <input className="form-control" value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="Enter postcode"/>
                <small className="form-text text-muted">When we start discussing transport related projects it is useful to know the area where you live </small>

            </div>

            <button type="submit" className="button special">Sign Up</button>
            {successfulSignup && <div>{successfulSignup}</div>}
            {unsuccessfulSignup && <div>{unsuccessfulSignup}</div>}


        </form>
    )
}


export default SignUpForm;
