import React from "react";
import Hero from "../Hero";
import RequestCards from "./RequestCards";
function RequestPost(){
    return(
        <div>
            <Hero title={"Post A Request"} subtitle={"May your gift keep on giving"} size={"py-5"}/>
            <RequestCards />
        </div>
    );
}
export default RequestPost;