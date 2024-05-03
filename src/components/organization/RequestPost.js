import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import RequestCards from "./RequestCards";
function RequestPost(){
    return(
        <div>
            <Navbar />
            <Hero title={"Post A Request"} subtitle={"May your gift keep on giving"} size={"py-5"}/>
            <RequestCards />
        </div>
    );
}
export default RequestPost;