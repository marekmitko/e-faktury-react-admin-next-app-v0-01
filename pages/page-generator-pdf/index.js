import dynamic from "next/dynamic";


const PDFViewer = dynamic(() => import("./generator-pdf/FvApp.js"), {
    ssr: false
});

export default function PDF() {
    return <PDFViewer />;
}