import React from "react";
import Hero from "../Hero";
import RequestCards from "./RequestCards";
import OrgTemp from "./OrgTemp";
import { Link } from "react-router-dom";
function RequestPost(){
    return(
        <div>
            <OrgTemp/>
            <RequestCards />
            <Hero subtitle={""} size={"py-2"}/>
        </div>
    );
}
export default RequestPost;