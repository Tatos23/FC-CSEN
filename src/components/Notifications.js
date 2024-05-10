import DonorNot from "./donor/DonorNot";
import Header from "./donor/Header";
import RepNot from "./organization/RepNot";

function Notifications({ role }) {
    return (
        <div>
            {role === "Donor" ? (
                <DonorNot />
            ) : (
                <RepNot />
            )}
        </div>
    );
}
export default Notifications;
