import { Route, Routes } from "react-router-dom";
import "./App.css";

import SignUp from "./pages/signup";
import Table from "./pages/Table";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import FileUpload from "./components/FileUpload";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage/MainPage";
import Billing from "./pages/Billing";
// import PaymentProcessing from "./components/PaymentProcessing";
// import PaymentComplete from "./components/PaymentComplete";
// import SelectWallet from "./components/SelectWallet";
// import Done from "./components/Done";
// import Loader from "./components/Loader";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/main-page" element={<MainPage />}>
          <Route index element={<Dashboard />} />
          <Route path="table" element={<Table />} />
          <Route path="billing" element={<Billing />} />
          <Route
            path="fileupload"
            element={
              <FileUpload
                onFileChange={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
        </Route>
        <Route path="/signup" element={<SignUp />} />

        <Route path="/sidebar" element={<Sidebar />} />
        <Route
          path="/searchbar"
          element={<Searchbar placeholder={"Search"} />}
        />
        {/* <Route path="/paymentprocess" element={<PaymentProcessing />} /> */}
        {/* <Route path="/paymentcomplited" element={<PaymentComplete />} /> */}
        {/* <Route path="/selectwallet" element={<SelectWallet />} /> */}
        {/* <Route path="/Done" element={<Done />} /> */}
        {/* <Route path="/process" element={<Loader />} /> */}
      </Routes>
    </>
  );
};

export default App;
