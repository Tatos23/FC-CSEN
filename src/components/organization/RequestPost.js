import React from "react";
import Hero from "../Hero";
import RequestCards from "./RequestCards";
import OrgTemp from "./OrgTemp";
function RequestPost(){
    return(
        <div>
            <OrgTemp/>
            <RequestCards />
            <Hero subtitle={"May your gift keep on giving"} size={"py-2"}/>
            
        </div>
    );
}
export default RequestPost;