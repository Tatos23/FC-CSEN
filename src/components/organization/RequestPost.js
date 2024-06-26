import React from "react";
import Hero from "../Hero";
import RequestCards from "./RequestCards";
import OrgTemp from "./OrgTemp";
import { Link } from "react-router-dom";
import RequestButtons from "./RequestButtons";
function RequestPost(){
    return(
        <div>
            <OrgTemp/>
            <Hero  title={"What Would Like to Request?"} size={"py-2"}/>
            <RequestButtons />
            <Hero subtitle={""} size={"py-2"}/>
        </div>
    );
}
export default RequestPost;