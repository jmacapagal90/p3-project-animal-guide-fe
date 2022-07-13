import React from "react";
import { Header } from "semantic-ui-react";
import { Link } from 'react-router-dom';

function Home(){
    return (
        <>
        <Header class="ui sizer vertical segment">
            <h1 class="ui huge header ">Welcome to the Zoo!</h1>
            <h2 class="ui small header">Select a Habitat and See What Animals You Can Spot!</h2>        
        </Header>
        <Link to="/animals">animals</Link>
        <Link to="/habitats">habitats</Link>
        </>
    )
}

export default Home;