import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <>
        <Root />
        <ToastContainer />
    </>
);
