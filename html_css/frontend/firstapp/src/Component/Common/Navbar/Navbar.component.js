import "./Navbar.component.css"


//functional component

//name export
export function Navbar(props) {
    console.log("props in navbar is:", props)

    return (
        //jsx javasscript extended syntax

        <div>
            <ul>
                <li>Home </li>
                <li>Product </li>
                <li>Gallery </li>
                <li>Blog </li>
                <li>Contact </li>
                {

                    props.isLoggedIn
                        ? <li>Logout</li>
                        : <>
                            {/*  empty fragment */}
                            <li>Login </li>
                            <li>Register </li>
                        </>
                }
            </ul>

        </div>

    )

}

