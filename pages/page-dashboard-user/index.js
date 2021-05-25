import dynamic from "next/dynamic";


const DashboardUser = dynamic(() => import("./dashboard-user/App.js"), {
    ssr: false
});

export default function UserPanel () {
    return <DashboardUser />;
}