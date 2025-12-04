import { AuthProvider } from "../container/context/auth";
import { Routes, Route, } from "react-router-dom";
import {
  ToastContainer
} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import Layout from "./layout/layout";

import TransferPage from "../pages/transfer/transfer";
import OverviewPage from "../pages/overview/overview";
import AirtimePage from "../pages/airtime/airtime";
import BillsPage from "../pages/bills/bills";

import TransferHistory from "../component/transfer/history/transferHistory";
import SavedPayments from "../component/transfer/savedPayments/savedPayments";

import RegisterPage from "../pages/register/register";
import LoginPage from "../pages/login/login";

import NotFound from "../component/404/404";

function App() {

  return (
    <Layout>
      {/* <Route index path="/" element={<LoginPage />} /> */}
      <Routes>
        <Route index path="/" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/overview"
          element={<AuthProvider>
            <OverviewPage />
          </AuthProvider>
          } />

        <Route path="/airtime" element={<AirtimePage />} />

        <Route path="/transfers" element={<TransferPage />} />

        <Route path="/bills" element={<BillsPage />} />

        <Route path="/transfer/user/transferHistory" element={<TransferHistory />} />

        <Route path="/transfer/user/savedPayments" element={<SavedPayments />} />


        <Route path="*" element={<NotFound />} />

      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </Layout>
  )
}

export default App
